import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, PlayCircle } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-serif text-white mb-4">Case Studies</h1>
        <p className="text-slate-400 text-lg">
          Deep dives into complex problems solved through strategy, code, and design.
        </p>
      </div>

      <div className="space-y-24">
        {PROJECTS.map((project, index) => (
          <article key={project.id} className="group">
            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div className="order-2 md:order-1 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 ${
                     project.category === 'Strategy' ? 'text-emerald-400' :
                     project.category === 'Design' ? 'text-purple-400' : 'text-indigo-400'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-serif font-medium text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h2>
                
                <p className="text-slate-300 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  {project.demoLink && (
                    <a href={project.demoLink} className="flex items-center gap-2 text-white hover:text-indigo-400 font-medium transition-colors">
                      <PlayCircle size={20} /> Watch Demo
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={18} /> Artifact
                    </a>
                  )}
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-white/5 shadow-2xl group-hover:shadow-indigo-500/10 transition-all">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay for aesthetic */}
                  <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
            {index < PROJECTS.length - 1 && <div className="h-px bg-white/5 w-full my-12" />}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
