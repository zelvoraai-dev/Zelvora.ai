import React, { useState } from 'react';
import { 
  Globe, 
  Target, 
  MessageSquare, 
  Cpu, 
  Database, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  Share2, 
  Activity,
  Zap,
  Lock
} from 'lucide-react';

interface EcosystemNode {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  icon: any;
  color: string;
  connections: { target: string; protocol: string; description: string }[];
  details: string;
}

export const SystemsSection: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('ai');

  const nodes: EcosystemNode[] = [
    {
      id: 'website',
      name: 'Website & Web Apps',
      subtitle: 'Digital Gateway & Portals',
      badge: 'Client Facing',
      icon: Globe,
      color: '#007788',
      details: 'High-performance React/Next.js frontend capturing intent signals and delivering self-serve client portals.',
      connections: [
        { target: 'Lead Generation', protocol: 'UTM Tracking & Pixel API', description: 'Transfers visitor intent and referral source' },
        { target: 'WhatsApp', protocol: 'Direct Click-to-Chat DeepLink', description: 'Launches instant conversational pre-fill' },
        { target: 'CRM', protocol: 'Form Webhook Handler', description: 'Injects real-time quote inquiries into deals' },
      ],
    },
    {
      id: 'leadgen',
      name: 'Lead Generation',
      subtitle: 'Prospect Enrichment Core',
      badge: 'Data Ingress',
      icon: Target,
      color: '#EE6000',
      details: 'Automated crawlers that identify in-market buyers, verify corporate emails, and surface buying signals.',
      connections: [
        { target: 'WhatsApp', protocol: 'Outbound Notification Trigger', description: 'Queues high-priority VIP SMS or WhatsApp alert' },
        { target: 'AI Core', protocol: 'Semantic Intent Scoring', description: 'Analyzes prospect company tech stack and hiring signals' },
        { target: 'CRM', protocol: 'Enriched Record Upsert', description: 'Appends verified phone, email, and headcount' },
      ],
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Systems',
      subtitle: 'Official Meta Cloud API',
      badge: 'High Engagement',
      icon: MessageSquare,
      color: '#10B981',
      details: 'Conversational funnel with 98% open rates that qualifies leads, handles support, and books calendar slots.',
      connections: [
        { target: 'AI Core', protocol: 'Bi-Directional Chat Stream', description: 'Sends customer queries to LLM for grounded reply generation' },
        { target: 'CRM', protocol: 'Transcript & Tag Sync', description: 'Archives chat history and assigns qualification tags' },
        { target: 'Automation', protocol: 'Booking Webhook Dispatch', description: 'Triggers automated calendar invite and reminder loops' },
      ],
    },
    {
      id: 'ai',
      name: 'AI Core & Agents',
      subtitle: 'Autonomous Logic Engine',
      badge: 'Intelligence Hub',
      icon: Cpu,
      color: '#EE6000',
      details: 'Multi-modal document extractors, private RAG knowledge bases, and autonomous tool-calling agents.',
      connections: [
        { target: 'CRM', protocol: 'JSON Schema Validation', description: 'Normalizes unstructured conversations into CRM deals' },
        { target: 'Automation', protocol: 'Autonomous Action Dispatch', description: 'Drafts supplier emails, checks ERP balances, prepares payouts' },
        { target: 'Website', protocol: 'Dynamic Content API', description: 'Personalizes portal recommendations in real time' },
      ],
    },
    {
      id: 'crm',
      name: 'CRM Infrastructure',
      subtitle: 'Single Source of Truth',
      badge: 'System of Record',
      icon: Database,
      color: '#007788',
      details: 'HubSpot, Salesforce, or PostgreSQL single source of truth governing customer stages and revenue metrics.',
      connections: [
        { target: 'Automation', protocol: 'Pipeline Stage Change Webhook', description: 'Fires onboarding sequence upon contract win' },
        { target: 'WhatsApp', protocol: 'Owner Assigned Push', description: 'Notifies the dedicated account executive on mobile' },
        { target: 'Lead Generation', protocol: 'Negative Exclusion List', description: 'Prevents pitching existing active clients' },
      ],
    },
    {
      id: 'automation',
      name: 'Workflow Automation',
      subtitle: 'Execution & Middleware Hub',
      badge: 'Operational Rail',
      icon: Workflow,
      color: '#333333',
      details: 'Python/n8n/Make pipelines that eliminate manual copy-pasting across billing, inventory, and operations.',
      connections: [
        { target: 'Website', protocol: 'Client Portal Sync', description: 'Updates project status and generated deliverables' },
        { target: 'WhatsApp', protocol: 'Automated Status Broadcast', description: 'Dispatches invoice receipts and dispatch tracking' },
        { target: 'CRM', protocol: 'Payment Status Update', description: 'Marks deal as "Closed / Won (Paid)" upon Stripe event' },
      ],
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[3];

  return (
    <section id="systems" className="py-24 bg-stone-900 dark:bg-[#0E0E11] text-stone-100 relative overflow-hidden bg-tech-grid-dark transition-colors">
      {/* Subtle glowing ambient lights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#007788]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#EE6000]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-xs font-mono font-semibold text-stone-300 mb-3">
            <Share2 className="w-3.5 h-3.5 text-[#EE6000]" />
            <span>UNIFIED SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            We Don’t Just Build Software. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE6000] via-orange-400 to-[#007788]">
              We Connect It.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-400 leading-relaxed">
            Software sitting in isolated silos creates lost inquiries, manual data entry errors, and sluggish operations.
            Zelvora engineers the connective tissue that turns disconnected tools into a single, synchronized machine.
          </p>
        </div>

        {/* Visual Connected Ecosystem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 6 Interactive System Nodes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nodes.map((node) => {
              const isSelected = activeNodeId === node.id;
              const IconComponent = node.icon;

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer relative group ${
                    isSelected
                      ? 'bg-stone-800 border-[#EE6000] shadow-lg shadow-[#EE6000]/10 ring-1 ring-[#EE6000]'
                      : 'bg-stone-950/70 border-stone-800 hover:border-stone-700 hover:bg-stone-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#EE6000] text-white'
                          : 'bg-stone-800 text-stone-400 group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-800 text-stone-400 border border-stone-700">
                      {node.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    {node.name}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono mt-0.5">
                    {node.subtitle}
                  </p>

                  {/* Active Indicator Pulse */}
                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-stone-700/60 flex items-center justify-between text-[11px] text-orange-400 font-mono">
                      <span>CONNECTIONS INSPECTED</span>
                      <Activity className="w-3.5 h-3.5 animate-pulse" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Active Node Conduits & Telemetry Panel */}
          <div className="lg:col-span-5 bg-stone-950 rounded-2xl border border-stone-800 p-6 sm:p-7 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#007788]/20 border border-[#007788]/40 flex items-center justify-center text-[#007788]">
                  <activeNode.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                    Active Subsystem Inspector
                  </div>
                  <div className="text-lg font-bold text-white">
                    {activeNode.name}
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE</span>
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
              {activeNode.details}
            </p>

            {/* Active Connecting Lines & Integrations */}
            <div className="mt-6 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold flex items-center gap-2">
                <span>Active Data Conduits</span>
                <span className="h-px flex-1 bg-stone-800" />
              </div>

              {activeNode.connections.map((conn, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-stone-900 border border-stone-800/90 hover:border-stone-700 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-white font-bold flex items-center gap-1.5">
                      <span className="text-[#EE6000]">→</span>
                      <span>To: {conn.target}</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-800 text-stone-400 border border-stone-700">
                      {conn.protocol}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 font-sans mt-1">
                    {conn.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical guarantee summary */}
            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-stone-400" />
                <span>TLS 1.3 / AES-256 Encrypted</span>
              </span>
              <span>Idempotent Webhooks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
