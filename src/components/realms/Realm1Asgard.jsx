import React from 'react';
import { Mail, ChevronDown, Sparkles, Compass, Shield, Flame } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../icons/BrandIcons';

export default function Realm1Asgard() {
  const runicSocials = [
    {
      name: 'GitHub',
      rune: 'ᚷ',
      handle: 'Yashpatange08',
      icon: <GithubIcon className="w-4 h-4" />,
      url: 'https://github.com/Yashpatange08',
      color: 'hover:border-[#ffd700] hover:text-[#ffd700] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]',
    },
    {
      name: 'LinkedIn',
      rune: 'ᛚ',
      handle: 'yashpatange08',
      icon: <LinkedinIcon className="w-4 h-4" />,
      url: 'https://www.linkedin.com/in/yashpatange08/',
      color: 'hover:border-[#93c5fd] hover:text-[#93c5fd] hover:shadow-[0_0_15px_rgba(147,197,253,0.5)]',
    },
    {
      name: 'Instagram',
      rune: 'ᛁ',
      handle: '@yashpatange08',
      icon: <InstagramIcon className="w-4 h-4" />,
      url: 'https://instagram.com',
      color: 'hover:border-[#f472b6] hover:text-[#f472b6] hover:shadow-[0_0_15px_rgba(244,114,182,0.5)]',
    },
    {
      name: 'Raven Post',
      rune: 'ᛗ',
      handle: 'yashpatange08@gmail.com',
      icon: <Mail className="w-4 h-4" />,
      url: 'mailto:yashpatange08@gmail.com',
      color: 'hover:border-[#34d399] hover:text-[#34d399] hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]',
    },
  ];

  return (
    <div className="p-6 md:p-8 norse-panel text-left relative overflow-hidden space-y-5">
      {/* Asgard Hero Lore & Inscriptions */}
      <div className="space-y-4">
        {/* Realm Header Tag */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#d4af37]/50 bg-[#16130b] text-[#d4af37] text-xs font-norse-sub">
            <span className="text-sm">ᚫ</span>
            <span>REALM I // ASGARD — SEAT OF THE AESIR</span>
          </div>
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded border border-white/10 bg-white/5 text-[#c4b59d] text-xs font-norse-body">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>YGGDRASIL CANOPY // Y: 0.0</span>
          </div>
        </div>

        {/* Big Majestic Title */}
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-norse-title text-transparent bg-clip-text bg-gradient-to-r from-[#fff9ea] via-[#f7e4a8] to-[#d4af37] uppercase m-0 leading-none drop-shadow-md">
            YASH PATANGE
          </h1>
          <h2 className="text-lg sm:text-2xl font-semibold font-norse-sub text-[#d4af37] mt-2 tracking-widest uppercase">
            CRAFTSMAN OF WORLDS & FULL-STACK SCALD
          </h2>
        </div>

        {/* Ancient Inscription Bio */}
        <p className="text-[#d8cfbe] text-base sm:text-lg leading-relaxed font-norse-body max-w-2xl">
          Forging high-performance digital monuments across the Nine Realms. Specializing in real-time 3D WebGL architectures,
          sacred Python & Django software pipelines, and robust modern full-stack engineering designed to stand through the ages.
        </p>

        {/* Sacred Domain Runes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-norse-sub text-xs">
          {[
            { rune: 'ᛈ', title: 'PYTHON & AI', realm: 'Sacred Logic' },
            { rune: 'ᚱ', title: 'REACT THREE FIBER', realm: 'Spatial 3D' },
            { rune: 'ᛞ', title: 'DJANGO APIS', realm: 'Core Engine' },
            { rune: 'ᚹ', title: 'FULL-STACK', realm: 'End-to-End' },
          ].map((d, idx) => (
            <div key={idx} className="p-2.5 rounded bg-[#10141d] border border-[#d4af37]/20 flex items-center gap-2">
              <span className="text-base text-[#d4af37]">{d.rune}</span>
              <div>
                <div className="text-[11px] text-[#f7e4a8] font-bold">{d.title}</div>
                <div className="text-[9px] text-slate-400">{d.realm}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Runic Social Links Matrix */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {runicSocials.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`norse-btn flex items-center gap-2 border border-[#d4af37]/40 ${s.color}`}
            >
              <span className="text-sm font-bold text-[#d4af37]">{s.rune}</span>
              {s.icon}
              <span className="font-norse-sub text-xs">{s.name}</span>
            </a>
          ))}
        </div>

        {/* Descent Scroll Hint */}
        <div className="flex items-center gap-2 text-xs font-norse-sub text-[#d4af37]/80 pt-3">
          <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
          <span>DESCEND THE BARK OF YGGDRASIL TOWARDS VANAHEIM</span>
        </div>
      </div>
    </div>
  );
}
