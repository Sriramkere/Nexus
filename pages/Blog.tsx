import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-serif text-white mb-4">Notes & Experiments</h1>
        <p className="text-slate-400 text-lg">
          A collection of thoughts on AI implementation, design philosophy, and market structures.
        </p>
      </div>

      <div className="space-y-12">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group cursor-pointer border-b border-white/5 pb-12 last:border-0">
            <div className="flex flex-col md:flex-row gap-6 md:items-baseline justify-between mb-3">
              <h2 className="text-2xl font-medium text-white group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h2>
              <span className="text-sm text-slate-500 font-mono whitespace-nowrap">{post.date}</span>
            </div>
            
            <p className="text-slate-400 mb-4 leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded">#{tag}</span>
                ))}
                <span className="text-xs text-slate-600 py-1 ml-2">• {post.readTime} read</span>
              </div>
              <div className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-slate-600 text-sm">More content available on <a href="#" className="underline hover:text-white">Notion</a>.</p>
      </div>
    </div>
  );
};

export default Blog;
