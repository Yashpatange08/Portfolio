import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ArrowUp, Wind, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';

export default function Realm6Helheim({ onScrollToTop }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const contactEmail = 'yashpatange08@gmail.com';
  const contactPhone = '+91-8180824463';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleDispatchRaven = (e) => {
    e.preventDefault();
    setSent(true);
    const subject = encodeURIComponent(`Raven Dispatch to Yash Patange from ${formState.name}`);
    const body = encodeURIComponent(`${formState.message}\n\nWanderer: ${formState.name} (${formState.email})`);
    window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="p-4 sm:p-5 md:p-6 norse-panel text-left space-y-3 sm:space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 border-b border-[#93c5fd]/30 pb-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#93c5fd]/40 bg-[#0c121e] text-[#93c5fd] text-[10px] sm:text-[11px] font-norse-sub mb-1">
            <Wind className="w-3 h-3 text-[#93c5fd]" />
            <span>REALM VI // HELHEIM — THE ROOTS</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-norse-title text-[#f5eedb] uppercase m-0 leading-tight">
            COMMUNICATION THRESHOLD
          </h2>
        </div>

        <button
          onClick={() => {
            if (onScrollToTop) onScrollToTop();
          }}
          className="norse-btn text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 sm:py-1.5 border-[#93c5fd]/50 text-[#e0f2fe] flex items-center gap-1.5 hover:border-[#38bdf8]"
        >
          <ArrowUp className="w-3 h-3" />
          <span>ASCEND APEX</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left Column: Direct Runic Contact & Phone/Email */}
        <div className="md:col-span-5 space-y-3">
          <div className="p-4 rounded-xl bg-[#0b101a]/90 border border-[#93c5fd]/20 space-y-3">
            <div className="flex items-center gap-1.5 text-[11px] font-norse-sub text-[#93c5fd]">
              <span className="text-sm">ᛟ</span>
              <span>COMMUNE WITH YASH PATANGE</span>
            </div>

            <p className="text-xs text-[#cbd5e1] font-norse-body leading-relaxed">
              Seeking a Python Full Stack Developer or Software Engineer for scalable web architectures, Django/FastAPI services, and Generative AI pipelines? Send word across the Nine Realms.
            </p>

            {/* Direct Phone Vessel */}
            <div className="pt-1">
              <span className="text-[10px] font-norse-sub text-slate-400 block mb-1">
                TELEPHONIC SIGNAL (CLICK TO CALL / COPY):
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  href="tel:+918180824463"
                  className="flex-1 flex items-center justify-between p-2 rounded-lg bg-[#060a12] border border-[#93c5fd]/30 hover:border-[#38bdf8] transition-all"
                >
                  <span className="text-xs font-norse-mono text-[#93c5fd] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>{contactPhone}</span>
                  </span>
                  <span className="text-[9px] font-norse-sub text-[#38bdf8] hover:underline">
                    CALL
                  </span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-2.5 py-2 rounded-lg bg-[#172554] text-[#93c5fd] border border-[#3b82f6]/40 text-[10px] font-norse-sub hover:bg-[#1e3a8a] transition-all"
                >
                  {copiedPhone ? 'COPIED!' : 'COPY'}
                </button>
              </div>
            </div>

            {/* 1-Click Copy Email Inscription */}
            <div>
              <span className="text-[10px] font-norse-sub text-slate-400 block mb-1">
                RAVEN MAILBOX (CLICK TO COPY):
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-2 rounded-lg bg-[#060a12] border border-[#93c5fd]/30 hover:border-[#38bdf8] transition-all"
              >
                <span className="text-xs font-norse-mono text-[#93c5fd] truncate flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>{contactEmail}</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-norse-sub bg-[#172554] text-[#93c5fd] border border-[#3b82f6]/40 ml-1">
                  {copiedEmail ? 'COPIED!' : 'COPY'}
                </span>
              </button>
            </div>

            {/* Direct Social Links */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-2">
              <a
                href="https://github.com/Yashpatange08"
                target="_blank"
                rel="noopener noreferrer"
                className="norse-btn text-[11px] px-2.5 py-1 flex items-center gap-1.5 border-[#93c5fd]/30 text-[#e0f2fe]"
              >
                <GithubIcon className="w-3 h-3" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yashpatange08/"
                target="_blank"
                rel="noopener noreferrer"
                className="norse-btn text-[11px] px-2.5 py-1 flex items-center gap-1.5 border-[#93c5fd]/30 text-[#e0f2fe]"
              >
                <LinkedinIcon className="w-3 h-3" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Raven Post Dispatch Form */}
        <div className="md:col-span-7">
          <form onSubmit={handleDispatchRaven} className="p-4 rounded-xl bg-[#0b101a]/90 border border-[#93c5fd]/20 space-y-3">
            <div className="flex items-center gap-1.5 text-[11px] font-norse-sub text-[#93c5fd]">
              <Send className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>DISPATCH A RAVEN TO YASH PATANGE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="text-[10px] font-norse-sub text-slate-300 block mb-0.5">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Recruiter / Collaborator"
                  className="w-full bg-[#060a12] border border-[#93c5fd]/30 focus:border-[#38bdf8] rounded px-3 py-1.5 text-xs font-norse-mono text-[#f5eedb] outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-norse-sub text-slate-300 block mb-0.5">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-[#060a12] border border-[#93c5fd]/30 focus:border-[#38bdf8] rounded px-3 py-1.5 text-xs font-norse-mono text-[#f5eedb] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-norse-sub text-slate-300 block mb-0.5">MESSAGE INSCRIPTION</label>
              <textarea
                rows={2}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Inscribe your inquiry, opportunity, or project proposition..."
                className="w-full bg-[#060a12] border border-[#93c5fd]/30 focus:border-[#38bdf8] rounded px-3 py-1.5 text-xs font-norse-mono text-[#f5eedb] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full norse-btn py-2 border-[#38bdf8]/60 text-[11px] font-norse-sub tracking-widest uppercase flex items-center justify-center gap-1.5 hover:border-[#38bdf8]"
            >
              <Send className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>DISPATCH RAVEN THROUGH THE MISTS</span>
            </button>

            {sent && (
              <div className="text-center text-xs font-norse-sub text-[#4ade80] pt-0.5">
                ✓ Opening default email dispatch to yashpatange08@gmail.com!
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer Inscription */}
      <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-norse-sub text-slate-500 gap-1.5">
        <div>© 2026 YASH PATANGE // SOFTWARE ENGINEER & PYTHON FULL STACK DEVELOPER</div>
        <div className="flex items-center gap-2">
          <span>YGGDRASIL ROOTS // HELHEIM</span>
          <span className="text-[#ffd700]">ᛟ ᚱ ᚦ</span>
        </div>
      </div>
    </div>
  );
}
