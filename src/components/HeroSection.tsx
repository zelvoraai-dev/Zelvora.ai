import React from 'react';
import { ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { HeroSystemAnimation } from './HeroSystemAnimation';
import { ZELVORA_BRAND } from '../data/zelvoraData';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreServices,
}) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-tech-grid">
      {/* Decorative gradient blur accents in brand colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-[#007788]/10 via-[#EE6000]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top studio badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1C1C20] border border-stone-200 dark:border-[#2E2E34] shadow-xs text-xs font-medium text-stone-700 dark:text-stone-300">
            <span className="flex h-2 w-2 rounded-full bg-[#EE6000]" />
            <span className="font-semibold text-stone-900 dark:text-white">Zelvora.AI</span>
            <span className="text-stone-300 dark:text-stone-600">|</span>
            <span className="text-stone-600 dark:text-stone-400">Technology & Automation Studio</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#333333] dark:text-white tracking-tight leading-[1.12]">
            We Build Systems That <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE6000] via-[#d55500] to-[#007788]">
              Make Businesses Move.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl mx-auto font-normal">
            {ZELVORA_BRAND.subheadline}
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#EE6000] hover:bg-[#d55500] text-white text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#EE6000]/25 active:scale-98 cursor-pointer"
            >
              <span>{ZELVORA_BRAND.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white dark:bg-[#1C1C20] hover:bg-stone-50 dark:hover:bg-[#25252B] border border-stone-300 dark:border-[#2E2E34] hover:border-stone-400 dark:hover:border-stone-500 text-[#333333] dark:text-white text-base font-semibold transition-all duration-200 shadow-xs cursor-pointer"
            >
              <span>{ZELVORA_BRAND.secondaryCta}</span>
              <Layers className="w-4 h-4 text-[#007788]" />
            </button>
          </div>

          {/* Quick Metrics / Capabilities Bar */}
          <div className="mt-10 pt-8 border-t border-stone-200/80 dark:border-[#27272A] grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-[#EE6000] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-stone-900 dark:text-white">5 Core Departments</div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400">From AI to WhatsApp & Dev</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#007788] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-stone-900 dark:text-white">100% IP & Code Ownership</div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400">No vendor lock-in</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#EE6000] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-stone-900 dark:text-white">Sub-Second Execution</div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400">Sub-250ms API automation</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-stone-900 dark:text-white">Fixed-Price Sprints</div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400">Transparent milestone delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sophisticated Animated System Visualization */}
        <div className="mt-6">
          <HeroSystemAnimation />
        </div>
      </div>
    </section>
  );
};
