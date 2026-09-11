import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { soundFx } from '../../utils/audio';

export default function Level6Contact({ onScrollToTop }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const contactEmail = 'yashpatange08@gmail.com';

  const handleCopy = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playClick();
    setSent(true);
    const subject = encodeURIComponent(`Project Collaboration from ${formState.name}`);
    const body = encodeURIComponent(`${formState.message}\n\nSender: ${formState.name} (${formState.email})`);
    window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="p-6 md:p-10 toy-panel text-left space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="toy-pill pill-yellow text-xs font-black">LEVEL 06</span>
            <span className="toy-pill pill-dark text-xs font-mono-toy">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[#FAF6EF] uppercase tracking-tighter m-0">
            SAY HELLO.
          </h2>
        </div>

        <button
          onClick={() => {
            soundFx.playLevelShift(1);
            if (onScrollToTop) onScrollToTop();
          }}
          onMouseEnter={() => soundFx.playHover()}
          className="toy-btn px-4 py-2 bg-white/10 hover:bg-[#FFE500] hover:text-[#0D0D0E] text-[#FAF6EF] text-xs font-display flex items-center gap-2"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>ASCEND TO LEVEL 01</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Big Direct Contact Banner */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-6 rounded-2xl bg-[#151518]/90 border border-white/10 space-y-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="toy-pill pill-yellow text-xs font-black">Open</span>
              <span className="toy-pill pill-pink text-xs font-black">For</span>
              <span className="toy-pill pill-lavender text-xs font-black">Opportunities</span>
            </div>

            <p className="text-sm text-slate-300 font-body leading-relaxed">
              Have an exciting project, full-stack challenge, or creative web experience to build? Let's team up and create something unmistakably original.
            </p>

            {/* 1-Click Copy Email Pill */}
            <div className="pt-2">
              <span className="text-[11px] font-mono-toy text-slate-400 block mb-1">
                DIRECT INBOX (CLICK TO COPY):
              </span>
              <button
                type="button"
                onClick={handleCopy}
                onMouseEnter={() => soundFx.playHover()}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-[#0e0e12] border border-white/15 hover:border-[#FFE500] transition-colors group"
              >
                <span className="text-xs sm:text-sm font-mono-toy font-bold text-[#FFE500] truncate">
                  {contactEmail}
                </span>
                <span className="toy-pill pill-yellow text-[11px] font-black ml-2">
                  {copied ? 'COPIED!' : 'COPY'}
                </span>
              </button>
            </div>

            {/* Direct Social Links */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2.5">
              <a
                href="https://github.com/Yashpatange08"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="toy-btn px-3 py-2 bg-[#1b1b20] hover:bg-[#FFE500] hover:text-[#0D0D0E] text-[#FAF6EF] text-xs font-display flex items-center gap-1.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://www.linkedin.com/in/yashpatange08/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="toy-btn px-3 py-2 bg-[#1b1b20] hover:bg-[#E9E3F3] hover:text-[#0D0D0E] text-[#FAF6EF] text-xs font-display flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dispatch Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-[#151518]/90 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-toy text-slate-300">
              <Sparkles className="w-4 h-4 text-[#FFE500]" />
              <span>SEND A DIRECT INQUIRY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-mono-toy text-slate-400 block mb-1">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="What's your name?"
                  className="w-full bg-[#0e0e12] border border-white/15 focus:border-[#FFE500] rounded-xl px-3.5 py-2.5 text-xs font-mono-toy text-[#FAF6EF] outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono-toy text-slate-400 block mb-1">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full bg-[#0e0e12] border border-white/15 focus:border-[#FFE500] rounded-xl px-3.5 py-2.5 text-xs font-mono-toy text-[#FAF6EF] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono-toy text-slate-400 block mb-1">MESSAGE / INQUIRY</label>
              <textarea
                rows={3}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell me about your project, timeline, or idea..."
                className="w-full bg-[#0e0e12] border border-white/15 focus:border-[#FFE500] rounded-xl px-3.5 py-2.5 text-xs font-mono-toy text-[#FAF6EF] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              onMouseEnter={() => soundFx.playHover()}
              className="w-full toy-btn py-3 bg-[#FFE500] text-[#0D0D0E] text-xs sm:text-sm font-display tracking-tight font-black uppercase flex items-center justify-center gap-2 hover:bg-[#fff066]"
            >
              <Send className="w-4 h-4" />
              <span>LAUNCH TRANSMISSION</span>
            </button>

            {sent && (
              <div className="text-center text-xs font-mono-toy text-[#FFE500] pt-1">
                ✓ Ready in your email client!
              </div>
            )}
          </form>
        </div>
      </div>

      {/* ToyFight Signature Rolling Footer Bar */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-toy text-slate-500 gap-2">
        <div>© 2026 YASH PATANGE® ALL RIGHTS RESERVED</div>
        <div className="flex items-center gap-2">
          <span>THE UNMISTAKABLY ORIGINAL</span>
          <span className="toy-pill pill-yellow text-[10px] text-[#0D0D0E] font-black">TOYFIGHT VIBES</span>
        </div>
      </div>
    </div>
  );
}
