import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Settings() {
  const [formData, setFormData] = useState({
    host: 'ftp.lukefrohling.com',
    user: '',
    password: '',
    port: '21',
    secure: false, // Default to unchecked for better compatibility
    remotePath: '', // Default to blank
    passphrase: 'luke-secret' // Keep as is for now, but user can change
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/deploy-setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          port: parseInt(formData.port, 10) || 21
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus({ success: true, message: data.message || 'Credentials saved and deployed live successfully!' });
      } else {
        setStatus({ success: false, message: data.error || 'Deployment failed.' });
      }
    } catch (err: any) {
      setStatus({ success: false, message: err.message || 'Network error connecting to deployment server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="border-l-4 border-teal-700 pl-4 mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">FTP Deployment Configuration</h1>
        <p className="text-sm font-serif text-zinc-600 mt-1">
          Configure your server credentials here.
        </p>
      </div>

      <div className="bg-white border border-zinc-200 p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">FTP Host</label>
              <input
                type="text"
                name="host"
                value={formData.host}
                onChange={handleChange}
                required
                className="w-full bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-teal-700 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">FTP Port</label>
              <input
                type="text"
                name="port"
                value={formData.port}
                onChange={handleChange}
                required
                className="w-full bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-teal-700 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">FTP Username</label>
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={handleChange}
                required
                className="w-full bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-teal-700 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">FTP Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-teal-700 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">
                Remote Path <span className="text-zinc-400 font-normal">(Leave blank)</span>
              </label>
              <input
                type="text"
                name="remotePath"
                value={formData.remotePath}
                onChange={handleChange}
                className="w-full bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-teal-700 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">Encryption Passphrase</label>
              <input
                type="text"
                name="passphrase"
                value={formData.passphrase}
                onChange={handleChange}
                required
                className="w-full bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-teal-700 font-mono"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="secure"
              name="secure"
              checked={formData.secure}
              onChange={handleChange}
              className="h-4 w-4 text-teal-700 border-zinc-300 focus:ring-teal-700"
            />
            <label htmlFor="secure" className="text-sm text-zinc-700 font-serif">
              Use Secure FTP (FTPS / TLS) - <span className="text-zinc-500">Only check if your host requires it.</span>
            </label>
          </div>

          <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 items-center justify-center bg-zinc-900 px-8 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-zinc-800 disabled:opacity-50 gap-2"
            >
              {loading && <Loader2 size={15} className="animate-spin" />}
              <span>{loading ? 'Connecting & Deploying...' : 'Deploy Live Now'}</span>
            </button>
          </div>
        </form>

        {status && (
          <div className={`mt-6 p-4 border flex items-start gap-3 text-xs ${
            status.success 
              ? 'bg-teal-50 border-teal-200 text-teal-900' 
              : 'bg-red-50 border-red-200 text-red-900'
          }`}>
            {status.success ? <CheckCircle2 size={18} className="text-teal-700 shrink-0 mt-0.5" /> : <AlertCircle size={18} className="text-red-700 shrink-0 mt-0.5" />}
            <div className="space-y-1">
              <span className="font-semibold uppercase tracking-wider block">
                {status.success ? 'Deployment Successful' : 'Deployment Error'}
              </span>
              <p className="font-serif leading-relaxed">{status.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
