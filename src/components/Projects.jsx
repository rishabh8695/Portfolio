import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <span className="bg-blue-500/10 text-blue-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block border border-blue-500/20">
          My Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          A showcase of my data science and machine learning projects
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="card group hover:-translate-y-2 flex flex-col h-full transform transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm shadow-inner text-2xl">
                  {project.id === 1 ? '📈' : project.id === 2 ? '📊' : project.id === 3 ? '🧠' : '🔍'}
                </div>
                <span className={`text-xs px-3.5 py-1.5 rounded-full border backdrop-blur-md font-medium tracking-wide ${project.status === 'Featured' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]' : 'bg-orange-500/10 text-orange-400 border-orange-500/20'}`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-base mb-6 leading-relaxed line-clamp-3 min-h-[60px] font-light">
              {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 bg-white dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 text-xs rounded-full border border-slate-200 dark:border-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700/60 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-6 mt-auto">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 group/btn">
                    <span className="bg-white dark:bg-slate-800/80 p-1.5 rounded-full px-5 border border-slate-200 dark:border-slate-700/50 group-hover/btn:border-slate-400 dark:group-hover/btn:border-slate-500/50 group-hover/btn:bg-slate-100 dark:group-hover/btn:bg-slate-700 transition-all backdrop-blur-sm">GitHub</span>
                  </a>
                )}
                {project.links.view && (
                  <a href={project.links.view} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 group/link">
                    View Project <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                )}
                {project.links.preview && (
                  <a href={project.links.preview} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 group/link">
                    Preview <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex items-center justify-center gap-4">
        <a href="https://github.com/rishabh8695" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center gap-2">
          View All Projects on GitHub
        </a>
        <span className="text-slate-500 dark:text-slate-400 text-sm">5+ Repositories</span>
      </div>
    </section>
  );
};

export default Projects;
