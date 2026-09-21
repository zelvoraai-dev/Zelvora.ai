import React, { useState } from 'react';
import { 
  Workflow, 
  ArrowRight, 
  TrendingUp, 
  Headphones, 
  Target, 
  FileText, 
  Users, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { WORKFLOW_USE_CASES } from '../data/zelvoraData';

export const UseCasesSection: React.FC = () => {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>('sales-automation');

  const currentWorkflow =
    WORKFLOW_USE_CASES.find((w) => w.id === selectedWorkflowId) || WORKFLOW_USE_CASES[0];

  const getWorkflowIcon = (id: string) => {
    switch (id) {
      case 'sales-automation':
        return <TrendingUp className="w-4 h-4" />;
      case 'customer-support':
        return <Headphones className="w-4 h-4" />;
      case 'lead-generation':
        return <Target className="w-4 h-4" />;
      case 'operations':
        return <FileText className="w-4 h-4" />;
      case 'client-management':
        return <Users className="w-4 h-4" />;
      default:
        return <Workflow className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#121214] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1C1C20] border border-stone-200 dark:border-[#27272A] text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-3">
            <Workflow className="w-3.5 h-3.5 text-[#007788] dark:text-[#38bdf8]" />
            <span>REAL-WORLD DEPLOYMENT BLUEPRINTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] dark:text-white tracking-tight">
            Realistic Workflows That Drive Revenue.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            We don’t build toy prototypes. Here is how our automated pipelines operate in production environments
            every day to eliminate manual effort and multiply team output.
          </p>
        </div>

        {/* 5 Use Case Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {WORKFLOW_USE_CASES.map((wf) => {
            const isSelected = selectedWorkflowId === wf.id;
            return (
              <button
                key={wf.id}
                onClick={() => setSelectedWorkflowId(wf.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#007788] text-white shadow-md shadow-[#007788]/20 ring-1 ring-[#007788]'
                    : 'bg-stone-50 dark:bg-[#18181C] text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-[#27272A] hover:bg-stone-100 dark:hover:bg-[#202025]'
                }`}
              >
                <span className={isSelected ? 'text-white' : 'text-[#007788] dark:text-[#38bdf8]'}>
                  {getWorkflowIcon(wf.id)}
                </span>
                <span>{wf.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Workflow Showcase */}
        <div className="bg-stone-50 dark:bg-[#161619] rounded-2xl border border-stone-200/90 dark:border-[#27272A] p-6 sm:p-9 shadow-sm">
          {/* Top Banner with ROI Metric */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-200 dark:border-[#27272A] gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#007788] dark:text-[#38bdf8] font-bold">
                {currentWorkflow.category}
              </span>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-white mt-1">
                {currentWorkflow.name}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-xl">
                {currentWorkflow.description}
              </p>
            </div>

            <div className="bg-white dark:bg-[#1C1C21] px-5 py-3.5 rounded-xl border border-stone-200 dark:border-[#27272A] shadow-2xs shrink-0 text-left md:text-right">
              <div className="text-2xl font-extrabold text-[#EE6000]">
                {currentWorkflow.impactMetric}
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400 font-medium max-w-[200px] mt-0.5">
                {currentWorkflow.metricLabel}
              </div>
            </div>
          </div>

          {/* 4-Step Architecture Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {currentWorkflow.steps.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white dark:bg-[#1A1A1E] p-5 rounded-xl border border-stone-200 dark:border-[#27272A] shadow-2xs relative flex flex-col justify-between group hover:border-[#007788] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-stone-100 dark:bg-[#25252C] text-stone-700 dark:text-stone-200 flex items-center justify-center font-mono text-xs font-bold">
                      0{step.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-100 dark:bg-[#25252C] text-stone-600 dark:text-stone-300">
                      {step.system}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-stone-900 dark:text-white leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < currentWorkflow.steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white dark:bg-[#1A1A1E] border border-stone-200 dark:border-[#27272A] flex items-center justify-center text-stone-400 dark:text-stone-500">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
