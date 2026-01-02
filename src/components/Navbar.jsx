import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', type: 'route', to: '/', activeWhen: ['home'] },
  { name: 'About', type: 'scroll', id: 'about', activeWhen: ['about'] },
  { name: 'Skills', type: 'scroll', id: 'skills', activeWhen: ['skills'] },
  { name: 'Certifications', type: 'route', to: '/certifications', activeWhen: ['certifications'] },
  { name: 'Services', type: 'scroll', id: 'services', activeWhen: ['services'] },
  { name: 'My Projects', type: 'route', to: '/projects', activeWhen: ['my-projects'] },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    ['home', 'about', 'skills', 'certifications', 'services', 'my-projects', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 100;
    const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (link.type === 'route') {
      if (link.to === '/' && location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      navigate(link.to);
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
    if (location.pathname === '/projects') return link.to === '/projects';
    if (location.pathname === '/certifications') return link.to === '/certifications';
    if (location.pathname !== '/') return link.to === location.pathname;
    return link.activeWhen?.includes(activeSection);
  };

  return (
    <>
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] max-w-[1280px]
                   flex justify-between items-center px-4 md:px-8 py-3
                   bg-glass-bg backdrop-blur-glass border border-glass-border shadow-glass
                   rounded-pill z-[9999]"
      >
        <div className="flex items-center z-50 cursor-pointer group" onClick={(e) => handleNavClick(e, NAV_LINKS[0])}>
          <div
            className="relative h-10 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-neon
                       flex items-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden
                       w-10 group-hover:w-[135px] hover:border-accent/50"
          >
            <div className="absolute left-0 w-10 h-10 flex items-center justify-center">
              <span className="text-lg font-bold text-white font-heading group-hover:text-accent transition-colors">D</span>
            </div>
            <div className="pl-10 pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[15px] font-bold text-white whitespace-nowrap tracking-wide font-heading">asinthan</span>
            </div>
          </div>
        </div>

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
                    ${active ? 'text-white font-semibold drop-shadow-[0_0_12px_rgba(164,58,217,0.8)]' : 'text-text-muted hover:text-white'}
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

        <div className="flex gap-4 items-center z-10">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);

              if (location.pathname !== '/') {
                navigate('/', { state: { scrollTo: 'contact' } });
                return;
              }
              scrollToId('contact');
            }}
            className="hidden md:inline-flex px-6 py-2.5 bg-accent/20 border border-accent/40 rounded-pill
                       text-white text-sm font-semibold hover:bg-accent hover:border-accent
                       shadow-neon transition-all duration-300 hover-lift no-underline"
          >
            Contact Me
          </a>

          <button
            className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer p-1"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-white/5 rounded-full overflow-hidden pointer-events-none">
          <div
            className="h-full bg-accent shadow-[0_0_10px_var(--accent-primary)] transition-[width] duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-bg0/95 backdrop-blur-xl z-[9998] flex items-center justify-center
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
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
                  className={`text-2xl font-bold no-underline transition-colors ${active ? 'text-accent' : 'text-white hover:text-accent/70'}`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);

                if (location.pathname !== '/') {
                  navigate('/', { state: { scrollTo: 'contact' } });
                  return;
                }
                scrollToId('contact');
              }}
              className="inline-block mt-4 px-8 py-3 bg-accent text-white font-bold rounded-full shadow-neon"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;