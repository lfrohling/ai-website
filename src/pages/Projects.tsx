import { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Terminal, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../data/content';

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  
  const types = Array.from(new Set(SITE_DATA.projects.map(p => p.type)));
  
  const filteredProjects = filter 
    ? SITE_DATA.projects.filter(p => p.type === filter)
    : SITE_DATA.projects;

  return (
    <div className="w-full">
      <section className="bg-zinc-50 py-20 lg:py-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Selected Work
            </h1>
            <p className="text-lg text-zinc-600 font-serif leading-relaxed">
              A curated selection of AI prototypes, workflow automations, and practical tools. Built to solve specific business and operational bottlenecks rather than showcase generic capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-zinc-200 pb-8">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mr-2">
              Filter by capability:
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter(null)}
                className={`text-sm font-medium transition-colors border-b-2 pb-1 ${
                  filter === null 
                    ? 'text-zinc-900 border-zinc-900' 
                    : 'text-zinc-500 border-transparent hover:text-teal-700 hover:border-teal-700'
                }`}
              >
                All Projects ({SITE_DATA.projects.length})
              </button>
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`text-sm font-medium transition-colors border-b-2 pb-1 ${
                    filter === type 
                      ? 'text-zinc-900 border-zinc-900' 
                      : 'text-zinc-500 border-transparent hover:text-teal-700 hover:border-teal-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {filteredProjects.map((project) => (
              <article key={project.id} className="group flex flex-col border border-zinc-200 bg-white hover:border-teal-700 transition-colors shadow-2xs">
                
                {/* Visual Asset Area */}
                {project.id === 'ai-support-agent' ? (
                  <div className="bg-zinc-950 p-6 border-b border-zinc-200 text-zinc-300 font-mono text-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-[11px] text-zinc-100 font-semibold tracking-wider">LIVE STREAMLIT MICROSERVICE</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">Python 3.12 / Gemini 3.8 Flash</span>
                    </div>

                    <div className="py-4 space-y-2">
                      <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Microservice Flow</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-sans">
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">01. Input</div>
                          <div className="text-zinc-200 font-medium">Customer Email / Lead</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">02. Extraction</div>
                          <div className="text-teal-400 font-medium">Structured JSON Payload</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">03. Action</div>
                          <div className="text-zinc-200 font-medium">Auto-Triage & Draft</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-[10px] text-zinc-400">
                      <span>Streamlit Community Cloud</span>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1"
                      >
                        <span>Open Live Demo</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                ) : project.id === 'intelligent-document-search' ? (
                  <div className="bg-zinc-950 p-6 border-b border-zinc-200 text-zinc-300 font-mono text-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span className="text-[11px] text-zinc-100 font-semibold tracking-wider">LIVE RAG PLATFORM</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">Python 3.12 / Gemini 3.5 Flash</span>
                    </div>

                    <div className="py-4 space-y-2">
                      <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">RAG Retrieval Flow</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-sans">
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">01. Source</div>
                          <div className="text-zinc-200 font-medium">Business Text Files</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">02. Filter</div>
                          <div className="text-cyan-400 font-medium">Grounding constraints</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">03. Target</div>
                          <div className="text-zinc-200 font-medium">Verified RAG Search</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-[10px] text-zinc-400">
                      <span>Streamlit Community Cloud</span>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                      >
                        <span>Open Live Demo</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                ) : project.id === 'ai-autonomous-etl-agent' ? (
                  <div className="bg-zinc-950 p-6 border-b border-zinc-200 text-zinc-300 font-mono text-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                        <span className="text-[11px] text-zinc-100 font-semibold tracking-wider">R&D VALIDATION SANDBOX</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">Python 3.12 / Gemini 3.5 Core</span>
                    </div>

                    <div className="py-4 space-y-2">
                      <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Validation & Quota Sandbox</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-sans">
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">01. Audit</div>
                          <div className="text-zinc-200 font-medium">Model Output Stream</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">02. Guard</div>
                          <div className="text-amber-400 font-medium">Pydantic Schema Seal</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">03. Shield</div>
                          <div className="text-zinc-200 font-medium">Docker Cost Sandbox</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-[10px] text-zinc-400">
                      <span>Streamlit Sandbox Cloud</span>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                      >
                        <span>Open Sandbox</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                ) : project.id === 'automated-production-pipeline' ? (
                  <div className="bg-zinc-950 p-6 border-b border-zinc-200 text-zinc-300 font-mono text-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-violet-400"></span>
                        <span className="text-[11px] text-zinc-100 font-semibold tracking-wider">VR PRODUCTION PIPELINE</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">Python 3.12 / Blender API / USDZ</span>
                    </div>

                    <div className="py-4 space-y-2">
                      <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">3D Asset Optimization Pipeline</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-sans">
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">01. Ingestion</div>
                          <div className="text-zinc-200 font-medium">Raw 3D Meshes & Textures</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">02. Processing</div>
                          <div className="text-violet-400 font-medium">Auto-Tagging & LOD Baking</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">03. Build</div>
                          <div className="text-zinc-200 font-medium">Spatial Engine Package</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-[10px] text-zinc-400">
                      <span>Spatial Computing Framework</span>
                      <span className="text-zinc-500 font-mono">Ready Team One Studio Prototype</span>
                    </div>
                  </div>
                ) : project.id === 'conversational-analyst' ? (
                  <div className="bg-zinc-950 p-6 border-b border-zinc-200 text-zinc-300 font-mono text-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                        <span className="text-[11px] text-zinc-100 font-semibold tracking-wider">CONVERSATIONAL ANALYST</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">Python / LangChain / SQL</span>
                    </div>

                    <div className="py-4 space-y-2">
                      <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Natural Language Query Architecture</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-sans">
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">01. Query</div>
                          <div className="text-zinc-200 font-medium">Natural Language Request</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">02. Synthesis</div>
                          <div className="text-blue-400 font-medium">Schema AST & Validated SQL</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">03. Response</div>
                          <div className="text-zinc-200 font-medium">Interactive Chart & Summary</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-[10px] text-zinc-400">
                      <span>Deterministic Query Guardrails</span>
                      <span className="text-zinc-500 font-mono">Self-Service BI Prototype</span>
                    </div>
                  </div>
                ) : project.id === 'legal-document-synthesizer' ? (
                  <div className="bg-zinc-950 p-6 border-b border-zinc-200 text-zinc-300 font-mono text-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                        <span className="text-[11px] text-zinc-100 font-semibold tracking-wider">DOCUMENT SYNTHESIZER & AUDIT</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">Python / ChromaDB / Gemini 3.5</span>
                    </div>

                    <div className="py-4 space-y-2">
                      <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Semantic Contract Synthesis Flow</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-sans">
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">01. Extraction</div>
                          <div className="text-zinc-200 font-medium">100+ Page Commercial PDFs</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">02. Analysis</div>
                          <div className="text-rose-400 font-medium">Clause Cross-Referencing</div>
                        </div>
                        <div className="bg-zinc-900 p-2.5 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase font-mono">03. Review</div>
                          <div className="text-zinc-200 font-medium">Redline & Risk Assessment</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-[10px] text-zinc-400">
                      <span>RAG Evaluation Architecture</span>
                      <span className="text-zinc-500 font-mono">Commercial Review Prototype</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-zinc-950 p-6 border-b border-zinc-200 text-zinc-300 font-mono text-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-xs font-semibold text-zinc-200 uppercase">{project.title}</span>
                      <span className="text-[10px] text-zinc-500">{project.type}</span>
                    </div>
                    <div className="py-6 text-center text-zinc-400 font-mono text-xs">
                      [ Architecture Diagram & Technical Pipeline ]
                    </div>
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{project.type}</div>
                    {project.liveUrl && (project.status === 'Live Demo' || project.status === 'Active Prototype') ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono px-2 py-1 bg-teal-50 text-teal-800 border border-teal-200 hover:border-teal-400 hover:bg-teal-100/50 transition-colors inline-flex items-center gap-1 font-semibold"
                        title={`Open ${project.status}`}
                      >
                        <span>{project.status}</span>
                        <ExternalLink size={10} />
                      </a>
                    ) : (
                      <div className={`text-[10px] font-mono px-2 py-1 ${
                        project.status === 'Live Demo' || project.status === 'Active Prototype'
                          ? 'bg-teal-50 text-teal-800 border border-teal-200 font-semibold' 
                          : 'bg-zinc-50 border border-zinc-200 text-zinc-600'
                      }`}>
                        {project.status}
                      </div>
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-teal-700 transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-zinc-600 mb-6 font-serif leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech stack badges */}
                  {project.technologies && (
                    <div className="mb-6">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Tech Stack</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map(tech => (
                          <span key={tech} className="text-xs font-mono bg-zinc-100 text-zinc-700 px-2.5 py-1 border border-zinc-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Architecture & Engineering details for AI support agent */}
                  {project.id === 'ai-support-agent' && (
                    <div className="mb-6 bg-zinc-50 border border-zinc-200 p-4 space-y-3 text-xs">
                      <div className="font-semibold text-zinc-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <Terminal size={14} className="text-teal-700" />
                        Key Engineering Highlights & Guardrails
                      </div>
                      <ul className="space-y-1.5 text-zinc-600 font-serif">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-teal-700 shrink-0 mt-0.5" />
                          <span><strong>System Prompt Framing:</strong> Constrains Gemini into a strict JSON extraction backend without conversational overhead.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-teal-700 shrink-0 mt-0.5" />
                          <span><strong>Form State Isolation:</strong> Wraps interactions in explicit submit controls to prevent runaway script re-renders.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-teal-700 shrink-0 mt-0.5" />
                          <span><strong>Resilient Simulator Fallback:</strong> Cached mock-data layer guarantees uninterrupted review if external API limits are reached.</span>
                        </li>
                      </ul>
                      <div className="pt-2 border-t border-zinc-200 text-[11px] font-mono text-zinc-500">
                        <span className="text-zinc-800 font-semibold">Test Scenario:</span> Billing double-charge / enterprise contract cancellation threat.
                      </div>
                    </div>
                  )}

                  {/* Architecture & Engineering details for Intelligent Document Search */}
                  {project.id === 'intelligent-document-search' && (
                    <div className="mb-6 bg-zinc-50 border border-zinc-200 p-4 space-y-3 text-xs">
                      <div className="font-semibold text-zinc-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <Terminal size={14} className="text-cyan-700" />
                        Key Engineering Highlights & Guardrails
                      </div>
                      <ul className="space-y-1.5 text-zinc-600 font-serif">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-cyan-700 shrink-0 mt-0.5" />
                          <span><strong>Context Window Grounding:</strong> Forced prompt constraint bounds ensuring the LLM relies exclusively on facts from uploaded business files.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-cyan-700 shrink-0 mt-0.5" />
                          <span><strong>Atomic State Isolation:</strong> Wraps session-level parameters in tight Streamlit form blocks to stop page refreshes from flooding the third-party endpoint.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-cyan-700 shrink-0 mt-0.5" />
                          <span><strong>Recruiter Safety Simulator:</strong> Real-time toggle falls back to cached snapshotted embedding weights if platform daily free-tier limits expire.</span>
                        </li>
                      </ul>
                      <div className="pt-2 border-t border-zinc-200 text-[11px] font-mono text-zinc-500">
                        <span className="text-zinc-800 font-semibold">Test Scenario:</span> Uploading custom business rules to query policy constraints.
                      </div>
                    </div>
                  )}

                  {/* Architecture & Engineering details for AI Autonomous ETL Agent */}
                  {project.id === 'ai-autonomous-etl-agent' && (
                    <div className="mb-6 bg-zinc-50 border border-zinc-200 p-4 space-y-3 text-xs">
                      <div className="font-semibold text-zinc-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <Terminal size={14} className="text-amber-700" />
                        Key Engineering Highlights & Deterministic Gatekeepers
                      </div>
                      <ul className="space-y-1.5 text-zinc-600 font-serif">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-amber-700 shrink-0 mt-0.5" />
                          <span><strong>Critical Audit Oversight:</strong> Explicit systems integration auditing to catch model assumptions and resolve platform state conflicts.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-amber-700 shrink-0 mt-0.5" />
                          <span><strong>Deterministic Pydantic Seals:</strong> Implemented strict data typing gatekeepers to protect database runtimes from erratic AI structures.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-amber-700 shrink-0 mt-0.5" />
                          <span><strong>Quota Conservation Sandbox:</strong> Built sandboxed quota tracking mechanisms saving massive operational API token costs.</span>
                        </li>
                      </ul>
                      <div className="pt-2 border-t border-zinc-200 text-[11px] font-mono text-zinc-500">
                        <span className="text-zinc-800 font-semibold">Test Scenario:</span> Resolving high-volume erratic vendor structures against target schemas.
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto pt-6 border-t border-zinc-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm mb-6">
                      <div>
                        <span className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Role</span>
                        <span className="font-medium text-zinc-900">{project.role}</span>
                      </div>
                      <div>
                        <span className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Key Outcome / Business ROI</span>
                        <span className="font-medium text-zinc-900 font-serif leading-snug">{project.outcome}</span>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-semibold bg-zinc-900 text-white px-4 py-2.5 hover:bg-zinc-800 transition-colors gap-2"
                        >
                          <span>Launch Live Demo</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-medium text-zinc-700 hover:text-zinc-900 px-3.5 py-2.5 border border-zinc-300 hover:border-zinc-400 transition-colors gap-2"
                        >
                          <Github size={13} />
                          <span>GitHub Repository</span>
                          <ExternalLink size={11} className="text-zinc-400" />
                        </a>
                      )}
                      {!project.liveUrl && (
                        <Link
                          to="/contact"
                          className="inline-flex items-center text-xs font-medium text-teal-700 hover:text-teal-900 transition-colors gap-1.5 uppercase tracking-wider font-sans"
                        >
                          <span>Inquire About Prototype</span>
                          <ArrowRight size={13} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dual-System Architecture Comparison Index Table */}
          <div className="mt-24 border-t border-zinc-200 pt-16">
            <div className="max-w-2xl mb-8">
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">System Architecture Comparison Index</h3>
              <p className="mt-2 text-sm text-zinc-600 font-serif">
                A comparative breakdown of dual-system and agentic AI core competencies built for production triage, document intelligence, and schema verification.
              </p>
            </div>
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
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-5 font-semibold text-zinc-900 border-r border-zinc-200">
                      Lead Support Triage (#01)
                    </td>
                    <td className="px-6 py-5 font-serif text-sm text-zinc-600 border-r border-zinc-200">
                      Structured JSON Payload Extraction
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="bg-zinc-100 text-zinc-800 px-2 py-1 border border-zinc-200 font-mono text-[11px] rounded-xs whitespace-nowrap">Python 3.12</span>
                        <span className="text-zinc-300 select-none">•</span>
                        <span className="bg-emerald-50 text-emerald-800 px-2 py-1 border border-emerald-200 font-semibold font-mono text-[11px] rounded-xs whitespace-nowrap">gemini-3.8-flash</span>
                        <span className="text-zinc-300 select-none">•</span>
                        <span className="text-zinc-600 font-mono text-[11px] whitespace-nowrap">Streamlit</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      Streamlit Session State
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-5 font-semibold text-zinc-900 border-r border-zinc-200">
                      Document Search (#02)
                    </td>
                    <td className="px-6 py-5 font-serif text-sm text-zinc-600 border-r border-zinc-200">
                      Retrieval-Augmented Generation (RAG)
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="bg-zinc-100 text-zinc-800 px-2 py-1 border border-zinc-200 font-mono text-[11px] rounded-xs whitespace-nowrap">Python 3.12</span>
                        <span className="text-zinc-300 select-none">•</span>
                        <span className="bg-cyan-50 text-cyan-800 px-2 py-1 border border-cyan-200 font-semibold font-mono text-[11px] rounded-xs whitespace-nowrap">gemini-3.5-flash</span>
                        <span className="text-zinc-300 select-none">•</span>
                        <span className="text-zinc-600 font-mono text-[11px] whitespace-nowrap">google-genai</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      Mermaid.js Flowchart Mapping
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-5 font-semibold text-zinc-900 border-r border-zinc-200">
                      Autonomous ETL Agent (#03)
                    </td>
                    <td className="px-6 py-5 font-serif text-sm text-zinc-600 border-r border-zinc-200">
                      Schema Verification & Pydantic Gatekeepers
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="bg-zinc-100 text-zinc-800 px-2 py-1 border border-zinc-200 font-mono text-[11px] rounded-xs whitespace-nowrap">Python 3.12</span>
                        <span className="text-zinc-300 select-none">•</span>
                        <span className="bg-amber-50 text-amber-800 px-2 py-1 border border-amber-200 font-semibold font-mono text-[11px] rounded-xs whitespace-nowrap">gemini-3.5-flash</span>
                        <span className="text-zinc-300 select-none">•</span>
                        <span className="text-zinc-600 font-mono text-[11px] whitespace-nowrap">FastAPI</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      Docker Quota Sandbox
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Security Credential Warning Indicator */}
            <div className="mt-4 p-4 bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3 text-left">
              <span className="text-base select-none shrink-0">⚠️</span>
              <div className="space-y-1">
                <span className="font-semibold uppercase tracking-wider block text-[10px]">Security Protocol & Decoupled Secret Enforcement</span>
                <p className="font-serif text-amber-800 leading-relaxed">
                  Both production live demos and R&D codebases strictly isolate infrastructure credential files away from version control networks. Streamlit and FastAPI configurations utilize native <code className="font-mono bg-amber-100 px-1 py-0.5 rounded-xs text-amber-950">st.secrets</code> and environment key vaults, preventing client-side leak vulnerabilities during high-velocity recruiter inspection.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Mini CTA */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-20 text-center px-4">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Need something similar built?</h2>
        <p className="text-zinc-600 font-serif max-w-xl mx-auto mb-6">
          I build practical AI prototypes and automated workflows designed to solve specific operational bottlenecks.
        </p>
        <Link to="/contact" className="inline-flex h-12 items-center justify-center bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
          Discuss your project requirements
        </Link>
      </section>
    </div>
  );
}
