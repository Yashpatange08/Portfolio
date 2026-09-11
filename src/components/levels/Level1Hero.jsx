import React from 'react';
import { Mail, ArrowDown, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { soundFx } from '../../utils/audio';

export default function Level1Hero() {
  const socials = [
    {
      name: 'GitHub',
      handle: '@Yashpatange08',
      icon: <GithubIcon className="w-4 h-4" />,
      url: 'https://github.com/Yashpatange08',
      pillClass: 'bg-[#FFE500] text-[#0D0D0E] hover:bg-[#fff066]',
    },
    {
      name: 'LinkedIn',
      handle: '/in/yashpatange08',
      icon: <LinkedinIcon className="w-4 h-4" />,
      url: 'https://www.linkedin.com/in/yashpatange08/',
      pillClass: 'bg-[#E9E3F3] text-[#0D0D0E] hover:bg-[#d8cce8]',
    },
    {
      name: 'Say Hello',
      handle: 'yashpatange08@gmail.com',
      icon: <Mail className="w-4 h-4" />,
      url: 'mailto:yashpatange08@gmail.com',
      pillClass: 'bg-[#FFD8F5] text-[#0D0D0E] hover:bg-[#ffbfe8]',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 p-6 md:p-10 toy-panel text-left relative overflow-hidden">
      {/* Spacer Frame for the 3D Collectible Blister Pack on the Left */}
      <div className="w-full md:w-[280px] h-[320px] md:h-[390px] flex items-center justify-center relative pointer-events-none">
        <div className="border-2 border-dashed border-[#FFE500]/30 rounded-2xl w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#FFE500]/5 backdrop-blur-[2px]">
          <span className="toy-pill pill-yellow text-[11px] font-black tracking-wider uppercase mb-2">
            SERIES 01 // FIGURINE
          </span>
          <p className="text-xs text-slate-300 font-mono-toy">
            Yash Patange Collectible 3D Art Toy & Blister Pack
          </p>
        </div>
      </div>

      {/* Hero Typography & Editorial Manifesto (ToyFight Style) */}
      <div className="flex-1 space-y-5">
        {/* Pill Tagline */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="toy-pill pill-lavender text-xs font-black">The</span>
          <span className="toy-pill-rect pill-yellow text-xs font-black">Unmistakably</span>
          <span className="toy-pill pill-pink text-xs font-black">Original®</span>
          <span className="toy-pill-rect pill-peach text-xs font-mono-toy font-bold">Creative Engineer</span>
        </div>

        {/* Big Bold Headline */}
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tighter text-[#FAF6EF] uppercase leading-[0.95] m-0">
            YASH PATANGE
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-base sm:text-xl font-bold font-display text-[#FFE500] uppercase tracking-tight">
              Creative Technologist
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-base sm:text-xl font-bold font-display text-[#FFD8F5] uppercase tracking-tight">
              Full-Stack 3D Developer
            </span>
          </div>
        </div>

        {/* Editorial Bio */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body max-w-xl">
          Crafting unforgettable digital experiences, interactive WebGL applications, and robust Python & Django systems. 
          Obsessed with merging creative art direction, playful 3D interactions, and production-grade engineering.
        </p>

        {/* Skills & Badges Row */}
        <div className="flex flex-wrap gap-2 pt-1">
          {['Python / Django', 'React / Three.js', 'Computer Vision & AI', 'REST APIs & Cloud', 'Competitive DSA'].map((skill, idx) => (
            <span
              key={idx}
              className="toy-pill pill-dark text-xs font-mono-toy font-medium"
            >
              #{skill}
            </span>
          ))}
        </div>

        {/* Social Pill Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              className={`toy-btn px-4 py-2.5 text-xs sm:text-sm font-display tracking-tight shadow-md ${s.pillClass}`}
            >
              {s.icon}
              <span>{s.name}</span>
              <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
            </a>
          ))}
        </div>

        {/* Scroll Affordance Hint */}
        <div className="flex items-center gap-2 text-xs font-mono-toy text-slate-400 pt-3">
          <ArrowDown className="w-4 h-4 text-[#FFE500] animate-bounce" />
          <span>SCROLL DOWN TO EXPLORE THE LEVELS</span>
        </div>
      </div>
    </div>
  );
}
