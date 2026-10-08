import { SITE_DATA, cleanContentData } from '../data/content';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full">
      <section className="bg-zinc-50 py-20 lg:py-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              About Me
            </h1>
            <p className="text-lg text-zinc-600 font-serif leading-relaxed">
              I'm Luke Frohling, a multidisciplinary developer focused on Artificial Intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left: Image & Quick Facts */}
            <div className="lg:col-span-5 space-y-10">
              <div className="w-full aspect-[3/4] bg-zinc-900 border border-zinc-200 overflow-hidden shadow-xs relative">
                <img
                  src="/images/LukeFrohling-MissionPossible.webp"
                  alt="Luke Frohling - Multidisciplinary AI Developer"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.98]"
                  width={480}
                  height={640}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/40 to-transparent p-4 text-white">
                  <div className="text-xs font-mono font-medium tracking-wide">Luke Frohling</div>
                  <div className="text-[11px] text-zinc-300 font-mono">Perth, Australia • Applied AI Developer</div>
                </div>
              </div>

              {/* LinkedIn Recommendation Quote */}
              <div className="border border-zinc-200 bg-zinc-50 p-6 space-y-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-800 uppercase tracking-widest font-mono">
                  <svg className="w-3.5 h-3.5 fill-current text-teal-700" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn Recommendation</span>
                </div>
                
                {SITE_DATA.testimonials.map((t) => (
                  <div key={t.id} className="space-y-2">
                    <blockquote className="border-l-2 border-teal-700 pl-3 italic text-zinc-700 font-serif text-sm leading-relaxed">
                      "{cleanContentData(t.quote)}"
                    </blockquote>
                    <div className="text-xs font-medium text-zinc-900 pl-3">
                      — {cleanContentData(t.author)}, <span className="text-zinc-500 font-normal">{cleanContentData(t.role)}</span>
                      <span className="text-zinc-400 font-mono text-[10px] block mt-0.5">Source: {cleanContentData(t.source)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-200 pt-8 space-y-8">
                <div>
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Location</h3>
                  <div className="text-zinc-900 font-medium">Perth, Western Australia</div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Core Competencies</h3>
                  <div className="flex flex-col gap-2">
                    {['Applied AI & ML Integration', 'Rapid Prototyping', 'Conversational UX Design', 'TypeScript & React', 'Agentic Workflows'].map(skill => (
                      <span key={skill} className="text-sm font-medium text-zinc-800 flex items-center gap-2">
                        <span className="text-teal-700">—</span> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio & Background */}
            <div className="lg:col-span-7 space-y-12">
              <div className="prose prose-zinc prose-lg text-zinc-600 font-serif">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mt-0 font-sans">My Background</h2>
                <p>
                  My journey to AI engineering hasn't been a straight line—and I consider that my greatest asset. 
                </p>
                <p>
                  Before focusing exclusively on Artificial Intelligence, I spent years working across virtual reality, game development, acting, and data analysis. This multidisciplinary background means I approach problem-solving differently than a traditional software engineer.
                </p>
                <p>
                  When I build an AI interface, I'm drawing on acting and narrative principles to make the conversational flow feel natural. When I design an automated workflow, I'm using data analysis techniques to ensure the outputs are measurable and correct. When I build a spatial computing prototype, my game dev background ensures it runs smoothly.
                </p>
                
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 pt-8 font-sans">The Philosophy</h3>
                <p>
                  I believe the most valuable applications of AI are often the most boring. While the industry chases AGI, I am focused on applying current models to eliminate tedious administrative tasks, synthesize complex data, and build interfaces that humans actually enjoy using.
                </p>
                <p>
                  I prioritize pragmatic, shipping-focused development over endless research loops.
                </p>
              </div>

              <div className="pt-10 border-t border-zinc-200">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Multidisciplinary Foundations</h3>
                <p className="text-zinc-600 font-serif mb-6 leading-relaxed">
                  This portfolio focuses deliberately on my applied AI engineering capabilities — an applied mastery born from a multitude of professional sources. Having built deep competence across spatial computing, systems engineering, narrative structure, and data analysis, I bring a rare cross-domain rigor to software architecture: ensuring AI workflows are not only computationally sound, but intuitive, reliable, and grounded in real human workflows.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'VR & Spatial Computing', detail: '3D Simulation & Realtime Performance' },
                    { name: 'Data Architecture', detail: 'Deterministic Pipelines & Quality Auditing' },
                    { name: 'Narrative & Communication', detail: 'Conversational UX & Human Interaction' },
                    { name: 'Technical Media Production', detail: 'Systems Documentation & Complex Synthesis' },
                  ].map(discipline => (
                    <div key={discipline.name} className="p-5 border border-zinc-200 bg-zinc-50 flex flex-col justify-between">
                      <span className="font-medium text-zinc-900 text-sm">{discipline.name}</span>
                      <span className="text-xs text-zinc-500 font-serif mt-1">{discipline.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-200 py-24 text-center px-4">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Looking for an AI-capable technical thinker?</h2>
        <Link to="/contact" className="inline-flex h-12 items-center justify-center bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 group">
          Let's talk about your team
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}
