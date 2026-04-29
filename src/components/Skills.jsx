import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="section-container relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-400">Technologies</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          I work with modern tools and technologies to analyze data, build models, and create meaningful insights.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.id} className="relative group overflow-hidden rounded-2xl bg-white dark:bg-[#0a1128] border border-blue-500/20 dark:border-blue-500/30 transition-all duration-500 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col h-full">
              {/* Top gradient glow inside card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-6 xl:p-8 flex flex-col flex-1 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30 text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 shadow-[inset_0_0_15px_rgba(59,130,246,0.1)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white tracking-wide">
                    {skill.title}
                  </h3>
                </div>
                
                <div className="space-y-5 mb-8 flex-1">
                  {skill.tags.map((tag, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-slate-700 dark:text-slate-200 tracking-wide">{tag.name}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden shadow-inner">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-1000 ease-out"
                          style={{ width: `${tag.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800/60">
                  {skill.tags.map((tag, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 text-xs rounded-full border border-slate-200 dark:border-slate-700/50 transition-colors">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto max-w-4xl p-6 md:p-8 rounded-2xl border border-blue-500/20 dark:border-blue-500/30 bg-white dark:bg-[#0a1128] shadow-[0_0_20px_rgba(59,130,246,0.05)] relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full md:w-auto">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">Experience Level</span>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
            <span>Beginner</span> <span className="text-blue-500 text-xs">✦</span>
            <span className="text-blue-500 dark:text-blue-400">Intermediate</span> <span className="text-blue-500 text-xs">✦</span>
            <span>Advanced</span>
          </div>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-slate-200 dark:bg-slate-800"></div>
        <div className="block md:hidden h-px w-full bg-slate-200 dark:bg-slate-800"></div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full md:w-auto">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">Currently Learning</span>
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm rounded-full border border-blue-200 dark:border-blue-500/30 font-medium flex items-center gap-1.5 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              Deep Learning ⚡
            </span>
            <span className="px-4 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm rounded-full border border-emerald-200 dark:border-emerald-500/30 font-medium flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
              MLOps ⚡
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
