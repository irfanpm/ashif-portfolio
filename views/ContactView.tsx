
import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Linkedin, Instagram, Github, Facebook, Send, Check } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PROFILE_DATA } from '../constants';

const ContactView: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate slight processing delay for UX, then open email client
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Brief:\n${formData.message}`);
      window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
      
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <SectionHeader 
        badge="Inquiry"
        title="Let’s build something creative together"
        subtitle="I'm open to freelance collaborations, full-time opportunities, or just a quick creative chat."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
        <div className="space-y-10">
          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email</p>
              <p className="font-black text-lg tracking-tight">{PROFILE_DATA.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
              <p className="font-black text-lg tracking-tight">{PROFILE_DATA.phone}</p>
            </div>
          </div>

          <div className="pt-10 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Social Channels</p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "https://www.instagram.com/__ashiffff?igsh=dmJwYm52M3Rza3J0" },
                { Icon: Github, href: "#" },
                { Icon: Facebook, href: "https://www.facebook.com/share/18WhVidBDp/" }
              ].map(({Icon, href}, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-zinc-50 dark:bg-zinc-900 p-10 md:p-14 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-sm relative overflow-hidden">
            {status === 'sent' && (
              <div className="absolute inset-0 bg-white/90 dark:bg-zinc-900/95 backdrop-blur-md z-10 flex flex-col items-center justify-center p-10 text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6 scale-110">
                  <Check size={40} />
                </div>
                <h3 className="text-3xl font-black mb-2 tracking-tight">Message Delivered!</h3>
                <p className="text-gray-500 font-medium mb-8">I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm font-black hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                >
                  SEND ANOTHER
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-gray-400">Full Name</label>
                <input 
                  required 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-[1.25rem] px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-gray-400">Email Address</label>
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-[1.25rem] px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            <div className="space-y-2 mb-10">
              <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-gray-400">Project Brief</label>
              <textarea 
                required 
                rows={5} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-[1.5rem] px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none font-medium" 
                placeholder="Tell me about your brand needs..."></textarea>
            </div>
            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="w-full py-6 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 active:scale-[0.98] disabled:opacity-50"
            >
              {status === 'sending' ? (
                <div className="flex gap-2 items-center">
                   <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                   <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75" />
                   <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150" />
                </div>
              ) : (
                <>SEND INQUIRY <ArrowRight size={20} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
