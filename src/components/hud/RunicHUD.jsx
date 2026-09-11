import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import NorseFooter from './NorseFooter';
import profilePhoto from '../../assets/profile.jpg';

const REALM_INFO = [
  { id: 1, name: 'ASGARD', rune: 'ᚫ', subtitle: 'Executive Summary & Contact' },
  { id: 2, name: 'VANAHEIM', rune: 'ᚹ', subtitle: 'Technical Competence (8 Domains)' },
  { id: 3, name: 'MIDGARD', rune: 'ᛗ', subtitle: 'Featured Projects (3 Expeditions)' },
  { id: 4, name: 'ALFHEIM', rune: 'ᛚ', subtitle: 'Verified Certifications (IBM & Coursera)' },
  { id: 5, name: 'MUSPELHEIM', rune: 'ᚠ', subtitle: 'Academic Crucible (B.Tech & Diploma)' },
  { id: 6, name: 'HELHEIM', rune: 'ᚺ', subtitle: 'Communication Threshold & Contact' },
];

export default function RunicHUD({
  currentLevel = 1,
  depth = 0,
  scrollOffset = 0,
  onJumpToLevel,
}) {
  const handleJump = (lvl) => {
    if (onJumpToLevel) onJumpToLevel(lvl);
  };

  const activeRealm = REALM_INFO[currentLevel - 1] || REALM_INFO[0];

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-2 sm:p-4 md:p-6 select-none font-norse-sub">
      {/* Top Runic HUD Navigation Bar */}
      <header className="flex items-center justify-between gap-2 sm:gap-4 w-full">
        {/* Left Emblem & Current Realm Inscription */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 bg-[#0c101a]/95 sm:backdrop-blur-md border border-[#d4af37]/40 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-2xl max-w-[68vw] sm:max-w-none">
          <span className="text-lg sm:text-xl font-bold font-norse-title text-[#ffd700] shrink-0">
            {activeRealm.rune}
          </span>
          <div className="overflow-hidden">
            <div className="text-[9px] sm:text-[10px] tracking-widest text-[#d4af37] truncate">
              YGGDRASIL // YASH PATANGE
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#f5eedb] tracking-wider truncate">
              REALM 0{currentLevel}: {activeRealm.name} <span className="hidden md:inline text-[#cbd5e1] font-normal italic">— {activeRealm.subtitle}</span>
            </div>
          </div>
        </div>

        {/* Center: Realm Jump Stones (Desktop) */}
        <nav aria-label="Realm Quick Jump" className="pointer-events-auto hidden lg:flex items-center gap-1.5 bg-[#0c101a]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-xl shadow-2xl">
          {REALM_INFO.map((r) => {
            const active = currentLevel === r.id;
            return (
              <button
                key={r.id}
                onClick={() => handleJump(r.id)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  active
                    ? 'bg-[#d4af37] text-[#0d0a06] shadow-[0_0_12px_rgba(212,175,55,0.6)] scale-105'
                    : 'text-[#d8cfbe] hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-xs">{r.rune}</span>
                <span>{r.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Depth Counter & Profile Photo Avatar */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          {/* Depth Counter */}
          <div className="flex flex-col items-end bg-[#0c101a]/90 sm:backdrop-blur-md border border-white/10 px-2.5 sm:px-3 py-1 rounded-lg">
            <span className="text-[9px] text-[#d4af37]">TREE DEPTH</span>
            <span className="text-xs font-norse-mono text-[#f5eedb] font-bold">
              -{depth.toFixed(1)}m Y
            </span>
          </div>

          {/* Profile Photo Medallion Avatar */}
          <div className="relative group shrink-0" title="Yash Patange // Software Engineer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ffd700] via-[#f59e0b] to-[#d4af37] rounded-full blur-xs opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse" />
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-0.5 bg-[#10141f] border-2 border-[#ffd700] shadow-[0_0_15px_rgba(212,175,55,0.4)] overflow-hidden">
              <img
                src={profilePhoto}
                alt="Yash Patange"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            {/* Runic Sigil Badge */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#16130b] border border-[#ffd700] flex items-center justify-center text-[7px] sm:text-[8px] font-bold text-[#ffd700] shadow">
              ᛟ
            </div>
          </div>
        </div>
      </header>

      {/* Right Side Vertical Yggdrasil Trunk Gauge */}
      <aside aria-label="Yggdrasil Gauge" className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-3 pointer-events-auto bg-[#0c101a]/80 backdrop-blur-md border border-[#d4af37]/30 p-2.5 rounded-full">
        <span className="text-[9px] font-norse-sub text-[#ffd700] font-bold rotate-90 my-2 tracking-widest">
          YGGDRASIL
        </span>
        <div className="w-1.5 h-40 bg-black/50 rounded-full relative overflow-hidden border border-[#d4af37]/30">
          <div
            className="w-full bg-gradient-to-b from-[#ffd700] via-[#22c55e] via-[#a5b4fc] via-[#f97316] to-[#93c5fd] transition-all duration-300 rounded-full"
            style={{ height: `${Math.min(100, Math.max(0, scrollOffset * 100))}%` }}
          />
        </div>
        {REALM_INFO.map((r) => (
          <button
            key={r.id}
            onClick={() => handleJump(r.id)}
            className={`w-3 h-3 rounded-full transition-all flex items-center justify-center text-[8px] ${
              currentLevel === r.id
                ? 'bg-[#ffd700] text-black scale-125 ring-2 ring-[#ffd700]/60 font-bold'
                : 'bg-white/20 hover:bg-[#ffd700]/60 text-white'
            }`}
            title={`${r.name}: ${r.subtitle}`}
          >
            {r.rune}
          </button>
        ))}
      </aside>

      {/* Themed Norse Footer Ribbon & Expandable Codex */}
      <NorseFooter
        currentLevel={currentLevel}
        onJumpToLevel={onJumpToLevel}
        depth={depth}
      />
    </div>
  );
}
