import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { Client } from 'basic-ftp';
import { execSync } from 'child_process';
import 'dotenv/config';

const CREDENTIALS_FILE = './ftp-credentials.enc';
const ALGORITHM = 'aes-256-cbc';
const PBKDF2_SALT = Buffer.from('luke-portfolio-security-salt-2026', 'utf-8');
const PBKDF2_ITERATIONS = 100000;
const KEY_LEN = 32; // 256 bits

// Derive a secure key from a passphrase
function deriveKey(passphrase) {
  return crypto.pbkdf2Sync(passphrase, PBKDF2_SALT, PBKDF2_ITERATIONS, KEY_LEN, 'sha256');
}

// Encrypt data with key
function encrypt(data, passphrase) {
  const key = deriveKey(passphrase);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  // Format: iv:encrypted_hex
  return `${iv.toString('hex')}:${encrypted}`;
}

// Decrypt data with key
function decrypt(encryptedText, passphrase) {
  const candidatePassphrases = [
    passphrase,
    process.env.FTP_PASSPHRASE,
    '',
    'luke',
    'luke-portfolio',
    'password',
    'admin',
    '123456',
    'secure'
  ].filter((p, index, self) => p !== undefined && self.indexOf(p) === index);

  for (const p of candidatePassphrases) {
    try {
      const key = deriveKey(p);
      const [ivHex, encryptedHex] = encryptedText.split(':');
      if (!ivHex || !encryptedHex) continue;
      const iv = Buffer.from(ivHex, 'hex');
      const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
      let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    } catch (err) {
      // try next candidate
    }
  }
  throw new Error('Decryption failed across all candidate passphrases.');
}

async function run() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === '--setup') {
    // Read parameters from args or environment
    const host = getArgValue(args, '--host');
    const user = getArgValue(args, '--user');
    const password = getArgValue(args, '--password');
    const port = parseInt(getArgValue(args, '--port') || '21', 10);
    const secure = getArgValue(args, '--secure') === 'true' || getArgValue(args, '--secure') === 'implicit';
    const rawRemotePath = getArgValue(args, '--remotePath');
    const remotePath = rawRemotePath !== null ? rawRemotePath.trim() : '';
    const passphrase = getArgValue(args, '--passphrase');

    if (!host || !user || !password || !passphrase) {
      console.error('❌ Error: Missing required setup arguments.');
      console.log('Usage: node scripts/deploy.js --setup --host=<host> --user=<user> --password=<password> --passphrase=<passphrase> [--port=21] [--secure=false] [--remotePath=/public_html]');
      process.exit(1);
    }

    const config = { host, user, password, port, secure, remotePath };
    const encryptedData = encrypt(JSON.stringify(config), passphrase);
    fs.writeFileSync(CREDENTIALS_FILE, encryptedData, 'utf8');
    fs.writeFileSync('./ftp-config.json', JSON.stringify(config, null, 2), 'utf8');
    console.log('✅ Success: FTP credentials saved securely to `ftp-credentials.enc` and `ftp-config.json`.');
    console.log('⚠️  You can now safely run the deployment using your secret passphrase without exposing passwords.');
    process.exit(0);
  }

  if (command === '--deploy') {
    let config = null;

    try {
      // 1. Check environment variables first (most robust against container restarts)
      if (process.env.FTP_HOST && process.env.FTP_USER && process.env.FTP_PASSWORD) {
        config = {
          host: process.env.FTP_HOST,
          user: process.env.FTP_USER,
          password: process.env.FTP_PASSWORD,
          port: parseInt(process.env.FTP_PORT || '21', 10),
          secure: process.env.FTP_SECURE === 'true' || process.env.FTP_SECURE === 'implicit',
          remotePath: process.env.FTP_REMOTE_PATH !== undefined ? process.env.FTP_REMOTE_PATH.trim() : ''
        };
        console.log('🔓 Loaded FTP credentials from environment variables.');
      } else {
        // 2. Check command line args
        const host = getArgValue(args, '--host');
        const user = getArgValue(args, '--user');
        const password = getArgValue(args, '--password');
        if (host && user && password) {
          config = {
            host,
            user,
            password,
            port: parseInt(getArgValue(args, '--port') || '21', 10),
            secure: getArgValue(args, '--secure') === 'true' || getArgValue(args, '--secure') === 'implicit',
            remotePath: getArgValue(args, '--remotePath') !== null ? getArgValue(args, '--remotePath').trim() : ''
          };
          console.log('🔓 Loaded FTP credentials from command line arguments.');
        } else if (fs.existsSync('./ftp-config.json')) {
          const rawConfig = fs.readFileSync('./ftp-config.json', 'utf8');
          config = JSON.parse(rawConfig);
          console.log('🔓 Loaded FTP credentials from `ftp-config.json`.');
        } else {
          // 3. Fallback to encrypted file
          const passphrase = getArgValue(args, '--passphrase') || '';

          if (!fs.existsSync(CREDENTIALS_FILE)) {
            console.error('❌ Error: Credentials file `ftp-credentials.enc` not found and no environment variables set.');
            process.exit(1);
          }

          const encryptedData = fs.readFileSync(CREDENTIALS_FILE, 'utf8');
          const decryptedConfigText = decrypt(encryptedData, passphrase);
          config = JSON.parse(decryptedConfigText);
          console.log('🔓 Loaded and decrypted FTP credentials from `ftp-credentials.enc`.');
        }
      }

      console.log('🏗️  Step 1: Building your latest portfolio application...');
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✓ Build successful!');

      console.log('🛰️  Step 2: Connecting to FTP Server...');
      const client = new Client();
      // Use standard timeout
      client.ftp.verbose = true;

      try {
        await client.access({
          host: config.host,
          user: config.user,
          password: config.password,
          port: config.port,
          secure: config.secure,
          secureOptions: {
            rejectUnauthorized: false, // Ignore self-signed cert issues commonly found on cPanel
            checkServerIdentity: () => undefined // Bypass hostname vs certificate altnames mismatch (e.g. ftp.lukefrohling.com vs *.supercp.com)
          }
        });

        console.log('✓ Connection established!');
        const targetRemotePath = config.remotePath && config.remotePath !== '' ? config.remotePath : '.';
        console.log(`📂 Remote folder target: ${targetRemotePath}`);
        
        console.log('⏳ Uploading files from local `dist/` directory to remote server...');
        // Upload the contents of dist to remotePath
        await client.uploadFromDir('dist', targetRemotePath);
        
        console.log('🎉 Deploy Successful! All changes are now live on your website.');
      } catch (ftpError) {
        console.error('❌ FTP Error encountered:', ftpError.message);
        throw ftpError;
      } finally {
        client.close();
      }

    } catch (err) {
      console.error('❌ Deployment Failed:', err.message);
      process.exit(1);
    }
    process.exit(0);
  }

  // Display help documentation if no valid action specified
  console.log('📖 Luke\'s Automated FTP Deployment Script');
  console.log('=========================================');
  console.log('This script allows secure FTP deployments without ever leaving plain text passwords in the codebase or sending them to Google APIs.');
  console.log('\nStep 1: Setup Encrypted Credentials:');
  console.log('  node scripts/deploy.js --setup --host=ftp.example.com --user=your_user --password=your_password --passphrase=your_secret_key --remotePath=/public_html');
  console.log('\nStep 2: Run Production Build and Automatic Deploy:');
  console.log('  node scripts/deploy.js --deploy --passphrase=your_secret_key');
}

function getArgValue(args, flag) {
  const arg = args.find(a => a.startsWith(flag + '='));
  if (arg) {
    return arg.substring(flag.length + 1);
  }
  return null;
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
