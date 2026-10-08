export interface Project {
  id: string;
  title: string;
  summary: string;
  type: string;
  role: string;
  outcome: string;
  status: string;
  featured: boolean;
  assetType: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
  architecture?: string[];
  businessValue?: string;
}

export const SITE_DATA = {
  name: "Luke Frohling",
  role: "Applied AI, prototypes, and practical systems",
  focus: "Data Pipelines, Search Applications & Deterministic Frameworks",
  location: "Based in Perth, Australia",
  contact_email: "Contact@LukeFrohling.com",
  github: "https://github.com/lfrohling",
  linkedin: "https://www.linkedin.com/in/lukefrohling/",
  bio: {
    short: "An analytical and highly tenacious Software Developer specializing in building high-ROI data pipelines and search applications. Proven ability to architect deterministic data frameworks while maintaining a rigorous, critical audit perspective when integrating generative AI technologies.",
    long_p1: "An analytical and highly tenacious Software Developer specializing in building high-ROI data pipelines and search applications. Proven ability to architect deterministic data frameworks while maintaining a rigorous, critical audit perspective when integrating generative AI technologies. Focuses heavily on protecting system runtime stability, capturing edge-case anomalies, and collaborating efficiently across multi-file architectures to deliver maximum cost-savings and platform resilience.",
    long_p2: "Drawing on my background in spatial computing, data, and performance, I design workflows and search applications that emphasize predictability and absolute data integrity. I prioritize rigorous quality control, deterministic gatekeeping, and system safety over black-box automated outputs.",
    long: "An analytical and highly tenacious Software Developer specializing in building high-ROI data pipelines and search applications. Proven ability to architect deterministic data frameworks while maintaining a rigorous, critical audit perspective when integrating generative AI technologies. Focuses heavily on protecting system runtime stability, capturing edge-case anomalies, and collaborating efficiently across multi-file architectures to deliver maximum cost-savings and platform resilience."
  },
  services: [
    {
      id: "ai-prototyping",
      title: "AI Prototyping",
      description: "Building functional prototypes and proof-of-concepts to explore technical feasibility, user experience, and practical use cases."
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      description: "Identifying repetitive tasks and process bottlenecks, then building AI-assisted workflows to reduce manual effort and improve consistency."
    },
    {
      id: "conversational-ux",
      title: "Conversational Interfaces",
      description: "Designing and testing chat-based or language-driven interfaces that are clear, usable, and grounded in real tasks."
    },
    {
      id: "applied-experimentation",
      title: "Applied AI Research",
      description: "Evaluating current models, tools, and prompting approaches to determine what is useful, realistic, and worth implementing."
    }
  ],
  projects: [
    {
      id: "intelligent-document-search",
      title: "Intelligent Document Search Engine (Independent Production Architecture)",
      summary: "A live Retrieval-Augmented Generation (RAG) platform built to ground LLM focus fields directly within custom business text assets, eliminating corporate information discovery lag. Developed with end-to-end structural ownership to demonstrate absolute mastery over deterministic software design and data architecture.",
      type: "Applied AI",
      role: "Lead Architect / Independent Developer",
      outcome: "Built a prompt constraint layer forcing the backend engine to reference exclusively uploaded facts, mitigating generic AI model hallucinations and saving immense operational lookup times.",
      status: "Live Demo",
      featured: true,
      assetType: "Live RAG Platform & Flowchart",
      liveUrl: "https://luke-frohling-document-search.streamlit.app/",
      githubUrl: "https://github.com/lfrohling/ai-document-search",
      technologies: ["Python 3.12", "google-genai (gemini-3.5-flash)", "Streamlit", "Mermaid.js Flowchart Mapping"],
      architecture: [
        "Context Window Grounding Layers",
        "Atomic Form State Isolation Architecture",
        "Fault-Tolerant Recruiter Safety Rails Switch",
        "Decoupled st.secrets Credentials Integration"
      ],
      businessValue: "Drastically reduces operational overhead and manual lookup times through robust, verified retrieval systems grounded exclusively in verified business facts."
    },
    {
      id: "ai-autonomous-etl-agent",
      title: "AI Autonomous ETL Agent (Advanced Schema Validation Prototype)",
      summary: "An innovative, complex R&D exploration demonstrating advanced collaborative problem-solving, deep architectural tenacity, and rigid quality assurance. Built to automate high-volume incoming vendor streams while maintaining a critical audit perspective over generative model actions.",
      type: "Applied AI",
      role: "Systems Integration & Verification Engineer (AI-Human Co-Pilot Development)",
      outcome: "Introduced deterministic Pydantic validation gatekeepers and sandboxed quota conservation models, protecting database integrity from erratic model assumptions and reducing API cost footprints.",
      status: "Active Prototype",
      featured: true,
      assetType: "R&D Validation Sandbox & Active Terminal",
      liveUrl: "https://luke-frohling-etl-validation.streamlit.app/",
      githubUrl: "https://github.com/lfrohling/AI-Autonomous-ETL-Agent",
      technologies: ["Python 3.12", "Pydantic Schema Gatekeepers", "FastAPI Data Streams", "Gemini 3.5 Core", "Docker Sandbox"],
      architecture: [
        "Incoming High-Volume Vendor Streams",
        "Pydantic Strict Typings & Deterministic Gatekeepers",
        "Model Output Validation & Resolution Layer",
        "Sandboxed API Quota Conservation Manager"
      ],
      businessValue: "Protects corporate data integrity, automates high-volume incoming vendor streams, and builds sandboxed quota conservation models to save massive operational API costs."
    },
    {
      id: "ai-support-agent",
      title: "AI Customer Support Triage & Lead Routing Agent",
      summary: "A live, production-grade microservice that analyzes incoming customer inquiries or emails, extracts structured operational metadata (sentiment, priority, churn risk, routing department), and auto-drafts contextualized executive responses in real time.",
      type: "Workflow Automation",
      role: "AI Engineer & Prototype Developer",
      outcome: "Eliminates manual ticket triage overhead, converts unstructured messages into validated JSON payloads, and includes production guardrails like form state isolation and a cached recruiter simulator mode.",
      status: "Live Demo",
      featured: true,
      assetType: "Live Microservice & Architecture",
      liveUrl: "https://luke-frohling-ai-support-agent.streamlit.app/",
      githubUrl: "https://github.com/lfrohling/ai-support-agent",
      technologies: ["Python 3.12", "Google Gemini API (gemini-3.8-flash)", "Streamlit", "Structured JSON Schema"],
      architecture: [
        "Incoming Inquiries / Emails",
        "Streamlit UI with Form State Isolation",
        "Gemini API (Strict JSON Schema Framing)",
        "Triage Metrics & Real-Time Executive Response"
      ],
      businessValue: "Reduces response latency, automatically flags churn risks or urgent escalation items for immediate intervention, and routes requests directly to Billing, Tech Support, or Sales."
    },
    {
      id: "automated-production-pipeline",
      title: "Automated VR Production Pipeline",
      summary: "A prototype workflow for organizing and tagging complex 3D asset data to support faster review and preparation for spatial and VR projects.",
      type: "Workflow Automation",
      role: "Prototype Designer / Developer",
      outcome: "Built to reduce manual asset handling and improve consistency in early-stage content preparation.",
      status: "Prototype",
      featured: false,
      assetType: "System Architecture Diagram"
    },
    {
      id: "conversational-analyst",
      title: "Conversational Analyst",
      summary: "A natural-language interface for exploring structured data and supporting faster, more accessible analysis workflows.",
      type: "Conversational Interfaces",
      role: "Developer",
      outcome: "Built to help non-technical users explore data more easily and reduce reliance on manual query writing.",
      status: "Prototype",
      featured: false,
      assetType: "Interactive Interface & UI Mockup"
    },
    {
      id: "legal-document-synthesizer",
      title: "Legal Document Synthesizer",
      summary: "A retrieval-assisted document review prototype designed to extract and summarize key information from dense commercial documents.",
      type: "Document Analysis",
      role: "AI Prototype Developer",
      outcome: "Built to support faster first-pass review of long documents and highlight clauses for closer human inspection.",
      status: "Prototype",
      featured: false,
      assetType: "RAG Evaluation Dashboard"
    }
  ] as Project[],
  credentialsArchive: {
    skills: [
      "Deterministic Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Pydantic Strict Typing & Schema Gatekeepers",
      "API Rate-Limiting & Token Quota Management",
      "Docker Environment Sandboxing",
      "Workflow & Lead Routing Automation",
      "Session State Isolation & Submit Controls",
      "Decoupled Secrets Management (st.secrets & Vaults)"
    ],
    softwareCapabilities: [
      "Python 3.12 (Advanced)",
      "FastAPI & RESTful Microservices",
      "Streamlit Application Framework",
      "Pydantic Validation Engines",
      "TypeScript & React (Modern SPA)",
      "Tailwind CSS & Responsive Layouts",
      "Docker & Containerized Microservices",
      "Git, Linux & Serverless Cloud Deployments"
    ],
    aiFrameworksUsed: [
      "gemini-3.5-flash (Low-latency production & RAG grounding)",
      "gemini-3.8-flash (Advanced multimodal & reasoning extraction)",
      "@google/genai & google-genai Python Interactions SDK",
      "Structured JSON Schema Framing",
      "Context Window Grounding Layers"
    ],
    educationAndAccreditations: [
      "Accredited Network Engineer",
      "TESOL / TEFL Certified Educator (International)",
      "Journalism, Broadcast & News Media Production",
      "Game Development, Virtual Reality & Spatial Computing"
    ],
    leadershipAndExperience: [
      "Manager — Ready Team One VR Studio & Arena (Perth, Australia)",
      "Founder & Technical Director — DigInfo Video News Production (Tokyo, Japan)",
      "Digital Systems & SEO Engineering Consultant"
    ]
  },
  testimonials: [
    {
      id: "t1",
      quote: "Working with Luke Frohling is shear pleasure. Punctual, creative and knowledgable. Understands well internet marketing, video production and delievers high value product on time.",
      author: "Elena Ornig",
      role: "Curious student of life",
      source: "LinkedIn"
    }
  ]
};

// Data cleaning utility to programmatically strip any date patterns or timestamps from imported content
export function cleanContentData(text: string): string {
  if (!text) return text;
  return text
    .replace(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}/gi, '')
    .replace(/\b\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}\b/g, '')
    .replace(/\s*\(\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*\d{1,2},?\s*\d{4}\s*\)/gi, '')
    .replace(/\s*—\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*\d{1,2},?\s*\d{4}/gi, '')
    .replace(/\s*\((?:19|20)\d{2}\)/g, (match) => {
      // Keep year if it's part of copyright or general metadata, but clean if adjacent to recommendation/date keywords
      return match;
    })
    .replace(/\s+/g, ' ')
    .trim();
}

