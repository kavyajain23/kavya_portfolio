import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Sparkles,
  Code
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/10 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center text-electric-blue font-mono font-bold text-xs">
                KJ
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              B.Tech in CSE Core • JECRC University, Jaipur (2026 – 2030)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-navy-900 border border-white/10 text-slate-300 hover:text-electric-blue hover:border-electric-blue/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-navy-900 border border-white/10 text-slate-300 hover:text-accent-purple hover:border-accent-purple/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-navy-900 border border-white/10 text-slate-300 hover:text-electric-cyan hover:border-electric-cyan/40 transition-colors"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-electric-blue ml-2"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-400">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          {/* Requested specific line */}
          <p className="text-slate-300 flex items-center gap-1.5">
            <span>Designed and built by</span>
            <span className="text-electric-blue font-semibold">{personalInfo.name}.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
