import React, { useEffect } from 'react';
import { 
  X, 
  Check, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Globe, 
  MessageSquare, 
  TrendingUp, 
  Code2, 
  Workflow, 
  Clock, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ServiceDepartment, ServiceId } from '../types';
import { CORE_DEPARTMENTS } from '../data/zelvoraData';

interface ServiceDetailModalProps {
  serviceId: ServiceId | null;
  onClose: () => void;
  onSelectDepartmentToInquire: (serviceId: ServiceId) => void;
  onSwitchDepartment: (serviceId: ServiceId) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  serviceId,
  onClose,
  onSelectDepartmentToInquire,
  onSwitchDepartment,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (serviceId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [serviceId, onClose]);

  if (!serviceId) return null;

  const currentDepartment = CORE_DEPARTMENTS.find((d) => d.id === serviceId) || CORE_DEPARTMENTS[0];
  const currentIndex = CORE_DEPARTMENTS.findIndex((d) => d.id === serviceId);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + CORE_DEPARTMENTS.length) % CORE_DEPARTMENTS.length;
    onSwitchDepartment(CORE_DEPARTMENTS[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % CORE_DEPARTMENTS.length;
    onSwitchDepartment(CORE_DEPARTMENTS[nextIndex].id);
  };

  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'ai-automation':
        return <Cpu className="w-6 h-6 text-[#EE6000]" />;
      case 'websites-internal-tools':
        return <Globe className="w-6 h-6 text-[#007788]" />;
      case 'whatsapp-systems':
        return <MessageSquare className="w-6 h-6 text-emerald-600" />;
      case 'lead-generation':
        return <TrendingUp className="w-6 h-6 text-[#EE6000]" />;
      case 'freelance-development':
        return <Code2 className="w-6 h-6 text-[#007788]" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#161619] rounded-2xl border border-stone-200 dark:border-[#27272A] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-stone-50 dark:bg-[#1A1A1F] border-b border-stone-200 dark:border-[#27272A] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#22222A] border border-stone-200 dark:border-[#2E2E38] flex items-center justify-center shadow-xs">
              {getServiceIcon(currentDepartment.id)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#007788] dark:text-[#38bdf8]">
                  DEPARTMENT {currentDepartment.number} OF 05
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#EE6000]/10 text-[#EE6000] text-[10px] font-bold uppercase tracking-wider">
                  {currentDepartment.badge}
                </span>
              </div>
              <h2 id="service-modal-title" className="text-xl font-bold text-stone-900 dark:text-white leading-tight">
                {currentDepartment.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Prev/Next arrows for quick browsing */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg border border-stone-200 dark:border-[#2E2E38] hover:bg-white dark:hover:bg-[#25252E] text-stone-600 dark:text-stone-300 transition-colors cursor-pointer"
              title="Previous Department"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border border-stone-200 dark:border-[#2E2E38] hover:bg-white dark:hover:bg-[#25252E] text-stone-600 dark:text-stone-300 transition-colors cursor-pointer"
              title="Next Department"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-stone-200/70 dark:hover:bg-[#25252E] text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-white transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Main Description & Subheadline */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-white mb-2">
              {currentDepartment.tagline}
            </h3>
            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              {currentDepartment.fullDescription}
            </p>
          </div>

          {/* Architecture Workflow Sandbox: Trigger -> Engine -> Output */}
          <div className="p-5 rounded-xl bg-stone-900 dark:bg-[#111114] text-stone-100 border border-stone-800 dark:border-[#27272A] font-mono text-xs">
            <div className="flex items-center gap-2 pb-3 border-b border-stone-800 dark:border-[#27272A] text-stone-300">
              <Workflow className="w-4 h-4 text-[#EE6000]" />
              <span className="font-bold tracking-wider uppercase">
                PRODUCTION WORKFLOW ARCHITECTURE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-3 rounded-lg bg-stone-950/80 dark:bg-[#18181D] border border-stone-800 dark:border-[#2A2A33]">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block mb-1">
                  1. Trigger Event
                </span>
                <p className="text-stone-200 font-sans text-xs leading-relaxed">
                  {currentDepartment.sampleWorkflow.trigger}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-stone-950/80 dark:bg-[#18181D] border border-[#007788]/50">
                <span className="text-[10px] text-[#007788] dark:text-[#38bdf8] font-bold uppercase tracking-wider block mb-1">
                  2. Processing Core
                </span>
                <p className="text-stone-200 font-sans text-xs leading-relaxed">
                  {currentDepartment.sampleWorkflow.engine}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-stone-950/80 dark:bg-[#18181D] border border-[#EE6000]/50">
                <span className="text-[10px] text-[#EE6000] font-bold uppercase tracking-wider block mb-1">
                  3. Automated Output
                </span>
                <p className="text-stone-200 font-sans text-xs leading-relaxed">
                  {currentDepartment.sampleWorkflow.output}
                </p>
              </div>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-white mb-3 flex items-center gap-2">
              <span>Standard Deliverables & Capabilities</span>
              <span className="h-px flex-1 bg-stone-200 dark:bg-[#27272A]" />
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentDepartment.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-stone-50 dark:bg-[#1E1E24] border border-stone-200/80 dark:border-[#2A2A33]">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Ideal For Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                Production Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentDepartment.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-[#202028] border border-stone-200 dark:border-[#2D2D38] text-xs font-mono text-stone-800 dark:text-stone-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                Ideal Business Profile
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                {currentDepartment.idealFor.map((target, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#EE6000] font-bold">•</span>
                    <span>{target}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 bg-stone-50 dark:bg-[#1A1A1F] border-t border-stone-200 dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Benchmark Result: <strong className="text-stone-800 dark:text-stone-200">{currentDepartment.metrics}</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-300 dark:border-[#2E2E38] text-stone-700 dark:text-stone-200 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-[#25252E] transition-colors w-1/2 sm:w-auto cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectDepartmentToInquire(currentDepartment.id);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#EE6000] hover:bg-[#d55500] text-white text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 w-1/2 sm:w-auto cursor-pointer"
            >
              <span>Build with {currentDepartment.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
