import React, { useState, useEffect } from 'react';
import { ZelvoraLogo } from './ZelvoraLogo';
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { CORE_DEPARTMENTS } from '../data/zelvoraData';
import { ServiceId } from '../types';

interface NavbarProps {
  onStartProject: () => void;
  onSelectService: (serviceId: ServiceId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject, onSelectService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Systems', href: '#systems' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Work', href: '#work' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-b border-stone-200/80 dark:border-[#27272A] shadow-xs py-3'
          : 'bg-white/80 dark:bg-[#121214]/80 backdrop-blur-xs border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with supplied circular Z mark and script logo */}
        <a
          href="#"
          className="flex items-center gap-2 group outline-hidden focus-visible:ring-2 focus-visible:ring-[#EE6000] rounded-lg"
          aria-label="Zelvora.AI Home"
        >
          <ZelvoraLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors rounded-lg hover:bg-stone-100/60 dark:hover:bg-[#1E1E22]"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-stone-400 dark:text-stone-500 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#EE6000]' : ''}`} />
                  </a>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-80 pt-2 z-50">
                      <div className="bg-white dark:bg-[#18181B] rounded-xl border border-stone-200 dark:border-[#2E2E34] shadow-xl p-2 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-semibold border-b border-stone-100 dark:border-[#27272A]">
                          The Five Core Departments
                        </div>
                        <div className="mt-1 space-y-0.5">
                          {CORE_DEPARTMENTS.map((dept) => (
                            <button
                              key={dept.id}
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                onSelectService(dept.id);
                              }}
                              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-50 dark:hover:bg-[#222226] transition-colors flex items-start gap-2.5 group/item cursor-pointer"
                            >
                              <span className="text-xs font-mono text-[#007788] group-hover/item:text-[#EE6000] font-semibold mt-0.5">
                                {dept.number}
                              </span>
                              <div>
                                <div className="text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover/item:text-[#EE6000] flex items-center gap-1">
                                  <span>{dept.name}</span>
                                </div>
                                <div className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-1">
                                  {dept.tagline}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors rounded-lg hover:bg-stone-100/60 dark:hover:bg-[#1E1E22]"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Primary CTA, Theme Toggle and Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          <button
            onClick={onStartProject}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EE6000] hover:bg-[#d55500] text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#EE6000]/20 active:scale-98 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-stone-200 dark:border-[#2E2E34] text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#1F1F24] transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Accessible Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#161619] border-b border-stone-200 dark:border-[#2E2E34] px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-[#202025] hover:text-[#EE6000] dark:hover:text-[#EE6000] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 dark:border-[#27272A] space-y-2">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 px-3">
              Explore Departments
            </div>
            <div className="grid grid-cols-1 gap-1">
              {CORE_DEPARTMENTS.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSelectService(dept.id);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-[#202025] hover:text-[#EE6000] dark:hover:text-[#EE6000] flex items-center justify-between rounded-lg"
                >
                  <span>{dept.number}. {dept.name}</span>
                  <span className="text-xs font-mono text-[#007788]">View Details</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-stone-100 dark:border-[#27272A] flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-semibold">Theme Mode</span>
              <ThemeToggle />
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3 rounded-xl bg-[#EE6000] text-white text-base font-semibold flex items-center justify-center gap-2 shadow-md mt-1"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start a Project</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

