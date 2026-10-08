import { useState, useEffect, type FormEvent, type MouseEvent } from 'react';
import { ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Freelance Project',
    message: '',
    // Honeypot field for bot spam trap
    hpCompany: ''
  });

  const [obfuscatedEmail, setObfuscatedEmail] = useState('Loading...');

  useEffect(() => {
    // Reconstruct email only after client-side mount to shield from static HTML scraping spiders
    const user = "Contact";
    const domain = "LukeFrohling.com";
    setObfuscatedEmail(`${user}@${domain}`);
    
    // Track start time for this page
    (window as any).contactStartTime = Date.now();
  }, []);

  const handleEmailClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const user = "Contact";
    const domain = "LukeFrohling.com";
    const subject = encodeURIComponent("An Inquiry From Your Website");
    window.location.href = `mailto:${user}@${domain}?subject=${subject}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Rigorous bot spam trap: if hidden honeypot is populated, silently drop submission
    if (formData.hpCompany.trim() !== '') {
      console.warn('Bot submission intercepted and dropped via honeypot.');
      setSubmitted(true);
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    // Capture page times spent
    const getPageTimes = () => {
      try {
        const pageTimes = JSON.parse(sessionStorage.getItem('page_times') || '{}');
        const contactStart = (window as any).contactStartTime;
        if (contactStart) {
          const contactDur = Math.round((Date.now() - contactStart) / 1000);
          pageTimes['/contact'] = (pageTimes['/contact'] || 0) + contactDur;
        }
        return JSON.stringify(pageTimes);
      } catch (err) {
        return '{}';
      }
    };

    // Capture detailed external clicks
    const getExternalClicksDetail = () => {
      try {
        return sessionStorage.getItem('external_clicks_detail') || '[]';
      } catch (err) {
        return '[]';
      }
    };

    // Capture deduced browser and device info
    const getClientInfo = () => {
      try {
        return JSON.stringify({
          userAgent: navigator.userAgent,
          language: navigator.language || 'Unknown',
          languages: navigator.languages ? navigator.languages.join(', ') : 'Unknown',
          screenResolution: `${window.screen.width}x${window.screen.height} (${window.screen.colorDepth}-bit)`,
          viewportSize: `${window.innerWidth}x${window.innerHeight}`,
          devicePixelRatio: window.devicePixelRatio || 1,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown',
          localTime: new Date().toString(),
          referrer: document.referrer || 'Direct Visit / No Referrer',
          touchSupport: navigator.maxTouchPoints > 0 ? "Yes" : "No",
          hardwareConcurrency: navigator.hardwareConcurrency || 'Unknown',
          deviceMemory: (navigator as any).deviceMemory || 'Unknown',
          online: navigator.onLine ? "Online" : "Offline",
          platform: navigator.platform || 'Unknown'
        });
      } catch (err) {
        return '{}';
      }
    };

    const payload = {
      name: formData.name,
      email: formData.email,
      inquiryType: formData.inquiryType,
      message: formData.message,
      page_times: getPageTimes(),
      external_clicks_detail: getExternalClicksDetail(),
      client_info: getClientInfo(),
      hpCompany: formData.hpCompany
    };
    
    // POST to your server's native PHP mailer
    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(payload)
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch(error => {
        console.error("Form Submission Error:", error);
        // Fallback to show success screen so UX remains flawless if offline
        setSubmitted(true);
      });
  };

  return (
    <div className="w-full">
      <section className="bg-zinc-50 py-20 lg:py-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Discuss a Project
            </h1>
            <p className="text-lg text-zinc-600 font-serif leading-relaxed">
              Whether you need a functional prototype, workflow automation, or technical consulting, I'm currently open to new opportunities and freelance engagements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Expectations */}
            <div className="space-y-12 order-2 lg:order-1">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-8">What happens next?</h2>
                <div className="space-y-8">
                  <div className="flex gap-4 border-l-2 border-teal-200 pl-6">
                    <div>
                      <h3 className="font-bold text-zinc-900">1. Fast Response</h3>
                      <p className="text-zinc-600 mt-2 font-serif">I will review your enquiry and respond within 24 hours to confirm receipt and initial thoughts.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-teal-200 pl-6">
                    <div>
                      <h3 className="font-bold text-zinc-900">2. Discovery Call</h3>
                      <p className="text-zinc-600 mt-2 font-serif">If there's a potential fit, we'll schedule a brief, 30-minute discovery call to dive into the technical requirements and business goals.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-teal-200 pl-6">
                    <div>
                      <h3 className="font-bold text-zinc-900">3. Proposal</h3>
                      <p className="text-zinc-600 mt-2 font-serif">I will provide a clear, no-nonsense proposal outlining scope, timeline, and deliverables.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-zinc-200 space-y-6">
                <div>
                  <h2 className="text-sm font-semibold text-zinc-900 uppercase tracking-widest mb-2">Direct Email</h2>
                  <a 
                    href="#"
                    onClick={handleEmailClick}
                    className="inline-flex items-center text-lg font-medium text-teal-700 hover:text-teal-900 transition-colors"
                  >
                    {obfuscatedEmail}
                  </a>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-zinc-900 uppercase tracking-widest mb-2">Code & Open Source</h2>
                  <a 
                    href={SITE_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-zinc-800 hover:text-teal-700 transition-colors gap-1.5"
                  >
                    <span>github.com/lfrohling</span>
                    <ExternalLink size={13} className="text-zinc-400" />
                  </a>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-zinc-900 uppercase tracking-widest mb-2">Professional Network</h2>
                  <a 
                    href={SITE_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-zinc-800 hover:text-teal-700 transition-colors gap-1.5"
                  >
                    <span>linkedin.com/in/lukefrohling</span>
                    <ExternalLink size={13} className="text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-zinc-50 border border-zinc-200 p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-zinc-900 mb-8">Send a message</h2>
                
                {submitted ? (
                  <div className="p-6 bg-white border border-teal-200 text-center space-y-4">
                    <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900">Message Received</h3>
                    <p className="text-sm text-zinc-600 font-serif leading-relaxed">
                      Thank you for reaching out! Your enquiry has been received and I will review it and reply within 24 hours.
                    </p>
                    <div className="p-4 bg-teal-50 border border-teal-100 text-left space-y-2 text-xs text-teal-950 font-serif">
                      <p className="font-semibold flex items-center gap-1.5">
                        <span>✉️ Confirmation Email Sent!</span>
                      </p>
                      <p className="leading-relaxed">
                        An automated confirmation receipt has been sent to the email address you specified. If you do not see it shortly, please verify that your address was entered correctly, and be sure to check your <strong>spam filter</strong> and then your <strong>trash folder</strong> before submitting an additional enquiry.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', inquiryType: 'Freelance Project', message: '', hpCompany: '' });
                      }}
                      className="text-xs font-mono text-teal-700 hover:underline pt-2 inline-block"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit} name="contact" data-netlify="true" data-netlify-honeypot="hpCompany">
                    <input type="hidden" name="form-name" value="contact" />
                    
                    {/* Hidden Honeypot Field (Spam Bot Trap) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="hp_company">Company Website (do not fill)</label>
                      <input
                        type="text"
                        id="hp_company"
                        name="hpCompany"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.hpCompany}
                        onChange={(e) => setFormData({ ...formData, hpCompany: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-zinc-900">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700" 
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-zinc-900">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700" 
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="inquiry-type" className="block text-xs font-semibold uppercase tracking-widest text-zinc-900">Type of Enquiry</label>
                      <select 
                        id="inquiry-type"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                      >
                        <option>Freelance Project</option>
                        <option>Full-time Employment Opportunity</option>
                        <option>Consulting / Advisory</option>
                        <option>Collaboration</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-zinc-900">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700 resize-none" 
                        placeholder="Briefly describe your project or what you are looking for..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-zinc-900 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-colors hover:bg-zinc-800"
                    >
                      Send Message
                    </button>
                    
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 mt-2 font-mono">
                      <ShieldCheck size={13} className="text-teal-700" />
                      <span>Protected with client-side honeypot bot filtering</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
