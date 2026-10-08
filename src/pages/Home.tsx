import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Terminal, CheckCircle2, ChevronDown, ChevronUp, Layers, Eye, ShieldAlert, Sparkles, FileText, Clock, ShieldCheck, Zap, Users } from 'lucide-react';
import { SITE_DATA, cleanContentData } from '../data/content';
import { DESIGN_TEXT } from '../data/designText';

type ViewMode = 'executive' | 'deepdive' | 'helpsyou';

export default function Home() {
  // Individual 3-way segmented mode for each project: 'executive' (minimal, default) vs 'deepdive' vs 'helpsyou'
  const [projectModes, setProjectModes] = useState<Record<string, ViewMode>>({
    project2: 'executive',
    project3: 'executive',
    project1: 'executive',
  });

  const setProjectMode = (id: string, mode: ViewMode) => {
    setProjectModes(prev => ({ ...prev, [id]: mode }));
  };

  // Hero philosophy disclosure toggle
  const [showFullPhilosophy, setShowFullPhilosophy] = useState(false);

  // Comparison matrix disclosure toggle
  const [showMatrix, setShowMatrix] = useState(false);

  const project2 = SITE_DATA.projects.find(p => p.id === 'intelligent-document-search')!;
  const project3 = SITE_DATA.projects.find(p => p.id === 'ai-autonomous-etl-agent')!;
  const project1 = SITE_DATA.projects.find(p => p.id === 'ai-support-agent')!;

  const project2Spec = DESIGN_TEXT.focusAreas[0].project;
  const project3Spec = DESIGN_TEXT.focusAreas[1].projects[0];
  const project1Spec = DESIGN_TEXT.focusAreas[1].projects[1];

  return (
    <div className="w-full">
      {/* Hero Section - Clean & Razor-Sharp */}
      <section className="px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24 max-w-7xl mx-auto flex flex-col items-start border-b border-zinc-200">
        <div className="max-w-3xl space-y-6">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
            <span>Luke Frohling</span>
            <span className="text-zinc-300">•</span>
            <span>Applied AI & Prototypes</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl leading-[1.1]">
            Building the Future with AI
          </h1>
          
          {/* Restrained Hero Copy */}
          <p className="text-xl leading-relaxed text-zinc-600 font-serif">
            I build practical AI prototypes, deterministic data pipelines, and conversational interfaces with a relentless focus on stability, real-world usability, and business ROI.
          </p>

          {/* Progressive Disclosure: Core Philosophy Accordion */}
          <div className="pt-1">
            <button
              onClick={() => setShowFullPhilosophy(!showFullPhilosophy)}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-teal-700 hover:text-teal-800 transition-colors"
            >
              <span>{showFullPhilosophy ? 'Hide candidate philosophy' : 'Read candidate philosophy & audit approach'}</span>
              {showFullPhilosophy ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>

            {showFullPhilosophy && (
              <div className="mt-4 p-5 bg-zinc-50 border-l-2 border-teal-700 text-sm text-zinc-700 font-serif leading-relaxed animate-in fade-in duration-200">
                "{DESIGN_TEXT.executivePhilosophy.body}"
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 shadow-xs"
            >
              Discuss a project
            </Link>
            <Link
              to="/projects"
              className="inline-flex h-12 items-center justify-center text-sm font-medium text-zinc-900 transition-colors hover:text-teal-700 group"
            >
              View selected work
              <ArrowRight size={16} className="ml-2 text-zinc-400 group-hover:text-teal-700 transition-colors" />
            </Link>
          </div>
          <p className="text-xs text-zinc-500 pt-1">
            Open to full-time roles, contract engineering, and selected freelance projects.
          </p>
        </div>
      </section>

      {/* Selected Work Section with Progressive Disclosure */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-zinc-200 pb-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Selected Work</h2>
              <p className="mt-2 text-base text-zinc-600 font-serif">
                A selective showcase of production-ready systems and collaborative AI initiatives. Click between executive briefs, technical deep-dives, or direct business value.
              </p>
            </div>
            <Link
              to="/architecture"
              className="inline-flex items-center text-xs font-mono text-zinc-600 hover:text-teal-700 transition-colors"
            >
              <span>View Unabridged Design Text Specs</span>
              <ArrowRight size={12} className="ml-1" />
            </Link>
          </div>

          {/* Three Compact Projects with Clean Executive Briefs */}
          <div className="space-y-8 mb-16">
            
            {/* PROJECT 2: Intelligent Document Search Engine (Primary Core Competency) */}
            <article className="border border-zinc-200 bg-white p-6 sm:p-7 transition-colors hover:border-zinc-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  {project2.title}
                </h3>
                <a
                  href={project2.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-xs text-zinc-900 hover:text-teal-700 inline-flex items-center gap-1 self-start sm:self-center"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* 3-Way Segmented Control Bar */}
              <div className="flex flex-col gap-1.5 my-4 w-full">
                <div className="inline-flex max-w-full overflow-x-auto scrollbar-thin p-1 bg-zinc-950 rounded-sm border border-zinc-800 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setProjectMode('project2', 'executive')}
                    className={`px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-xs shrink-0 ${
                      projectModes['project2'] === 'executive'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Eye size={12} />
                    <span>Executive Brief</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectMode('project2', 'deepdive')}
                    className={`px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-xs shrink-0 ${
                      projectModes['project2'] === 'deepdive'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Layers size={12} />
                    <span>Technical Deep-Dive</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectMode('project2', 'helpsyou')}
                    className={`px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-xs shrink-0 ${
                      projectModes['project2'] === 'helpsyou'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Sparkles size={12} />
                    <span>How This Helps You</span>
                  </button>
                </div>
                <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-1 sm:hidden px-1">
                  <span>↔ Swipe sideways to reveal all tabs</span>
                </div>
              </div>

              {/* 1. Executive Brief: Pure, concise narrative without tag clutter */}
              {projectModes['project2'] === 'executive' && (
                <div className="space-y-3 animate-in fade-in duration-150">
                  <p className="text-sm text-zinc-600 font-serif leading-relaxed">
                    A live Retrieval-Augmented Generation (RAG) search platform eliminating corporate knowledge discovery lag with strict contextual grounding and zero model hallucinations.
                  </p>
                </div>
              )}

              {/* 2. Technical Deep-Dive: All text, badges, role, and specs link */}
              {projectModes['project2'] === 'deepdive' && (
                <div className="space-y-4 pt-2 animate-in fade-in duration-150">
                  {/* Category & Track Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-zinc-950 border border-zinc-800 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 font-semibold">
                        #02 • Primary Core Competency
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        INDEPENDENT PRODUCTION ARCHITECTURE
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-[11px] font-mono text-cyan-200">
                        Role: Lead Architect / Independent Developer
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <a
                        href={project2.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-cyan-300 inline-flex items-center gap-1"
                      >
                        <span>Launch Live Demo</span>
                        <ExternalLink size={11} />
                      </a>
                      <span className="text-zinc-600">•</span>
                      <a
                        href={project2.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white inline-flex items-center gap-1"
                      >
                        <Github size={11} />
                        <span>Source</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>

                  {/* Software Stack Pills & ROI Box */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">Python 3.12</span>
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">google-genai Interactions SDK</span>
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">gemini-3.5-flash Core</span>
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">Streamlit Form Logic</span>
                    </div>
                    <div className="p-2.5 bg-cyan-950/40 border border-cyan-800/70 text-xs font-mono text-cyan-300">
                      ROI: Drastically saves operational overhead and minimizes manual lookup times through robust, verified retrieval systems.
                    </div>
                  </div>

                  {/* Flowchart Diagram & Feats */}
                  <div className="bg-zinc-950 p-4 border border-zinc-800 text-zinc-300 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-[11px] text-cyan-400 font-semibold tracking-wider">RAG GROUNDING PIPELINE</span>
                      <span className="text-[10px] text-zinc-500">gemini-3.5-flash</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-zinc-200 text-xs font-sans">
                      <span className="bg-zinc-800 px-2 py-0.5 border border-zinc-700">Doc Upload</span>
                      <span className="text-cyan-400">→</span>
                      <span className="bg-zinc-800 px-2 py-0.5 border border-zinc-700">Prompt Layer</span>
                      <span className="text-cyan-400">→</span>
                      <span className="bg-cyan-950/80 text-cyan-200 px-2 py-0.5 border border-cyan-700/60 font-mono">Grounded Output</span>
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-50 border border-zinc-200 text-xs space-y-1.5">
                    <span className="font-semibold text-zinc-900 block text-[11px]">Engineering Feats & ROI:</span>
                    <ul className="space-y-1 text-zinc-600 font-serif">
                      <li>• <strong>Context Window Grounding:</strong> Forced constraint layers preventing AI hallucinations.</li>
                      <li>• <strong>State Isolation:</strong> Blocked browser refresh endpoint floods using Streamlit forms.</li>
                      <li>• <strong>Business Value:</strong> Drastically reduces manual documentation lookup overhead.</li>
                    </ul>
                  </div>

                  {/* View Technical Architecture Spec link under Technical Deep-Dive */}
                  <div className="pt-1 flex justify-end">
                    <Link
                      to="/architecture#intelligent-document-search"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-700 hover:text-teal-900 transition-colors font-medium border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5"
                    >
                      <span>View Technical Architecture Spec</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              )}

              {/* 3. How This Helps You Directly */}
              {projectModes['project2'] === 'helpsyou' && (
                <div className="space-y-4 pt-2 animate-in fade-in duration-150">
                  <div className="p-4 bg-teal-50/60 border border-teal-200/80 text-xs space-y-3">
                    <div className="flex items-center gap-2 text-teal-900 font-semibold text-xs">
                      <Sparkles size={14} className="text-teal-700" />
                      <span>Direct Operational Value for Your Team</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div className="bg-white p-3 border border-teal-200/60 space-y-1">
                        <div className="font-semibold text-zinc-900 flex items-center gap-1 text-[11px]">
                          <Clock size={12} className="text-teal-700" />
                          <span>Save 10+ Hours / Week</span>
                        </div>
                        <p className="text-zinc-600 font-serif text-[11px] leading-relaxed">
                          Employees search complex policy manuals, SOPs, and contracts in natural language and get exact answers in seconds instead of digging through 100-page PDFs.
                        </p>
                      </div>
                      <div className="bg-white p-3 border border-teal-200/60 space-y-1">
                        <div className="font-semibold text-zinc-900 flex items-center gap-1 text-[11px]">
                          <ShieldCheck size={12} className="text-teal-700" />
                          <span>Zero Hallucination Risk</span>
                        </div>
                        <p className="text-zinc-600 font-serif text-[11px] leading-relaxed">
                          Answers are grounded strictly in your verified company documents. If an answer is not in the text, the system says so rather than guessing.
                        </p>
                      </div>
                      <div className="bg-white p-3 border border-teal-200/60 space-y-1">
                        <div className="font-semibold text-zinc-900 flex items-center gap-1 text-[11px]">
                          <Zap size={12} className="text-teal-700" />
                          <span>Faster Onboarding</span>
                        </div>
                        <p className="text-zinc-600 font-serif text-[11px] leading-relaxed">
                          New hires get up to speed in days rather than months by querying company knowledge directly through an intuitive, self-service search tool.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-teal-200/60 text-xs">
                      <span className="text-teal-900 font-mono text-[11px]">
                        ROI: Eliminates document discovery lag & protects data privacy
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </article>

            {/* PROJECT 3: AI Autonomous ETL Agent (Collaborative Validation Initiative) */}
            <article className="border border-zinc-200 bg-white p-6 sm:p-7 transition-colors hover:border-zinc-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  {project3.title}
                </h3>
                <a
                  href={project3.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-xs text-zinc-900 hover:text-amber-600 inline-flex items-center gap-1 self-start sm:self-center"
                >
                  <span>Launch Sandbox</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* 3-Way Segmented Control Bar */}
              <div className="flex flex-col gap-1.5 my-4 w-full">
                <div className="inline-flex max-w-full overflow-x-auto scrollbar-thin p-1 bg-zinc-950 rounded-sm border border-zinc-800 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setProjectMode('project3', 'executive')}
                    className={`px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-xs shrink-0 ${
                      projectModes['project3'] === 'executive'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Eye size={12} />
                    <span>Executive Brief</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectMode('project3', 'deepdive')}
                    className={`px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-xs shrink-0 ${
                      projectModes['project3'] === 'deepdive'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Layers size={12} />
                    <span>Technical Deep-Dive</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectMode('project3', 'helpsyou')}
                    className={`px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-xs shrink-0 ${
                      projectModes['project3'] === 'helpsyou'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Sparkles size={12} />
                    <span>How This Helps You</span>
                  </button>
                </div>
                <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-1 sm:hidden px-1">
                  <span>↔ Swipe sideways to reveal all tabs</span>
                </div>
              </div>

              {/* 1. Executive Brief: Pure, concise narrative */}
              {projectModes['project3'] === 'executive' && (
                <div className="space-y-3 animate-in fade-in duration-150">
                  <p className="text-sm text-zinc-600 font-serif leading-relaxed">
                    An R&D validation co-pilot automating high-volume vendor data streams with deterministic Pydantic gatekeepers and sandboxed quota conservation.
                  </p>
                </div>
              )}

              {/* 2. Technical Deep-Dive: Exactly matches Picture 1 and Picture 2 */}
              {projectModes['project3'] === 'deepdive' && (
                <div className="space-y-4 pt-2 animate-in fade-in duration-150">
                  {/* Picture 1 Exact Rendering */}
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-zinc-950 border border-zinc-800 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 border border-amber-800/80 px-2 py-0.5 font-semibold">
                        #03 • Collaborative Initiative
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        AI-HUMAN CO-PILOT ENGINEERING
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-[11px] font-mono text-amber-200">
                        Role: Systems Integration & Verification Engineer (AI-Human Co-Pilot Development)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <a
                        href={project3.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-amber-300 inline-flex items-center gap-1"
                      >
                        <span>Launch Sandbox</span>
                        <ExternalLink size={11} />
                      </a>
                      <span className="text-zinc-600">•</span>
                      <a
                        href={project3.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white inline-flex items-center gap-1"
                      >
                        <Github size={11} />
                        <span>Source</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>

                  {/* Picture 2 Exact Rendering */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">Python 3.12</span>
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">Pydantic Schema Gatekeepers</span>
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">FastAPI Data Streams</span>
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">Gemini 3.5 Core</span>
                    </div>
                    <div className="p-2.5 bg-amber-950/40 border border-amber-800/70 text-xs font-mono text-amber-300">
                      ROI: Protects DB runtime stability & eliminates cost spikes
                    </div>
                  </div>

                  {/* Diagram & Feats */}
                  <div className="bg-zinc-950 p-4 border border-zinc-800 text-zinc-300 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-[11px] text-amber-400 font-semibold tracking-wider">SCHEMA AUDIT & QUOTA SANDBOX</span>
                      <span className="text-[10px] text-zinc-500">Pydantic • FastAPI</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-zinc-200 text-xs font-sans">
                      <span className="bg-zinc-800 px-2 py-0.5 border border-zinc-700">Vendor Stream</span>
                      <span className="text-amber-400">→</span>
                      <span className="bg-amber-950/80 text-amber-200 px-2 py-0.5 border border-amber-700/60 font-mono">Pydantic Gatekeeper</span>
                      <span className="text-amber-400">→</span>
                      <span className="bg-zinc-800 px-2 py-0.5 border border-zinc-700">DB Safe</span>
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-50 border border-zinc-200 text-xs space-y-1.5">
                    <span className="font-semibold text-zinc-900 block text-[11px]">Engineering Feats & ROI:</span>
                    <ul className="space-y-1 text-zinc-600 font-serif">
                      <li>• <strong>Critical Audit Oversight:</strong> Catching erratic model assumptions to protect database runtimes.</li>
                      <li>• <strong>Deterministic Gatekeepers:</strong> Pydantic strict typing blocks unvalidated fields before DB commit.</li>
                      <li>• <strong>Quota Protection:</strong> Sandboxed token counters eliminate unexpected runaway API cost spikes.</li>
                    </ul>
                  </div>

                  {/* View Technical Architecture Spec link under Technical Deep-Dive */}
                  <div className="pt-1 flex justify-end">
                    <Link
                      to="/architecture#ai-autonomous-etl-agent"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-700 hover:text-teal-900 transition-colors font-medium border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5"
                    >
                      <span>View Technical Architecture Spec</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              )}

              {/* 3. How This Helps You Directly */}
              {projectModes['project3'] === 'helpsyou' && (
                <div className="space-y-4 pt-2 animate-in fade-in duration-150">
                  <div className="p-4 bg-amber-50/60 border border-amber-200/80 text-xs space-y-3">
                    <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs">
                      <Sparkles size={14} className="text-amber-700" />
                      <span>Direct Operational Value for Your Team</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div className="bg-white p-3 border border-amber-200/60 space-y-1">
                        <div className="font-semibold text-zinc-900 flex items-center gap-1 text-[11px]">
                          <Zap size={12} className="text-amber-700" />
                          <span>Automate Inconsistent Data</span>
                        </div>
                        <p className="text-zinc-600 font-serif text-[11px] leading-relaxed">
                          Ingest irregular CSVs, invoices, and supplier payloads automatically without paying engineers to write custom manual ETL scripts for each vendor.
                        </p>
                      </div>
                      <div className="bg-white p-3 border border-amber-200/60 space-y-1">
                        <div className="font-semibold text-zinc-900 flex items-center gap-1 text-[11px]">
                          <ShieldCheck size={12} className="text-amber-700" />
                          <span>100% Schema Guardrails</span>
                        </div>
                        <p className="text-zinc-600 font-serif text-[11px] leading-relaxed">
                          Deterministic Pydantic validation guarantees no malformed or missing fields ever reach your production database, preventing catastrophic crashes.
                        </p>
                      </div>
                      <div className="bg-white p-3 border border-amber-200/60 space-y-1">
                        <div className="font-semibold text-zinc-900 flex items-center gap-1 text-[11px]">
                          <Clock size={12} className="text-amber-700" />
                          <span>No API Cost Surprises</span>
                        </div>
                        <p className="text-zinc-600 font-serif text-[11px] leading-relaxed">
                          Quota conservation sandboxes track token consumption in real time and automatically halt processing if rate or budget thresholds are reached.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-amber-200/60 text-xs">
                      <span className="text-amber-900 font-mono text-[11px]">
                        ROI: Automates vendor data ingestion while keeping database runtime 100% resilient
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </article>

            {/* PROJECT 1: AI Customer Support Triage Agent (Workflow Automation) */}
            <article className="border border-zinc-200 bg-white p-6 sm:p-7 transition-colors hover:border-zinc-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  {project1.title}
                </h3>
                <a
                  href={project1.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-xs text-zinc-900 hover:text-emerald-600 inline-flex items-center gap-1 self-start sm:self-center"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* 3-Way Segmented Control Bar */}
              <div className="flex flex-col gap-1.5 my-4 w-full">
                <div className="inline-flex max-w-full overflow-x-auto scrollbar-thin p-1 bg-zinc-950 rounded-sm border border-zinc-800 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setProjectMode('project1', 'executive')}
                    className={`px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-xs shrink-0 ${
                      projectModes['project1'] === 'executive'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Eye size={12} />
                    <span>Executive Brief</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectMode('project1', 'deepdive')}
                    className={`px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-xs shrink-0 ${
                      projectModes['project1'] === 'deepdive'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Layers size={12} />
                    <span>Technical Deep-Dive</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectMode('project1', 'helpsyou')}
                    className={`px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-xs shrink-0 ${
                      projectModes['project1'] === 'helpsyou'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Sparkles size={12} />
                    <span>How This Helps You</span>
                  </button>
                </div>
                <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-1 sm:hidden px-1">
                  <span>↔ Swipe sideways to reveal all tabs</span>
                </div>
              </div>

              {/* 1. Executive Brief: Pure, concise narrative */}
              {projectModes['project1'] === 'executive' && (
                <div className="space-y-3 animate-in fade-in duration-150">
                  <p className="text-sm text-zinc-600 font-serif leading-relaxed">
                    A production microservice analyzing incoming customer inquiries, extracting structured JSON operational metadata, and auto-drafting responses in real time.
                  </p>
                </div>
              )}

              {/* 2. Technical Deep-Dive */}
              {projectModes['project1'] === 'deepdive' && (
                <div className="space-y-4 pt-2 animate-in fade-in duration-150">
                  {/* Category & Track Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-zinc-950 border border-zinc-800 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 font-semibold">
                        #01 • Workflow Automation
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        PRODUCTION MICROSERVICE
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-[11px] font-mono text-emerald-200">
                        Role: Workflow Automation Engineer
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <a
                        href={project1.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-emerald-300 inline-flex items-center gap-1"
                      >
                        <span>Launch Live Demo</span>
                        <ExternalLink size={11} />
                      </a>
                      <span className="text-zinc-600">•</span>
                      <a
                        href={project1.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white inline-flex items-center gap-1"
                      >
                        <Github size={11} />
                        <span>Source</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>

                  {/* Software Stack Pills & ROI Box */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">Python 3.12</span>
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">Google Gemini API (gemini-3.8-flash)</span>
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">Streamlit Session State</span>
                      <span className="text-[11px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-1 border border-zinc-700">Structured JSON Schema</span>
                    </div>
                    <div className="p-2.5 bg-emerald-950/40 border border-emerald-800/70 text-xs font-mono text-emerald-300">
                      ROI: Eliminates triage delay with structured JSON routing and rapid draft generation.
                    </div>
                  </div>

                  {/* Diagram & Feats */}
                  <div className="bg-zinc-950 p-4 border border-zinc-800 text-zinc-300 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-[11px] text-emerald-400 font-semibold tracking-wider">JSON METADATA PIPELINE</span>
                      <span className="text-[10px] text-zinc-500">gemini-3.8-flash</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-zinc-200 text-xs font-sans">
                      <span className="bg-zinc-800 px-2 py-0.5 border border-zinc-700">Inquiry</span>
                      <span className="text-teal-400">→</span>
                      <span className="bg-zinc-800 px-2 py-0.5 border border-zinc-700">JSON Extraction</span>
                      <span className="text-teal-400">→</span>
                      <span className="bg-teal-950/80 text-teal-200 px-2 py-0.5 border border-teal-700/60 font-mono">Auto-Triage</span>
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-50 border border-zinc-200 text-xs space-y-1.5">
                    <span className="font-semibold text-zinc-900 block text-[11px]">Engineering Feats & ROI:</span>
                    <ul className="space-y-1 text-zinc-600 font-serif">
                      <li>• <strong>Structured Schema Framing:</strong> Eliminates conversational fluff and enforces JSON outputs.</li>
                      <li>• <strong>Form State Isolation:</strong> Prevents uncontrolled re-renders and repeated API calls.</li>
                      <li>• <strong>Business Value:</strong> Eliminates manual triage overhead and speeds up customer ticket resolution.</li>
                    </ul>
                  </div>

                  {/* View Technical Architecture Spec link under Technical Deep-Dive */}
                  <div className="pt-1 flex justify-end">
                    <Link
                      to="/architecture#ai-support-agent"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-700 hover:text-teal-900 transition-colors font-medium border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5"
                    >
                      <span>View Technical Architecture Spec</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              )}

              {/* 3. How This Helps You Directly */}
              {projectModes['project1'] === 'helpsyou' && (
                <div className="space-y-4 pt-2 animate-in fade-in duration-150">
                  <div className="p-4 bg-emerald-50/60 border border-emerald-200/80 text-xs space-y-3">
                    <div className="flex items-center gap-2 text-emerald-900 font-semibold text-xs">
                      <Sparkles size={14} className="text-emerald-700" />
                      <span>Direct Operational Value for Your Team</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div className="bg-white p-3 border border-emerald-200/60 space-y-1">
                        <div className="font-semibold text-zinc-900 flex items-center gap-1 text-[11px]">
                          <Zap size={12} className="text-emerald-700" />
                          <span>Instant Ticket Parsing</span>
                        </div>
                        <p className="text-zinc-600 font-serif text-[11px] leading-relaxed">
                          Converts chaotic customer emails into validated, structured fields (urgency, issue category, customer ID) within 500 milliseconds.
                        </p>
                      </div>
                      <div className="bg-white p-3 border border-emerald-200/60 space-y-1">
                        <div className="font-semibold text-zinc-900 flex items-center gap-1 text-[11px]">
                          <Users size={12} className="text-emerald-700" />
                          <span>Intelligent Priority Routing</span>
                        </div>
                        <p className="text-zinc-600 font-serif text-[11px] leading-relaxed">
                          High-risk cancellation threats or enterprise sales opportunities are flagged immediately and routed to senior executives without delays.
                        </p>
                      </div>
                      <div className="bg-white p-3 border border-emerald-200/60 space-y-1">
                        <div className="font-semibold text-zinc-900 flex items-center gap-1 text-[11px]">
                          <Clock size={12} className="text-emerald-700" />
                          <span>Automated Response Drafts</span>
                        </div>
                        <p className="text-zinc-600 font-serif text-[11px] leading-relaxed">
                          Your support agents receive pre-drafted, accurate answers ready to approve and send, saving 3–5 minutes per ticket.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-emerald-200/60 text-xs">
                      <span className="text-emerald-900 font-mono text-[11px]">
                        ROI: Speeds up customer response times by 80% without expanding team size
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </article>

          </div>

          {/* Progressive Disclosure: Technical Architecture Table & Security Banner */}
          <div className="pt-8 border-t border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-zinc-900">Deep Technical Specifications</h4>
                <p className="text-xs text-zinc-500 font-serif">
                  Architecture matrices, runtime tooling comparisons, and credential isolation protocols.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowMatrix(!showMatrix)}
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-700 hover:text-zinc-900 border border-zinc-300 px-3 py-1.5 bg-white"
                >
                  <span>{showMatrix ? 'Hide System Comparison' : 'Inspect Comparison Index'}</span>
                  {showMatrix ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>
                <Link
                  to="/architecture"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-teal-700 hover:text-teal-800"
                >
                  <span>Full Spec Page →</span>
                </Link>
              </div>
            </div>

            {/* Revealed on demand */}
            {showMatrix && (
              <div className="mt-8 space-y-6 animate-in fade-in duration-200">
                <div className="overflow-x-auto border border-zinc-200 bg-white">
                  <table className="min-w-full divide-y divide-zinc-200 text-left text-xs font-mono">
                    <thead className="bg-zinc-50 text-zinc-500 uppercase tracking-wider">
                      <tr>
                        <th className="px-5 py-3.5 font-semibold border-r border-zinc-200">System Pipeline</th>
                        <th className="px-5 py-3.5 font-semibold border-r border-zinc-200">Core AI Methodology</th>
                        <th className="px-5 py-3.5 font-semibold border-r border-zinc-200">Primary Software Stack</th>
                        <th className="px-5 py-3.5 font-semibold">System Flow Tooling</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-zinc-700">
                      {DESIGN_TEXT.comparisonMatrix.map(row => (
                        <tr key={row.pipeline} className="hover:bg-zinc-50/50">
                          <td className="px-5 py-4 font-semibold text-zinc-900 border-r border-zinc-200">
                            {row.pipeline}
                          </td>
                          <td className="px-5 py-4 font-serif text-sm text-zinc-600 border-r border-zinc-200">
                            {row.methodology}
                          </td>
                          <td className="px-5 py-4 border-r border-zinc-200 text-[11px]">
                            {row.stack}
                          </td>
                          <td className="px-5 py-4">
                            {row.flowTooling}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-amber-50/60 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                  <ShieldAlert size={16} className="text-amber-700 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-semibold uppercase tracking-wider block text-[10px]">
                      {DESIGN_TEXT.securityProtocol.title}
                    </span>
                    <p className="font-serif text-amber-800 leading-relaxed text-[11px]">
                      {DESIGN_TEXT.securityProtocol.body}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECTION NEXT: How These AI Skills Help You Directly */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-teal-800 uppercase tracking-widest flex items-center gap-2 mb-2 font-mono">
              <span>Direct Stakeholder Value</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              How These AI Skills Help You Directly
            </h2>
            <p className="mt-3 text-base text-zinc-600 font-serif leading-relaxed">
              Practical AI engineering is not about speculative chatbots. It is about slashing operational overhead, protecting database integrity from unverified model outputs, and automating high-friction workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Impact Card 1: Document Search & Knowledge Retrieval */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-300 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800">
                  <Clock size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-teal-700 uppercase tracking-wider font-semibold">
                    01 • Knowledge Retrieval & RAG
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">
                    Instant Answers Across Company Documents
                  </h3>
                </div>
                <p className="text-xs text-zinc-600 font-serif leading-relaxed">
                  Instead of paying employees to spend hours digging through 100-page policy manuals, compliance codes, or supplier contracts, your team queries internal data in plain English and gets verified, page-accurate citations in under 2 seconds.
                </p>
                <div className="space-y-2 pt-2 border-t border-zinc-100 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-teal-700 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-serif">Eliminates 20% of weekly employee search time</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-teal-700 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-serif">Strict prompt boundaries prevent AI hallucinations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-teal-700 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-serif">Internal documents remain private and unshared</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200/80">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Measurable ROI:</div>
                <div className="text-sm font-semibold text-zinc-900 mt-0.5">Saves ~15 hrs / employee / month</div>
              </div>
            </div>

            {/* Impact Card 2: Autonomous ETL & Schema Guardrails */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-300 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-amber-700 uppercase tracking-wider font-semibold">
                    02 • Schema Shields & ETL Guardrails
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">
                    Messy Vendor Data Ingestion With 100% DB Safety
                  </h3>
                </div>
                <p className="text-xs text-zinc-600 font-serif leading-relaxed">
                  Incoming vendor spreadsheets, invoices, and supplier feeds arrive in inconsistent, broken formats. I engineer AI ingestion pipelines with deterministic Pydantic gatekeepers that intercept and clean data while protecting your core database from corruption.
                </p>
                <div className="space-y-2 pt-2 border-t border-zinc-100 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-700 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-serif">Automates irregular spreadsheets & vendor invoices</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-700 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-serif">Deterministic Pydantic typing rejects corrupted fields</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-700 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-serif">Token quota limits eliminate surprise runaway cloud bills</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200/80">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Measurable ROI:</div>
                <div className="text-sm font-semibold text-zinc-900 mt-0.5">90% reduction in manual data entry cleanup</div>
              </div>
            </div>

            {/* Impact Card 3: Support Triage & Lead Routing */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-300 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
                  <Zap size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-emerald-700 uppercase tracking-wider font-semibold">
                    03 • Workflow Automation & Triage
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">
                    Handle 3x Inbound Volume Without More Headcount
                  </h3>
                </div>
                <p className="text-xs text-zinc-600 font-serif leading-relaxed">
                  Support inboxes and lead contact forms get flooded with unstructured emails. This microservice automatically categorizes intent, extracts structured operational JSON payloads, routes urgent VIP issues, and pre-drafts replies for one-click human approval.
                </p>
                <div className="space-y-2 pt-2 border-t border-zinc-100 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-serif">Cuts customer response latency from 4 hours to 30 seconds</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-serif">Escalates billing threats & hot sales leads immediately</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-serif">Pre-drafted replies save 3–5 minutes on every ticket</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200/80">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Measurable ROI:</div>
                <div className="text-sm font-semibold text-zinc-900 mt-0.5">2x–3x ticket throughput for support teams</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Bio Section */}
      <section className="border-t border-zinc-200 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="w-full max-w-sm bg-zinc-900 border border-zinc-200 aspect-[3/4] overflow-hidden shadow-xs relative group">
                <img
                  src="/images/LukeFrohling-MissionPossible.webp"
                  alt="Luke Frohling - Applied AI & Prototypes Developer"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
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
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest border-b border-zinc-200 pb-3">
                {SITE_DATA.location}
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Background & Approach
              </h2>
              <div className="prose prose-zinc prose-base text-zinc-600 font-serif space-y-4">
                <p>{SITE_DATA.bio.long_p1}</p>
                <p>{SITE_DATA.bio.long_p2}</p>
              </div>
              
              <div className="pt-6 border-t border-zinc-200 space-y-6">
                <div className="flex items-center gap-1.5 mb-1 text-xs font-semibold text-teal-800 uppercase tracking-widest font-mono">
                  <svg className="w-3.5 h-3.5 fill-current text-teal-700" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>Recommendation via LinkedIn</span>
                </div>
                
                {SITE_DATA.testimonials.map((t, idx) => (
                  <div key={t.id} className="space-y-2">
                    <blockquote className="border-l-2 border-teal-700 pl-4 italic text-zinc-700 font-serif text-base leading-relaxed">
                      "{cleanContentData(t.quote)}"
                    </blockquote>
                    <div className="text-xs font-medium text-zinc-900 pl-4">
                      — {cleanContentData(t.author)}, <span className="text-zinc-500 font-normal">{cleanContentData(t.role)}</span>
                      <span className="text-zinc-400 font-mono text-[10px] block mt-0.5">Source: {cleanContentData(t.source)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Discuss a project or opportunity.
          </h2>
          <p className="text-base text-zinc-600 font-serif">
            Open to full-time engineering roles, technical contract work, and applied AI initiatives.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 shadow-xs"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
