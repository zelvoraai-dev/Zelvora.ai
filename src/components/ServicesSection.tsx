import React, { useState } from 'react';
import { 
  Cpu, 
  Globe, 
  MessageSquare, 
  TrendingUp, 
  Code2, 
  ArrowRight, 
  Check, 
  Sparkles,
  Layers,
  ChevronRight,
  Zap,
  Clock,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import { CORE_DEPARTMENTS } from '../data/zelvoraData';
import { ServiceId } from '../types';

interface ServicesSectionProps {
  onSelectService: (id: ServiceId) => void;
  onInquireService: (id: ServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onInquireService,
}) => {
  // Track hovered or active department card
  const [hoveredCardId, setHoveredCardId] = useState<ServiceId | null>(null);
  const [activeCardId, setActiveCardId] = useState<ServiceId>('ai-automation');
  const [previewServiceIndex, setPreviewServiceIndex] = useState<Record<ServiceId, number>>({
    'ai-automation': 0,
    'websites-internal-tools': 0,
    'whatsapp-systems': 0,
    'lead-generation': 0,
    'freelance-development': 0,
  });

  const getDepartmentIcon = (id: ServiceId, isGlowing: boolean) => {
    switch (id) {
      case 'ai-automation':
        return (
          <Cpu
            className={`w-6 h-6 transition-transform duration-300 ${
              isGlowing ? 'scale-110 text-[#EE6000]' : 'text-[#EE6000]/80 group-hover:text-[#EE6000]'
            }`}
          />
        );
      case 'websites-internal-tools':
        return (
          <Globe
            className={`w-6 h-6 transition-transform duration-300 ${
              isGlowing ? 'scale-110 text-[#007788] dark:text-[#38bdf8]' : 'text-[#007788]/80 dark:text-[#38bdf8]/80 group-hover:text-[#007788] dark:group-hover:text-[#38bdf8]'
            }`}
          />
        );
      case 'whatsapp-systems':
        return (
          <MessageSquare
            className={`w-6 h-6 transition-transform duration-300 ${
              isGlowing ? 'scale-110 text-emerald-500' : 'text-emerald-600/80 dark:text-emerald-400/80 group-hover:text-emerald-500'
            }`}
          />
        );
      case 'lead-generation':
        return (
          <TrendingUp
            className={`w-6 h-6 transition-transform duration-300 ${
              isGlowing ? 'scale-110 text-[#EE6000]' : 'text-[#EE6000]/80 group-hover:text-[#EE6000]'
            }`}
          />
        );
      case 'freelance-development':
        return (
          <Code2
            className={`w-6 h-6 transition-transform duration-300 ${
              isGlowing ? 'scale-110 text-[#007788] dark:text-[#38bdf8]' : 'text-[#007788]/80 dark:text-[#38bdf8]/80 group-hover:text-[#007788] dark:group-hover:text-[#38bdf8]'
            }`}
          />
        );
    }
  };

  // Turnaround and key delivery speed estimates per department
  const departmentSpeedMap: Record<ServiceId, string> = {
    'ai-automation': '1-3 Weeks Delivery',
    'websites-internal-tools': '2-4 Weeks Delivery',
    'whatsapp-systems': '1-2 Weeks Delivery',
    'lead-generation': '10-14 Days Pipeline',
    'freelance-development': 'Sprint Milestones',
  };

  // Micro-glimpse snippets highlighting concrete capabilities when hovered
  const serviceGlimpses: Record<ServiceId, Array<{ title: string; highlight: string; tag: string }>> = {
    'ai-automation': [
      {
        title: 'Custom LLM Agents & Tool-Calling Bots',
        highlight: 'Autonomous reasoning pipelines calling external APIs & internal databases.',
        tag: 'Agentic Core',
      },
      {
        title: 'Automated Document Processing (OCR + Semantic)',
        highlight: 'Multimodal vision models converting invoices & contracts into ERP records in seconds.',
        tag: 'Vision OCR',
      },
      {
        title: 'Intelligent Email Triage & Draft Automation',
        highlight: 'Categorizes high-urgency inquiries and prepares grounded contextual response drafts.',
        tag: 'Auto-Triage',
      },
      {
        title: 'CRM Bi-Directional Auto-Sync & Enrichment',
        highlight: 'Event-driven webhooks eliminating duplicate data entry between databases.',
        tag: 'Data Sync',
      },
    ],
    'websites-internal-tools': [
      {
        title: 'High-Converting Web Platforms (React / Next.js)',
        highlight: 'Sub-second page speeds, interactive calculators, and SEO-optimized architecture.',
        tag: 'Next.js 15',
      },
      {
        title: 'Bespoke Client Portals with Role-Based Access',
        highlight: 'Self-serve hubs for document signing, milestone approvals, and live telemetry.',
        tag: 'RBAC Security',
      },
      {
        title: 'Internal Business Dashboards & Admin Panels',
        highlight: 'Aggregates legacy databases and spreadsheets into clean operational consoles.',
        tag: 'Real-Time DB',
      },
      {
        title: 'Rapid Production MVPs for Startups',
        highlight: 'Turn specifications into fully functional, scalable web apps in 2-4 weeks.',
        tag: 'Rapid MVP',
      },
    ],
    'whatsapp-systems': [
      {
        title: 'Meta WhatsApp Business API Integration',
        highlight: 'Official green-checkmark verification with enterprise throughput and 99.9% uptime.',
        tag: 'Meta API',
      },
      {
        title: 'Autonomous 24/7 Lead Qualification Bots',
        highlight: 'Conversational funnels qualifying budget, urgency, and routing hot leads instantly.',
        tag: 'Instant Lead Bot',
      },
      {
        title: 'Interactive Calendar Booking in Chat',
        highlight: 'Prospects choose time slots without leaving WhatsApp; syncs directly to Google/Cal.',
        tag: 'In-Chat Booking',
      },
      {
        title: 'Transactional Alerts & Broadcast Sequences',
        highlight: '98% open-rate updates for order status, dispatches, and automated reminders.',
        tag: '98% Open Rate',
      },
    ],
    'lead-generation': [
      {
        title: 'Custom B2B Prospect Databases & Sourcing',
        highlight: 'Targeted account lists scraped and enriched with verified decision-maker contacts.',
        tag: 'Verified ICP',
      },
      {
        title: 'Multi-Inbox Cold Email Infrastructure',
        highlight: 'Hardened SPF, DKIM, DMARC records with continuous AI warmup and spam defense.',
        tag: 'Deliverability',
      },
      {
        title: 'Dynamic Intent Scoring & Signal Monitoring',
        highlight: 'Monitors hiring spikes, tech changes, and public registry triggers.',
        tag: 'Intent Signals',
      },
      {
        title: 'Bi-Directional CRM Ingestion Pipelines',
        highlight: 'Automatically writes warm respondents into your CRM ready for rep calls.',
        tag: 'Pipeline Sync',
      },
    ],
    'freelance-development': [
      {
        title: 'Senior TypeScript & React Full-Stack Engineering',
        highlight: 'Clean, production-grade frontend and backend development without agency bloat.',
        tag: 'Full-Stack TS',
      },
      {
        title: 'Custom API Integrations & Webhook Middleware',
        highlight: 'Connects third-party software (Stripe, HubSpot, Slack, ERPs) into unified flows.',
        tag: 'API Hub',
      },
      {
        title: 'SaaS Feature Development & Codebase Upgrades',
        highlight: 'Builds critical roadmap features with comprehensive unit and integration tests.',
        tag: 'Feature Delivery',
      },
      {
        title: 'System Performance Audits & Refactoring',
        highlight: 'Remediates slow database queries, security bottlenecks, and legacy technical debt.',
        tag: 'Zero Latency',
      },
    ],
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#121214] relative transition-colors overflow-hidden">
      {/* Subtle ambient brand color glows in background */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#EE6000]/5 dark:bg-[#EE6000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#007788]/5 dark:bg-[#007788]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1C1C20] border border-stone-200 dark:border-[#27272A] text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#EE6000]" />
              <span>THE FIVE CORE DEPARTMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] dark:text-white tracking-tight">
              One Studio. Five Ways to Build.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              Hover over any department card below to get an instant interactive glimpse of the services,
              live workflow architectures, and concrete engineering deliverables we provide.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#EE6000]/10 to-[#007788]/10 dark:from-[#EE6000]/20 dark:to-[#007788]/20 border border-[#EE6000]/20 dark:border-[#007788]/30 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#EE6000] animate-pulse" />
              <span className="font-semibold text-stone-800 dark:text-stone-200">
                Aura Orange & Teal Core Architecture
              </span>
            </div>
          </div>
        </div>

        {/* 5 Interactive Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_DEPARTMENTS.map((dept, index) => {
            const isHovered = hoveredCardId === dept.id;
            const isCurrentActive = activeCardId === dept.id;
            const glimpses = serviceGlimpses[dept.id] || [];
            const currentPreviewIdx = previewServiceIndex[dept.id] || 0;
            const currentGlimpse = glimpses[currentPreviewIdx] || glimpses[0];

            return (
              <div
                key={dept.id}
                onMouseEnter={() => {
                  setHoveredCardId(dept.id);
                  setActiveCardId(dept.id);
                }}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => setActiveCardId(dept.id)}
                className={`group relative rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${
                  isHovered || isCurrentActive
                    ? 'bg-white dark:bg-[#161619] border-[#EE6000]/80 dark:border-[#EE6000]/70 shadow-xl -translate-y-1.5 ring-2 ring-[#EE6000]/15'
                    : 'bg-white/90 dark:bg-[#161619]/90 border-stone-200/90 dark:border-[#27272A] hover:border-[#007788]/60 hover:shadow-lg shadow-xs'
                }`}
              >
                {/* Glowing Top Gradient Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl transition-all duration-300 ${
                    isHovered || isCurrentActive
                      ? 'bg-gradient-to-r from-[#EE6000] via-[#007788] to-[#EE6000] opacity-100'
                      : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#007788] group-hover:to-[#EE6000] group-hover:opacity-70'
                  }`}
                />

                {/* Ambient Card Background Glow on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-[#EE6000]/5 via-transparent to-[#007788]/5 dark:from-[#EE6000]/10 dark:to-[#007788]/10 pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon + Dept Number + Turnaround Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border ${
                        isHovered || isCurrentActive
                          ? 'bg-[#EE6000]/10 dark:bg-[#EE6000]/15 border-[#EE6000]/40 shadow-sm shadow-[#EE6000]/20'
                          : 'bg-stone-50 dark:bg-[#1C1C21] border-stone-200 dark:border-[#27272A] group-hover:border-[#007788]/40'
                      }`}
                    >
                      {getDepartmentIcon(dept.id, isHovered || isCurrentActive)}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-stone-100 dark:bg-[#202025] text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-[#27272A] group-hover:border-[#007788]/30 group-hover:text-[#007788] dark:group-hover:text-[#38bdf8] transition-colors">
                        <Clock className="w-3 h-3 text-[#EE6000]" />
                        <span>{departmentSpeedMap[dept.id]}</span>
                      </span>
                      <span className="text-xs font-mono font-bold text-stone-400 dark:text-stone-500">
                        {dept.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#007788] dark:text-[#38bdf8] block mb-1">
                      {dept.badge}
                    </span>
                    <h3
                      className={`text-xl font-bold transition-colors leading-snug ${
                        isHovered || isCurrentActive
                          ? 'text-[#EE6000]'
                          : 'text-stone-900 dark:text-white group-hover:text-[#007788] dark:group-hover:text-[#38bdf8]'
                      }`}
                    >
                      {dept.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-stone-700 dark:text-stone-300 line-clamp-1">
                      {dept.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                    {dept.shortDescription}
                  </p>

                  {/* Glimpse of the Services Offered: Interactive Hover Preview Box */}
                  <div className="mt-4 pt-3.5 border-t border-stone-100 dark:border-[#27272A]">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-semibold mb-2">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#EE6000]" />
                        <span>Glimpse of Services</span>
                      </span>
                      <span className="text-[10px] text-[#007788] dark:text-[#38bdf8] font-bold">
                        Hover to preview
                      </span>
                    </div>

                    {/* Interactive service pills that swap the live glimpse on hover */}
                    <div className="space-y-1.5">
                      {glimpses.map((item, idx) => {
                        const isCurrentPreview = currentPreviewIdx === idx;
                        return (
                          <div
                            key={idx}
                            onMouseEnter={(e) => {
                              e.stopPropagation();
                              setPreviewServiceIndex((prev) => ({ ...prev, [dept.id]: idx }));
                            }}
                            className={`p-2 rounded-lg text-xs transition-all flex items-center justify-between gap-2 border ${
                              isCurrentPreview
                                ? 'bg-gradient-to-r from-[#007788]/10 to-transparent dark:from-[#007788]/20 text-[#007788] dark:text-[#38bdf8] border-[#007788]/30 dark:border-[#007788]/50 font-semibold shadow-2xs'
                                : 'bg-stone-50 dark:bg-[#1A1A1E] text-stone-700 dark:text-stone-300 border-stone-200/60 dark:border-[#25252C] hover:bg-stone-100/70 dark:hover:bg-[#202026]'
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                                  isCurrentPreview
                                    ? 'bg-[#EE6000]'
                                    : 'bg-stone-400 dark:bg-stone-600'
                                }`}
                              />
                              <span className="truncate">{item.title}</span>
                            </div>
                            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white dark:bg-[#25252C] border border-stone-200 dark:border-[#303038] text-stone-500 dark:text-stone-400 shrink-0">
                              {item.tag}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Animated dynamic preview drawer */}
                    {currentGlimpse && (
                      <div className="mt-2.5 p-2.5 rounded-lg bg-stone-50 dark:bg-[#1A1A20] border border-stone-200/90 dark:border-[#2A2A33] text-[11px] leading-relaxed text-stone-600 dark:text-stone-300 transition-all duration-200 animate-in fade-in">
                        <div className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-white mb-0.5">
                          <Zap className="w-3 h-3 text-[#EE6000]" />
                          <span>{currentGlimpse.title}</span>
                        </div>
                        <p className="text-stone-600 dark:text-stone-400">
                          {currentGlimpse.highlight}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Bottom: Metric Benchmark & Action Buttons */}
                <div className="mt-5 pt-4 border-t border-stone-100 dark:border-[#27272A] relative z-10">
                  {/* Benchmark Result */}
                  <div className="mb-3.5 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Benchmark:</span>
                    </span>
                    <span className="text-[11px] font-mono font-bold text-stone-800 dark:text-stone-200">
                      {dept.metrics}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(dept.id);
                      }}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                        isHovered || isCurrentActive
                          ? 'bg-[#333333] dark:bg-[#2A2A32] text-white border-[#333333] dark:border-[#383844] shadow-xs hover:bg-stone-900 dark:hover:bg-[#34343E]'
                          : 'border-stone-200 dark:border-[#2E2E34] hover:border-stone-400 dark:hover:border-stone-500 text-stone-800 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-[#202025]'
                      }`}
                    >
                      <span>Explore Department</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onInquireService(dept.id);
                      }}
                      className="p-2.5 rounded-xl bg-[#EE6000]/10 hover:bg-[#EE6000] text-[#EE6000] hover:text-white transition-all cursor-pointer border border-[#EE6000]/25"
                      title={`Start a project with ${dept.name}`}
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
