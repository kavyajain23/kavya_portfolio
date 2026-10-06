import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Code2, 
  Globe, 
  Brain, 
  Database, 
  CheckCircle2, 
  BookMarked,
  Sparkles
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const getAreaIcon = (index) => {
    switch (index) {
      case 0: return <Code2 className="w-5 h-5 text-electric-blue" />;
      case 1: return <Globe className="w-5 h-5 text-electric-cyan" />;
      case 2: return <Brain className="w-5 h-5 text-accent-purple" />;
      case 3: return <Database className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="education" className="py-20 lg:py-28 relative bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-mono font-medium uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Foundation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Undergraduate journey in Computer Science & Engineering, developing rigorous analytical and software foundations.
          </p>
        </div>

        {/* Primary Education Hero Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 mb-12 border border-electric-blue/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-electric-blue/10 via-accent-purple/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-electric-blue/15 text-electric-blue text-xs font-mono font-semibold border border-electric-blue/30">
                  {educationData.status}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-mono border border-white/10 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent-purple" />
                  {educationData.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {educationData.degree}
                </h3>
                <p className="text-lg font-semibold text-electric-blue mt-1 flex items-center gap-2">
                  <span>{educationData.college}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300 text-sm font-normal flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {educationData.location}
                  </span>
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {educationData.overview}
              </p>

              {/* Key Pillars */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Curriculum: CSE Core</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Focus: AI & Web Software</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Target Graduation: 2030</span>
                </div>
              </div>
            </div>

            {/* University Badge Graphic / Stats */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-navy-900/80 border border-white/10 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-accent-purple/20 border border-electric-blue/40 flex items-center justify-center text-electric-blue shadow-lg">
                <BookMarked className="w-8 h-8" />
              </div>
              <div>
                <span className="font-bold text-white text-lg block">JECRC University</span>
                <span className="text-xs text-slate-400 font-mono">Department of Computer Science & Engineering</span>
              </div>
              <div className="w-full pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center text-xs">
                <div>
                  <span className="text-slate-400 block font-mono">Cohort</span>
                  <span className="font-semibold text-white">2026 Batch</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono">Completion</span>
                  <span className="font-semibold text-electric-blue">2030</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Relevant Learning Areas Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Relevant Learning Areas & Core Coursework</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Foundational disciplines actively studied and applied throughout the degree.
              </p>
            </div>
            <span className="text-xs font-mono text-electric-blue">5 Core Competencies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {educationData.learningAreas.map((area, index) => (
              <div 
                key={index}
                className="glass-card glass-card-hover rounded-xl p-5 space-y-3 group border border-white/10 hover:border-electric-blue/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center group-hover:border-electric-blue/40 transition-colors">
                    {getAreaIcon(index)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">0{index + 1}</span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-electric-blue transition-colors">
                  {area.name}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Journey Timeline */}
        <div className="mt-14 glass-card rounded-2xl p-6 sm:p-8">
          <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-mono">
            <Calendar className="w-4 h-4 text-accent-purple" />
            <span>Academic Progression Road</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {educationData.milestones.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-0 sm:pt-6 border-l-2 sm:border-l-0 sm:border-t-2 border-electric-blue/30 space-y-2">
                <span className="absolute -left-[9px] sm:left-0 top-0 sm:-top-[9px] w-4 h-4 rounded-full bg-navy-950 border-2 border-electric-blue"></span>
                <span className="text-xs font-mono font-bold text-electric-blue block">{item.year}</span>
                <h5 className="text-sm font-bold text-white">{item.title}</h5>
                <span className="text-xs text-accent-purple block font-mono">{item.institution}</span>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
