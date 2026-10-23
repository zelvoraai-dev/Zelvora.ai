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
  ArrowUpRight,
  FolderKanban,
  Check,
  ShieldCheck
} from 'lucide-react';
import { PROBLEM_SOLUTIONS, CORE_DEPARTMENTS, PORTFOLIO_PROJECTS } from '../data/zelvoraData';
import { SolutionProblemId, ServiceId, ProjectCaseStudy, ProjectCategory } from '../types';

interface SolutionsSectionProps {
  onSelectSolutionToInquire: (solution: SolutionProblemId, suggestedServices: ServiceId[]) => void;
  onExploreService: (serviceId: ServiceId) => void;
  onSelectProjectRef?: (projectTitle: string) => void;
  onSelectUseCase?: (useCaseId: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolutionToInquire,
  onExploreService,
  onSelectProjectRef,
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

  // Concise explanations and relevant service mappings
  const solutionDetails: Record<
    SolutionProblemId,
    {
      conciseExplanation: string;
      primaryServiceId: ServiceId;
      primaryServiceName: string;
      keyOutcome: string;
    }
  > = {
    'more-leads': {
      conciseExplanation:
        'Zelvora builds an automated outbound data engine that identifies in-market decision makers, verifies deliverable email/phone data, and feeds enriched prospects straight into your sales pipeline without buying dead cold lists.',
      primaryServiceId: 'lead-generation',
      primaryServiceName: '04. Lead Generation & Outbound Infrastructure',
      keyOutcome: '+210% Average pipeline growth within 30 days',
    },
    'automate-business': {
      conciseExplanation:
        'Zelvora replaces repetitive copy-pasting, invoice entry, and manual triage with autonomous AI agents and webhook pipelines that connect your existing apps into an uninterrupted flow.',
      primaryServiceId: 'ai-automation',
      primaryServiceName: '01. AI Automation & Intelligent Document Processing',
      keyOutcome: 'Up to 80% reduction in back-office processing time',
    },
    'need-website': {
      conciseExplanation:
        'Zelvora engineers modern, high-converting web applications and self-serve client portals that look exceptional, load in milliseconds, and integrate directly with your CRM and payment rails.',
      primaryServiceId: 'websites-internal-tools',
      primaryServiceName: '02. Websites & Internal Software Tools',
      keyOutcome: '3.4x Increase in visitor-to-quote conversion rate',
    },
    'whatsapp-automation': {
      conciseExplanation:
        'Zelvora implements official Meta Cloud API WhatsApp bots that qualify leads 24/7, book appointments on your calendar, and answer common questions instantly with 98% open rates.',
      primaryServiceId: 'whatsapp-systems',
      primaryServiceName: '03. WhatsApp Systems & Conversational Funnels',
      keyOutcome: 'Under 10-second first response time on all inquiries',
    },
    'custom-software': {
      conciseExplanation:
        'Zelvora provides senior full-stack TypeScript engineering to build custom SaaS features, internal microservices, and bespoke APIs on clean code that you own 100% without agency bloat.',
      primaryServiceId: 'freelance-development',
      primaryServiceName: '05. Freelance Senior Software Development',
      keyOutcome: 'Shipped in rapid 2-4 week milestone sprints',
    },
    'not-sure-yet': {
      conciseExplanation:
        'Zelvora conducts a complimentary systems audit of your current workflow, identifies manual bottlenecks, and maps out a prioritized blueprint showing which automation delivers the fastest ROI.',
      primaryServiceId: 'ai-automation',
      primaryServiceName: '01. AI Automation & Workflow Architecture',
      keyOutcome: 'Clear roadmap with fixed pricing before writing any code',
    },
  };

  const currentDetail = solutionDetails[selectedProblemId];

  // Dynamically resolve relevant services from CORE_DEPARTMENTS
  const relevantDepartments = CORE_DEPARTMENTS.filter((dept) =>
    currentSolution.departmentsInvolved.includes(dept.id)
  );

  // Dynamically resolve suggested portfolio case studies
  const suggestedCaseStudies: ProjectCaseStudy[] = (
    currentSolution.suggestedCaseStudyIds
      ? currentSolution.suggestedCaseStudyIds
          .map((id) => PORTFOLIO_PROJECTS.find((p) => p.id === id))
          .filter((p): p is ProjectCaseStudy => !!p)
      : []
  ).concat(
    // Fallback: projects matching the departments involved
    PORTFOLIO_PROJECTS.filter(
      (p) =>
        currentSolution.departmentsInvolved.includes(p.serviceId) &&
        !currentSolution.suggestedCaseStudyIds?.includes(p.id)
    )
  ).slice(0, 2);

  const getCategoryBadgeClass = (category: ProjectCategory) => {
    switch (category) {
      case 'Real Client':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30';
      case 'Demo & Prototype':
        return 'bg-[#007788]/10 text-[#007788] dark:text-[#38bdf8] border-[#007788]/30 dark:border-[#007788]/40';
      case 'Internal Zelvora System':
        return 'bg-[#EE6000]/10 text-[#EE6000] border-[#EE6000]/30';
    }
  };

  const handleBuildSimilarProject = (projectTitle: string) => {
    if (onSelectProjectRef) {
      onSelectProjectRef(projectTitle);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="solutions" className="py-24 bg-stone-50 dark:bg-[#121214] relative transition-colors overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#007788]/5 dark:bg-[#007788]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-[#EE6000]/5 dark:bg-[#EE6000]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1C1C20] border border-stone-200 dark:border-[#27272A] text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EE6000]" />
            <span>SOLUTIONS SELECTOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] dark:text-white tracking-tight">
            Tell Us What You Want to Solve.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            Choose an option below to dynamically view the most relevant Zelvora services, our exact technical solution,
            and proven case studies from our production portfolio.
          </p>
        </div>

        {/* The 6 Interactive Solution Options */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 max-w-4xl mx-auto">
          {PROBLEM_SOLUTIONS.map((item) => {
            const isSelected = selectedProblemId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedProblemId(item.id)}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-2xs ${
                  isSelected
                    ? 'bg-[#333333] dark:bg-[#2A2A32] text-white shadow-md ring-2 ring-[#EE6000]/50 scale-102 border-transparent'
                    : 'bg-white dark:bg-[#18181C] text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-[#27272A] hover:border-[#007788] hover:bg-stone-100/70 dark:hover:bg-[#222228]'
                }`}
              >
                <span
                  className={`transition-colors ${
                    isSelected ? 'text-[#EE6000]' : 'text-stone-500 dark:text-stone-400 group-hover:text-[#007788]'
                  }`}
                >
                  {getProblemIcon(item.id)}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Solutions Selector Showcase Container */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-[#161619] rounded-2xl border border-stone-200 dark:border-[#27272A] shadow-xl overflow-hidden animate-in fade-in duration-300">
          {/* Header Banner: Solution Goal & Turnaround */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-stone-900 via-stone-900 to-stone-950 dark:from-[#0E0E10] dark:via-[#111114] dark:to-[#161619] text-white border-b border-stone-800 dark:border-[#27272A]">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-400 mb-2">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EE6000] animate-pulse" />
                <span className="text-[#EE6000] font-bold uppercase tracking-wider">
                  TAILORED ZELVORA ARCHITECTURE
                </span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-800 dark:bg-[#202026] border border-stone-700 dark:border-[#2E2E36] text-stone-300">
                <Clock className="w-3.5 h-3.5 text-[#007788] dark:text-[#38bdf8]" />
                <span>Turnaround: <strong className="text-white font-sans">{currentSolution.timeline}</strong></span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {currentSolution.shortGoal}
            </h3>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* 1. Concise Engineering Solution & Expected Impact */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#007788]/10 via-[#007788]/5 to-transparent dark:from-[#007788]/20 dark:via-[#007788]/10 dark:to-transparent border border-[#007788]/25 dark:border-[#007788]/40">
              <span className="text-xs font-mono uppercase tracking-wider text-[#007788] dark:text-[#38bdf8] font-bold flex items-center gap-1.5 mb-2">
                <Zap className="w-3.5 h-3.5 text-[#EE6000]" />
                <span>How Zelvora Solves This</span>
              </span>
              <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                {currentDetail.conciseExplanation}
              </p>
              <div className="mt-3 pt-3 border-t border-[#007788]/20 dark:border-[#007788]/30 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-400 font-mono">
                <span>
                  Expected Outcome Benchmark:{' '}
                  <strong className="text-emerald-700 dark:text-emerald-400 font-bold font-sans">
                    {currentDetail.keyOutcome}
                  </strong>
                </span>
                <span className="text-[11px] text-stone-500">Fixed-price delivery guarantee</span>
              </div>
            </div>

            {/* 2. Bottleneck Callout */}
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

            {/* 3. DYNAMICALLY DISPLAYED RELEVANT SERVICES */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#EE6000]" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-white">
                    Relevant Studio Departments
                  </h4>
                </div>
                <span className="text-xs font-mono text-stone-400 dark:text-stone-500">
                  {relevantDepartments.length} Departments Selected
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relevantDepartments.map((dept) => (
                  <div
                    key={dept.id}
                    className="p-5 rounded-xl bg-stone-50 dark:bg-[#1A1A1E] border border-stone-200/90 dark:border-[#27272A] hover:border-[#007788] dark:hover:border-[#007788] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#007788] dark:text-[#38bdf8]">
                          DEPARTMENT {dept.number}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EE6000]/10 text-[#EE6000] font-semibold">
                          {dept.badge}
                        </span>
                      </div>

                      <h5 className="text-base font-bold text-stone-900 dark:text-white group-hover:text-[#EE6000] transition-colors mb-1">
                        {dept.name}
                      </h5>
                      <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 mb-3">
                        {dept.tagline}
                      </p>

                      {/* Key Deliverables in this context */}
                      <div className="space-y-1 mb-4">
                        {dept.deliverables.slice(0, 2).map((deliv, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300">
                            <Check className="w-3.5 h-3.5 text-[#007788] dark:text-[#38bdf8] shrink-0" />
                            <span className="truncate">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onExploreService(dept.id)}
                      className="inline-flex items-center justify-between pt-3 border-t border-stone-200/60 dark:border-[#2E2E38] text-xs font-bold text-[#007788] dark:text-[#38bdf8] hover:text-[#EE6000] dark:hover:text-[#EE6000] transition-colors cursor-pointer"
                    >
                      <span>Inspect Department Deliverables</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. DYNAMICALLY DISPLAYED SUGGESTED CASE STUDIES */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FolderKanban className="w-4 h-4 text-[#007788] dark:text-[#38bdf8]" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-white">
                    Suggested Case Studies & Portfolio Evidence
                  </h4>
                </div>
                <a
                  href="#work"
                  className="text-xs font-semibold text-[#EE6000] hover:underline flex items-center gap-1"
                >
                  <span>View All Works</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestedCaseStudies.map((project) => (
                  <div
                    key={project.id}
                    className="p-5 rounded-xl bg-white dark:bg-[#18181D] border border-stone-200 dark:border-[#2A2A33] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${getCategoryBadgeClass(
                            project.category
                          )}`}
                        >
                          {project.category}
                        </span>
                        <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
                          {project.industry}
                        </span>
                      </div>

                      <h5 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white mb-1.5 leading-snug">
                        {project.title}
                      </h5>

                      <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-3 line-clamp-2">
                        {project.headline}
                      </p>

                      {/* Highlighted Results Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-lg bg-stone-50 dark:bg-[#151518] border border-stone-200/60 dark:border-[#24242C]">
                        {project.results.slice(0, 2).map((res, idx) => (
                          <div key={idx}>
                            <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 block truncate">
                              {res.label}
                            </span>
                            <span className="text-xs font-bold text-stone-900 dark:text-white font-mono">
                              {res.metric}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-100 dark:bg-[#202026] text-stone-600 dark:text-stone-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-100 dark:border-[#27272A] flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleBuildSimilarProject(project.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EE6000] hover:text-[#d55500] cursor-pointer"
                      >
                        <span>Build Similar System</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href="#work"
                        className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"
                      >
                        Full Breakdown
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Recommended Architecture Blueprint Checklist */}
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

            {/* 6. Action Bar */}
            <div className="pt-4 border-t border-stone-100 dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                Ready to deploy this exact solution into your business?
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
