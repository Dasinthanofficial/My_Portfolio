import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', type: 'scroll', id: 'home' },
  { name: 'About', type: 'scroll', id: 'about' },
  { name: 'Skills', type: 'scroll', id: 'skills' },
  { name: 'Contact', type: 'scroll', id: 'contact' },
  { name: 'Certifications', type: 'route', to: '/certifications' },
  { name: 'My Projects', type: 'route', to: '/projects' },
];

function getNavHeight() {
  return window.innerWidth >= 768 ? 120 : 64;
}

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const observerRef = useRef(null);

  const HOME_SECTION_IDS = useMemo(() => ['home', 'about', 'skills', 'contact'], []);

  useEffect(() => {
    const handleProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height <= 0) return setScrollProgress(0);
      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener('scroll', handleProgress, { passive: true });
    handleProgress();
    return () => window.removeEventListener('scroll', handleProgress);
  }, []);

  // close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // observe sections only on "/"
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    if (location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { root: null, rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.1, 0.2, 0.4, 0.6] }
    );

    HOME_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, [location.pathname, HOME_SECTION_IDS]);

  const scrollToId = (id) => {
    const navHeight = getNavHeight();

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (link.type === 'route') {
      navigate(link.to, { state: {} });
      return;
    }

    const targetId = link.id;

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
      return;
    }

    scrollToId(targetId);
  };

  const isLinkActive = (link) => {
    if (link.type === 'route') return location.pathname === link.to;
    if (location.pathname === '/') return activeSection === link.id;
    return false;
  };

  return (
    <>
      {/* ✅ FIXES:
          - use inset-x-0 on mobile to avoid overflow
          - use safe padding/height on mobile
          - keep pill style only on md+
      */}
      <nav
        className="
          fixed top-0 inset-x-0
          md:top-6 md:left-1/2 md:-translate-x-1/2
          w-full md:w-[calc(100%-64px)] md:max-w-[1280px]
          h-16 md:h-auto
          flex items-center justify-between
          px-4 md:px-8 py-2 md:py-3
          bg-glass-bg backdrop-blur-glass
          border-b md:border border-glass-border shadow-glass
          rounded-none md:rounded-pill
          z-[9999]
        "
      >
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={(e) => handleNavClick(e, { type: 'scroll', id: 'home' })}
        >
          <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
            <span className="text-lg font-bold text-white font-heading">D</span>
          </div>
          <span className="ml-3 text-white font-heading font-bold tracking-wide md:hidden">
            Dasinthan
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 lg:gap-10 list-none m-0 p-0">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link);
            const href = link.type === 'route' ? link.to : `#${link.id}`;

            return (
              <li key={link.name}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-[13px] lg:text-[15px] font-medium tracking-wide relative transition-colors duration-300
                    ${
                      active
                        ? 'text-white font-semibold drop-shadow-[0_0_12px_rgba(164,58,217,0.8)]'
                        : 'text-text-muted hover:text-white'
                    }
                    after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2
                    after:h-[2px] after:bg-accent after:transition-all after:duration-300 after:rounded-sm
                    ${active ? 'after:w-full shadow-[0_0_8px_var(--accent-primary)]' : 'after:w-0 hover:after:w-full'}
                  `}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer p-2"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle mobile menu"
          type="button"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-4 right-4 md:left-6 md:right-6 h-[2px] bg-white/5 rounded-full overflow-hidden pointer-events-none">
          <div
            className="h-full bg-accent shadow-[0_0_10px_var(--accent-primary)] transition-[width] duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-bg0/95 backdrop-blur-xl z-[9998] flex items-center justify-center
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100 pointer-events-auto'
              : '-translate-y-full opacity-0 pointer-events-none'
          }
        `}
      >
        <div className="absolute inset-0" onClick={() => setIsMobileMenuOpen(false)} />

        <ul className="relative z-10 flex flex-col gap-8 text-center list-none p-0">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link);
            const href = link.type === 'route' ? link.to : `#${link.id}`;

            return (
              <li key={link.name}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-2xl font-bold no-underline transition-colors ${
                    active ? 'text-accent' : 'text-white hover:text-accent/70'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;