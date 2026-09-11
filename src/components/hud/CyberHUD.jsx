import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowUpRight, Sparkles } from 'lucide-react';
import { soundFx } from '../../utils/audio';

const LEVEL_NAMES = [
  'WHO I AM',
  'AWARDS & SKILLS',
  'SELECTED WORK',
  'CERTIFICATIONS',
  'EDUCATION TREE',
  'SAY HELLO',
];

export default function CyberHUD({
  currentLevel = 1,
  depth = 0,
  scrollOffset = 0,
  onJumpToLevel,
}) {
  const [muted, setMuted] = useState(soundFx.isMuted());

  const handleToggleMute = () => {
    const isNowMuted = soundFx.toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) soundFx.playClick();
  };

  const handleLevelJump = (lvl) => {
    soundFx.playLevelShift(lvl);
    if (onJumpToLevel) onJumpToLevel(lvl);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-4 md:p-6 select-none font-display">
      {/* Top ToyFight Studio Header Bar */}
      <header className="flex items-center justify-between gap-4 w-full">
        {/* Brand Logo Tag */}
        <div className="pointer-events-auto flex items-center gap-2 bg-[#141418]/90 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-full shadow-xl">
          <span className="toy-pill pill-yellow text-xs font-black">Y:P\</span>
          <span className="text-xs font-black tracking-tight text-[#FAF6EF]">
            YASH PATANGE®
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono-toy text-slate-400 border-l border-white/10 pl-2">
            LEVEL 0{currentLevel} // {LEVEL_NAMES[currentLevel - 1]}
          </span>
        </div>

        {/* Level Quick Jump Nav Pills (ToyFight Style) */}
        <nav aria-label="Level Quick Jump" className="pointer-events-auto hidden lg:flex items-center gap-1.5 bg-[#141418]/90 backdrop-blur-md border border-white/10 px-2.5 py-1.5 rounded-full shadow-xl">
          {[1, 2, 3, 4, 5, 6].map((lvl) => {
            const active = currentLevel === lvl;
            return (
              <button
                key={lvl}
                onClick={() => handleLevelJump(lvl)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-3 py-1 rounded-full text-xs font-black transition-all ${
                  active
                    ? 'bg-[#FFE500] text-[#0D0D0E] shadow-md scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                0{lvl}. {LEVEL_NAMES[lvl - 1]}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: Email Direct Pill + Sound Toggle */}
        <div className="pointer-events-auto flex items-center gap-2">
          <a
            href="mailto:yashpatange08@gmail.com"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="hidden sm:flex toy-btn px-3.5 py-1.5 bg-[#FFE500] text-[#0D0D0E] text-xs font-black hover:bg-[#fff066]"
          >
            <span>SAY HI</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Sound FX Toggle Button */}
          <button
            onClick={handleToggleMute}
            onMouseEnter={() => soundFx.playHover()}
            title={muted ? 'Unmute Audio' : 'Mute Audio'}
            className={`p-2.5 rounded-full backdrop-blur-md border transition-all ${
              muted
                ? 'bg-[#141418]/80 border-white/10 text-slate-500'
                : 'bg-[#FFE500] border-[#FFE500] text-[#0D0D0E]'
            }`}
          >
            {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

      {/* Right Side Vertical Level Descent Pill Tracker */}
      <aside aria-label="Level Progress" className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-3 pointer-events-auto bg-[#141418]/80 backdrop-blur-md border border-white/10 p-2 rounded-full">
        <span className="text-[9px] font-mono-toy text-[#FFE500] font-bold rotate-90 my-2">
          DESCENT
        </span>
        <div className="w-1.5 h-36 bg-black/40 rounded-full relative overflow-hidden border border-white/10">
          <div
            className="w-full bg-gradient-to-b from-[#FFE500] via-[#FFD8F5] to-[#E9E3F3] transition-all duration-300 rounded-full"
            style={{ height: `${Math.min(100, Math.max(0, scrollOffset * 100))}%` }}
          />
        </div>
        {[1, 2, 3, 4, 5, 6].map((lvl) => (
          <button
            key={lvl}
            onClick={() => handleLevelJump(lvl)}
            onMouseEnter={() => soundFx.playHover()}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentLevel === lvl
                ? 'bg-[#FFE500] scale-150 ring-2 ring-[#FFE500]/50'
                : 'bg-white/20 hover:bg-white/60'
            }`}
            title={`Level 0${lvl}: ${LEVEL_NAMES[lvl - 1]}`}
          />
        ))}
      </aside>

      {/* Bottom Sub-Bar */}
      <footer className="w-full flex items-center justify-between text-[11px] font-mono-toy text-slate-500 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFE500]" />
          <span>TOYFIGHT STUDIO EXPERIENCE // THREE.JS ENGINE</span>
        </div>
        <div className="hidden sm:block">
          DESCENT: -{depth.toFixed(1)}m // YASH PATANGE
        </div>
      </footer>
    </div>
  );
}
