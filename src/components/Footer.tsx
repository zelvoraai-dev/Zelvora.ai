import React from 'react';
import { ZelvoraLogo } from './ZelvoraLogo';
import { Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { CORE_DEPARTMENTS, ZELVORA_BRAND } from '../data/zelvoraData';
import { ServiceId } from '../types';

interface FooterProps {
  onSelectService: (id: ServiceId) => void;
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onStartProject,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 dark:bg-[#0E0E11] text-stone-300 border-t border-stone-800 dark:border-[#222228] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80 dark:border-[#222228]">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <ZelvoraLogo size="md" theme="dark" />
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed mt-2">
              {ZELVORA_BRAND.positioning}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={ZELVORA_BRAND.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                aria-label="Zelvora on X"
              >
                <span className="font-bold text-xs">𝕏</span>
              </a>

              <a
                href={ZELVORA_BRAND.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                aria-label="Zelvora on Instagram"
              >
                <span className="font-bold text-xs">IG</span>
              </a>

              <a
                href={ZELVORA_BRAND.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                aria-label="Zelvora on Pinterest"
              >
                <span className="font-bold text-xs">PIN</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${ZELVORA_BRAND.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#007788] hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{ZELVORA_BRAND.email}</span>
              </a>
            </div>
          </div>

          {/* Column 1: Core Departments */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold mb-4">
              Core Departments
            </div>
            <ul className="space-y-2 text-xs">
              {CORE_DEPARTMENTS.map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => onSelectService(dept.id)}
                    className="text-stone-400 hover:text-[#EE6000] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[10px] font-mono text-[#007788]">
                      {dept.number}
                    </span>
                    <span>{dept.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Systems & Solutions */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold mb-4">
              Ecosystem & Navigation
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Studio Services
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition-colors">
                  Connected Architecture
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Problem Diagnostic
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Portfolio & Demos
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Production Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio Promise */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold mb-4">
              Studio Model
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              We operate on fixed-milestone sprints with continuous deployment and 100% intellectual property ownership.
            </p>

            <button
              onClick={onStartProject}
              className="w-full py-2.5 px-4 rounded-xl bg-[#EE6000] hover:bg-[#d55500] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <div>
            © {currentYear} Zelvora.AI. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>TLS / AES Encrypted Infrastructure</span>
            </span>
            <span className="text-stone-600">|</span>
            <span>Aura Orange #EE6000 • Teal #007788</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
