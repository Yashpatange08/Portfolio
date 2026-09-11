import React, { useState } from 'react';
import { Trophy, Zap, Star, Flame, ShieldCheck, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../../utils/audio';

export default function Level2Achievements() {
  const [activeCard, setActiveCard] = useState(null);

  const achievements = [
    {
      id: 1,
      tag: '01 // WINNER',
      title: 'HACKATHON CHAMPION',
      pillClass: 'pill-yellow',
      stat: 'RANK #1 // 400+ TEAMS',
      desc: '1st Place winner for developing an innovative spatial web application integrating real-time intelligence and 3D graphics.',
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      id: 2,
      tag: '02 // CRAFT',
      title: 'CREATIVE 3D WEB ARCHITECT',
      pillClass: 'pill-pink',
      stat: '60 FPS FLUID RENDERING',
      desc: 'Engineered high-performance WebGL & React Three Fiber pipelines, interactive shaders, and smooth camera rigs.',
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: 3,
      tag: '03 // OPEN SOURCE',
      title: 'OPEN SOURCE CONTRIBUTOR',
      pillClass: 'pill-lavender',
      stat: '15+ REPOSITORIES ACTIVE',
      desc: 'Active contributor to developer tooling, Python web libraries, and experimental GitHub creative projects.',
      icon: <Star className="w-5 h-5" />,
    },
    {
      id: 4,
      tag: '04 // ALGORITHMS',
      title: 'PROBLEM SOLVER & LEETCODE',
      pillClass: 'pill-peach',
      stat: '500+ PROBLEMS CRACKED',
      desc: 'Mastery in Data Structures and Algorithms with a focus on Dynamic Programming, Trees, Graphs, and System Design.',
      icon: <Flame className="w-5 h-5" />,
    },
    {
      id: 5,
      tag: '05 // FULL-STACK',
      title: 'DJANGO & REACT BUILDER',
      pillClass: 'pill-coral',
      stat: 'PRODUCTION READY APPS',
      desc: 'Engineered full-stack applications like JOB-PORTAL, SocialMedia_clone, and Assistant-Jarvis with high reliability.',
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      id: 6,
      tag: '06 // HONORS',
      title: 'ACADEMIC DISTINCTION',
      pillClass: 'pill-yellow',
      stat: 'DISTINCTION GRADE',
      desc: 'Consistently ranked in the top academic percentiles across Engineering degrees and technical curricula.',
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const handleCardClick = (ach) => {
    soundFx.playClick();
    setActiveCard(ach.id);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FFE500', '#FFD8F5', '#FD513B', '#E9E3F3', '#FAF6EF'],
    });
  };

  return (
    <div className="p-6 md:p-10 toy-panel text-left space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="toy-pill pill-yellow text-xs font-black">LEVEL 02</span>
            <span className="toy-pill pill-dark text-xs font-mono-toy">TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#FAF6EF] uppercase tracking-tight m-0">
            AWARDS & ACHIEVEMENTS
          </h2>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/30 text-xs font-mono-toy text-[#FFE500]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CLICK ANY CARD FOR CELEBRATION</span>
        </div>
      </div>

      {/* Grid of ToyFight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((ach) => {
          const isSelected = activeCard === ach.id;
          return (
            <div
              key={ach.id}
              onClick={() => handleCardClick(ach)}
              onMouseEnter={() => soundFx.playHover()}
              className={`cursor-pointer p-5 rounded-xl transition-all duration-300 flex flex-col justify-between space-y-4 border ${
                isSelected
                  ? 'bg-white/10 border-[#FFE500] scale-[1.02] shadow-xl'
                  : 'bg-[#151518]/90 border-white/5 hover:border-white/20 hover:bg-[#1a1a1f]'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className={`toy-pill ${ach.pillClass} text-[11px] font-black`}>
                  {ach.tag}
                </span>
                <div className="p-2 rounded-lg bg-white/5 text-slate-300">
                  {ach.icon}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black font-display text-[#FAF6EF] uppercase tracking-tight">
                  {ach.title}
                </h3>
                <p className="text-xs text-slate-300 font-body mt-2 leading-relaxed">
                  {ach.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-toy">
                <span className="text-[#FFE500] font-bold">{ach.stat}</span>
                <span className="text-slate-500">UNLOCKED ✓</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
