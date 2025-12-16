import React from 'react';
import { PROJECTS, PROFILE } from '../constants';
import { Page } from '../types';
import { ArrowRight, Briefcase, PenTool, Cpu } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredProjects = PROJECTS;

  const pillars = [
    {
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      title: "Strategy & Product",
      desc: "Ex-EY Parthenon. Structured problem solving and commercial due diligence expertise."
    },
    {
      icon: <PenTool className="w-6 h-6 text-purple-400" />,
      title: "Design & Craft",
      desc: "IITM Design trained. Passionate about storytelling, film, and visual aesthetics."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "AI & Systems",
      desc: "Building local LLM agents, generative media pipelines, and full-stack demos."
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center z-10 space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-4">
            Available for Hire & Collaboration
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight tracking-tight text-white">
            Merging Strategy, <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text">
              Design & Intelligence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {PROFILE.thesis}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              onClick={() => onNavigate(Page.PROJECTS)}
              className="px-8 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              View Work <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => onNavigate(Page.CONTACT)}
              className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
              <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-white mb-2">Selected Works</h2>
            <p className="text-slate-400">Case studies across my three domains.</p>
          </div>
          <button 
            onClick={() => onNavigate(Page.PROJECTS)} 
            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium hidden md:flex items-center gap-1"
          >
            View all projects <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => onNavigate(Page.PROJECTS)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm border border-white/10 ${
                    project.category === 'Strategy' ? 'text-emerald-300' :
                    project.category === 'Design' ? 'text-purple-300' : 'text-indigo-300'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2">
                {project.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-indigo-500/20 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif text-white mb-4">Join the Thought Stream</h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Get monthly musings on the intersection of business strategy, AI ethics, and design culture. No spam, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
