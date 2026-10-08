import express from 'express';
import { createServer as createViteServer } from 'vite';
import { exec } from 'child_process';
import fs from 'fs';

async function startServer() {
  const app = express();
  app.use(express.json());

  // API endpoint for FTP setup and immediate live deploy
  app.post('/api/deploy-setup', (req, res) => {
    console.log('Received setup request:', req.body);
    const { host, user, password, port, secure, remotePath, passphrase } = req.body;
    if (!host || !user || !password || !passphrase) {
      console.error('Setup request missing parameters');
      return res.status(400).json({ success: false, error: 'Missing required FTP parameters or passphrase.' });
    }

    const cleanRemotePath = remotePath !== undefined && remotePath !== null ? remotePath.trim() : '';

    // Write persistent .env and ftp-config.json for absolute reliability across restarts
    const envContent = `FTP_HOST="${host}"\nFTP_USER="${user}"\nFTP_PASSWORD="${password}"\nFTP_PORT="${port || 21}"\nFTP_SECURE="${secure ? 'true' : 'false'}"\nFTP_REMOTE_PATH="${cleanRemotePath}"\n`;
    try {
      fs.writeFileSync('.env', envContent, 'utf8');
      fs.writeFileSync('ftp-config.json', JSON.stringify({ host, user, password, port: port || 21, secure, remotePath: cleanRemotePath }, null, 2), 'utf8');
    } catch (fsErr) {
      console.error('Filesystem error:', fsErr);
      return res.status(500).json({ success: false, error: 'Failed to save configuration.' });
    }

    const secureFlag = secure ? '--secure=true' : '--secure=false';
    const portFlag = `--port=${port || 21}`;
    const remotePathFlag = `--remotePath="${cleanRemotePath}"`;
    const setupCmd = `node scripts/deploy.js --setup --host="${host}" --user="${user}" --password="${password}" --passphrase="${passphrase}" ${portFlag} ${secureFlag} ${remotePathFlag}`;

    exec(setupCmd, (setupError, setupStdout, setupStderr) => {
      if (setupError) {
        console.error('Setup script error:', setupStderr);
        return res.status(500).json({ success: false, error: setupStderr || setupError.message });
      }

      // Immediately trigger deploy live
      const deployCmd = `node scripts/deploy.js --deploy --passphrase="${passphrase}"`;
      exec(deployCmd, (deployError, deployStdout, deployStderr) => {
        if (deployError) {
          console.error('Deploy script error:', deployStderr);
          return res.status(500).json({ success: false, error: `Setup saved, but deployment failed: ${deployStderr || deployError.message}` });
        }
        res.json({ success: true, message: 'Setup saved and successfully deployed live to lukefrohling.com!' });
      });
    });
  });

  // API endpoint for deploying
  app.post('/api/deploy', (req, res) => {
    const { passphrase } = req.body;
    const passphraseFlag = passphrase ? `--passphrase="${passphrase}"` : '';
    const cmd = `node scripts/deploy.js --deploy ${passphraseFlag}`;

    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ success: false, error: stderr || error.message });
      }
      res.json({ success: true, message: stdout });
    });
  });

  // Global error handler for API routes to guarantee JSON response
  app.use('/api', (err: any, req: any, res: any, next: any) => {
    res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  const PORT = 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
