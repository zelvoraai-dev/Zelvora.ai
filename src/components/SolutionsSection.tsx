import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Layers, 
  HelpCircle,
  TrendingUp,
  Workflow,
  Globe,
  MessageSquare,
  Code2,
  ExternalLink,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { PROBLEM_SOLUTIONS, CORE_DEPARTMENTS, WORKFLOW_USE_CASES } from '../data/zelvoraData';
import { SolutionProblemId, ServiceId } from '../types';

interface SolutionsSectionProps {
  onSelectSolutionToInquire: (solution: SolutionProblemId, suggestedServices: ServiceId[]) => void;
  onExploreService: (serviceId: ServiceId) => void;
  onSelectUseCase?: (useCaseId: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolutionToInquire,
  onExploreService,
  onSelectUseCase,
}) => {
  const [selectedProblemId, setSelectedProblemId] = useState<SolutionProblemId>('more-leads');

  const currentSolution = PROBLEM_SOLUTIONS.find((s) => s.id === selectedProblemId) || PROBLEM_SOLUTIONS[0];

  const getProblemIcon = (id: SolutionProblemId) => {
    switch (id) {
      case 'more-leads':
        return <TrendingUp className="w-4 h-4" />;
      case 'automate-business':
        return <Workflow className="w-4 h-4" />;
      case 'need-website':
        return <Globe className="w-4 h-4" />;
      case 'whatsapp-automation':
        return <MessageSquare className="w-4 h-4" />;
      case 'custom-software':
        return <Code2 className="w-4 h-4" />;
      case 'not-sure-yet':
        return <HelpCircle className="w-4 h-4" />;
    }
  };

  // Concise explanations and relevant service & use case mappings
  const solutionDetails: Record<
    SolutionProblemId,
    {
      conciseExplanation: string;
      primaryServiceId: ServiceId;
      primaryServiceName: string;
      relevantUseCaseId: string;
      relevantUseCaseName: string;
      keyOutcome: string;
    }
  > = {
    'more-leads': {
      conciseExplanation:
        'Zelvora builds an automated outbound data engine that identifies in-market decision makers, verifies deliverable email/phone data, and feeds enriched prospects straight into your sales pipeline without buying dead cold lists.',
      primaryServiceId: 'lead-generation',
      primaryServiceName: '04. Lead Generation & Outbound Infrastructure',
      relevantUseCaseId: 'lead-generation',
      relevantUseCaseName: 'In-Market B2B Lead Enrichment & Outreach Pipeline',
      keyOutcome: '+210% Average pipeline growth within 30 days',
    },
    'automate-business': {
      conciseExplanation:
        'Zelvora replaces repetitive copy-pasting, invoice entry, and manual triage with autonomous AI agents and webhook pipelines that connect your existing apps into an uninterrupted flow.',
      primaryServiceId: 'ai-automation',
      primaryServiceName: '01. AI Automation & Intelligent Document Processing',
      relevantUseCaseId: 'operations',
      relevantUseCaseName: 'Automated Document & Invoice Processing Workflow',
      keyOutcome: 'Up to 80% reduction in back-office processing time',
    },
    'need-website': {
      conciseExplanation:
        'Zelvora engineers modern, high-converting web applications and self-serve client portals that look exceptional, load in milliseconds, and integrate directly with your CRM and payment rails.',
      primaryServiceId: 'websites-internal-tools',
      primaryServiceName: '02. Websites & Internal Software Tools',
      relevantUseCaseId: 'client-management',
      relevantUseCaseName: 'Self-Serve Client Portal & Intake Hub Workflow',
      keyOutcome: '3.4x Increase in visitor-to-quote conversion rate',
    },
    'whatsapp-automation': {
      conciseExplanation:
        'Zelvora implements official Meta Cloud API WhatsApp bots that qualify leads 24/7, book appointments on your calendar, and answer common questions instantly with 98% open rates.',
      primaryServiceId: 'whatsapp-systems',
      primaryServiceName: '03. WhatsApp Systems & Conversational Funnels',
      relevantUseCaseId: 'customer-support',
      relevantUseCaseName: '24/7 Autonomous WhatsApp Support & Routing Workflow',
      keyOutcome: 'Under 10-second first response time on all inquiries',
    },
    'custom-software': {
      conciseExplanation:
        'Zelvora provides senior full-stack TypeScript engineering to build custom SaaS features, internal microservices, and bespoke APIs on clean code that you own 100% without agency bloat.',
      primaryServiceId: 'freelance-development',
      primaryServiceName: '05. Freelance Senior Software Development',
      relevantUseCaseId: 'sales-automation',
      relevantUseCaseName: 'Real-Time Inbound Sales Pipeline & CRM Integration',
      keyOutcome: 'Shipped in rapid 2-4 week milestone sprints',
    },
    'not-sure-yet': {
      conciseExplanation:
        'Zelvora conducts a complimentary systems audit of your current workflow, identifies manual bottlenecks, and maps out a prioritized blueprint showing which automation delivers the fastest ROI.',
      primaryServiceId: 'ai-automation',
      primaryServiceName: '01. AI Automation & Workflow Architecture',
      relevantUseCaseId: 'operations',
      relevantUseCaseName: 'End-to-End Operational Systems Architecture',
      keyOutcome: 'Clear roadmap with fixed pricing before writing any code',
    },
  };

  const currentDetail = solutionDetails[selectedProblemId];

  const handleJumpToUseCase = (useCaseId: string) => {
    const el = document.getElementById('work') || document.querySelector('section:has(#systems)');
    const target = document.getElementById('use-cases') || document.getElementById('work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJumpToService = (serviceId: ServiceId) => {
    onExploreService(serviceId);
  };

  return (
    <section id="solutions" className="py-24 bg-stone-50 dark:bg-[#121214] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1C1C20] border border-stone-200 dark:border-[#27272A] text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EE6000]" />
            <span>DYNAMIC SOLUTIONS DIAGNOSTIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] dark:text-white tracking-tight">
            Tell Us What You Want to Solve.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            Select what you are trying to achieve below. We will dynamically reveal how Zelvora solves it,
            recommend the specific studio service, and link to the relevant production workflow.
          </p>
        </div>

        {/* 6 Problem Selectors: Horizontal scroll or wrapping pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 max-w-4xl mx-auto">
          {PROBLEM_SOLUTIONS.map((item) => {
            const isSelected = selectedProblemId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedProblemId(item.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-2xs ${
                  isSelected
                    ? 'bg-[#333333] dark:bg-[#2A2A32] text-white shadow-md ring-2 ring-[#EE6000]/40 scale-102'
                    : 'bg-white dark:bg-[#18181C] text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-[#27272A] hover:border-[#007788] hover:bg-stone-100/70 dark:hover:bg-[#222228]'
                }`}
              >
                <span className={isSelected ? 'text-[#EE6000]' : 'text-stone-500 dark:text-stone-400'}>
                  {getProblemIcon(item.id)}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Diagnostic Output Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#161619] rounded-2xl border border-stone-200 dark:border-[#27272A] shadow-xl overflow-hidden animate-in fade-in duration-250">
          {/* Diagnostic Card Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-stone-900 via-stone-900 to-stone-950 dark:from-[#0E0E10] dark:via-[#111114] dark:to-[#161619] text-white border-b border-stone-800 dark:border-[#27272A]">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-400 mb-2">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EE6000] animate-pulse" />
                <span className="text-[#EE6000] font-bold">ZELVORA TAILORED SOLUTION</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-800 dark:bg-[#202026] border border-stone-700 dark:border-[#2E2E36] text-stone-300">
                <Clock className="w-3.5 h-3.5 text-[#007788]" />
                <span>Turnaround: <strong className="text-white font-sans">{currentSolution.timeline}</strong></span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {currentSolution.shortGoal}
            </h3>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 space-y-7">
            {/* Dynamic Concise Explanation Box */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#007788]/10 via-[#007788]/5 to-transparent dark:from-[#007788]/20 dark:via-[#007788]/10 dark:to-transparent border border-[#007788]/25 dark:border-[#007788]/40">
              <span className="text-xs font-mono uppercase tracking-wider text-[#007788] dark:text-[#38bdf8] font-bold flex items-center gap-1.5 mb-2">
                <Zap className="w-3.5 h-3.5 text-[#EE6000]" />
                <span>How Zelvora Addresses This Need</span>
              </span>
              <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                {currentDetail.conciseExplanation}
              </p>
              <div className="mt-3 pt-3 border-t border-[#007788]/20 dark:border-[#007788]/30 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400 font-mono">
                <span>Expected Impact: <strong className="text-emerald-700 dark:text-emerald-400 font-bold">{currentDetail.keyOutcome}</strong></span>
              </div>
            </div>

            {/* Suggested Relevant Service & Use Case Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Recommended Service Link */}
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-[#1A1A1E] border border-stone-200/90 dark:border-[#27272A] flex flex-col justify-between group hover:border-[#EE6000] transition-colors">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-bold mb-1">
                    Recommended Studio Department:
                  </div>
                  <div className="text-sm font-bold text-stone-900 dark:text-white mb-1 group-hover:text-[#EE6000] transition-colors">
                    {currentDetail.primaryServiceName}
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2">
                    Direct access to this department's dedicated architecture, deliverables, and tech stack.
                  </p>
                </div>
                <button
                  onClick={() => handleJumpToService(currentDetail.primaryServiceId)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#EE6000] hover:underline cursor-pointer"
                >
                  <span>Inspect Department Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Recommended Use Case Link */}
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-[#1A1A1E] border border-stone-200/90 dark:border-[#27272A] flex flex-col justify-between group hover:border-[#007788] transition-colors">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-bold mb-1">
                    Relevant Production Workflow:
                  </div>
                  <div className="text-sm font-bold text-stone-900 dark:text-white mb-1 group-hover:text-[#007788] dark:group-hover:text-[#38bdf8] transition-colors">
                    {currentDetail.relevantUseCaseName}
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2">
                    See the step-by-step trigger, processing core, and output telemetry in our deployment blueprints.
                  </p>
                </div>
                <a
                  href="#work"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#007788] dark:text-[#38bdf8] hover:underline cursor-pointer"
                >
                  <span>Explore Case Studies & Systems</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* The Bottleneck Callout */}
            <div className="p-4 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 dark:border-amber-500/30 flex items-start gap-3.5">
              <AlertCircle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-900 dark:text-amber-300 font-bold block mb-1">
                  Root Bottleneck Eliminated:
                </span>
                <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                  {currentSolution.bottleneck}
                </p>
              </div>
            </div>

            {/* Recommended Architecture Blueprint */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3 flex items-center gap-2">
                <span>Architecture Blueprint Components</span>
                <span className="h-px flex-1 bg-stone-100 dark:bg-[#27272A]" />
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentSolution.recommendedArchitecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 dark:bg-[#1A1A1E] border border-stone-200/80 dark:border-[#27272A]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#007788] dark:text-[#38bdf8] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-medium">
                      {arch}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-stone-100 dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                Ready to map this exact solution to your tools?
              </span>
              <button
                onClick={() =>
                  onSelectSolutionToInquire(
                    currentSolution.id,
                    currentSolution.departmentsInvolved
                  )
                }
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#EE6000] hover:bg-[#d55500] text-white text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:shadow-md hover:shadow-[#EE6000]/20"
              >
                <span>{currentSolution.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
