/**
 * DESIGN TEXT ARCHIVE
 * This file preserves the full technical architecture specifications, recruiter positioning,
 * and comprehensive system blueprints in their entirety.
 */

export interface SystemSpec {
  id: string;
  name: string;
  focusArea: string;
  position: string;
  tagline: string;
  overview: string;
  coreMethodology: string;
  primaryStack: string[];
  systemFlowTooling: string;
  engineeringHighlights: { title: string; detail: string }[];
  businessROI: string;
  testScenario: string;
  links: {
    liveDemo: string;
    sourceCode: string;
  };
}

export const DESIGN_TEXT = {
  executivePhilosophy: {
    title: "Revised Technical Summary for Applicant Profile",
    body: "An analytical and highly tenacious Software Developer specializing in building high-ROI data pipelines and search applications. Proven ability to architect deterministic data frameworks while maintaining a rigorous, critical audit perspective when integrating generative AI technologies. Focuses heavily on protecting system runtime stability, capturing edge-case anomalies, and collaborating efficiently across multi-file architectures to deliver maximum cost-savings and platform resilience."
  },

  securityProtocol: {
    title: "Security Protocol & Decoupled Secret Enforcement",
    body: "Both production live demos and R&D codebases strictly isolate infrastructure credential files away from version control networks. Streamlit and FastAPI configurations utilize native st.secrets and environment key vaults, preventing client-side leak vulnerabilities during high-velocity recruiter inspection.",
    keyTakeaway: "Zero credentials in Git, server-authoritative key isolation, and rate-limited quota guards."
  },

  focusAreas: [
    {
      index: "Focus Area 1",
      title: "Primary Core Engine Competency",
      subtitle: "Independent Production Architecture",
      narrativeTone: "Showcase 100% technical fluency, end-to-end structural understanding, and complete execution ownership. Baseline proof of absolute mastery over deterministic software design and data architecture.",
      project: {
        id: "intelligent-document-search",
        name: "Intelligent Document Search Engine (RAG System)",
        role: "Lead Architect / Independent Developer",
        type: "Independent Core Competency",
        tagline: "Live RAG platform built to ground LLM focus fields directly within custom business text assets, eliminating corporate information discovery lag.",
        coreMethodology: "Retrieval-Augmented Generation (RAG)",
        primaryStack: ["Python 3.12", "google-genai Interactions SDK", "gemini-3.5-flash Core", "Streamlit Form Logic"],
        systemFlowTooling: "Mermaid.js Flowchart Mapping",
        businessROI: "Drastically saving operational overhead and minimizing manual lookup times through robust, verified retrieval systems.",
        engineeringHighlights: [
          {
            title: "Context Window Grounding",
            detail: "Built a prompt constraint layer forcing the backend engine to reference exclusively uploaded facts, mitigating generic AI model hallucinations."
          },
          {
            title: "State Isolation Architecture",
            detail: "Wrapped user interaction parameters inside strict atomic forms to block browser page refreshes from flooding the third-party endpoint array."
          },
          {
            title: "Fault-Tolerant Recruiter Safety Rails",
            detail: "Implemented a front-end 'Recruiter Simulator Mode' toggle switch to gracefully fall back to internal cached snapshot weights if platform daily free-tier quotas are met."
          },
          {
            title: "Decoupled Infrastructure Secrets",
            detail: "Isolated platform API keys away from version control networks, utilizing encrypted runtime environmental variables natively (st.secrets)."
          }
        ],
        testScenario: "Uploading custom business rules to query policy constraints.",
        links: {
          liveDemo: "https://luke-frohling-document-search.streamlit.app/",
          sourceCode: "https://github.com/lfrohling/ai-document-search"
        }
      }
    },
    {
      index: "Focus Area 2",
      title: "Advanced AI Collaborative Initiatives",
      subtitle: "AI-Human Co-Pilot Development & Workflow Automation",
      narrativeTone: "Innovative, complex R&D exploration demonstrating advanced collaborative problem-solving, deep architectural tenacity, and rigid quality assurance. Explicitly emphasizes eagle-eyed oversight in catching AI model assumptions, resolving platform state conflicts, and introducing deterministic Pydantic gatekeepers.",
      projects: [
        {
          id: "ai-autonomous-etl-agent",
          name: "AI Autonomous ETL Agent (Advanced Schema Validation Prototype)",
          role: "Systems Integration & Verification Engineer (AI-Human Co-Pilot Development)",
          type: "R&D Prototype / Collaborative Exploration",
          tagline: "High-volume incoming vendor data stream automation with rigid deterministic schema enforcement and active human oversight.",
          coreMethodology: "Schema Verification & Pydantic Gatekeepers",
          primaryStack: ["Python 3.12", "Pydantic Schema Gatekeepers", "FastAPI Data Streams", "Gemini 3.5 Core", "Docker Sandbox"],
          systemFlowTooling: "Docker Quota Sandbox",
          businessROI: "Protecting corporate data integrity, automating high-volume incoming vendor streams, and building sandboxed quota conservation models to save massive operational API costs.",
          engineeringHighlights: [
            {
              title: "Critical Audit Oversight",
              detail: "Explicit systems integration auditing to catch model assumptions and resolve platform state conflicts."
            },
            {
              title: "Deterministic Pydantic Seals",
              detail: "Implemented strict data typing gatekeepers to protect database runtimes from erratic AI structures."
            },
            {
              title: "Quota Conservation Sandbox",
              detail: "Built sandboxed quota tracking mechanisms saving massive operational API token costs."
            }
          ],
          testScenario: "Resolving high-volume erratic vendor structures against target schemas.",
          links: {
            liveDemo: "https://luke-frohling-etl-validation.streamlit.app/",
            sourceCode: "https://github.com/lfrohling/AI-Autonomous-ETL-Agent"
          }
        },
        {
          id: "ai-support-agent",
          name: "AI Customer Support Triage & Lead Routing Agent",
          role: "Workflow Automation Engineer",
          type: "Production Microservice",
          tagline: "Live microservice converting unstructured customer messages into validated operational JSON payloads with real-time response drafting.",
          coreMethodology: "Structured JSON Payload Extraction",
          primaryStack: ["Python 3.12", "Google Gemini API (gemini-3.8-flash)", "Streamlit", "Structured JSON Schema"],
          systemFlowTooling: "Streamlit Session State",
          businessROI: "Eliminates manual ticket triage overhead, converts unstructured inquiries into validated payloads, and routes requests to appropriate billing/sales departments.",
          engineeringHighlights: [
            {
              title: "System Prompt Framing",
              detail: "Constrains Gemini into a strict JSON extraction backend without conversational overhead."
            },
            {
              title: "Form State Isolation",
              detail: "Wraps interactions in explicit submit controls to prevent runaway script re-renders."
            },
            {
              title: "Resilient Simulator Fallback",
              detail: "Cached mock-data layer guarantees uninterrupted review if external API limits are reached."
            }
          ],
          testScenario: "Billing double-charge / enterprise contract cancellation threat.",
          links: {
            liveDemo: "https://luke-frohling-ai-support-agent.streamlit.app/",
            sourceCode: "https://github.com/lfrohling/ai-support-agent"
          }
        }
      ]
    }
  ],

  comparisonMatrix: [
    {
      pipeline: "Lead Support Triage (#01)",
      methodology: "Structured JSON Payload Extraction",
      stack: "Python 3.12, gemini-3.8-flash, Streamlit",
      flowTooling: "Streamlit Session State"
    },
    {
      pipeline: "Document Search (#02)",
      methodology: "Retrieval-Augmented Generation (RAG)",
      stack: "Python 3.12, gemini-3.5-flash, google-genai",
      flowTooling: "Mermaid.js Flowchart Mapping"
    },
    {
      pipeline: "Autonomous ETL Agent (#03)",
      methodology: "Schema Verification & Pydantic Gatekeepers",
      stack: "Python 3.12, gemini-3.5-flash, FastAPI",
      flowTooling: "Docker Quota Sandbox"
    }
  ]
};
