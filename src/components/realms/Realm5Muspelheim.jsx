import React, { useState } from 'react';
import { Flame, Hammer, Sparkles, Layers, ShieldAlert, ChevronRight } from 'lucide-react';

export default function Realm5Muspelheim() {
  const [selectedForge, setSelectedForge] = useState(3);

  const forgedTiers = [
    {
      id: 0,
      stage: 'INGOT I: PRIMORDIAL FOUNDATION',
      degree: '10th SSC (Secondary School)',
      institution: 'State Board of Education',
      score: '91.8 %',
      lore: 'Tempered in the fires of discipline; mastered foundational mathematics, scientific laws, and numerical logic.',
      heat: 'WHITE HOT // DISTINCTION',
      year: '2018',
      rune: 'ᚠ',
      color: 'border-[#f97316] text-[#ea580c]',
    },
    {
      id: 1,
      stage: 'INGOT II: THE ANVIL OF DIPLOMA',
      degree: 'Diploma in Computer Engineering',
      institution: 'Polytechnic Engineering Foundry',
      score: '89.4 %',
      lore: 'Forged practical engineering skills in C++, Java, relational database systems, hardware architecture, and networks.',
      heat: 'BLAZING HEAT // FIRST CLASS',
      year: '2021',
      rune: 'ᚢ',
      color: 'border-[#fbbf24] text-[#f59e0b]',
    },
    {
      id: 2,
      stage: 'INGOT III: THE BLADE OF UNDERGRAD',
      degree: 'B.Tech in Computer Science',
      institution: 'Faculty of Engineering & Technology',
      score: '8.85 CGPA',
      lore: 'Quenched in high-level computing, distributed network architectures, algorithms, WebGL graphics, and Python systems.',
      heat: 'RUNIC FLAME // DISTINCTION',
      year: '2024',
      rune: 'ᚦ',
      color: 'border-[#ef4444] text-[#ef4444]',
    },
    {
      id: 3,
      stage: 'INGOT IV: THE MASTERWORK OF M.TECH',
      degree: 'M.Tech in Advanced Computer Science & AI',
      institution: 'Postgraduate Institute of Technology',
      score: '9.20 CGPA',
      lore: 'The ultimate forging: advanced machine learning models, computer vision systems, spatial computing, and neural pipelines.',
      heat: 'SURTR’S FIRE // TOP 1% HONORS',
      year: '2026',
      rune: 'ᚨ',
      color: 'border-[#ffd700] text-[#ffd700]',
    },
  ];

  const moltenAttributes = [
    { name: 'PYTHON & SACRED BACKEND SYSTEMS', val: 96, heatColor: 'bg-gradient-to-r from-[#ea580c] to-[#ffd700]' },
    { name: 'SPATIAL 3D & REACT THREE FIBER', val: 93, heatColor: 'bg-gradient-to-r from-[#ef4444] to-[#fb923c]' },
    { name: 'ALGORITHMIC MASTERY & PROBLEM SOLVING', val: 94, heatColor: 'bg-gradient-to-r from-[#f97316] to-[#fde047]' },
    { name: 'COMPUTER VISION & AI INTEGRATIONS', val: 91, heatColor: 'bg-gradient-to-r from-[#dc2626] to-[#f59e0b]' },
    { name: 'DISTRIBUTED ARCHITECTURE & RELIABILITY', val: 95, heatColor: 'bg-gradient-to-r from-[#b91c1c] to-[#ea580c]' },
  ];

  return (
    <div className="p-6 md:p-10 norse-panel text-left space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#f97316]/30 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#f97316]/40 bg-[#1e0d06] text-[#fb923c] text-xs font-norse-sub mb-2">
            <Flame className="w-3.5 h-3.5 text-[#ef4444] animate-pulse" />
            <span>REALM V // MUSPELHEIM — FORGE OF PRIMORDIAL FIRE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-norse-title text-[#f5eedb] uppercase m-0">
            THE FORGED SKILL TREE
          </h2>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#200c06] border border-[#f97316]/40 text-xs font-norse-sub text-[#fdba74]">
          <Hammer className="w-4 h-4 text-[#fbbf24]" />
          <span>SCORES FORGED IN MOLTEN IRON</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: 4 Forged Tiers */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs font-norse-sub text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#f97316]" />
            <span>SELECT FORGE MILESTONE (TEMPERED PROGRESSION)</span>
          </div>

          <div className="space-y-3 relative before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#ffd700] via-[#f97316] to-[#ef4444]">
            {forgedTiers.map((t) => {
              const active = selectedForge === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => {
                    setSelectedForge(t.id);
                  }}
                  className={`cursor-pointer pl-6 p-4 rounded-xl transition-all duration-300 border flex flex-col justify-between ${
                    active
                      ? 'bg-[#220d06] border-[#f97316] glow-ember scale-[1.01]'
                      : 'bg-[#140b08]/90 border-white/10 hover:border-[#f97316]/50 hover:bg-[#1a0e08]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xl font-bold font-norse-title text-[#fbbf24]">
                      {t.rune}
                    </span>
                    <span className={`text-xs font-norse-sub font-bold px-2.5 py-0.5 rounded border bg-[#0d0705] ${t.color}`}>
                      {t.score}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-norse-sub text-[#f5eedb] mt-1 uppercase tracking-wide">
                    {t.degree}
                  </h3>
                  <div className="text-xs text-[#fdba74] font-norse-body mt-0.5">
                    {t.institution} ({t.year})
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Molten Anvil Telemetry & Stats */}
        <div className="lg:col-span-5 space-y-4">
          {/* Anvil Telemetry */}
          <div className="p-5 rounded-xl bg-[#1a0b06]/90 border border-[#f97316]/30 space-y-3">
            <div className="flex items-center justify-between text-xs font-norse-sub">
              <span className="text-[#fbbf24] font-bold">FORGE TEMPER STATUS</span>
              <span className="text-[#fdba74]">{forgedTiers[selectedForge].year}</span>
            </div>

            <h4 className="text-lg font-bold font-norse-sub text-[#f5eedb] uppercase">
              {forgedTiers[selectedForge].degree}
            </h4>

            <p className="text-sm text-[#cbd5e1] font-norse-body leading-relaxed italic">
              "{forgedTiers[selectedForge].lore}"
            </p>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-norse-sub">
              <span className="text-slate-400">HEAT INDEX:</span>
              <span className="text-[#ffd700] font-bold">{forgedTiers[selectedForge].heat}</span>
            </div>
          </div>

          {/* Molten Skill Meters */}
          <div className="p-5 rounded-xl bg-[#140b08]/90 border border-white/10 space-y-3.5">
            <div className="flex items-center justify-between text-xs font-norse-sub">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#f97316]" />
                <span className="font-bold text-[#f5eedb]">WARRIOR STAT SHEET</span>
              </div>
              <span className="text-[#ffd700]">LVL 99 FORGED</span>
            </div>

            <div className="space-y-3">
              {moltenAttributes.map((st, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-norse-sub">
                    <span className="text-[#cbd5e1]">{st.name}</span>
                    <span className="text-[#ffd700] font-bold">{st.val}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#090503] rounded-full overflow-hidden border border-[#f97316]/20">
                    <div
                      className={`h-full ${st.heatColor} transition-all duration-700`}
                      style={{ width: `${st.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
