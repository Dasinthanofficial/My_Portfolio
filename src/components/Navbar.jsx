import React, { useState, useEffect } from 'react';

const Navbar = () => {
    // UPDATED: Added 'Certifications' to the navigation links
    const links = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Certifications', id: 'certifications' }, // New Link
        { name: 'Services', id: 'services' },
        { name: 'My Projects', id: 'my-projects' },
    ];

    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // 1. PROGRESS BAR LOGIC
    useEffect(() => {
        const handleProgress = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };
        window.addEventListener('scroll', handleProgress);
        return () => window.removeEventListener('scroll', handleProgress);
    }, []);

    // 2. ACTIVE SECTION LOGIC
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px -45% 0px', 
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        links.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        // Also observe contact section
        const contactEl = document.getElementById('contact');
        if (contactEl) observer.observe(contactEl);

        return () => observer.disconnect();
    }, [links]);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const navHeight = 100;
            const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] max-w-[1280px]
                          flex justify-between items-center px-4 md:px-8 py-3
                          bg-glass-bg backdrop-blur-glass border border-glass-border shadow-glass 
                          rounded-pill z-[9999]">

                {/* Logo */}
                <div className="flex items-center gap-3 z-10 group cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center 
                                  bg-gradient-to-br from-white/10 to-white/5 shadow-neon 
                                  group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg font-bold text-white font-heading">S</span>
                    </div>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8 lg:gap-10 list-none m-0 p-0">
                    {links.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <li key={link.id}>
                                <a 
                                    href={`#${link.id}`} 
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className={`text-[14px] lg:text-[15px] font-medium tracking-wide relative transition-colors duration-300
                                              ${isActive 
                                                ? 'text-white font-semibold drop-shadow-[0_0_12px_rgba(164,58,217,0.8)]' 
                                                : 'text-text-muted hover:text-white'
                                              }
                                              after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 
                                              after:h-[2px] after:bg-accent after:transition-all after:duration-300 after:rounded-sm
                                              ${isActive ? 'after:w-full shadow-[0_0_8px_var(--accent-primary)]' : 'after:w-0 hover:after:w-full'}
                                    `}
                                >
                                    {link.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Right Actions */}
                <div className="flex gap-4 items-center z-10">
                    {/* Contact Button (Desktop) */}
                    <a href="#contact" 
                       onClick={(e) => handleNavClick(e, 'contact')} 
                       className="hidden md:inline-flex px-6 py-2.5 bg-accent/20 border border-accent/40 rounded-pill 
                                  text-white text-sm font-semibold hover:bg-accent hover:border-accent 
                                  shadow-neon transition-all duration-300 hover-lift no-underline">
                        Contact Me
                    </a>
                    
                    {/* Mobile Toggle */}
                    <button 
                        className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer p-1" 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Scroll Progress Bar */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-white/5 rounded-full overflow-hidden pointer-events-none">
                    <div 
                        className="h-full bg-accent shadow-[0_0_10px_var(--accent-primary)] transition-[width] duration-100 ease-out"
                        style={{ width: `${scrollProgress}%` }} 
                    />
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-bg0/95 backdrop-blur-xl z-[9998] flex items-center justify-center
                           transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]
                           ${isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                
                {/* Background Click to Close */}
                <div className="absolute inset-0" onClick={() => setIsMobileMenuOpen(false)}></div>

                <ul className="relative z-10 flex flex-col gap-8 text-center list-none p-0">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a 
                                href={`#${link.id}`} 
                                onClick={(e) => handleNavClick(e, link.id)}
                                className={`text-2xl font-bold no-underline transition-colors
                                          ${activeSection === link.id ? 'text-accent' : 'text-white hover:text-accent/70'}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} 
                           className="inline-block mt-4 px-8 py-3 bg-accent text-white font-bold rounded-full shadow-neon">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;