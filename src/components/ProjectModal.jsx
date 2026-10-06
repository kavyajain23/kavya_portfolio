import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-navy-900 border border-electric-blue/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy-950/90 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-electric-blue animate-pulse"></span>
            <span className="text-xs font-mono text-electric-blue font-semibold uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-electric-blue"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          <div>
            <h3 id="modal-project-title" className="text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {project.longDescription || project.shortDescription}
            </p>
          </div>

          {/* Technology Stack Tags */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-electric-cyan"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights / Features */}
          {project.highlights && (
            <div className="space-y-3 p-4 rounded-xl bg-navy-950/60 border border-white/5">
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
                Key Project Highlights
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Student Development Context */}
          <div className="p-4 rounded-xl bg-electric-blue/5 border border-electric-blue/15 text-xs text-slate-300 space-y-1">
            <span className="font-semibold text-electric-blue block font-mono">Student Engineering Note:</span>
            <p>
              Developed by Kavya Jain during 1st-year B.Tech CSE studies at JECRC University as an experiential learning project.
            </p>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="px-6 py-4 bg-navy-950/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-electric-blue to-accent-purple text-navy-950 font-bold text-xs hover:opacity-90 transition-opacity"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
