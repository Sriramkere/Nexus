import React, { useState } from 'react';
import { Mail, Clock, CalendarCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call/Zapier hook
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif text-white mb-4">Let's Collaborate</h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Whether you need a strategic partner for your startup, a creative lead for your campaign, or an AI architect for your product.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-slate-900 border border-white/5 rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
            <Mail className="text-indigo-400" /> Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Project Details</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                placeholder="Tell me about your idea..."
              />
            </div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'idle' ? 'Send Message' : status === 'sending' ? 'Sending...' : 'Sent!'}
            </button>
            {status === 'success' && (
              <p className="text-center text-sm text-emerald-400 mt-2">Thanks! I'll get back to you within 24 hours.</p>
            )}
          </form>
        </div>

        {/* Schedule */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
              <CalendarCheck className="text-purple-400" /> Book a Discovery Call
            </h2>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Prefer to talk face-to-face? Schedule a 30-minute discovery call to discuss potential collaboration or consulting.
            </p>
            <a 
              href="#" 
              onClick={e => e.preventDefault()}
              className="inline-flex items-center justify-center w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Open Calendly
            </a>
          </div>

          <div className="bg-slate-900 border border-white/5 rounded-2xl p-8">
             <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <Clock className="text-indigo-400" size={18} /> Current Availability
             </h3>
             <p className="text-slate-400 text-sm">
                Currently accepting new projects for <strong>Q4 2024</strong>.
             </p>
             <div className="mt-4 flex gap-2">
               <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/20">Freelance</span>
               <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full border border-indigo-500/20">Consulting</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
