import React from 'react';
import { Mail, ChevronDown, Compass, Phone, Code2, Cpu, Database, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';

export default function Realm1Asgard() {
  const contactLinks = [
    {
      name: 'GitHub',
      rune: 'ᚷ',
      label: 'Yashpatange08',
      icon: <GithubIcon className="w-4 h-4" />,
      url: 'https://github.com/Yashpatange08',
      color: 'hover:border-[#ffd700] hover:text-[#ffd700] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]',
    },
    {
      name: 'LinkedIn',
      rune: 'ᛚ',
      label: 'yashpatange08',
      icon: <LinkedinIcon className="w-4 h-4" />,
      url: 'https://www.linkedin.com/in/yashpatange08/',
      color: 'hover:border-[#93c5fd] hover:text-[#93c5fd] hover:shadow-[0_0_15px_rgba(147,197,253,0.5)]',
    },
    {
      name: 'Raven Post',
      rune: 'ᛗ',
      label: 'yashpatange08@gmail.com',
      icon: <Mail className="w-4 h-4" />,
      url: 'mailto:yashpatange08@gmail.com',
      color: 'hover:border-[#34d399] hover:text-[#34d399] hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]',
    },
    {
      name: 'Call / Signal',
      rune: 'ᛋ',
      label: '+91-8180824463',
      icon: <Phone className="w-4 h-4" />,
      url: 'tel:+918180824463',
      color: 'hover:border-[#f59e0b] hover:text-[#f59e0b] hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]',
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 norse-panel text-left relative overflow-hidden space-y-4 sm:space-y-5">
      {/* Asgard Hero Lore & Inscriptions */}
      <div className="space-y-3 sm:space-y-4">
        {/* Realm Header Tag */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded border border-[#d4af37]/50 bg-[#16130b] text-[#d4af37] text-[11px] sm:text-xs font-norse-sub">
            <span className="text-sm">ᚫ</span>
            <span>REALM I // ASGARD — SEAT OF THE AESIR</span>
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded border border-white/10 bg-white/5 text-[#c4b59d] text-[11px] sm:text-xs font-norse-body">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>EXECUTIVE DOSSIER</span>
          </div>
        </div>

        {/* Big Majestic Title */}
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-norse-title text-transparent bg-clip-text bg-gradient-to-r from-[#fff9ea] via-[#f7e4a8] to-[#d4af37] uppercase m-0 leading-none drop-shadow-md">
            YASH PATANGE
          </h1>
          <h2 className="text-xs sm:text-lg lg:text-xl font-semibold font-norse-sub text-[#d4af37] mt-2 tracking-wider sm:tracking-widest uppercase flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span>SOFTWARE ENGINEER</span>
            <span className="text-white/40">✦</span>
            <span>PYTHON FULL STACK DEVELOPER</span>
          </h2>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-norse-mono text-[#cbd5e1] pt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[#86efac]">AVAILABLE FOR FULL-TIME ROLES</span>
          </div>
        </div>

        {/* Authentic Resume Summary Inscription */}
        <p className="text-[#d8cfbe] text-sm sm:text-base leading-relaxed font-norse-body">
          Computer Engineering student and aspiring Python Full Stack Developer with a strong foundation in{' '}
          <strong className="text-[#ffd700] font-semibold">Python, Django, FastAPI, Flask, React.js, JavaScript, REST APIs, SQL, MySQL, and MongoDB</strong>.
          Experienced in developing full-stack web applications, responsive user interfaces, backend services, RESTful APIs, and database-driven applications.
          Familiar with Git, GitHub, API integration, and modern web development practices. Seeking opportunities to build scalable and user-focused web applications using Python and modern full-stack technologies.
        </p>

        {/* Sacred Domain Runes matching Technical Competence */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-norse-sub text-xs">
          {[
            { rune: 'ᛈ', title: 'PYTHON & DJANGO', subtitle: 'FastAPI, Flask, REST', icon: <Code2 className="w-3.5 h-3.5 text-[#d4af37]" /> },
            { rune: 'ᚱ', title: 'REACT.JS & WEB', subtitle: 'Tailwind CSS, Modern UI', icon: <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" /> },
            { rune: 'ᛞ', title: 'GENERATIVE AI', subtitle: 'RAG, LangChain, LLMs', icon: <Cpu className="w-3.5 h-3.5 text-[#a855f7]" /> },
            { rune: 'ᚹ', title: 'DATABASE ENGINES', subtitle: 'SQL, MySQL, MongoDB', icon: <Database className="w-3.5 h-3.5 text-[#22c55e]" /> },
          ].map((d, idx) => (
            <div key={idx} className="p-2.5 rounded bg-[#10141d] border border-[#d4af37]/20 flex items-start gap-2.5">
              <span className="text-base text-[#d4af37] leading-none mt-0.5">{d.rune}</span>
              <div>
                <div className="text-[11px] text-[#f7e4a8] font-bold tracking-wide">{d.title}</div>
                <div className="text-[9px] text-slate-400 font-norse-mono mt-0.5">{d.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Runic Social & Contact Matrix */}
        <div className="pt-2 flex flex-wrap items-center gap-2.5">
          {contactLinks.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target={s.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`norse-btn text-xs py-2 px-3 border border-[#d4af37]/40 ${s.color}`}
            >
              <span className="text-sm font-bold text-[#d4af37]">{s.rune}</span>
              {s.icon}
              <span className="font-norse-sub text-xs">{s.name}</span>
            </a>
          ))}
        </div>

        {/* Descent Scroll Hint */}
        <div className="flex items-center gap-2 text-xs font-norse-sub text-[#d4af37]/80 pt-2 border-t border-white/10">
          <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
          <span>DESCEND THE BARK OF YGGDRASIL // REALM II: TECHNICAL COMPETENCE</span>
        </div>
      </div>
    </div>
  );
}
