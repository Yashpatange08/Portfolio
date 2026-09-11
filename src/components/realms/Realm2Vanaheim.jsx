import React, { useState } from 'react';
import { Trophy, Award, Flame, Zap, Shield, Sparkles, Trees } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Realm2Vanaheim() {
  const [selectedStone, setSelectedStone] = useState(null);

  const achievements = [
    {
      id: 1,
      rune: 'ᚠ',
      title: 'HACKATHON CHAMPION',
      tier: 'VALHALLA TIER',
      lore: 'Claimed 1st place across 400+ warrior teams in the Grand Technical Hackathon for building an advanced spatial 3D architecture.',
      stat: 'RANK #1 // VICTORY',
      color: 'border-[#d4af37] text-[#ffd700]',
    },
    {
      id: 2,
      rune: 'ᚱ',
      title: 'CREATIVE 3D WEAVER',
      tier: 'MYTHIC MASTERY',
      lore: 'Mastered the arcane craft of WebGL, GLSL Shaders, and React Three Fiber, delivering unbroken 60FPS across all devices.',
      stat: '60 FPS LOCKED',
      color: 'border-[#38bdf8] text-[#38bdf8]',
    },
    {
      id: 3,
      rune: 'ᚦ',
      title: 'OPEN SOURCE SCALD',
      tier: 'SACRED GROVE',
      lore: 'Penned and contributed code to widely-used open-source repositories and public toolkits on the GitHub scrolls.',
      stat: '15+ REPOSITORIES',
      color: 'border-[#22c55e] text-[#22c55e]',
    },
    {
      id: 4,
      rune: 'ᚨ',
      title: 'ALGORITHMIC WARRIOR',
      tier: 'ELDER TRIAL',
      lore: 'Conquered 500+ complex algorithmic trials and LeetCode challenges across Dynamic Programming, Graphs, and Trees.',
      stat: '500+ TRIALS CRACKED',
      color: 'border-[#f97316] text-[#f97316]',
    },
    {
      id: 5,
      rune: 'ᛋ',
      title: 'FULL-STACK BUILDER',
      tier: 'IRON CRAFTSMAN',
      lore: 'Engineered and deployed robust, battle-tested full-stack platforms with Django, PostgreSQL, and REST architectures.',
      stat: 'PRODUCTION READY',
      color: 'border-[#a855f7] text-[#a855f7]',
    },
    {
      id: 6,
      rune: 'ᛏ',
      title: 'ACADEMIC DISTINCTION',
      tier: 'SUMMA HONORS',
      lore: 'Achieved First-Class Distinction across M.Tech and Engineering courses, mastering high-level computational science.',
      stat: 'DISTINCTION GRADE',
      color: 'border-[#fcd34d] text-[#fcd34d]',
    },
  ];

  const handleStoneClick = (stone) => {
    setSelectedStone(stone.id);
    confetti({
      particleCount: 50,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#22c55e', '#d4af37', '#38bdf8', '#f5eedb'],
    });
  };

  return (
    <div className="p-6 md:p-10 norse-panel text-left space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#22c55e]/30 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#22c55e]/40 bg-[#0c1810] text-[#4ade80] text-xs font-norse-sub mb-2">
            <Trees className="w-3.5 h-3.5" />
            <span>REALM II // VANAHEIM — SACRED GROVE OF THE VANIR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-norse-title text-[#f5eedb] uppercase m-0">
            GROVE OF ACHIEVEMENTS
          </h2>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15231a] border border-[#22c55e]/40 text-xs font-norse-sub text-[#86efac]">
          <Sparkles className="w-4 h-4 text-[#ffd700]" />
          <span>STRIKE A RUNESTONE TO UNLEASH BLESSINGS</span>
        </div>
      </div>

      {/* Grid of Carved Sacred Runestones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((ach) => {
          const isSelected = selectedStone === ach.id;
          return (
            <div
              key={ach.id}
              onClick={() => handleStoneClick(ach)}
              className={`cursor-pointer p-5 rounded-xl transition-all duration-300 flex flex-col justify-between border ${
                isSelected
                  ? 'bg-[#14261b] border-[#22c55e] glow-emerald scale-[1.02]'
                  : 'bg-[#10161a]/90 border-white/10 hover:border-[#22c55e]/50 hover:bg-[#121c15]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold font-norse-title ${ach.color}`}>
                    {ach.rune}
                  </span>
                  <span className={`text-[10px] font-norse-sub px-2.5 py-0.5 rounded border bg-[#0b1218] ${ach.color}`}>
                    {ach.tier}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-norse-sub text-[#f5eedb] mt-3 uppercase tracking-wider">
                  {ach.title}
                </h3>
                <p className="text-sm text-[#cbd5e1] font-norse-body mt-2 leading-relaxed">
                  {ach.lore}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-norse-sub mt-4">
                <span className="text-[#ffd700] font-bold">{ach.stat}</span>
                <span className="text-[#86efac]">CARVED IN STONE ✓</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
