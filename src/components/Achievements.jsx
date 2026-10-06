import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Users, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <section id="achievements" className="py-20 lg:py-28 relative bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-mono font-medium uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Milestones & Learning Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Academic <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            An authentic, transparent overview of my real coursework, current certifications, and campus activities.
          </p>
        </div>

        {/* Category Tabs: Courses, Certifications, Activities */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'courses'
                ? 'bg-gradient-to-r from-electric-blue to-accent-purple text-navy-950 shadow-md'
                : 'bg-navy-900/90 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Real Courses ({achievementsData.courses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'certifications'
                ? 'bg-gradient-to-r from-electric-blue to-accent-purple text-navy-950 shadow-md'
                : 'bg-navy-900/90 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certifications</span>
          </button>

          <button
            onClick={() => setActiveTab('activities')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'activities'
                ? 'bg-gradient-to-r from-electric-blue to-accent-purple text-navy-950 shadow-md'
                : 'bg-navy-900/90 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Leadership & Activities</span>
          </button>
        </div>

        {/* Tab 1: Real Courses */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {achievementsData.courses.map((course, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-electric-blue/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-electric-blue/15 text-electric-cyan border border-electric-blue/25">
                    {course.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {course.institution}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {course.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Enrolled / Actively Practiced</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {achievementsData.certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-accent-purple/30 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded uppercase tracking-wider ${
                      cert.status === 'In Progress' 
                        ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                        : 'bg-white/10 text-slate-300 border border-white/10'
                    }`}>
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <span className="text-electric-blue">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Leadership & Activities */}
        {activeTab === 'activities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {achievementsData.activities.map((act, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-electric-blue/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-mono text-electric-blue font-semibold">
                      {act.role}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{act.institution}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  {act.group}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Authenticity Pledge Box */}
        <div className="mt-12 glass-card rounded-2xl p-5 border border-white/10 flex items-center gap-4 text-xs text-slate-300">
          <div className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center text-electric-blue shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <span className="font-bold text-white block">Academic Integrity & Verified Record</span>
            <p className="text-slate-400 mt-0.5">
              All coursework and activities listed represent authentic 1st-year computer science modules and self-study tracks. New verified certifications will be updated as credentials are completed.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
