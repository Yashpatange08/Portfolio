import React, { useState } from 'react';
import { ArrowUp, Phone, Mail, Compass, Sparkles, ChevronUp, ChevronDown, ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';

export default function NorseFooter({ currentLevel, onJumpToLevel, depth }) {
  const [expanded, setExpanded] = useState(false);

  const realms = [
    { id: 1, name: 'ASGARD', rune: 'ᚫ', label: 'Summary' },
    { id: 2, name: 'VANAHEIM', rune: 'ᚹ', label: 'Skills' },
    { id: 3, name: 'MIDGARD', rune: 'ᛗ', label: 'Projects' },
    { id: 4, name: 'ALFHEIM', rune: 'ᛚ', label: 'Certifications' },
    { id: 5, name: 'MUSPELHEIM', rune: 'ᚠ', label: 'Education' },
    { id: 6, name: 'HELHEIM', rune: 'ᚺ', label: 'Contact' },
  ];

  const futharkRunes = 'ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛋ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛟ ᛞ';

  return (
    <footer className="w-full pointer-events-auto select-none font-norse-sub z-50">
      {/* Expandable Grand Norse Monument Drawer */}
      {expanded && (
        <div className="mb-2 p-3 sm:p-5 rounded-2xl bg-[#090d16]/95 sm:backdrop-blur-xl border border-[#d4af37]/40 shadow-[0_0_40px_rgba(0,0,0,0.9)] space-y-3 sm:space-y-4 animate-in fade-in slide-in-from-bottom duration-300 max-w-5xl mx-auto text-left max-h-[55vh] overflow-y-auto">
          {/* Top Runes Decorative Banner */}
          <div className="text-center text-[#d4af37]/60 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] font-norse-title border-b border-[#d4af37]/20 pb-2">
            {futharkRunes}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-1">
            {/* Column 1: Identity & Role */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold font-norse-title text-[#ffd700] tracking-wider">
                YASH PATANGE
              </div>
              <div className="text-[11px] font-norse-mono text-[#cbd5e1] leading-tight">
                Software Engineer ✦ Python Full Stack Developer
              </div>
              <p className="text-[10px] font-norse-body text-slate-400 leading-relaxed pt-1">
                Crafting real-time WebGL spatial landscapes, Django & FastAPI backend engines, and Generative AI pipelines.
              </p>
            </div>

            {/* Column 2: Direct Contact Signals */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold font-norse-title text-[#d4af37] tracking-wider">
                COMMUNICATION VESSELS
              </div>
              <div className="space-y-1 text-[11px] font-norse-mono">
                <a
                  href="tel:+918180824463"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-[#ffd700] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#d4af37]" />
                  <span>+91-8180824463</span>
                </a>
                <a
                  href="mailto:yashpatange08@gmail.com"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-[#38bdf8] transition-colors truncate"
                >
                  <Mail className="w-3 h-3 text-[#38bdf8]" />
                  <span>yashpatange08@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://github.com/Yashpatange08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yashpatange08/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-400 hover:text-[#93c5fd] transition-colors"
                  >
                    <LinkedinIcon className="w-3 h-3" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: World Tree Realms Jump */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold font-norse-title text-[#d4af37] tracking-wider">
                YGGDRASIL REALMS
              </div>
              <div className="grid grid-cols-2 gap-1 text-[10px] font-norse-sub">
                {realms.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => onJumpToLevel && onJumpToLevel(r.id)}
                    className={`text-left py-0.5 px-1.5 rounded transition-all flex items-center gap-1 ${
                      currentLevel === r.id
                        ? 'text-[#ffd700] font-bold bg-white/10'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span className="text-[11px] text-[#d4af37]">{r.rune}</span>
                    <span>{r.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Column 4: Academic Consecration */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold font-norse-title text-[#d4af37] tracking-wider">
                ACADEMIC ACCREDITATION
              </div>
              <div className="space-y-1 text-[10px] font-norse-mono text-slate-300">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#22c55e]" />
                  <span>B.Tech CSE — DBATU (7.2 CGPA)</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#fb923c]" />
                  <span>Diploma AI/ML — MSBTE (7.5 CGPA)</span>
                </div>
                <div className="text-[9px] text-[#ffd700]/80 pt-1 font-norse-sub">
                  COURSERA & IBM CERTIFIED
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Norse Ribbon Bar */}
      <div className="flex items-center justify-between gap-1.5 sm:gap-3 bg-[#080c14]/95 sm:backdrop-blur-md border border-[#d4af37]/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-2xl text-xs">
        {/* Left: World Tree Status & Runes */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse" />
          <span className="text-[#ffd700] font-bold tracking-wider hidden sm:inline">
            YGGDRASIL
          </span>
          <span className="text-slate-500 hidden sm:inline">✦</span>
          <span className="text-[10px] sm:text-[11px] font-norse-mono text-slate-400">
            -{depth.toFixed(1)}m Y
          </span>
        </div>

        {/* Center: Realm Quick Jump Dots / Links (Mobile & Tablet) */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {realms.map((r) => (
            <button
              key={r.id}
              onClick={() => onJumpToLevel && onJumpToLevel(r.id)}
              className={`px-1.5 sm:px-2 py-1 min-w-[24px] sm:min-w-[28px] h-7 rounded text-[11px] font-norse-sub transition-all flex items-center justify-center gap-1 ${
                currentLevel === r.id
                  ? 'bg-[#d4af37] text-black font-bold shadow-[0_0_8px_rgba(212,175,55,0.6)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
              title={`${r.name} (${r.label})`}
            >
              <span className="text-[11px]">{r.rune}</span>
              <span className="hidden md:inline">{r.name}</span>
            </button>
          ))}
        </div>

        {/* Right: Toggle Codex Button & Ascend */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => setExpanded(!expanded)}
            className="norse-btn text-[10px] py-1 px-2 sm:px-2.5 border-[#d4af37]/40 text-[#ffd700] flex items-center gap-1"
          >
            <span>ᛟ</span>
            <span className="hidden sm:inline">{expanded ? 'CLOSE' : 'CODEX'}</span>
            {expanded ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
          </button>

          <button
            onClick={() => onJumpToLevel && onJumpToLevel(1)}
            className="p-1 sm:p-1.5 rounded bg-[#10141f] border border-[#d4af37]/30 text-[#ffd700] hover:bg-[#d4af37] hover:text-black transition-all flex items-center justify-center w-7 h-7"
            title="Ascend to Asgard (Apex)"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
