import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

const REALM_INFO = [
  { id: 1, name: 'ASGARD', rune: 'ᚫ', subtitle: 'Home of the Aesir' },
  { id: 2, name: 'VANAHEIM', rune: 'ᚹ', subtitle: 'Sacred Grove of the Vanir' },
  { id: 3, name: 'MIDGARD', rune: 'ᛗ', subtitle: 'Realm of Men & Codebases' },
  { id: 4, name: 'ALFHEIM', rune: 'ᛚ', subtitle: 'Sanctum of the Light Elves' },
  { id: 5, name: 'MUSPELHEIM', rune: 'ᚠ', subtitle: 'Forge of Primordial Fire' },
  { id: 6, name: 'HELHEIM', rune: 'ᚺ', subtitle: 'Roots of Yggdrasil' },
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
    <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-4 md:p-6 select-none font-norse-sub">
      {/* Top Runic HUD Navigation Bar */}
      <header className="flex items-center justify-between gap-4 w-full">
        {/* Left Emblem & Current Realm Inscription */}
        <div className="pointer-events-auto flex items-center gap-3 bg-[#0c101a]/90 backdrop-blur-md border border-[#d4af37]/40 px-4 py-2 rounded-xl shadow-2xl">
          <span className="text-xl font-bold font-norse-title text-[#ffd700]">
            {activeRealm.rune}
          </span>
          <div>
            <div className="text-[10px] tracking-widest text-[#d4af37]">
              YGGDRASIL DESCENT // YASH PATANGE
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#f5eedb] tracking-wider">
              REALM 0{currentLevel}: {activeRealm.name} — <span className="text-[#cbd5e1] font-normal italic">{activeRealm.subtitle}</span>
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

        {/* Right: Depth Counter */}
        <div className="pointer-events-auto flex items-center gap-2">
          <div className="flex flex-col items-end bg-[#0c101a]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg">
            <span className="text-[9px] text-[#d4af37]">TREE DEPTH</span>
            <span className="text-xs font-norse-mono text-[#f5eedb] font-bold">
              -{depth.toFixed(1)}m Y
            </span>
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

      {/* Bottom Sub-Bar */}
      <footer className="w-full flex items-center justify-between text-xs font-norse-sub text-slate-400 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ffd700]" />
          <span>YGGDRASIL WORLD TREE // SCROLL TO DESCEND THE REALMS</span>
        </div>
        <div className="hidden sm:block">
          SACRED ROOTS: [X: 0.00, Y: -{depth.toFixed(2)}, Z: 14.00]
        </div>
      </footer>
    </div>
  );
}
