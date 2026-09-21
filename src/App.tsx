import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { SystemsSection } from './components/SystemsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceId, SolutionProblemId } from './types';

export default function App() {
  const [activeModalServiceId, setActiveModalServiceId] = useState<ServiceId | null>(null);
  const [selectedInquiryService, setSelectedInquiryService] = useState<ServiceId | null>(null);
  const [selectedProjectRef, setSelectedProjectRef] = useState<string | null>(null);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    scrollToSection('contact');
  };

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  const handleSelectServiceModal = (id: ServiceId) => {
    setActiveModalServiceId(id);
  };

  const handleInquireService = (id: ServiceId) => {
    setSelectedInquiryService(id);
    scrollToSection('contact');
  };

  const handleSelectSolutionToInquire = (
    solutionId: SolutionProblemId,
    suggestedServices: ServiceId[]
  ) => {
    if (suggestedServices.length > 0) {
      setSelectedInquiryService(suggestedServices[0]);
    }
    scrollToSection('contact');
  };

  const handleStartProjectWithRef = (projectTitle: string) => {
    setSelectedProjectRef(projectTitle);
    scrollToSection('contact');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAFAF9] dark:bg-[#121214] text-[#333333] dark:text-[#F4F4F5] font-sans antialiased selection:bg-[#EE6000]/15 selection:text-[#EE6000] dark:selection:bg-[#EE6000]/30 dark:selection:text-white transition-colors duration-250">
        {/* Sticky Top Header Navigation */}
        <Navbar
          onStartProject={handleStartProject}
          onSelectService={handleSelectServiceModal}
        />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section with Live Animated System Architecture */}
          <HeroSection
            onStartProject={handleStartProject}
            onExploreServices={handleExploreServices}
          />

          {/* 2. Core Departments (Services) */}
          <ServicesSection
            onSelectService={handleSelectServiceModal}
            onInquireService={handleInquireService}
          />

          {/* 3. The Connected Systems Ecosystem */}
          <SystemsSection />

          {/* 4. Problem-First Solutions Diagnostic */}
          <SolutionsSection
            onSelectSolutionToInquire={handleSelectSolutionToInquire}
            onExploreService={handleSelectServiceModal}
          />

          {/* 5. Realistic Production Use Cases */}
          <UseCasesSection />

          {/* 6. Built to Be Shown: Work & Portfolio */}
          <PortfolioSection
            onStartProjectWithRef={handleStartProjectWithRef}
          />

          {/* 7. What Our Clients Say (Testimonials) */}
          <TestimonialsSection
            onStartProject={handleStartProject}
          />

          {/* 8. Production Process & Guarantees */}
          <ProcessSection />

          {/* 8. About Zelvora & FAQs */}
          <AboutSection />

          {/* 9. Final CTA & Secure Inquiry with Automated Confirmation */}
          <ContactSection
            initialServiceId={selectedInquiryService}
            initialProjectRef={selectedProjectRef}
          />
        </main>

        {/* Footer */}
        <Footer
          onSelectService={handleSelectServiceModal}
          onStartProject={handleStartProject}
        />

        {/* Deep Department Inspector Modal / View */}
        <ServiceDetailModal
          serviceId={activeModalServiceId}
          onClose={() => setActiveModalServiceId(null)}
          onSelectDepartmentToInquire={handleInquireService}
          onSwitchDepartment={(newId) => setActiveModalServiceId(newId)}
        />
      </div>
    </ThemeProvider>
  );
}

