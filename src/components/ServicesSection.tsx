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
  Info
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
  // Track currently active/hovered/clicked department for dynamic inspection
  const [activeCardId, setActiveCardId] = useState<ServiceId>('ai-automation');
  const [selectedSubService, setSelectedSubService] = useState<{ deptId: ServiceId; name: string } | null>(null);

  const getDepartmentIcon = (id: ServiceId, isHovered: boolean) => {
    switch (id) {
      case 'ai-automation':
        return <Cpu className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'scale-110 text-[#EE6000]' : 'text-stone-700 dark:text-stone-300'}`} />;
      case 'websites-internal-tools':
        return <Globe className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'scale-110 text-[#007788] dark:text-[#38bdf8]' : 'text-stone-700 dark:text-stone-300'}`} />;
      case 'whatsapp-systems':
        return <MessageSquare className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'scale-110 text-emerald-600 dark:text-emerald-400' : 'text-stone-700 dark:text-stone-300'}`} />;
      case 'lead-generation':
        return <TrendingUp className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'scale-110 text-[#EE6000]' : 'text-stone-700 dark:text-stone-300'}`} />;
      case 'freelance-development':
        return <Code2 className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'scale-110 text-[#007788] dark:text-[#38bdf8]' : 'text-stone-700 dark:text-stone-300'}`} />;
    }
  };

  // Brief explanations of specific services inside each department
  const subServiceDescriptions: Record<string, string> = {
    'Custom LLM Agents & Tool-Calling Bots': 'Autonomous reasoning agents equipped with custom API tools to take actions in your software.',
    'Automated Document Processing (OCR + Semantic Extraction)': 'Multi-modal pipelines parsing invoices, contracts, and PDFs directly into ERP systems in seconds.',
    'Intelligent Email Triage & Draft Automation': 'Classifies inbound inquiries, generates context-grounded drafts, and alerts account managers on high-urgency messages.',
    'CRM Workflow & Data Synchronization': 'Bi-directional webhooks and data pipelines synchronizing HubSpot, Salesforce, or PostgreSQL without manual entry.',
    'Production React & Next.js Web Applications': 'Blazing fast, SEO-optimized frontends built with modern TypeScript and responsive component systems.',
    'Internal Business Dashboards & Admin Portals': 'Role-based operational consoles providing visibility into sales pipelines, inventory, and revenue metrics.',
    'Self-Serve Client Portals & Document Hubs': 'Branded customer areas for invoice management, project deliverables, and real-time status tracking.',
    'Custom APIs, Database Schemas & Microservices': 'Resilient REST & GraphQL endpoints backed by hardened PostgreSQL/Firestore databases.',
    'Official Meta Cloud API Verified Integrations': 'Enterprise-grade WhatsApp business integration with verified green checkmark compatibility.',
    'Autonomous 24/7 Lead Qualification Chatbots': 'Conversational funnels qualifying visitor requirements and routing hot prospects instantly to sales reps.',
    'Automated Booking & Appointment Systems': 'Integrated calendar booking flows that confirm time slots and send automated reminder sequences.',
    'Broadcast Notifications & Transactional Alerts': '98% open-rate broadcast pipelines for order tracking, dispatch updates, and event alerts.',
    'B2B Prospect Sourcing & ICP Data Scraping': 'High-precision identification of decision-makers matching your ideal customer profile and firmographic data.',
    'Multi-Source Data Enrichment & Verification': 'Validates corporate email deliverability, direct phone lines, LinkedIn profiles, and verified company domains.',
    'Automated Multi-Channel Outreach Pipelines': 'Cold email and LinkedIn nurture sequences designed with deliverability best practices and spam-filter avoidance.',
    'CRM Pipeline Ingestion & Intent Lead Scoring': 'Ranks prospects based on hiring signals, tech stack changes, and web activity before alerting reps.',
    'Senior Frontend & Backend TypeScript Engineering': 'Direct access to senior software engineers building resilient full-stack web applications.',
    'Bespoke API Integrations & Webhook Middleware': 'Connects third-party software (Stripe, QuickBooks, Slack, CRMs) into a unified backend.',
    'SaaS Feature Development & Rapid MVP Prototyping': 'Turns product specifications into production code in fixed 2-4 week delivery cycles.',
    'System Performance Audits & Refactoring': 'Diagnoses database bottlenecks, reduces API latency, and eliminates technical debt.',
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#121214] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1C1C20] border border-stone-200 dark:border-[#27272A] text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-3">
              <Layers className="w-3.5 h-3.5 text-[#EE6000]" />
              <span>THE FIVE CORE DEPARTMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] dark:text-white tracking-tight">
              One Studio. Five Ways to Build.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              Hover over or click any department card below to explore its specific capabilities, sample workflows,
              and concrete deliverables. We combine AI, web engineering, WhatsApp systems, and outbound automation
              into unified client solutions.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-1">
              Architecture Delivery
            </span>
            <span className="text-sm font-semibold text-stone-800 dark:text-stone-200">
              Interactive Systems • Aura Orange & Teal Accents
            </span>
          </div>
        </div>

        {/* 5 Interactive Departments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_DEPARTMENTS.map((dept, index) => {
            const isActive = activeCardId === dept.id;

            return (
              <div
                key={dept.id}
                onMouseEnter={() => setActiveCardId(dept.id)}
                onClick={() => setActiveCardId(dept.id)}
                className={`group rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between relative cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-stone-50/80 via-white to-white dark:from-[#1E1E24] dark:via-[#161619] dark:to-[#161619] border-[#EE6000] shadow-xl ring-2 ring-[#EE6000]/20 -translate-y-1'
                    : 'bg-white dark:bg-[#161619] border-stone-200/90 dark:border-[#27272A] hover:border-[#007788] hover:shadow-lg shadow-xs'
                } ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Subtle top indicator bar with color transitions between Aura Orange and Teal */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#EE6000] via-[#007788] to-[#EE6000] opacity-100'
                      : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#007788] group-hover:to-[#EE6000] group-hover:opacity-60'
                  }`}
                />

                {/* Card Top: Number + Badge + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border ${
                        isActive
                          ? 'bg-white dark:bg-[#222228] border-[#EE6000]/40 shadow-md shadow-[#EE6000]/15'
                          : 'bg-stone-50 dark:bg-[#1C1C21] border-stone-200 dark:border-[#27272A] group-hover:border-[#007788]/40'
                      }`}
                    >
                      {getDepartmentIcon(dept.id, isActive)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-colors ${
                          isActive
                            ? 'bg-[#EE6000]/10 text-[#EE6000] border border-[#EE6000]/25'
                            : 'bg-stone-100 dark:bg-[#202025] text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-[#27272A] group-hover:text-[#007788]'
                        }`}
                      >
                        {dept.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-stone-400 dark:text-stone-500">
                        {dept.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3
                    className={`text-xl font-bold transition-colors leading-snug ${
                      isActive ? 'text-[#EE6000]' : 'text-stone-900 dark:text-white group-hover:text-[#007788] dark:group-hover:text-[#38bdf8]'
                    }`}
                  >
                    {dept.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold text-[#007788] dark:text-[#38bdf8] line-clamp-1">
                    {dept.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {dept.shortDescription}
                  </p>

                  {/* Interactive Services Within Department */}
                  <div className="mt-5 pt-4 border-t border-stone-100 dark:border-[#27272A]">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-semibold mb-2.5">
                      <span>Services in this Department:</span>
                      {isActive && (
                        <span className="text-[10px] text-[#EE6000] font-bold animate-pulse">
                          ● Active
                        </span>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      {dept.deliverables.slice(0, 3).map((item, i) => {
                        const isSubSelected = selectedSubService?.name === item;
                        return (
                          <div
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSubService(isSubSelected ? null : { deptId: dept.id, name: item });
                            }}
                            className={`p-2 rounded-lg text-xs transition-all flex items-start justify-between gap-2 ${
                              isSubSelected
                                ? 'bg-[#007788]/10 dark:bg-[#007788]/25 text-[#007788] dark:text-[#38bdf8] font-semibold border border-[#007788]/30 dark:border-[#007788]/50'
                                : 'bg-stone-50 dark:bg-[#1C1C21] hover:bg-stone-100/80 dark:hover:bg-[#232329] text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-[#282830]'
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              <Check
                                className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                                  isActive ? 'text-[#EE6000]' : 'text-[#007788] dark:text-[#38bdf8]'
                                }`}
                              />
                              <span className="leading-tight">{item}</span>
                            </div>
                            <Info className="w-3 h-3 text-stone-400 shrink-0 mt-0.5 opacity-60 group-hover:opacity-100" />
                          </div>
                        );
                      })}
                    </div>

                    {/* Reveal brief micro-description when sub-service is clicked */}
                    {selectedSubService?.deptId === dept.id && subServiceDescriptions[selectedSubService.name] && (
                      <div className="mt-2 p-2.5 rounded-lg bg-[#007788]/5 dark:bg-[#007788]/20 border border-[#007788]/20 dark:border-[#007788]/40 text-[11px] text-[#007788] dark:text-[#38bdf8] leading-relaxed animate-in fade-in duration-150">
                        <strong>{selectedSubService.name}:</strong>{' '}
                        {subServiceDescriptions[selectedSubService.name]}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Bottom: Tech Pills + Direct Actions */}
                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-[#27272A]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dept.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-mono transition-colors ${
                          isActive
                            ? 'bg-[#EE6000]/10 text-[#EE6000] font-medium'
                            : 'bg-stone-100 dark:bg-[#202025] text-stone-600 dark:text-stone-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {dept.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-stone-50 dark:bg-[#1E1E23] text-[10px] font-mono text-stone-400 dark:text-stone-500">
                        +{dept.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(dept.id);
                      }}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                        isActive
                          ? 'bg-[#333333] dark:bg-[#2A2A32] text-white border-[#333333] dark:border-[#383844] shadow-xs hover:bg-stone-900 dark:hover:bg-[#34343E]'
                          : 'border-stone-200 dark:border-[#2E2E34] hover:border-stone-400 dark:hover:border-stone-500 text-stone-800 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-[#202025]'
                      }`}
                    >
                      <span>Explore Department</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-white" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onInquireService(dept.id);
                      }}
                      className="p-2.5 rounded-xl bg-[#EE6000]/10 hover:bg-[#EE6000] text-[#EE6000] hover:text-white transition-all cursor-pointer"
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
