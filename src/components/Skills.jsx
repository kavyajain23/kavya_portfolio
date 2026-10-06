import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Brain, 
  Compass, 
  Sparkles, 
  CheckCircle, 
  HelpCircle,
  Filter
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Programming', 'AI & Tools', 'Productivity'];

  const filteredCategories = skillsData.filter((cat) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Frontend') return cat.category.toLowerCase().includes('frontend');
    if (activeFilter === 'Programming') return cat.category.toLowerCase().includes('programming');
    if (activeFilter === 'AI & Tools') return cat.category.toLowerCase().includes('ai');
    if (activeFilter === 'Productivity') return cat.category.toLowerCase().includes('productivity');
    return true;
  });

  const getCategoryIcon = (categoryName) => {
    if (categoryName.includes('Frontend')) return <Layout className="w-5 h-5 text-electric-blue" />;
    if (categoryName.includes('Programming')) return <Code2 className="w-5 h-5 text-emerald-400" />;
    if (categoryName.includes('AI')) return <Brain className="w-5 h-5 text-accent-purple" />;
    return <Compass className="w-5 h-5 text-amber-400" />;
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-navy-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-mono font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized technical skills with transparent proficiency tracking. Unfamiliar and emerging areas are honestly marked as <span className="text-amber-400 font-semibold font-mono">“Learning”</span>.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-electric-blue to-accent-purple text-navy-950 font-bold shadow-md shadow-electric-blue/20'
                  : 'bg-navy-900/90 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((categoryGroup, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 sm:p-7 space-y-6 border border-white/10 hover:border-electric-blue/30 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {categoryGroup.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {categoryGroup.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                  {categoryGroup.skills.length} skills
                </span>
              </div>

              {/* Skills List in Category */}
              <div className="space-y-4">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-xl bg-navy-900/70 border border-white/5 hover:border-white/15 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm">
                          {skill.name}
                        </span>
                        
                        {/* Status Tag: Transparently marking 'Learning' */}
                        {skill.isLearning ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30 uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                            Learning
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            {skill.status}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Progress representation */}
                    <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ${
                          skill.isLearning
                            ? 'bg-gradient-to-r from-amber-400/80 to-amber-500'
                            : 'bg-gradient-to-r from-electric-blue to-accent-purple'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    <div className="mt-1.5 flex sm:hidden text-[10px] text-slate-400 font-mono">
                      {skill.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Student Philosophy Note on Skills */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center text-electric-blue shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-slate-300">
              <strong className="text-white">Continuous Growth Mindset:</strong> As a first-year student, I prioritize solid computer science fundamentals, clear code structure, and daily exploratory practice over claiming unearned senior expertise.
            </p>
          </div>
          <span className="font-mono text-electric-blue shrink-0">B.Tech Batch '30</span>
        </div>

      </div>
    </section>
  );
}
