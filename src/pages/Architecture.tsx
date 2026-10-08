import { DESIGN_TEXT } from '../data/designText';
import { ArrowRight, ExternalLink, Github, Terminal, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Architecture() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-zinc-900 text-white py-20 lg:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-mono text-teal-400 uppercase tracking-widest">
              Design Text & Architecture Specifications
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans">
              System Engineering & Technical Specifications
            </h1>
            <p className="text-lg text-zinc-300 font-serif leading-relaxed">
              The unabridged engineering blueprint, deterministic validation layers, security protocols, and architecture matrices behind the live prototypes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-12 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl p-6 bg-white border border-zinc-200 shadow-2xs">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
              {DESIGN_TEXT.executivePhilosophy.title}
            </span>
            <p className="text-base text-zinc-800 font-serif leading-relaxed">
              "{DESIGN_TEXT.executivePhilosophy.body}"
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas Detail */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Focus Area 1 */}
          <div>
            <div className="border-l-4 border-teal-700 pl-4 mb-8">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                {DESIGN_TEXT.focusAreas[0].index}
              </span>
              <h2 className="text-2xl font-bold text-zinc-900">
                {DESIGN_TEXT.focusAreas[0].title}
              </h2>
              <p className="text-sm font-serif text-zinc-600 mt-1">
                {DESIGN_TEXT.focusAreas[0].narrativeTone}
              </p>
            </div>

            <div className="border border-zinc-200 bg-zinc-50 p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    {DESIGN_TEXT.focusAreas[0].project.name}
                  </h3>
                  <span className="text-xs font-mono text-teal-700 font-semibold">
                    Position: {DESIGN_TEXT.focusAreas[0].project.role}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={DESIGN_TEXT.focusAreas[0].project.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold bg-zinc-900 text-white px-3.5 py-1.5 hover:bg-zinc-800 transition-colors gap-1.5"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                  <a
                    href={DESIGN_TEXT.focusAreas[0].project.links.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-zinc-700 hover:text-zinc-900 px-3 py-1.5 border border-zinc-300 hover:border-zinc-400 transition-colors gap-1.5"
                  >
                    <Github size={12} />
                    <span>Source</span>
                  </a>
                </div>
              </div>

              <p className="text-sm text-zinc-700 font-serif leading-relaxed">
                {DESIGN_TEXT.focusAreas[0].project.tagline}
              </p>

              {/* Engineering Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                  Operational Engineering Feats Implemented
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DESIGN_TEXT.focusAreas[0].project.engineeringHighlights.map((feat) => (
                    <div key={feat.title} className="p-4 bg-white border border-zinc-200 space-y-1">
                      <div className="flex items-center gap-2 font-semibold text-zinc-900 text-xs">
                        <CheckCircle2 size={13} className="text-teal-700 shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-xs text-zinc-600 font-serif leading-relaxed">
                        {feat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & ROI */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-200 text-xs">
                <div>
                  <span className="block text-zinc-400 uppercase tracking-widest font-mono text-[10px] mb-1">Stack & Flow</span>
                  <div className="flex flex-wrap gap-1.5">
                    {DESIGN_TEXT.focusAreas[0].project.primaryStack.map(s => (
                      <span key={s} className="bg-zinc-200/80 text-zinc-800 font-mono text-[10px] px-2 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="block text-zinc-400 uppercase tracking-widest font-mono text-[10px] mb-1">Business ROI</span>
                  <p className="font-serif text-zinc-700">
                    {DESIGN_TEXT.focusAreas[0].project.businessROI}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Area 2 */}
          <div>
            <div className="border-l-4 border-amber-500 pl-4 mb-8">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                {DESIGN_TEXT.focusAreas[1].index}
              </span>
              <h2 className="text-2xl font-bold text-zinc-900">
                {DESIGN_TEXT.focusAreas[1].title}
              </h2>
              <p className="text-sm font-serif text-zinc-600 mt-1">
                {DESIGN_TEXT.focusAreas[1].narrativeTone}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {DESIGN_TEXT.focusAreas[1].projects.map((proj) => (
                <div key={proj.id} className="border border-zinc-200 bg-zinc-50 p-6 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4 border-b border-zinc-200 pb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-semibold block mb-0.5">
                          {proj.type}
                        </span>
                        <h3 className="text-lg font-bold text-zinc-900 leading-snug">
                          {proj.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={proj.links.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-semibold bg-zinc-900 text-white px-2.5 py-1.5 hover:bg-zinc-800 transition-colors gap-1"
                        >
                          <span>Demo</span>
                          <ExternalLink size={11} />
                        </a>
                        <a
                          href={proj.links.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-medium text-zinc-700 hover:text-zinc-900 px-2.5 py-1.5 border border-zinc-300 hover:border-zinc-400 transition-colors gap-1"
                        >
                          <Github size={11} />
                          <span>Source</span>
                        </a>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-700 font-serif leading-relaxed">
                      {proj.tagline}
                    </p>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-semibold">
                        Verification & Architecture Highlights:
                      </span>
                      <ul className="space-y-2 text-xs">
                        {proj.engineeringHighlights.map((feat) => (
                          <li key={feat.title} className="p-2.5 bg-white border border-zinc-200/80 space-y-0.5">
                            <span className="font-semibold text-zinc-900 block text-[11px]">{feat.title}</span>
                            <span className="font-serif text-zinc-600 text-[11px] leading-relaxed block">{feat.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 text-xs space-y-2">
                    <div>
                      <span className="block text-zinc-400 text-[9px] uppercase tracking-widest font-mono">Position</span>
                      <span className="font-semibold text-zinc-900">{proj.role}</span>
                    </div>
                    <div>
                      <span className="block text-zinc-400 text-[9px] uppercase tracking-widest font-mono">Business ROI Focus</span>
                      <span className="font-serif text-zinc-700 text-[11px] leading-relaxed">{proj.businessROI}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Matrix Table */}
          <div className="border-t border-zinc-200 pt-16">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">Technical Matrix Comparison</h3>
            <p className="text-sm text-zinc-600 font-serif mb-6">
              A side-by-side index comparing runtime flow tooling and structured schemas across all 3 platforms.
            </p>

            <div className="overflow-x-auto border border-zinc-200 bg-white">
              <table className="min-w-full divide-y divide-zinc-200 text-left text-xs font-mono">
                <thead className="bg-zinc-50 text-zinc-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-semibold border-r border-zinc-200">System Pipeline</th>
                    <th className="px-6 py-4 font-semibold border-r border-zinc-200">Core AI Methodology</th>
                    <th className="px-6 py-4 font-semibold border-r border-zinc-200">Primary Software Stack</th>
                    <th className="px-6 py-4 font-semibold">System Flow Tooling</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-zinc-700">
                  {DESIGN_TEXT.comparisonMatrix.map((row) => (
                    <tr key={row.pipeline} className="hover:bg-zinc-50/50">
                      <td className="px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200">
                        {row.pipeline}
                      </td>
                      <td className="px-6 py-4 font-serif text-zinc-600 border-r border-zinc-200">
                        {row.methodology}
                      </td>
                      <td className="px-6 py-4 border-r border-zinc-200 text-[11px]">
                        {row.stack}
                      </td>
                      <td className="px-6 py-4">
                        {row.flowTooling}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Security Protocol Banner */}
            <div className="mt-8 p-5 bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-4">
              <ShieldAlert size={20} className="text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-semibold uppercase tracking-wider block text-xs">
                  {DESIGN_TEXT.securityProtocol.title}
                </span>
                <p className="font-serif text-amber-800 leading-relaxed">
                  {DESIGN_TEXT.securityProtocol.body}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-16 text-center">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <h3 className="text-xl font-bold text-zinc-900">Want to discuss implementation details?</h3>
          <p className="text-zinc-600 font-serif text-sm">
            I am open to full-time roles, contract engineering, and selected advisory projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center bg-zinc-900 px-8 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-zinc-800"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
