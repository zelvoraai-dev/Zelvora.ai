import React, { useState } from 'react';
import { 
  FolderKanban, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  X,
  Cpu,
  TrendingUp,
  Tag
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/zelvoraData';
import { ProjectCaseStudy, ProjectCategory } from '../types';

interface PortfolioSectionProps {
  onStartProjectWithRef: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onStartProjectWithRef,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'Real Client', label: 'Real Client Projects' },
    { id: 'Demo & Prototype', label: 'Demos & Prototypes' },
    { id: 'Internal Zelvora System', label: 'Internal Studio Engines' },
  ];

  const filteredProjects =
    filterCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filterCategory);

  const getCategoryBadgeClass = (category: ProjectCategory) => {
    switch (category) {
      case 'Real Client':
        return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30';
      case 'Demo & Prototype':
        return 'bg-[#007788]/10 text-[#007788] border-[#007788]/30';
      case 'Internal Zelvora System':
        return 'bg-[#EE6000]/10 text-[#EE6000] border-[#EE6000]/30';
    }
  };

  return (
    <section id="work" className="py-24 bg-stone-50 dark:bg-[#121214] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1C1C20] border border-stone-200 dark:border-[#27272A] text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-3 shadow-2xs">
              <FolderKanban className="w-3.5 h-3.5 text-[#EE6000]" />
              <span>PRODUCTION PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] dark:text-white tracking-tight">
              Built to Be Shown.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              We separate real production client deployments from interactive sandbox prototypes and proprietary
              internal studio tooling with complete architectural transparency.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#333333] dark:bg-[#2A2A32] text-white shadow-sm'
                    : 'bg-white dark:bg-[#18181C] border border-stone-200 dark:border-[#27272A] text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#202025]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#161619] rounded-2xl border border-stone-200/90 dark:border-[#27272A] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${getCategoryBadgeClass(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400">
                    {project.industry}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 dark:text-white group-hover:text-[#EE6000] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-xs text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                  {project.headline}
                </p>
              </div>

              {/* Metrics Highlights Bar */}
              <div className="px-6 py-3 bg-stone-50 dark:bg-[#1C1C22] border-y border-stone-100 dark:border-[#27272A] grid grid-cols-3 gap-2">
                {project.results.map((res, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs font-extrabold text-[#007788] dark:text-[#38bdf8]">
                      {res.metric}
                    </div>
                    <div className="text-[10px] text-stone-500 dark:text-stone-400 line-clamp-1">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer with Tags & Action */}
              <div className="p-6 pt-4 flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-[#25252C] text-[10px] font-mono text-stone-600 dark:text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-stone-200 dark:border-[#2E2E36] hover:border-stone-400 dark:hover:border-stone-500 text-stone-800 dark:text-stone-200 text-xs font-bold hover:bg-stone-50 dark:hover:bg-[#202025] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Case Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onStartProjectWithRef(project.title)}
                    className="p-2.5 rounded-xl bg-[#EE6000]/10 hover:bg-[#EE6000] text-[#EE6000] hover:text-white transition-all cursor-pointer"
                    title={`Build a similar system like ${project.title}`}
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In-depth Project Case Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#161619] rounded-2xl border border-stone-200 dark:border-[#27272A] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
            <div className="px-6 py-4 bg-stone-50 dark:bg-[#1C1C22] border-b border-stone-200 dark:border-[#27272A] flex items-center justify-between gap-4 shrink-0">
              <div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${getCategoryBadgeClass(
                    activeModalProject.category
                  )}`}
                >
                  {activeModalProject.category}
                </span>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 dark:text-stone-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-bold mb-1">
                  The Challenge
                </h4>
                <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                  {activeModalProject.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#007788] dark:text-[#38bdf8] font-bold mb-1">
                  The Zelvora Engineered Solution
                </h4>
                <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                  {activeModalProject.solution}
                </p>
              </div>

              {/* Architecture stack */}
              <div className="p-4 rounded-xl bg-stone-900 dark:bg-[#0E0E10] text-white font-mono text-xs border border-transparent dark:border-[#27272A]">
                <div className="text-[10px] text-stone-400 uppercase tracking-wider mb-2 font-bold">
                  System Architecture Stack:
                </div>
                <ul className="space-y-1 text-stone-200">
                  {activeModalProject.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#EE6000]">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Measurable Results */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-bold mb-2">
                  Verified Production Metrics:
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {activeModalProject.results.map((res, i) => (
                    <div key={i} className="p-3 rounded-lg bg-stone-50 dark:bg-[#1C1C22] border border-stone-200 dark:border-[#27272A] text-center">
                      <div className="text-base font-extrabold text-[#007788] dark:text-[#38bdf8]">
                        {res.metric}
                      </div>
                      <div className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-stone-50 dark:bg-[#1C1C22] border-t border-stone-200 dark:border-[#27272A] flex items-center justify-between gap-4 shrink-0">
              <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                {activeModalProject.tags.join(' • ')}
              </span>
              <button
                onClick={() => {
                  const title = activeModalProject.title;
                  setActiveModalProject(null);
                  onStartProjectWithRef(title);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#EE6000] hover:bg-[#d55500] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Inquire Similar Solution
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
