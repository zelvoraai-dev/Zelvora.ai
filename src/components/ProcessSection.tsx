import React from 'react';
import { 
  GitCommit, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/zelvoraData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white dark:bg-[#121214] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1C1C20] border border-stone-200 dark:border-[#27272A] text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-3">
            <GitCommit className="w-3.5 h-3.5 text-[#007788] dark:text-[#38bdf8]" />
            <span>HOW WE OPERATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] dark:text-white tracking-tight">
            Discover → Design → Build → Connect → Launch → Improve
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            No black-box mystery development. We build in transparent, fixed-scope milestone sprints
            with daily Loom updates and continuous staging access.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((milestone) => (
            <div
              key={milestone.step}
              className="p-6 sm:p-7 rounded-2xl bg-stone-50 dark:bg-[#161619] border border-stone-200/90 dark:border-[#27272A] shadow-2xs hover:border-[#007788] dark:hover:border-[#007788] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-white dark:bg-[#202025] border border-stone-200 dark:border-[#2E2E36] text-stone-900 dark:text-white group-hover:bg-[#007788] group-hover:text-white transition-colors flex items-center justify-center font-mono text-sm font-bold shadow-2xs">
                    0{milestone.step}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-mono text-stone-500 dark:text-stone-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{milestone.duration}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 dark:text-white leading-tight">
                  {milestone.name}
                </h3>
                <div className="text-xs font-medium text-[#007788] dark:text-[#38bdf8] mt-1">
                  {milestone.tagline}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Deliverables */}
                <div className="mt-6 pt-4 border-t border-stone-200/70 dark:border-[#27272A] space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-bold">
                    Stage Deliverables:
                  </div>
                  {milestone.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom studio guarantee */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-900 dark:bg-[#18181C] text-stone-200 border border-stone-800 dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#EE6000] shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">The Zelvora Studio Guarantee</div>
              <div className="text-xs text-stone-400">
                Fixed-price quotes, no hidden scope charges, and 100% code ownership handed over upon launch.
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#EE6000] hover:bg-[#d55500] text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
          >
            Start Discover Stage
          </a>
        </div>
      </div>
    </section>
  );
};
