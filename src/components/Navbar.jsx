import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav py-3.5 shadow-lg shadow-black/30' 
        : 'bg-navy-950/70 backdrop-blur-md py-5 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-electric-blue rounded-lg p-1"
            aria-label="Kavya Jain - Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-blue/20 to-accent-purple/30 border border-electric-blue/40 flex items-center justify-center text-electric-blue group-hover:border-electric-blue group-hover:scale-105 transition-all">
              <span className="font-mono font-bold text-sm tracking-tighter text-white">KJ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-electric-blue transition-colors flex items-center gap-1.5">
                Kavya Jain
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Available for learning & projects"></span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">CSE '30</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold shadow-inner border border-electric-blue/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Quick Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-electric-blue hover:bg-white/5 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-electric-blue hover:bg-white/5 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-1 px-4 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-electric-blue/20 to-accent-purple/20 hover:from-electric-blue/30 hover:to-accent-purple/30 border border-electric-blue/40 hover:border-electric-blue text-white transition-all shadow-sm flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-electric-blue" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-electric-blue transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6 text-electric-blue" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav border-b border-electric-blue/20 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white bg-electric-blue/15 border-l-4 border-electric-blue font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 text-slate-300 hover:text-electric-blue"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 text-slate-300 hover:text-electric-blue"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-electric-blue to-accent-purple text-white shadow"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
