import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../data/content';

export default function Services() {
  return (
    <div className="w-full">
      <section className="bg-zinc-50 py-20 lg:py-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Services & Capabilities
            </h1>
            <p className="text-lg text-zinc-600 font-serif leading-relaxed">
              I partner with teams to identify where AI can deliver genuine value, and then build the systems to realize it. No hype, just practical applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Intro / Approach */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6">How I work</h2>
                <div className="prose prose-zinc prose-lg text-zinc-600 font-serif">
                  <p>
                    The current AI landscape is noisy. My approach is to start small, validate quickly, and scale what works.
                  </p>
                  <p>
                    I don't build "AI for the sake of AI." Instead, I look for bottlenecks in your existing processes, or opportunities to create entirely new experiences, and apply the right models and architectures to solve them.
                  </p>
                  <p>
                    As a multidisciplinary developer, I can handle the entire pipeline: from initial strategy and prompt engineering, to building out the UI and integrating the final product into your technical stack.
                  </p>
                </div>
              </div>
              
              <div className="pt-10 border-t border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-widest mb-8">Typical Engagement Process</h3>
                <ol className="space-y-8">
                  <li className="flex gap-6">
                    <span className="font-mono text-zinc-400">01</span>
                    <div>
                      <h4 className="font-bold text-zinc-900">Discovery & Scoping</h4>
                      <p className="text-sm text-zinc-600 mt-2 font-serif">Identifying the core problem and determining if AI is actually the right solution.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-mono text-zinc-400">02</span>
                    <div>
                      <h4 className="font-bold text-zinc-900">Rapid Prototyping</h4>
                      <p className="text-sm text-zinc-600 mt-2 font-serif">Building a functional, interactive proof-of-concept to test assumptions and model performance.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-mono text-zinc-400">03</span>
                    <div>
                      <h4 className="font-bold text-zinc-900">Refinement & Integration</h4>
                      <p className="text-sm text-zinc-600 mt-2 font-serif">Polishing the UX, optimizing system prompts, and deploying to production environments.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Column: Specific Services */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-10">Core Offerings</h2>
              
              <div className="space-y-12">
                {SITE_DATA.services.map((service, index) => (
                  <div key={service.id} className="relative pt-8 border-t border-zinc-200">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
                      <div className="text-sm font-mono text-zinc-400 w-8 shrink-0 pt-1">
                        0{index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
                        <p className="text-zinc-600 font-serif leading-relaxed mb-6">{service.description}</p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-sm text-zinc-600 font-medium">
                            <span className="text-teal-700">—</span>
                            <span>Custom model integration (OpenAI, Gemini, Anthropic)</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-zinc-600 font-medium">
                            <span className="text-teal-700">—</span>
                            <span>Robust system prompting and guardrails</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-200 py-24 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Have a specific challenge in mind?</h2>
          <p className="text-lg text-zinc-600 font-serif">
            Let's discuss how we can build a solution tailored to your operational needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 mt-6 group"
          >
            Get in touch
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
