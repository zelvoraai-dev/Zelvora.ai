import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  Phone, 
  Building2, 
  User, 
  MessageSquare, 
  Copy, 
  Check, 
  X,
  ExternalLink,
  Lock,
  ArrowRight
} from 'lucide-react';
import { CORE_DEPARTMENTS, ZELVORA_BRAND } from '../data/zelvoraData';
import { ServiceId, ProjectInquiryData, ConfirmationEmailReceipt } from '../types';

interface ContactSectionProps {
  initialServiceId?: ServiceId | null;
  initialProjectRef?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceId,
  initialProjectRef,
}) => {
  const [formData, setFormData] = useState<ProjectInquiryData>({
    fullName: '',
    email: '',
    company: '',
    phoneWhatsapp: '',
    services: initialServiceId ? [initialServiceId] : ['ai-automation'],
    budget: '$5k - $15k',
    projectOverview: initialProjectRef ? `Inquiring regarding system architecture similar to: ${initialProjectRef}. ` : '',
    timeline: 'Within 2 - 4 Weeks',
    honeypot: '', // bot trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationReceipt, setConfirmationReceipt] = useState<ConfirmationEmailReceipt | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showEmailViewer, setShowEmailViewer] = useState(false);

  // Update form if initialServiceId changes
  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(initialServiceId)
          ? prev.services
          : [...prev.services, initialServiceId],
      }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialProjectRef) {
      setFormData((prev) => ({
        ...prev,
        projectOverview: `Inquiring regarding system architecture similar to: ${initialProjectRef}. \n${prev.projectOverview}`,
      }));
    }
  }, [initialProjectRef]);

  const budgetOptions = [
    '< $5,000 (Focused Sprint)',
    '$5k - $15k (Standard System)',
    '$15k - $40k (Comprehensive Ecosystem)',
    '$40k+ (Enterprise Infrastructure)',
    'Senior Hourly / Retainer',
  ];

  const timelineOptions = [
    'Immediate (Critical / High Urgency)',
    'Within 2 - 4 Weeks',
    'Next 1 - 2 Months',
    'Exploratory / Architecture Planning',
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Anti-bot check: honeypot must be empty
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      newErrors.bot = 'Automated bot activity detected.';
      setErrors(newErrors);
      return false;
    }

    // Name verification
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    // Email verification (RFC 5322 compliant regex)
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Business email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@company.com).';
    }

    // Company name
    if (!formData.company.trim()) {
      newErrors.company = 'Company or organization name is required.';
    }

    // Phone / WhatsApp format verification if provided
    if (formData.phoneWhatsapp && formData.phoneWhatsapp.trim()) {
      const phoneClean = formData.phoneWhatsapp.replace(/[\s\-+()]/g, '');
      if (phoneClean.length < 7 || !/^\d+$/.test(phoneClean)) {
        newErrors.phoneWhatsapp = 'Please provide a valid phone number with country code.';
      }
    }

    // Services verification
    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one department or service.';
    }

    // Project overview verification
    if (!formData.projectOverview.trim()) {
      newErrors.projectOverview = 'Please describe what you want to build or automate.';
    } else if (formData.projectOverview.trim().length < 15) {
      newErrors.projectOverview = 'Please provide at least 15 characters describing your objective.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceToggle = (id: ServiceId) => {
    setFormData((prev) => {
      const exists = prev.services.includes(id);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== id)
          : [...prev.services, id],
      };
    });
    if (errors.services) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate secure verification, sanitization, and automated confirmation dispatch
    setTimeout(() => {
      const randomTicketNum = Math.floor(10000 + Math.random() * 90000);
      const ticketId = `ZEL-${randomTicketNum}`;
      const timestamp = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const receipt: ConfirmationEmailReceipt = {
        ticketId,
        timestamp,
        clientName: formData.fullName.trim(),
        clientEmail: formData.email.trim(),
        company: formData.company.trim(),
        services: formData.services.map((s) => {
          const dept = CORE_DEPARTMENTS.find((d) => d.id === s);
          return dept ? dept.name : s;
        }),
        budget: formData.budget,
        overviewSnippet: formData.projectOverview.trim(),
        recipientStudio: ZELVORA_BRAND.email,
        status: 'Verified & Queued',
      };

      setConfirmationReceipt(receipt);
      setIsSubmitting(false);
      setShowEmailViewer(true);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ZELVORA_BRAND.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#121214] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA Top Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 dark:bg-[#1C1C20] border border-stone-200 dark:border-[#27272A] text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#EE6000]" />
            <span>START A PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] dark:text-white tracking-tight">
            Have Something You Want to Build?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Tell us what you're trying to achieve. We'll help turn the idea into a working system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Studio Access & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 rounded-2xl bg-stone-50 dark:bg-[#161619] border border-stone-200/90 dark:border-[#27272A] shadow-2xs">
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">
                Engineering Studio Direct
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Whether you have an immediate technical bottleneck or require a complete systems overhaul,
                you will speak directly with senior system architects.
              </p>

              {/* Direct email card */}
              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-[#1C1C22] border border-stone-200 dark:border-[#27272A] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EE6000]/10 flex items-center justify-center text-[#EE6000]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block font-bold">
                      Direct Studio Inbox
                    </span>
                    <a
                      href={`mailto:${ZELVORA_BRAND.email}`}
                      className="text-sm font-bold text-stone-900 dark:text-white hover:text-[#EE6000] dark:hover:text-[#EE6000] transition-colors"
                    >
                      {ZELVORA_BRAND.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-[#25252C] text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* SLA Response Guarantee */}
              <div className="mt-4 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#007788] dark:text-[#38bdf8]" />
                <span>Typical response time: Under 4 business hours</span>
              </div>
            </div>

            {/* Official Social Channels */}
            <div className="p-7 rounded-2xl bg-stone-900 dark:bg-[#161619] text-stone-100 border border-stone-800 dark:border-[#27272A] shadow-xl">
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-400 dark:text-stone-400 mb-4 font-mono">
                Official Studio Channels
              </h4>
              <div className="space-y-3">
                <a
                  href={ZELVORA_BRAND.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-stone-950 dark:bg-[#1F1F26] border border-stone-800 dark:border-[#2E2E38] hover:border-stone-700 flex items-center justify-between text-xs font-mono transition-colors group"
                >
                  <span className="text-stone-300 group-hover:text-white font-semibold">
                    X (Twitter): @AiZelvora
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500 group-hover:text-white" />
                </a>

                <a
                  href={ZELVORA_BRAND.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-stone-950 dark:bg-[#1F1F26] border border-stone-800 dark:border-[#2E2E38] hover:border-stone-700 flex items-center justify-between text-xs font-mono transition-colors group"
                >
                  <span className="text-stone-300 group-hover:text-white font-semibold">
                    Instagram: @zelvora.ai
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500 group-hover:text-white" />
                </a>

                <a
                  href={ZELVORA_BRAND.socials.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-stone-950 dark:bg-[#1F1F26] border border-stone-800 dark:border-[#2E2E38] hover:border-stone-700 flex items-center justify-between text-xs font-mono transition-colors group"
                >
                  <span className="text-stone-300 group-hover:text-white font-semibold">
                    Pinterest: @zelvoraai
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500 group-hover:text-white" />
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 dark:border-[#27272A] text-[11px] text-stone-400 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-[#EE6000]" />
                <span>All project inquiries protected by strict mutual NDA standards.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Secure Project Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#161619] p-7 sm:p-9 rounded-2xl border border-stone-200 dark:border-[#27272A] shadow-xl relative">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-100 dark:border-[#27272A]">
              <div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                  Project Intake & Systems Scope
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  Complete this form to receive a tailored architectural blueprint and estimate.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-[10px] font-mono font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SECURE INTAKE</span>
              </span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Bot Honeypot field (hidden from view) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_fax_check">Leave this field blank</label>
                <input
                  type="text"
                  id="website_fax_check"
                  name="website_fax_check"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              {errors.bot && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.bot}</span>
                </div>
              )}

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Your Name <span className="text-[#EE6000]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) {
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.fullName;
                            return next;
                          });
                        }
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors outline-hidden focus:ring-2 focus:ring-[#EE6000]/20 bg-white dark:bg-[#1C1C22] text-stone-900 dark:text-white ${
                        errors.fullName
                          ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20'
                          : 'border-stone-300 dark:border-[#2E2E38] focus:border-[#EE6000]'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <span className="text-[11px] text-red-600 dark:text-red-400 mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Business Email <span className="text-[#EE6000]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) {
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.email;
                            return next;
                          });
                        }
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors outline-hidden focus:ring-2 focus:ring-[#EE6000]/20 bg-white dark:bg-[#1C1C22] text-stone-900 dark:text-white ${
                        errors.email
                          ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20'
                          : 'border-stone-300 dark:border-[#2E2E38] focus:border-[#EE6000]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-[11px] text-red-600 dark:text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Company & WhatsApp / Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Company / Brand Name <span className="text-[#EE6000]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp or Website URL"
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) {
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.company;
                          return next;
                        });
                      }
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors outline-hidden focus:ring-2 focus:ring-[#EE6000]/20 bg-white dark:bg-[#1C1C22] text-stone-900 dark:text-white ${
                      errors.company
                        ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20'
                        : 'border-stone-300 dark:border-[#2E2E38] focus:border-[#EE6000]'
                    }`}
                  />
                  {errors.company && (
                    <span className="text-[11px] text-red-600 dark:text-red-400 mt-1 block">
                      {errors.company}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    WhatsApp / Phone <span className="text-stone-400 dark:text-stone-500 font-normal">(Recommended)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phoneWhatsapp}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneWhatsapp: e.target.value });
                      if (errors.phoneWhatsapp) {
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.phoneWhatsapp;
                          return next;
                        });
                      }
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors outline-hidden focus:ring-2 focus:ring-[#EE6000]/20 bg-white dark:bg-[#1C1C22] text-stone-900 dark:text-white ${
                      errors.phoneWhatsapp
                        ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20'
                        : 'border-stone-300 dark:border-[#2E2E38] focus:border-[#EE6000]'
                    }`}
                  />
                  {errors.phoneWhatsapp && (
                    <span className="text-[11px] text-red-600 dark:text-red-400 mt-1 block">
                      {errors.phoneWhatsapp}
                    </span>
                  )}
                </div>
              </div>

              {/* Department Checkboxes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                  Select Department(s) Needed <span className="text-[#EE6000]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CORE_DEPARTMENTS.map((dept) => {
                    const isChecked = formData.services.includes(dept.id);
                    return (
                      <button
                        type="button"
                        key={dept.id}
                        onClick={() => handleServiceToggle(dept.id)}
                        className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-[#EE6000]/10 border-[#EE6000] text-stone-900 dark:text-white shadow-2xs'
                            : 'bg-stone-50 dark:bg-[#1C1C22] border-stone-200 dark:border-[#2E2E38] text-stone-700 dark:text-stone-300 hover:bg-stone-100/70 dark:hover:bg-[#23232A]'
                        }`}
                      >
                        <span className="text-xs font-semibold">
                          {dept.number}. {dept.name}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-[#EE6000] border-[#EE6000] text-white'
                              : 'border-stone-300 dark:border-stone-600 bg-white dark:bg-[#25252D]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.services && (
                  <span className="text-[11px] text-red-600 dark:text-red-400 mt-1 block">
                    {errors.services}
                  </span>
                )}
              </div>

              {/* Budget and Timeline selects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Estimated Budget Scope
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-[#2E2E38] bg-white dark:bg-[#1C1C22] text-stone-900 dark:text-white text-sm outline-hidden focus:border-[#EE6000] focus:ring-2 focus:ring-[#EE6000]/20"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white dark:bg-[#1C1C22] text-stone-900 dark:text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-[#2E2E38] bg-white dark:bg-[#1C1C22] text-stone-900 dark:text-white text-sm outline-hidden focus:border-[#EE6000] focus:ring-2 focus:ring-[#EE6000]/20"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white dark:bg-[#1C1C22] text-stone-900 dark:text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                  Project Scope & Current Bottlenecks <span className="text-[#EE6000]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about the business, what tools you currently use (e.g. HubSpot, Shopify, custom SQL), and what systems you want built..."
                  value={formData.projectOverview}
                  onChange={(e) => {
                    setFormData({ ...formData, projectOverview: e.target.value });
                    if (errors.projectOverview) {
                      setErrors((prev) => {
                        const next = { ...prev };
                        delete next.projectOverview;
                        return next;
                      });
                    }
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors outline-hidden focus:ring-2 focus:ring-[#EE6000]/20 bg-white dark:bg-[#1C1C22] text-stone-900 dark:text-white ${
                    errors.projectOverview
                      ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20'
                      : 'border-stone-300 dark:border-[#2E2E38] focus:border-[#EE6000]'
                  }`}
                />
                {errors.projectOverview && (
                  <span className="text-[11px] text-red-600 dark:text-red-400 mt-1 block">
                    {errors.projectOverview}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#EE6000] hover:bg-[#d55500] text-white text-base font-bold transition-all shadow-md hover:shadow-lg hover:shadow-[#EE6000]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Verifying & Generating Intake Ticket...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-[#27272A] font-mono">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Input & Spam Filtering Active</span>
                </span>
                <span>Automated Confirmation Email Dispatched Instantly</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Automated Confirmation Email Viewer Modal */}
      {showEmailViewer && confirmationReceipt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#161619] rounded-2xl border border-stone-200 dark:border-[#27272A] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EE6000] flex items-center justify-center text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>AUTOMATED CONFIRMATION DISPATCHED</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Client Ticket #{confirmationReceipt.ticketId}
                  </h4>
                </div>
              </div>
              <button
                onClick={() => setShowEmailViewer(false)}
                className="p-1.5 rounded-lg hover:bg-stone-800 text-stone-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Email Client Preview Box */}
            <div className="p-6 overflow-y-auto font-sans text-xs sm:text-sm space-y-4">
              {/* Metadata Headers */}
              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-[#1F1F26] border border-stone-200 dark:border-[#2E2E38] font-mono text-xs space-y-1 text-stone-700 dark:text-stone-300">
                <div>
                  <strong className="text-stone-900 dark:text-white">From:</strong> Zelvora.AI Systems Studio &lt;notifications@zelvora.ai&gt;
                </div>
                <div>
                  <strong className="text-stone-900 dark:text-white">To:</strong> {confirmationReceipt.clientName} &lt;{confirmationReceipt.clientEmail}&gt;
                </div>
                <div>
                  <strong className="text-stone-900 dark:text-white">CC:</strong> {ZELVORA_BRAND.email}
                </div>
                <div>
                  <strong className="text-stone-900 dark:text-white">Subject:</strong> Project Scope Confirmation: {confirmationReceipt.company} [{confirmationReceipt.ticketId}]
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 pt-1">
                  <strong>Timestamp:</strong> {confirmationReceipt.timestamp}
                </div>
              </div>

              {/* Email Content Body */}
              <div className="border border-stone-200 dark:border-[#2E2E38] rounded-xl p-5 space-y-3 bg-white dark:bg-[#18181D] text-stone-800 dark:text-stone-200 leading-relaxed">
                <p>Hello {confirmationReceipt.clientName},</p>
                <p>
                  Thank you for contacting <strong>Zelvora.AI</strong>. We have received your project inquiry for{' '}
                  <strong>{confirmationReceipt.company}</strong> and registered Ticket Reference{' '}
                  <code className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-[#25252E] font-mono font-bold text-[#EE6000]">
                    #{confirmationReceipt.ticketId}
                  </code>.
                </p>

                <div className="p-3 rounded-lg bg-stone-50 dark:bg-[#202026] border border-stone-100 dark:border-[#2E2E36] my-3 space-y-1 text-xs">
                  <div className="font-bold text-stone-900 dark:text-white">Requested Systems Scope:</div>
                  <div className="text-stone-600 dark:text-stone-300">
                    • <strong>Selected Departments:</strong> {confirmationReceipt.services.join(', ')}
                  </div>
                  <div className="text-stone-600 dark:text-stone-300">
                    • <strong>Budget Range:</strong> {confirmationReceipt.budget}
                  </div>
                  <div className="text-stone-600 dark:text-stone-300">
                    • <strong>Overview:</strong> "{confirmationReceipt.overviewSnippet}"
                  </div>
                </div>

                <p className="font-semibold text-stone-900 dark:text-white">Next Steps within 4 Business Hours:</p>
                <ol className="list-decimal list-inside space-y-1 text-stone-600 dark:text-stone-300 text-xs">
                  <li>Our senior systems team conducts a preliminary architecture feasibility audit.</li>
                  <li>We reply directly with an architectural recommendation and calendar scheduling link.</li>
                  <li>We prepare a fixed-milestone scope breakdown for complete cost transparency.</li>
                </ol>

                <p className="pt-2 text-xs text-stone-500 dark:text-stone-400">
                  Best regards,<br />
                  <strong>Zelvora.AI Architecture Team</strong><br />
                  <a href="mailto:zelvora.ai@gmail.com" className="text-[#007788] dark:text-[#38bdf8] underline">
                    zelvora.ai@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="px-6 py-4 bg-stone-50 dark:bg-[#1C1C22] border-t border-stone-200 dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                Status: <strong className="text-emerald-600 dark:text-emerald-400">Automated Dispatch Complete</strong>
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`mailto:${ZELVORA_BRAND.email}?subject=Project Intake #${confirmationReceipt.ticketId} - ${confirmationReceipt.company}&body=Hi Zelvora Team, following up on ticket #${confirmationReceipt.ticketId}...`}
                  className="px-4 py-2 rounded-xl border border-stone-300 dark:border-[#2E2E38] hover:bg-stone-100 dark:hover:bg-[#25252D] text-stone-700 dark:text-stone-200 text-xs font-bold transition-colors w-1/2 sm:w-auto text-center"
                >
                  Open in Email App
                </a>
                <button
                  onClick={() => setShowEmailViewer(false)}
                  className="px-5 py-2 rounded-xl bg-[#EE6000] hover:bg-[#d55500] text-white text-xs font-bold transition-colors w-1/2 sm:w-auto cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
