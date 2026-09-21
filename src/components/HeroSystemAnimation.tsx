import React, { useState, useEffect } from 'react';
import { 
  Target, 
  MessageSquare, 
  Cpu, 
  Database, 
  Workflow, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { SYSTEM_NODES } from '../data/zelvoraData';

interface NodePayload {
  title: string;
  ingress: string;
  processing: string;
  egress: string;
  latency: string;
}

const NODE_PAYLOADS: Record<string, NodePayload> = {
  lead: {
    title: 'Inbound Ingress Stage',
    ingress: 'Website Form / Meta Click-to-Chat / LinkedIn Outbound',
    processing: 'UTM parameter capture, intent scoring, origin IP verification',
    egress: 'Normalized Lead Packet dispatched to WhatsApp Gateway',
    latency: '35ms',
  },
  whatsapp: {
    title: 'Conversational Engagement Stage',
    ingress: 'Meta WhatsApp Business Cloud API webhook',
    processing: '24/7 instant auto-greeting, interactive quick-reply prompts',
    egress: 'Chat transcript stream piped to AI classification core',
    latency: '110ms',
  },
  ai: {
    title: 'Autonomous Intelligence Engine',
    ingress: 'Unstructured customer chat & document uploads',
    processing: 'LLM semantic qualification, budget extraction, entity parsing',
    egress: 'Clean JSON schema with verified qualification score: 94/100',
    latency: '190ms',
  },
  crm: {
    title: 'Single Source of Truth (CRM)',
    ingress: 'Structured entity payload from AI core',
    processing: 'Duplicate contact deduplication, account owner assignment',
    egress: 'Deal stage updated to "Qualified Consultation Requested"',
    latency: '85ms',
  },
  automation: {
    title: 'Business Automation Hub',
    ingress: 'CRM pipeline stage change webhook',
    processing: 'Calendar booking slot locked, customized PDF proposal compiled',
    egress: 'Trigger notification to sales reps on Slack/WhatsApp & client inbox',
    latency: '140ms',
  },
  customer: {
    title: 'Completed Commercial Outcome',
    ingress: 'Automated confirmations and live calendar appointment',
    processing: 'Client attended discovery session or approved automated invoice',
    egress: 'Revenue realized & automated onboarding sequence initiated',
    latency: 'Instant',
  },
};

export const HeroSystemAnimation: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('ai');
  const [totalSimulatedCount, setTotalSimulatedCount] = useState<number>(1428);

  // Auto-play cycling through the 6 stages
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SYSTEM_NODES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Keep selected node updated with current active step if user hasn't explicitly locked
  useEffect(() => {
    setSelectedNodeId(SYSTEM_NODES[activeStep].id);
  }, [activeStep]);

  const handleManualSelect = (index: number) => {
    setActiveStep(index);
    setSelectedNodeId(SYSTEM_NODES[index].id);
  };

  const handleSimulatePulse = () => {
    setActiveStep(0);
    setSelectedNodeId('lead');
    setIsPlaying(true);
    setTotalSimulatedCount((prev) => prev + 1);
  };

  const activePayload = NODE_PAYLOADS[selectedNodeId] || NODE_PAYLOADS['ai'];

  const getIcon = (iconName: string, active: boolean) => {
    const props = {
      className: `w-5 h-5 transition-transform duration-300 ${active ? 'scale-110' : ''}`,
    };
    switch (iconName) {
      case 'Target':
        return <Target {...props} />;
      case 'MessageSquare':
        return <MessageSquare {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Workflow':
        return <Workflow {...props} />;
      case 'CheckCircle2':
        return <CheckCircle2 {...props} />;
      default:
        return <Activity {...props} />;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-[#161619] rounded-2xl border border-stone-200/80 dark:border-[#27272A] shadow-xl overflow-hidden">
      {/* Header bar of system visualization */}
      <div className="px-5 py-3.5 bg-stone-50 dark:bg-[#1A1A1E] border-b border-stone-200 dark:border-[#27272A] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 font-mono text-stone-600 dark:text-stone-400">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
          <span className="font-semibold text-stone-800 dark:text-stone-200">SYSTEM ARCHITECTURE PIPELINE</span>
          <span className="text-stone-400 dark:text-stone-600">|</span>
          <span className="hidden sm:inline text-stone-500 dark:text-stone-400">REAL-TIME FLOW: LEAD → CUSTOMER</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-stone-300 dark:border-[#2E2E34] hover:bg-stone-100 dark:hover:bg-[#25252A] text-stone-700 dark:text-stone-300 transition-colors font-mono font-medium"
            title={isPlaying ? 'Pause auto-cycle' : 'Resume auto-cycle'}
          >
            {isPlaying ? (
              <>
                <span className="w-1.5 h-3 bg-stone-700 dark:bg-stone-300 rounded-xs inline-block" />
                <span className="w-1.5 h-3 bg-stone-700 dark:bg-stone-300 rounded-xs inline-block" />
                <span className="ml-1">PAUSE</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-stone-700 dark:fill-stone-300 text-stone-700 dark:text-stone-300" />
                <span>RESUME</span>
              </>
            )}
          </button>

          <button
            onClick={handleSimulatePulse}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EE6000] text-white hover:bg-[#d55500] transition-colors font-mono font-semibold shadow-xs"
          >
            <Sparkles className="w-3 h-3" />
            <span>DISPATCH INBOUND LEAD</span>
          </button>
        </div>
      </div>

      {/* Main Flow Stage Display */}
      <div className="p-6 bg-stone-50/40 dark:bg-[#141417]">
        {/* Nodes Timeline Grid */}
        <div className="relative">
          {/* Connecting line behind nodes */}
          <div className="hidden md:block absolute top-7 left-8 right-8 h-0.5 bg-stone-200 dark:bg-[#27272A] -z-0">
            <div
              className="h-full bg-gradient-to-r from-[#007788] via-[#EE6000] to-emerald-500 transition-all duration-700 ease-out"
              style={{ width: `${(activeStep / (SYSTEM_NODES.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {SYSTEM_NODES.map((node, index) => {
              const isActive = activeStep === index;
              const isPast = activeStep > index;
              const isSelected = selectedNodeId === node.id;

              return (
                <button
                  key={node.id}
                  onClick={() => handleManualSelect(index)}
                  className={`flex flex-col items-center text-center p-3 rounded-xl transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? 'bg-stone-50 dark:bg-[#1F1F24] border-2 border-[#EE6000] shadow-md ring-2 ring-[#EE6000]/15'
                      : isActive
                        ? 'bg-stone-50 dark:bg-[#1C1C21] border border-[#007788] shadow-sm'
                        : 'bg-white dark:bg-[#18181C] border border-stone-200 dark:border-[#27272A] hover:border-stone-300 dark:hover:border-stone-600'
                  }`}
                >
                  {/* Active Pulse Pill Badge */}
                  {isActive && (
                    <span className="absolute -top-2.5 px-2 py-0.5 rounded-full bg-[#EE6000] text-white text-[10px] font-mono font-bold tracking-wider animate-bounce shadow-xs">
                      LIVE
                    </span>
                  )}

                  {/* Icon Circle */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#EE6000] text-white shadow-md shadow-[#EE6000]/25'
                        : isPast
                          ? 'bg-[#007788]/10 text-[#007788] border border-[#007788]/20 dark:bg-[#007788]/20 dark:text-[#38bdf8]'
                          : 'bg-stone-100 dark:bg-[#25252B] text-stone-600 dark:text-stone-300 group-hover:bg-stone-200 dark:group-hover:bg-[#2C2C33]'
                    }`}
                  >
                    {getIcon(node.icon, isActive)}
                  </div>

                  {/* Label */}
                  <span className="text-sm font-bold text-stone-900 dark:text-white leading-tight">
                    {node.label}
                  </span>
                  <span className="text-[11px] text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                    {node.category}
                  </span>

                  {/* Small arrow on mobile */}
                  {index < SYSTEM_NODES.length - 1 && (
                    <div className="md:hidden mt-2 text-stone-300 dark:text-stone-600">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Payload Inspector Panel */}
        <div className="mt-6 p-4 sm:p-5 rounded-xl bg-stone-900 dark:bg-[#0E0E10] text-stone-100 font-mono text-xs border border-stone-800 dark:border-[#222226] shadow-inner">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-800 dark:border-[#222226]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EE6000]" />
              <span className="font-bold text-stone-200 tracking-wide">
                STEP {activeStep + 1} INSPECTOR: {activePayload.title.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-4 text-stone-400">
              <span className="flex items-center gap-1">
                <span className="text-stone-500">Latency:</span>
                <span className="text-emerald-400 font-semibold">{activePayload.latency}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-stone-500">Total Processed:</span>
                <span className="text-[#007788] dark:text-[#38bdf8] font-semibold">{totalSimulatedCount.toLocaleString()}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3">
            <div className="p-2.5 rounded-lg bg-stone-950/70 border border-stone-800/80 dark:border-[#222226]">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1">
                Incoming Ingress
              </span>
              <p className="text-stone-300 font-sans text-xs leading-relaxed">
                {activePayload.ingress}
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-stone-950/70 border border-[#007788]/40">
              <span className="text-[10px] text-[#007788] dark:text-[#38bdf8] font-bold uppercase tracking-wider block mb-1">
                Zelvora Core Processing
              </span>
              <p className="text-stone-200 font-sans text-xs leading-relaxed">
                {activePayload.processing}
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-stone-950/70 border border-[#EE6000]/40">
              <span className="text-[10px] text-[#EE6000] font-bold uppercase tracking-wider block mb-1">
                Automated Egress Action
              </span>
              <p className="text-stone-200 font-sans text-xs leading-relaxed">
                {activePayload.egress}
              </p>
            </div>
          </div>
        </div>

        {/* Real-time system guarantees badge */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400 pt-3 border-t border-stone-200 dark:border-[#27272A]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>SOC2 & HIPAA Compliant Data Rails</span>
            </span>
            <span className="hidden sm:inline text-stone-300 dark:text-stone-600">•</span>
            <span className="hidden sm:inline">99.98% Automation Uptime SLA</span>
          </div>
          <div className="font-mono text-[11px] text-stone-400 dark:text-stone-500">
            Click any node to inspect data schema
          </div>
        </div>
      </div>
    </div>
  );
};
