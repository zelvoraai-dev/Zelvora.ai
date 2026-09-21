import React, { useState } from 'react';
import { 
  MessageSquareQuote, 
  Star, 
  ShieldCheck, 
  Building2, 
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Clock,
  Layers
} from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../data/zelvoraData';
import { ClientTestimonial } from '../types';

interface TestimonialsSectionProps {
  onStartProject: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onStartProject,
}) => {
  const [activeTestimonialId, setActiveTestimonialId] = useState<string>(CLIENT_TESTIMONIALS[0].id);

  return (
    <section id="testimonials" className="py-24 bg-stone-50 dark:bg-[#121214] relative overflow-hidden bg-tech-dots transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1C1C20] border border-stone-200 dark:border-[#27272A] text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-3 shadow-2xs">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#EE6000]" />
              <span>CLIENT EXPERIENCES & MEASURED OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] dark:text-white tracking-tight">
              What Our Clients Say.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              We judge our engineering by how much manual toil it eliminates and how much revenue velocity
              it unlocks. Here is what leaders who deploy Zelvora systems experience in production.
            </p>
          </div>

          <div className="text-left md:text-right">
            <div className="flex items-center md:justify-end gap-1 text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold block">
              100% Verified Production Deployments
            </span>
            <span className="text-xs text-stone-400 dark:text-stone-500">
              Average ROI achieved within 30 days
            </span>
          </div>
        </div>

        {/* 3 Compelling Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CLIENT_TESTIMONIALS.map((testimonial) => {
            const isHighlighted = activeTestimonialId === testimonial.id;

            return (
              <div
                key={testimonial.id}
                onMouseEnter={() => setActiveTestimonialId(testimonial.id)}
                onClick={() => setActiveTestimonialId(testimonial.id)}
                className={`bg-white dark:bg-[#161619] rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between relative cursor-pointer group ${
                  isHighlighted
                    ? 'border-[#007788] shadow-xl shadow-[#007788]/10 ring-1 ring-[#007788]/20 -translate-y-1'
                    : 'border-stone-200/90 dark:border-[#27272A] hover:border-stone-300 dark:hover:border-stone-600 shadow-sm'
                }`}
              >
                {/* Subtle top indicator */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-gradient-to-r from-[#EE6000] to-[#007788]'
                      : 'bg-transparent group-hover:bg-stone-200 dark:group-hover:bg-stone-700'
                  }`}
                />

                <div>
                  {/* Card Header: Rating stars & verified metric pill */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>

                    {/* Verified Result Badge */}
                    <div className="px-3 py-1 rounded-full bg-[#007788]/10 dark:bg-[#007788]/20 border border-[#007788]/25 dark:border-[#007788]/40 text-[#007788] dark:text-[#38bdf8] text-xs font-mono font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{testimonial.verifiedMetric}</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative mb-6">
                    <span className="text-4xl text-[#EE6000]/30 font-serif absolute -top-4 -left-2 select-none pointer-events-none">
                      “
                    </span>
                    <blockquote className="text-stone-700 dark:text-stone-200 text-sm sm:text-base leading-relaxed relative z-10 italic pl-3">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>

                {/* Card Footer: Client Info & Delivered System Tag */}
                <div className="pt-6 border-t border-stone-100 dark:border-[#27272A] mt-4">
                  {/* Delivered Service Badge */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-1">
                      Engineered System:
                    </span>
                    <div className="text-xs font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EE6000]" />
                      <span>{testimonial.serviceDelivered}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Avatar Initials with brand gradient */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#333333] to-stone-800 text-white font-bold text-sm flex items-center justify-center shadow-xs shrink-0">
                      {testimonial.clientName
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>

                    <div>
                      <div className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-[#007788] dark:group-hover:text-[#38bdf8] transition-colors leading-tight">
                        {testimonial.clientName}
                      </div>
                      <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                        {testimonial.role}
                      </div>
                      <div className="text-[11px] font-medium text-stone-400 dark:text-stone-500">
                        {testimonial.company} • {testimonial.industry}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Client Outcome Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#161619] border border-stone-200 dark:border-[#27272A] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EE6000]/10 flex items-center justify-center text-[#EE6000] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900 dark:text-white">
                Ready to engineer your own operational transformation?
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400">
                We design, code, and deploy in fixed milestone sprints with zero disruption to your daily operations.
              </div>
            </div>
          </div>

          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#333333] dark:bg-[#282830] hover:bg-stone-900 dark:hover:bg-[#34343E] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer border border-transparent dark:border-[#383842]"
          >
            <span>Start Your Build</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#EE6000]" />
          </button>
        </div>
      </div>
    </section>
  );
};
