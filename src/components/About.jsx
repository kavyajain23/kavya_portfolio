import React from 'react';
import { 
  Sparkles, 
  Cpu, 
  BookOpen, 
  Compass, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-navy-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-mono font-medium uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            First-year engineering student blending curiosity, practical programming, and creative web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Hi, I'm <span className="text-electric-blue">Kavya</span>.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                    CSE Core Undergrad • JECRC University, Jaipur
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center text-electric-blue">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              {/* Warm, Professional Student Introduction */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-white font-semibold">B.Tech student in Computer Science & Engineering Core</strong> at <span className="text-slate-100 font-medium">JECRC University</span>, Jaipur, with a growing passion for <span className="text-electric-blue font-medium">artificial intelligence</span>, <span className="text-accent-purple font-medium">frontend web development</span>, and <span className="text-slate-100 font-medium">digital productivity</span>.
                </p>
                <p>
                  I enjoy learning by building practical projects, exploring new developer tools, and improving my structured problem-solving skills step by step. Rather than only absorbing theory, I believe the best way to master computer science is by getting hands-on with code and creating useful, clean digital experiences.
                </p>
                <p>
                  My goal during my engineering journey is to bridge accessible user interfaces with smart, data-driven systems, preparing for impactful engineering roles while collaborating with enthusiastic peers and mentors.
                </p>
              </div>

              {/* Currently Learning Section - Prominently Displayed */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-accent-purple" />
                    Currently Learning & Exploring
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active Study
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {personalInfo.currentlyLearning.slice(0, 3).map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-navy-900/80 border border-white/10 hover:border-electric-blue/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
                        <span className="text-xs font-bold text-white uppercase tracking-tight">{item.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 block">{item.category}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Facts Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="glass-card rounded-xl p-3.5 text-center">
                <span className="text-xs text-slate-400 block font-mono">Location</span>
                <span className="text-sm font-semibold text-white mt-1 block">Jaipur, India</span>
              </div>
              <div className="glass-card rounded-xl p-3.5 text-center">
                <span className="text-xs text-slate-400 block font-mono">University</span>
                <span className="text-sm font-semibold text-white mt-1 block">JECRC</span>
              </div>
              <div className="glass-card rounded-xl p-3.5 text-center">
                <span className="text-xs text-slate-400 block font-mono">Major</span>
                <span className="text-sm font-semibold text-white mt-1 block">CSE Core</span>
              </div>
              <div className="glass-card rounded-xl p-3.5 text-center">
                <span className="text-xs text-slate-400 block font-mono">Target Grad</span>
                <span className="text-sm font-semibold text-electric-blue mt-1 block">2030</span>
              </div>
            </div>
          </div>

          {/* Right Column: Two Highlight Cards as requested */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Highlight Card 1: Curious Learner */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl group-hover:bg-electric-blue/20 transition-all pointer-events-none"></div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center text-electric-blue shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-electric-blue transition-colors">
                      Curious Learner
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-electric-blue/15 text-electric-cyan border border-electric-blue/20">
                      Core Mindset
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Always inquisitive about why things work the way they do under the hood. From understanding fundamental computational logic in C and Python to experimenting with modern CSS layout tricks and AI prompts, I maintain an everyday habit of deliberate discovery.
                  </p>
                  <ul className="pt-2 space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-electric-blue"></span>
                      <span>Hands-on mini experiments over passive memorization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-electric-blue"></span>
                      <span>Enthusiastic about learning from documentation and codebases</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Highlight Card 2: Technology Enthusiast */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-2xl group-hover:bg-accent-purple/20 transition-all pointer-events-none"></div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple shrink-0 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">
                      Technology Enthusiast
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-purple/15 text-accent-violet border border-accent-purple/20">
                      Vision
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Fascinated by how artificial intelligence and sleek frontend interfaces intersect to make everyday tasks effortless. Constantly looking forward to how smart software can simplify education, student productivity, and creative workflows.
                  </p>
                  <ul className="pt-2 space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent-purple"></span>
                      <span>Excited about Generative AI & human-centered UX</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent-purple"></span>
                      <span>Adopting digital productivity tools to work efficiently</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic Journey Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-slate-400 block">Current Academic Stage</span>
                <span className="text-sm font-semibold text-white">First Year • B.Tech CSE (2026 – 2030)</span>
              </div>
              <a
                href="#education"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-electric-blue hover:text-white transition-colors flex items-center gap-1 text-xs font-mono"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
