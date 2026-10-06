import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Code2, 
  Eye, 
  ArrowUpRight 
} from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-navy-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-mono font-medium uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Honest, practical student-level projects built during my first-year engineering coursework and independent exploration.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-electric-blue/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-electric-blue/5 rounded-full blur-3xl group-hover:bg-electric-blue/15 transition-all pointer-events-none"></div>

              <div>
                {/* Top Card Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-accent-purple/15 text-accent-purple border border-accent-purple/30">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technology Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-navy-900/90 text-slate-300 border border-white/10 group-hover:border-electric-blue/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: "View Project" and "GitHub" */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-electric-blue/20 to-accent-purple/20 hover:from-electric-blue/30 hover:to-accent-purple/30 text-white font-semibold text-xs border border-electric-blue/30 hover:border-electric-blue flex items-center gap-1.5 transition-all focus-visible:ring-2 focus-visible:ring-electric-blue"
                  aria-label={`View details of ${project.title}`}
                >
                  <Eye className="w-3.5 h-3.5 text-electric-blue" />
                  <span>View Project</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 text-xs font-medium flex items-center gap-1.5 transition-all focus-visible:ring-2 focus-visible:ring-electric-blue"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repository Exploration CTA Banner */}
        <div className="mt-14 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Github className="w-5 h-5 text-electric-blue" />
              <span>Explore My Code on GitHub</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Check out my repositories, daily commits, and university code labs on profile @kavyajain23.
            </p>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-electric-blue font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0"
          >
            <span>Visit @kavyajain23</span>
            <ArrowUpRight className="w-4 h-4 text-electric-blue" />
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
