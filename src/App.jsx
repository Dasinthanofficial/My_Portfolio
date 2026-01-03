import React, { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, Outlet, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import ContainerPanel from './components/ContainerPanel';
import CustomCursor from './components/CustomCursor';
import BackgroundAura from './components/BackgroundAura';
import GalaxyBackground from './components/GalaxyBackground';
import CertificationsSection from './components/CertificationsSection';

function getNavOffset() {
  return window.innerWidth >= 768 ? 120 : 110; // md+:120, else 110
}

// Layout wraps common UI for every route
function Layout() {
  const location = useLocation();

  // Scroll to top on route changes (but NOT when navigating home to scroll to a section)
  useEffect(() => {
    if (location.state?.scrollTo) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.state]);

  // Reveal animation re-init on route change
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('active')),
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      <BackgroundAura />
      <GalaxyBackground />
      <Navbar />

      <ContainerPanel>
        {/* Global offset so fixed navbar never covers page top */}
        <main className="pt-[110px] md:pt-[120px]">
          <div className="main-content">
            <Outlet />
          </div>
        </main>
      </ContainerPanel>
    </>
  );
}

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  // When coming from /projects or /certifications and clicking a scroll-link in navbar,
  // Navbar navigates to "/" with state.scrollTo => scroll after Home sections mount.
  useLayoutEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;

    let tries = 0;

    const scrollNow = () => {
      const navHeight = getNavOffset();

      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(location.pathname, { replace: true, state: {} });
        return true;
      }

      const el = document.getElementById(targetId);
      if (!el) return false;

      const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // clear state so it doesn't trigger again
      navigate(location.pathname, { replace: true, state: {} });
      return true;
    };

    if (scrollNow()) return;

    const timer = setInterval(() => {
      tries += 1;
      if (scrollNow() || tries >= 25) clearInterval(timer);
    }, 50);

    return () => clearInterval(timer);
  }, [location.key, location.pathname, location.state, navigate]);

  return (
    <>
      <HeroSection />
      <div className="reveal"><AboutSection /></div>
      <div className="reveal"><SkillsSection /></div>

      <div className="reveal">
        <CertificationsSection limit={2} showViewMore />
      </div>

      <div className="reveal"><ServicesSection /></div>

      <div className="reveal">
        <ProjectsSection limit={3} showViewMore />
      </div>

      <div className="reveal"><ContactSection /></div>
    </>
  );
}

function ProjectsPage() {
  return (
    <div className="reveal">
      {/* ✅ FIX: add top padding + smaller title spacing for /projects page */}
      <ProjectsSection
        title="All Projects"
        subtitle="Full List"
        sectionClassName="px-5 pt-6 pb-20 md:px-20 md:pt-8 md:pb-24"
        titleClassName="mb-10"
      />
    </div>
  );
}

function CertificationsPage() {
  return (
    <div className="reveal">
      <CertificationsSection
        title="All Certifications"
        subtitle="Credentials"
        sectionClassName="px-6 pt-6 pb-14 md:px-20 md:pt-8 md:pb-20"
        titleClassName="mb-10"
      />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Route>
    </Routes>
  );
}