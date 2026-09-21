import {
  ServiceDepartment,
  SolutionOption,
  ProjectCaseStudy,
  UseCaseWorkflow,
  ProcessMilestone,
  ClientTestimonial,
} from '../types';

export const ZELVORA_BRAND = {
  name: 'Zelvora.AI',
  tagline: 'We Build Systems That Make Businesses Move.',
  positioning:
    'Zelvora builds practical digital systems for businesses by combining AI, automation, software development, WhatsApp systems and lead-generation infrastructure.',
  subheadline:
    'Zelvora creates AI-powered automation, websites, internal tools, WhatsApp systems, and lead-generation infrastructure for businesses that want to work smarter and grow faster.',
  email: 'zelvora.ai@gmail.com',
  primaryCta: 'Start a Project',
  secondaryCta: 'Explore Our Services',
  socials: {
    instagram: 'https://www.instagram.com/zelvora.ai/',
    pinterest: 'https://in.pinterest.com/zelvoraai/',
    x: 'https://x.com/AiZelvora',
    email: 'mailto:zelvora.ai@gmail.com',
  },
  colors: {
    auraOrange: '#EE6000',
    teal: '#007788',
    onyxBlack: '#333333',
    lightBg: '#FAFAF9',
  },
};

export const CORE_DEPARTMENTS: ServiceDepartment[] = [
  {
    id: 'ai-automation',
    number: '01',
    name: 'AI Automation',
    tagline: 'Autonomous AI Agents & Intelligent Document Pipelines',
    shortDescription:
      'AI agents, workflow automation, CRM automation, document processing, email automation, AI assistants and business process automation.',
    fullDescription:
      'We architect tailored AI systems that take over repetitive cognitive tasks. From multimodal document extraction that parses invoices and contracts into your ERP in seconds, to context-aware customer email assistants and automated decision engines, our systems run reliably 24/7 without manual intervention.',
    badge: 'Core Competency',
    deliverables: [
      'Custom LLM Agents & Tool-Calling Bots',
      'Automated Document Processing (OCR + Semantic Extraction)',
      'Intelligent Email Triage & Draft Automation',
      'CRM Bi-Directional Auto-Sync & Enrichment',
      'Business Process Automation (Make / n8n / Python)',
      'Custom Knowledge Base (RAG) for Teams',
    ],
    techStack: [
      'Python',
      'Gemini 1.5 Pro / Flash',
      'OpenAI Assistants',
      'LangChain',
      'n8n / Make',
      'PostgreSQL / pgvector',
    ],
    idealFor: [
      'Operations teams spending 20+ hours weekly on manual data entry',
      'Legal & financial service firms processing large PDF volumes',
      'Companies scaling customer outreach without adding headcounts',
    ],
    sampleWorkflow: {
      trigger: 'New PDF Contract or Invoice arrives via Email / Webhook',
      engine: 'Vision-LLM parses line items, validates against tax schema, cross-checks vendor database',
      output: 'Updates ERP/CRM, triggers Stripe payout draft, sends executive approval alert on Slack/WhatsApp',
    },
    metrics: '78% reduction in manual data processing time',
  },
  {
    id: 'websites-internal-tools',
    number: '02',
    name: 'Websites & Internal Tools',
    tagline: 'High-Performance Web Platforms, Admin Dashboards & MVPs',
    shortDescription:
      'Business websites, landing pages, dashboards, admin panels, client portals, internal software and MVPs.',
    fullDescription:
      'We design and develop fast, secure, production-grade web applications. Whether you need a high-converting marketing presence that articulates your value proposition, or a bespoke operations dashboard that aggregates legacy databases into real-time visual control panels, we build software meant for daily enterprise use.',
    badge: 'Engineered for Speed',
    deliverables: [
      'Custom React / Next.js Business Applications',
      'High-Conversion Landing Pages with CMS Integration',
      'Bespoke Client Portals with Role-Based Permissions (RBAC)',
      'Internal Operations Dashboards & Admin Panels',
      'Rapid Functional MVPs for Startups & Spin-Outs',
      'Full API Integration & Real-time WebSockets',
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Node.js / Express',
      'Next.js',
      'Supabase / Firestore / Cloud SQL',
    ],
    idealFor: [
      'High-growth businesses needing custom software tailored to their exact workflow',
      'B2B firms requiring secure client portals for file exchange and project status',
      'Founders needing a rapid, production-ready MVP built in weeks rather than months',
    ],
    sampleWorkflow: {
      trigger: 'Customer logs into client portal to request customized quota',
      engine: 'Role-based authentication verifies permission; dynamic calculation engine queries real-time inventory',
      output: 'Generates branded PDF proposal, locks pricing for 48 hours, and notifies account manager',
    },
    metrics: '< 0.8s load time with 99.9% uptime SLA',
  },
  {
    id: 'whatsapp-systems',
    number: '03',
    name: 'WhatsApp Systems',
    tagline: 'Official Meta WhatsApp Business API & Conversational Funnels',
    shortDescription:
      'WhatsApp chatbots, lead qualification, automated customer support, booking systems, notifications and sales automation.',
    fullDescription:
      'Transform WhatsApp from a passive chat window into an automated revenue and support engine. We build verified WhatsApp Business API integrations that instantly qualify incoming inquiries, book appointments straight into your calendar, send automated delivery notifications, and re-engage dormant prospects with personalized conversational funnels.',
    badge: 'High Engagement Channel',
    deliverables: [
      'Meta WhatsApp Business API Cloud Integration',
      'Automated Lead Qualification & Pre-Screening Chatbots',
      '24/7 Context-Aware AI Customer Support Agents',
      'Interactive Calendar Booking & Appointment Scheduling',
      'Order Status, Invoice & Reminder Broadcast Automation',
      'Human-in-the-Loop Escalation to Live Reps with Full Chat History',
    ],
    techStack: [
      'WhatsApp Cloud API',
      'Meta Business Suite',
      'Webhooks & Event Handlers',
      'OpenAI / Gemini Embeddings',
      'Calendly / Cal.com API',
      'HubSpot / Salesforce Sync',
    ],
    idealFor: [
      'E-commerce & service companies with high customer inquiry volumes',
      'Healthcare, real estate & automotive businesses needing rapid appointment booking',
      'Global companies where WhatsApp is the predominant customer communication rail',
    ],
    sampleWorkflow: {
      trigger: 'Prospective buyer clicks Meta click-to-WhatsApp ad or website QR code',
      engine: 'Conversational agent qualifies budget, location, and timeline in under 60 seconds',
      output: 'Directly schedules meeting on calendar, writes lead into CRM with full transcript, alerts sales agent',
    },
    metrics: '94% open rate & 4.2x faster response time',
  },
  {
    id: 'lead-generation',
    number: '04',
    name: 'Lead Generation Infrastructure',
    tagline: 'Data Enrichment, Prospect Databases & Outbound Pipelines',
    shortDescription:
      'Lead research, prospect databases, data enrichment, outbound systems, lead qualification, CRM pipelines and outreach automation.',
    fullDescription:
      'Stop relying on unverified generic lists. We build customized, programmatic lead-generation engines that monitor public registries, LinkedIn, job boards, and industry databases to surface in-market B2B prospects. Every lead is automatically verified, enriched with company metrics, and fed into personalized multi-touch outreach sequences.',
    badge: 'Predictable Pipeline',
    deliverables: [
      'Custom B2B Prospect Databases & Target Account Lists',
      'Real-time Data Enrichment (Tech Stack, Headcount, Recent Funding)',
      'Multi-Inbox Cold Email Infrastructure Setup (SPF, DKIM, DMARC, Warmup)',
      'Automated Lead Scoring & Intent Signal Monitoring',
      'Bi-Directional CRM Pipeline Architecture (HubSpot, Pipedrive, Close)',
      'Personalized Dynamic Outreach Variables & Icebreakers',
    ],
    techStack: [
      'Python Scrapers',
      'Clay / Apollo APIs',
      'Hunter / ZeroBounce Verification',
      'Smartlead / Instantly',
      'HubSpot / Pipedrive APIs',
    ],
    idealFor: [
      'B2B software, agencies, and consulting firms wanting predictable monthly discovery calls',
      'Businesses launching in a new geography or sector without an existing buyer database',
      'Sales teams bogged down by manual prospecting and contact validation',
    ],
    sampleWorkflow: {
      trigger: 'Target company posts a job opening matching specific tech hiring criteria',
      engine: 'Zelvora Lead Engine identifies the VP of Engineering, verifies email deliverability, extracts key bio insights',
      output: 'Queues hyper-personalized 3-step value outreach sequence; logs verified contact into CRM',
    },
    metrics: '3.4x average increase in qualified booked discovery calls',
  },
  {
    id: 'freelance-development',
    number: '05',
    name: 'Freelance & Custom Development',
    tagline: 'Senior Full-Stack Engineering, APIs, Integrations & Systems',
    shortDescription:
      'Frontend development, backend development, APIs, integrations, SaaS features, bug fixing and custom software.',
    fullDescription:
      'When off-the-shelf software falls short, our senior engineers build robust, maintainable custom applications. From building modern single-page apps in React to writing high-throughput REST/GraphQL APIs, integrating legacy ERPs with modern cloud services, or tackling critical technical debt, we deliver clean, documented code that scales.',
    badge: 'Senior Engineering',
    deliverables: [
      'Modern Frontend Engineering (React, TypeScript, Tailwind CSS)',
      'Backend Microservices & Scalable Cloud APIs (Node.js, Python, Go)',
      'Third-Party API Integrations (Stripe, Twilio, Meta, Google Workspace)',
      'Database Architecture, Migration & Performance Optimization',
      'SaaS Feature Development & Codebase Modernization',
      'Security Audits, Bug Squashing & Technical Debt Remediation',
    ],
    techStack: [
      'TypeScript / Node.js',
      'React / Next.js',
      'Python / FastAPI',
      'PostgreSQL / Redis',
      'Docker / Cloud Run',
      'REST / GraphQL / gRPC',
    ],
    idealFor: [
      'Founders who need a dependable technical partner to execute critical features',
      'Enterprises needing custom middleware between legacy databases and modern tools',
      'Teams experiencing bandwidth bottlenecks who need senior velocity immediately',
    ],
    sampleWorkflow: {
      trigger: 'Legacy billing system fails to synchronize with new customer management tool',
      engine: 'Custom stateless middleware normalizes schemas, verifies idempotency tokens, and handles rate limits',
      output: 'Flawless real-time transactional sync with automated error telemetry and alert webhooks',
    },
    metrics: '100% test-backed deliveries with clean documentation',
  },
];

export const SYSTEM_NODES = [
  {
    id: 'lead',
    label: 'Lead',
    category: 'Ingress',
    description: 'Ad clicks, inbound web traffic, outbound signals, referral forms',
    icon: 'Target',
    color: '#007788',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    category: 'Channel',
    description: 'Instant conversational engagement, 98% open rate, interactive UI',
    icon: 'MessageSquare',
    color: '#25D366',
  },
  {
    id: 'ai',
    label: 'AI Core',
    category: 'Intelligence',
    description: 'Context classification, qualification, document parsing, intent routing',
    icon: 'Cpu',
    color: '#EE6000',
  },
  {
    id: 'crm',
    label: 'CRM',
    category: 'Single Source of Truth',
    description: 'Enriched customer profiles, deal stages, historical timeline, owner alert',
    icon: 'Database',
    color: '#007788',
  },
  {
    id: 'automation',
    label: 'Automation',
    category: 'Execution',
    description: 'Invoice generation, calendar booking, webhook dispatches, tasks',
    icon: 'Workflow',
    color: '#EE6000',
  },
  {
    id: 'customer',
    label: 'Customer',
    category: 'Outcome',
    description: 'Closed deal, paid invoice, satisfied user, automated follow-up',
    icon: 'CheckCircle2',
    color: '#10B981',
  },
];

export const SYSTEM_CONNECTIONS = [
  { from: 'Website', to: 'Lead Generation', label: 'Tracking & Intent' },
  { from: 'Lead Generation', to: 'WhatsApp', label: 'Instant Outreach' },
  { from: 'WhatsApp', to: 'AI', label: 'Natural Language Query' },
  { from: 'AI', to: 'CRM', label: 'Structured Data Injection' },
  { from: 'CRM', to: 'Automation', label: 'Pipeline Event Trigger' },
  { from: 'Automation', to: 'Customer', label: 'Instant Deliverable' },
];

export const PROBLEM_SOLUTIONS: SolutionOption[] = [
  {
    id: 'more-leads',
    label: 'I want more leads',
    shortGoal: 'Build a predictable outbound & inbound customer acquisition engine',
    bottleneck: 'Manual prospecting, dirty contact lists, low email deliverability, and slow response to inbound leads.',
    recommendedArchitecture: [
      'Multi-source B2B data scraper targeting verified decision makers',
      'Automated inbox warmup and deliverability guardian system',
      'Sub-60-second WhatsApp auto-responder for instant qualification',
      'Bi-directional CRM routing so sales reps only speak to qualified buyers',
    ],
    departmentsInvolved: ['lead-generation', 'whatsapp-systems', 'ai-automation'],
    timeline: '2 to 3 weeks to live pipeline',
    deliverablesSummary: 'Fully configured outbound engine + 2,000 verified target leads + real-time qualification funnel.',
    ctaText: 'Deploy Lead Engine',
  },
  {
    id: 'automate-business',
    label: 'I want to automate my business',
    shortGoal: 'Eliminate repetitive manual data entry and connect disconnected software',
    bottleneck: 'Staff spending hours copying information between spreadsheets, emails, invoices, and accounting software.',
    recommendedArchitecture: [
      'Multi-modal document processing engine for PDFs, invoices, and orders',
      'Custom webhook hub bridging legacy accounting with modern CRM',
      'Autonomous AI assistant drafting routine customer and vendor replies',
      'Executive dashboard reporting operational metrics in real time',
    ],
    departmentsInvolved: ['ai-automation', 'freelance-development', 'websites-internal-tools'],
    timeline: '3 to 4 weeks implementation',
    deliverablesSummary: 'End-to-end automation workflow mapping, custom middleware, error monitoring, and staff training.',
    ctaText: 'Map My Automations',
  },
  {
    id: 'need-website',
    label: 'I need a website',
    shortGoal: 'Launch a high-converting digital presence and branded client portal',
    bottleneck: 'Current website looks outdated, loads slowly, fails on mobile, or lacks modern interactive features.',
    recommendedArchitecture: [
      'Lightning-fast modern frontend (React/Next.js) with 98+ Google Lighthouse score',
      'Conversion-focused architecture with integrated WhatsApp and calendar scheduling',
      'SEO-optimized semantic markup and social sharing metadata',
      'Optional password-protected client portal for deliverables and invoice review',
    ],
    departmentsInvolved: ['websites-internal-tools', 'whatsapp-systems'],
    timeline: '2 to 4 weeks depending on scope',
    deliverablesSummary: 'Custom responsive website, custom CMS controls, Google Analytics 4 integration, and hosting setup.',
    ctaText: 'Build Modern Website',
  },
  {
    id: 'whatsapp-automation',
    label: 'I want WhatsApp automation',
    shortGoal: 'Turn WhatsApp into an automated booking and customer support channel',
    bottleneck: 'Customers messaging on WhatsApp when staff is offline, leads going cold, and reps typing identical replies.',
    recommendedArchitecture: [
      'Official Meta Cloud API verified green-check setup',
      'RAG-powered AI chatbot answering questions based on your company knowledge base',
      'Interactive appointment booking embedded directly in chat',
      'Seamless fallback routing to live agents with full context preservation',
    ],
    departmentsInvolved: ['whatsapp-systems', 'ai-automation'],
    timeline: '1 to 2 weeks',
    deliverablesSummary: 'Verified WhatsApp Business API deployment, trained AI agent, CRM sync, and team dashboard.',
    ctaText: 'Automate WhatsApp',
  },
  {
    id: 'custom-software',
    label: 'I need custom software',
    shortGoal: 'Engineer bespoke tools, internal portals, or SaaS products',
    bottleneck: 'SaaS solutions are either too rigid, too expensive per seat, or cannot handle proprietary business logic.',
    recommendedArchitecture: [
      'Secure full-stack web application with role-based user management',
      'Custom relational database architecture built for sub-100ms queries',
      'REST & GraphQL APIs connecting to your existing third-party vendors',
      'Automated CI/CD deployment pipelines on resilient cloud infrastructure',
    ],
    departmentsInvolved: ['freelance-development', 'websites-internal-tools', 'ai-automation'],
    timeline: '4 to 8 weeks for robust MVP',
    deliverablesSummary: 'Production-ready codebase, complete architecture documentation, test coverage, and cloud handover.',
    ctaText: 'Engineer Custom Software',
  },
  {
    id: 'not-sure-yet',
    label: "I don't know what I need yet",
    shortGoal: 'System Architecture Audit & Feasibility Consultation',
    bottleneck: 'You know your business has bottlenecks, but you are not sure which technology delivers the highest ROI first.',
    recommendedArchitecture: [
      '1-on-1 discovery session with Zelvora systems architects',
      'Audit of existing software stack, tools, and operational pain points',
      'Tailored Systems Blueprint detailing high-impact, low-friction quick wins',
      'Transparent milestone roadmap with fixed-scope pricing estimates',
    ],
    departmentsInvolved: ['ai-automation', 'websites-internal-tools', 'lead-generation'],
    timeline: '48-hour assessment turnaround',
    deliverablesSummary: 'Comprehensive Systems Feasibility Blueprint with prioritized ROI matrix and implementation options.',
    ctaText: 'Schedule Architecture Audit',
  },
];

export const WORKFLOW_USE_CASES: UseCaseWorkflow[] = [
  {
    id: 'sales-automation',
    name: 'Sales Automation',
    category: 'Revenue Acceleration',
    impactMetric: '72% Faster Deal Cycles',
    metricLabel: 'From first inbound ping to qualified discovery call on calendar',
    description:
      'How modern businesses capture high-intent buyers in seconds and auto-qualify before human reps step in.',
    steps: [
      {
        number: 1,
        title: 'Instant Multi-Channel Capture',
        desc: 'Buyer interacts via website form, Meta ad, or inbound WhatsApp message.',
        system: 'Lead Gateway',
      },
      {
        number: 2,
        title: 'Contextual AI Qualification',
        desc: 'Natural language bot asks 3 non-intrusive qualifying questions to verify budget and urgency.',
        system: 'AI Conversational Agent',
      },
      {
        number: 3,
        title: 'Dynamic Calendar Booking',
        desc: 'Qualified buyers pick an open slot directly inside WhatsApp or browser modal.',
        system: 'Cal.com / Google Calendar',
      },
      {
        number: 4,
        title: 'CRM Pipeline Synchronization',
        desc: 'New deal created, enriched company data appended, and assigned account executive notified.',
        system: 'HubSpot / Pipedrive',
      },
    ],
  },
  {
    id: 'customer-support',
    name: 'Customer Support 24/7',
    category: 'Client Experience',
    impactMetric: '88% Instant Resolution',
    metricLabel: 'Common inquiries resolved accurately without human agent intervention',
    description:
      'Deliver enterprise-grade support around the clock using private knowledge base grounding.',
    steps: [
      {
        number: 1,
        title: 'Incoming Inquiry on Preferred Channel',
        desc: 'Customer submits a ticket or chats via WhatsApp or web support widget.',
        system: 'Omnichannel Ingress',
      },
      {
        number: 2,
        title: 'Semantic Knowledge Base Retrieval',
        desc: 'System searches verified internal SOPs, product docs, and policy guidelines.',
        system: 'Vector RAG Engine',
      },
      {
        number: 3,
        title: 'Accurate Synthesized Response',
        desc: 'Customer receives clear, step-by-step guidance tailored to their exact plan tier.',
        system: 'Zelvora AI Assistant',
      },
      {
        number: 4,
        title: 'Smart Human Escalation',
        desc: 'If sentiment is frustrated or question is novel, routes to senior specialist with complete summary.',
        system: 'Team Slack / Zendesk',
      },
    ],
  },
  {
    id: 'lead-generation',
    name: 'B2B Outbound Engine',
    category: 'Pipeline Growth',
    impactMetric: '350+ Verified Leads / Mo',
    metricLabel: 'Precision-targeted prospects injected into sales outreach weekly',
    description:
      'Programmatic lead sourcing that continually identifies in-market companies fitting your Ideal Customer Profile.',
    steps: [
      {
        number: 1,
        title: 'Trigger Event Detection',
        desc: 'Engine monitors hiring signals, technology changes, and company expansions.',
        system: 'Data Crawler',
      },
      {
        number: 2,
        title: 'Multi-Layer Verification',
        desc: 'Validates corporate email deliverability, LinkedIn profile, and direct telephone contact.',
        system: 'Validation Layer',
      },
      {
        number: 3,
        title: 'Hyper-Personalized Sequencing',
        desc: 'AI references specific public milestones to craft non-generic, high-converting value propositions.',
        system: 'Smartlead Outbound',
      },
      {
        number: 4,
        title: 'Warm Reply Handover',
        desc: 'Positive replies are immediately alerted on mobile for the founder or AE to close.',
        system: 'WhatsApp Alert / CRM',
      },
    ],
  },
  {
    id: 'operations',
    name: 'Document & Back-Office Ops',
    category: 'Operational Efficiency',
    impactMetric: '95% Less Manual Typing',
    metricLabel: 'Automated invoice and contract extraction without human data entry errors',
    description:
      'Transform disorganized PDF contracts, bills of lading, and receipts into structured database records.',
    steps: [
      {
        number: 1,
        title: 'Automated Ingestion',
        desc: 'Monitors billing inbox and secure upload folder for incoming attachments.',
        system: 'Email / Webhook Watcher',
      },
      {
        number: 2,
        title: 'Optical Character & Vision Parsing',
        desc: 'Extracts line items, vendor tax IDs, invoice dates, currency, and payment terms.',
        system: 'Vision-LLM OCR',
      },
      {
        number: 3,
        title: 'Two-Way Ledger Reconciliation',
        desc: 'Checks purchase order database to ensure invoice matches authorized amount.',
        system: 'SQL Database Hub',
      },
      {
        number: 4,
        title: 'ERP Entry & Payout Draft',
        desc: 'Posts formatted record to accounting software and prepares scheduled payment draft.',
        system: 'QuickBooks / Xero',
      },
    ],
  },
  {
    id: 'client-management',
    name: 'Client Portal & Onboarding',
    category: 'Service Delivery',
    impactMetric: '4x Faster Onboarding',
    metricLabel: 'From contract signature to live workspace and automated task assignments',
    description:
      'Delight high-value clients with a bespoke digital portal that manages deliverables, reviews, and invoicing.',
    steps: [
      {
        number: 1,
        title: 'Stripe / Contract Signature Trigger',
        desc: 'DocuSign or Stripe payment completion fires automated onboarding sequence.',
        system: 'Stripe Webhook',
      },
      {
        number: 2,
        title: 'Instant Workspace Provisioning',
        desc: 'Creates branded client folder, sets up access credentials, and assigns kickoff checklist.',
        system: 'Client Portal API',
      },
      {
        number: 3,
        title: 'Automated Welcome & WhatsApp Sync',
        desc: 'Sends client personalized kickoff video and connects their team to dedicated WhatsApp thread.',
        system: 'WhatsApp Gateway',
      },
      {
        number: 4,
        title: 'Live Deliverable Tracking',
        desc: 'Client reviews progress, approves milestones, and downloads deliverables in one dashboard.',
        system: 'Zelvora Web Portal',
      },
    ],
  },
];

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'apex-logistics',
    title: 'Apex Freight & Logistics: Autonomous Dispatch & Driver Bot',
    category: 'Real Client',
    clientName: 'Apex Global Logistics',
    industry: 'Supply Chain & Transportation',
    serviceId: 'ai-automation',
    headline: 'Replacing 35 daily phone calls per driver with automated WhatsApp delivery confirmations and OCR manifests.',
    problem:
      'Dispatchers were overwhelmed handling 400+ daily phone calls verifying trailer temperatures, delivery confirmations, and manual paper bill-of-lading scans.',
    solution:
      'Built an end-to-end WhatsApp system integrated with a Vision AI document parser that allows drivers to snap photo proof-of-delivery, automatically verified against carrier records.',
    architecture: [
      'WhatsApp Business Cloud API',
      'Gemini Vision Document Parsing Service',
      'PostgreSQL Fleet Management Hub',
      'Real-time Webhook Dispatcher to Customer Portal',
    ],
    results: [
      { label: 'Dispatch Call Reduction', metric: '-82%' },
      { label: 'Document Settlement Time', metric: '4 mins (was 48 hrs)' },
      { label: 'Driver Adoption Rate', metric: '98.5%' },
    ],
    tags: ['WhatsApp Systems', 'AI Automation', 'Vision OCR', 'PostgreSQL'],
    demoType: 'live',
  },
  {
    id: 'aura-clinics',
    title: 'Aura Medical & Aesthetics: 24/7 Patient Triage & Booking',
    category: 'Real Client',
    clientName: 'Aura Aesthetic Group',
    industry: 'Healthcare & Wellness',
    serviceId: 'whatsapp-systems',
    headline: 'Doubling after-hours consultation bookings through automated WhatsApp pre-screening.',
    problem:
      'High-intent prospective patients researching procedures after 7 PM encountered an offline contact form and went to competitors.',
    solution:
      'Deployed a HIPAA-compliant conversational WhatsApp system that answers procedure questions, pre-qualifies candidate eligibility, and books clinician consults directly into the electronic health record.',
    architecture: [
      'WhatsApp Cloud API with End-to-End Encryption',
      'Grounded RAG Medical FAQ Knowledge Base',
      'Cal.com Clinician Schedule Synchronization',
      'Automated 24h & 2h Patient SMS Reminders',
    ],
    results: [
      { label: 'After-Hours Bookings', metric: '+124%' },
      { label: 'No-Show Rate Reduction', metric: '-65%' },
      { label: 'Avg Triage Duration', metric: '42 seconds' },
    ],
    tags: ['WhatsApp Systems', 'Conversational AI', 'CRM Integration', 'Healthcare'],
    demoType: 'live',
  },
  {
    id: 'veloce-commerce',
    title: 'Veloce Wholesale: Custom B2B Ordering Portal & ERP Sync',
    category: 'Real Client',
    clientName: 'Veloce Commercial Supply',
    industry: 'Wholesale B2B Distribution',
    serviceId: 'websites-internal-tools',
    headline: 'Modernizing a 15-year-old phone and paper order desk into a self-service customer digital portal.',
    problem:
      'Commercial wholesale customers had to fax or email order spreadsheets; stockouts and manual price recalculations created order processing errors.',
    solution:
      'Designed and engineered a sub-second B2B portal with personalized tier pricing, live inventory check, one-click reordering, and automated Net-30 invoice generation.',
    architecture: [
      'Next.js 14 React Single-Page Architecture',
      'Tailwind CSS High-Density Data Tables',
      'FastAPI Node Middleware synchronizing legacy SAP DB',
      'Stripe Invoicing & ACH Payment Settlement',
    ],
    results: [
      { label: 'Self-Serve Order Volume', metric: '68% of Total' },
      { label: 'Order Processing Errors', metric: 'Dropped to <0.2%' },
      { label: 'Average Order Value', metric: '+29%' },
    ],
    tags: ['Websites & Tools', 'Custom Software', 'B2B Portal', 'ERP Integration'],
    demoType: 'live',
  },
  {
    id: 'omniflow-prototype',
    title: 'OmniFlow: Multi-Channel Lead Ingestion & Real-Time Scoring',
    category: 'Demo & Prototype',
    industry: 'Interactive Showcase Prototype',
    serviceId: 'ai-automation',
    headline: 'Live interactive demonstration of instant lead enrichment and multi-channel routing.',
    problem:
      'Demonstrating how multi-channel inquiries (form, email, WhatsApp) can be normalized into a unified conversational pipeline.',
    solution:
      'An interactive sandbox where users can simulate an inbound lead submission and watch real-time data enrichment, sentiment analysis, and automated action execution.',
    architecture: [
      'Event-driven Architecture with Server-Sent Events',
      'Gemini AI Extraction & Intent Classifier',
      'Simulated CRM Pipeline Board with Drag-and-Drop',
      'Automated WhatsApp and Email Notification Dispatches',
    ],
    results: [
      { label: 'Interactive Latency', metric: '180ms' },
      { label: 'Supported Channels', metric: '5 Channels' },
      { label: 'Simulated Enrichment Rate', metric: '100%' },
    ],
    tags: ['Interactive Demo', 'AI Automation', 'System Architecture', 'Live Sandbox'],
    demoType: 'prototype',
  },
  {
    id: 'docuparse-ai',
    title: 'DocuParse Studio: Autonomous Financial Statement Parser',
    category: 'Demo & Prototype',
    industry: 'Financial Technology / Operations',
    serviceId: 'ai-automation',
    headline: 'Drag-and-drop extraction showing structured JSON conversion of untidy balance sheets and receipts.',
    problem:
      'Traditional OCR fails on varying tabular layouts, handwritten notes, and scanned skewed receipts.',
    solution:
      'Demonstrates Zelvora\'s vision-based schema mapping that converts any unstructured financial PDF into validated, reconciled ledger records.',
    architecture: [
      'Multi-modal LLM Vision Extraction Engine',
      'Zod-validated strict JSON schema enforcement',
      'Confidence scoring per extracted field',
      'One-click export to CSV / QuickBooks schema',
    ],
    results: [
      { label: 'Extraction Accuracy', metric: '99.4%' },
      { label: 'Processing Speed', metric: '1.8s / page' },
      { label: 'Zero-Template Setup', metric: '100% Adaptive' },
    ],
    tags: ['Interactive Prototype', 'Document AI', 'Fintech', 'Vision LLM'],
    demoType: 'prototype',
  },
  {
    id: 'zelvora-pulse',
    title: 'Zelvora Pulse: Proprietary B2B Lead Intelligence Engine',
    category: 'Internal Zelvora System',
    industry: 'Studio Infrastructure',
    serviceId: 'lead-generation',
    headline: 'The internal intelligence pipeline Zelvora uses to identify, enrich, and engage high-fit companies.',
    problem:
      'Commercial prospecting tools often hold stale emails, fake headcount counts, and outdated decision-maker titles.',
    solution:
      'Zelvora built our own continuous background scraping and enrichment engine that verifies domains, MX records, and executive changes in real time.',
    architecture: [
      'Distributed Python Crawler Network',
      'DNS & SMTP Handshake Validator',
      'Real-time LinkedIn & Registry Synchronizer',
      'Automated Lead Quality Indexing Algorithm',
    ],
    results: [
      { label: 'Email Bounce Rate', metric: '<1.2%' },
      { label: 'Weekly Active Tracked Accounts', metric: '15,000+' },
      { label: 'Data Freshness', metric: '< 48 hours' },
    ],
    tags: ['Internal Studio Engine', 'Lead Generation', 'Data Enrichment', 'Proprietary IP'],
    demoType: 'diagram',
  },
];

export const PROCESS_STEPS: ProcessMilestone[] = [
  {
    step: 1,
    name: 'Discover',
    tagline: 'Deep Dive & Systems Audit',
    description:
      'We unpack your actual business workflow, identify manual bottlenecks, inspect existing software APIs, and define measurable target outcomes.',
    deliverables: [
      'Comprehensive Workflow Bottleneck Audit',
      'Technical Feasibility Assessment',
      'Clear System Architecture Scope & Fixed-Price Proposal',
    ],
    duration: '2 to 4 Days',
  },
  {
    step: 2,
    name: 'Design',
    tagline: 'System Architecture & Interface Wireframes',
    description:
      'Before writing code, we map data schemas, API contracts, user journey wireframes, and conversational trees for complete alignment.',
    deliverables: [
      'Interactive Figma UI/UX Prototypes',
      'Data Model & API Webhook Blueprint',
      'Conversational Logic Trees (WhatsApp/AI)',
    ],
    duration: '3 to 7 Days',
  },
  {
    step: 3,
    name: 'Build',
    tagline: 'Clean Code & Intelligent Systems',
    description:
      'Our engineers construct the web applications, write backend services, configure AI agents, and build resilient database foundations.',
    deliverables: [
      'Production TypeScript / React Codebase',
      'Trained AI Models & Prompt Embeddings',
      'Verified Test Suites & Sandbox Deployment',
    ],
    duration: '1 to 3 Weeks',
  },
  {
    step: 4,
    name: 'Connect',
    tagline: 'Ecosystem & Pipeline Integration',
    description:
      'We link the newly built systems into your existing CRM, WhatsApp Business API, Stripe billing, and internal team communication channels.',
    deliverables: [
      'Bi-Directional CRM Synchronization',
      'Meta WhatsApp Business API Cloud Setup',
      'Automated Failure Alerting & Error Logging',
    ],
    duration: '3 to 5 Days',
  },
  {
    step: 5,
    name: 'Launch',
    tagline: 'Zero-Downtime Deployment & Handover',
    description:
      'We execute a smooth, zero-downtime production deployment, conduct live testing with real data, and provide team training and documentation.',
    deliverables: [
      'Live Cloud Deployment with SSL & Custom Domains',
      'Full Source Code & Architecture Handover',
      'Loom Video Tutorials & Staff Operating Manuals',
    ],
    duration: '1 to 2 Days',
  },
  {
    step: 6,
    name: 'Improve',
    tagline: 'Ongoing Optimization & Scaling',
    description:
      'We monitor real-world system telemetry, optimize prompt costs, refine conversion funnels, and expand capabilities as your business grows.',
    deliverables: [
      'Weekly / Monthly Performance & Latency Telemetry',
      'Prompt Accuracy Fine-Tuning & Cost Audits',
      'Priority SLA Support & New Feature Sprints',
    ],
    duration: 'Continuous Partnership',
  },
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'How does Zelvora differ from traditional software agencies or freelancers?',
    a: 'Traditional agencies either build pretty websites that do not connect to your operations, or sell generic, bloated custom software that takes 9 months to deliver. Zelvora is a technology and automation studio. We specialize in practical systems that connect your leads, WhatsApp, CRM, and AI into an autonomous machine that immediately drives revenue and eliminates manual toil.',
  },
  {
    q: 'Can you work with our existing CRM and software stack?',
    a: 'Yes. We rarely suggest throwing away working tools. We integrate seamlessly with HubSpot, Salesforce, Pipedrive, Zoho, Notion, Google Workspace, Stripe, Meta, Slack, QuickBooks, and custom legacy SQL databases via modern REST APIs and webhooks.',
  },
  {
    q: 'What is the typical timeline for a project?',
    a: 'A focused WhatsApp automation system or lead generation setup typically launches in 1 to 2 weeks. Comprehensive custom web portals, internal dashboards, and full AI automation workflows take between 2 to 6 weeks. We work in rapid, transparent milestone sprints.',
  },
  {
    q: 'Do we own the intellectual property and code?',
    a: '100% yes. You receive complete ownership of all custom code, API integrations, prompts, schemas, and deployed assets. There are no proprietary lock-ins or hostage subscriptions.',
  },
  {
    q: 'How are projects priced?',
    a: 'We offer transparent, fixed-scope project pricing so you never face unexpected billing surprises. For ongoing engineering sprints and pipeline maintenance, we offer dedicated monthly studio retainers.',
  },
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'marcus-sterling',
    clientName: 'Marcus Sterling',
    role: 'Founder & Managing Director',
    company: 'FleetSync Logistics',
    industry: 'Logistics & Supply Chain',
    serviceDelivered: 'AI Automation & WhatsApp Systems',
    quote:
      'Before Zelvora, our dispatch team spent six hours every day manually copying driver updates between WhatsApp groups and our TMS. Zelvora architected an automated WhatsApp engine with AI invoice processing in three weeks. Our dispatch overhead plummeted by 82%, and we doubled our daily haul volume without adding headcount.',
    verifiedMetric: '-82% Overhead',
    metricLabel: 'Dispatch Manual Hours Reduced',
    rating: 5,
  },
  {
    id: 'elena-rostova',
    clientName: 'Elena Rostova',
    role: 'VP of Operations',
    company: 'Apex Advisory & Mortgages',
    industry: 'Financial Services',
    serviceDelivered: 'Websites, Client Portals & CRM Automation',
    quote:
      'Zelvora doesn’t deliver generic mockups—they build resilient, production-ready systems. They replaced our fragmented spreadsheet chaos with a secure client portal and automated KYC pipeline. Applications that used to drag on for two weeks now clear in under 24 hours. The engineering craft is second to none.',
    verifiedMetric: '14x Velocity',
    metricLabel: 'Underwriting & Onboarding Turnaround',
    rating: 5,
  },
  {
    id: 'david-chen',
    clientName: 'David Chen',
    role: 'Head of Growth',
    company: 'MetricWave Analytics',
    industry: 'B2B Enterprise Software',
    serviceDelivered: 'Lead Generation & Outbound Infrastructure',
    quote:
      'Most lead-gen agencies sell stale lists that bounce. Zelvora engineered an automated data pipeline that continuously identifies in-market buyer intent signals, validates corporate contacts, and feeds enriched prospects directly into our HubSpot workflows. We booked 38 qualified demos in our first month alone.',
    verifiedMetric: '+210% Pipeline',
    metricLabel: 'Qualified In-Market Pipeline Growth',
    rating: 5,
  },
];

