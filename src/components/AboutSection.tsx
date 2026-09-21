import React, { useState } from 'react';
import { 
  Building2, 
  Check, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  Code, 
  Cpu, 
  Users,
  Compass,
  Sparkles
} from 'lucide-react';
import { FREQUENT_QUESTIONS, ZELVORA_BRAND } from '../data/zelvoraData';
import { ZelvoraLogo } from './ZelvoraLogo';

export const AboutSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const studioPillars = [
    {
      title: 'Pragmatic Engineering, Not Hype',
      desc: 'We don’t pitch AI for the sake of buzzwords. We only deploy autonomous models and automations where they directly shorten sales cycles, cut operating costs, or unlock capacity.',
      icon: Cpu,
    },
    {
      title: 'Ecosystem Connectivity',
      desc: 'Building isolated software that fails to communicate with your WhatsApp, CRM, or billing is useless. Every system we ship is interconnected from Day 1.',
      icon: Zap,
    },
    {
      title: '100% Client Ownership',
      desc: 'You receive all repository code, database configurations, API keys, and deployment scripts. No vendor lock-in or hostage monthly license fees.',
      icon: ShieldCheck,
    },
    {
      title: 'Senior Velocity',
      desc: 'You deal directly with senior systems architects who write the code and configure the automations. No junior middlemen or game-of-telephone account managers.',
      icon: Code,
    },
  ];

  return (
    <section id="about" className="py-24 bg-stone-50 dark:bg-[#121214] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Headline & Studio Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1C1C20] border border-stone-200 dark:border-[#27272A] text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-3 shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-[#EE6000]" />
              <span>THE STUDIO ETHOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] dark:text-white tracking-tight leading-tight">
              Technology Should <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE6000] via-[#d55500] to-[#007788]">
                Work For You.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-stone-900 dark:text-white">Zelvora.AI</strong> is a technology and automation studio. We exist because modern businesses
                are drowning in disconnected SaaS subscriptions, manual copy-pasting, and missed sales opportunities.
              </p>
              <p>
                Instead of selling bloated agency retainers or superficial marketing templates, we engineer
                <strong className="text-stone-900 dark:text-white"> practical digital systems</strong>: AI automation agents, custom web portals, verified WhatsApp funnels,
                and outbound lead generation pipelines that run with minimal friction.
              </p>
              <p className="text-sm sm:text-base text-stone-500 dark:text-stone-400 italic border-l-2 border-[#EE6000] pl-4">
                "Our mission is to empower business creativity and insight through intelligent, reliable digital infrastructure."
              </p>
            </div>
          </div>

          {/* Studio Brand Card */}
          <div className="lg:col-span-5 bg-white dark:bg-[#161619] p-8 rounded-2xl border border-stone-200 dark:border-[#27272A] shadow-lg text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#007788] via-[#EE6000] to-amber-500" />
            
            <div className="my-4 flex justify-center">
              <ZelvoraLogo size="xl" variant="stacked" />
            </div>

            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-semibold mb-2">
              Technology & Automation Studio
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 max-w-sm mx-auto leading-relaxed">
              Based at the intersection of applied machine learning, high-velocity full-stack engineering, and revenue infrastructure.
            </p>

            <div className="mt-6 pt-6 border-t border-stone-100 dark:border-[#27272A] grid grid-cols-2 gap-3 text-left font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-stone-50 dark:bg-[#1E1E24] border border-stone-200/80 dark:border-[#2A2A33]">
                <span className="text-[10px] text-stone-400 dark:text-stone-500 block">FOUNDED ON</span>
                <strong className="text-stone-800 dark:text-stone-200">Pragmatic Systems</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-50 dark:bg-[#1E1E24] border border-stone-200/80 dark:border-[#2A2A33]">
                <span className="text-[10px] text-stone-400 dark:text-stone-500 block">PRIMARY FOCUS</span>
                <strong className="text-[#EE6000]">Automated Growth</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Studio Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {studioPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#161619] border border-stone-200/90 dark:border-[#27272A] shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-[#202026] flex items-center justify-center text-[#007788] dark:text-[#38bdf8] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-stone-900 dark:text-white leading-snug mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Studio FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-stone-900 dark:text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Everything you need to know about working with Zelvora.
            </p>
          </div>

          <div className="space-y-3">
            {FREQUENT_QUESTIONS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#161619] rounded-xl border border-stone-200 dark:border-[#27272A] overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-stone-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 dark:text-stone-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#EE6000] dark:text-[#EE6000]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-[#27272A] animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
