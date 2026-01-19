import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Routes, Route, Outlet, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import ContainerPanel from './components/ContainerPanel';
import CustomCursor from './components/CustomCursor';
import BackgroundAura from './components/BackgroundAura';
import GalaxyBackground from './components/GalaxyBackground';
import CertificationsSection from './components/CertificationsSection';

function getNavOffset() {
  return window.innerWidth >= 768 ? 120 : 110;
}

// Layout wraps common UI for every route
function Layout() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  // ✅ IMPORTANT: Only scroll-to-top when PATH changes (not when state changes)
  useEffect(() => {
    const pathChanged = prevPath.current !== location.pathname;
    if (!pathChanged) return;
    prevPath.current = location.pathname;

    // If we're navigating home to scroll to a section, do NOT force top
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
        <main className="pt-[110px] md:pt-[120px]">
          <Outlet />
        </main>
      </ContainerPanel>
    </>
  );
}

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Robust scroll after navigating to "/" with state.scrollTo
  useLayoutEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;

    let tries = 0;
    const maxTries = 80;

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

    const raf = requestAnimationFrame(() => {
      if (scrollNow()) return;

      const timer = setInterval(() => {
        tries += 1;
        if (scrollNow() || tries >= maxTries) clearInterval(timer);
      }, 50);

      return () => clearInterval(timer);
    });

    return () => cancelAnimationFrame(raf);
  }, [location.key, location.pathname, location.state, navigate]);

  return (
    <>
      <HeroSection />
      <div className="reveal"><AboutSection /></div>
      <div className="reveal"><SkillsSection /></div>
      <div className="reveal"><CertificationsSection limit={2} showViewMore /></div>
      <div className="reveal"><ProjectsSection limit={3} showViewMore /></div>
      <div className="reveal"><ContactSection /></div>
    </>
  );
}

function ProjectsPage() {
  return (
    <div className="reveal">
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