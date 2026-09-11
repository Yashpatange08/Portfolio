import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, Moon, Feather, ExternalLink } from 'lucide-react';

export default function Realm4Alfheim() {
  const elvenCertifications = [
    {
      id: 1,
      title: 'Full-Stack Software Architecture',
      issuer: 'Meta & Coursera Sanction',
      date: '2024 // ACTIVE',
      skills: ['Python', 'Django', 'React', 'REST Protocols'],
      rune: 'ᛖ',
      badge: 'ELVEN EMBRACE',
    },
    {
      id: 2,
      title: 'Python for Data Science & AI',
      issuer: 'IBM Professional Fellowship',
      date: '2024 // ACTIVE',
      skills: ['Python', 'Pandas', 'Algorithms', 'Machine Learning'],
      rune: 'ᚹ',
      badge: 'LUMINOUS INSIGHT',
    },
    {
      id: 3,
      title: 'Creative WebGL & Three.js',
      issuer: 'Three.js Spatial Guild',
      date: '2025 // ACTIVE',
      skills: ['WebGL', 'GLSL Shaders', 'React Three Fiber', 'Lighting'],
      rune: 'ᛋ',
      badge: 'LIGHT WEAVER',
    },
    {
      id: 4,
      title: 'Computer Vision & Deep Learning',
      issuer: 'DeepLearning.AI Fellowship',
      date: '2025 // ACTIVE',
      skills: ['OpenCV', 'Face Recognition', 'Neural Vision'],
      rune: 'ᚲ',
      badge: 'TRUE SIGHT',
    },
    {
      id: 5,
      title: 'Cloud Systems & Docker Native',
      issuer: 'Cloud Native Computing Foundation',
      date: '2024 // ACTIVE',
      skills: ['Containers', 'CI/CD Pipelines', 'Cloud Architecture'],
      rune: 'ᛉ',
      badge: 'ASTRAL BRIDGE',
    },
    {
      id: 6,
      title: 'Data Structures & Algorithms Mastery',
      issuer: 'Grand Scaldic Institute',
      date: '2024 // ACTIVE',
      skills: ['Dynamic Programming', 'Graph Theory', 'Trees'],
      rune: 'ᛏ',
      badge: 'ELDER LOGIC',
    },
  ];

  return (
    <div className="p-6 md:p-10 norse-panel text-left space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#a5b4fc]/30 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#a5b4fc]/40 bg-[#12162a] text-[#a5b4fc] text-xs font-norse-sub mb-2">
            <Moon className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>REALM IV // ALFHEIM — SANCTUM OF THE LIGHT ELVES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-norse-title text-[#f5eedb] uppercase m-0">
            ILLUMINATED VELLUM
          </h2>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161a30] border border-[#a5b4fc]/40 text-xs font-norse-sub text-[#c7d2fe]">
          <Feather className="w-4 h-4 text-[#38bdf8]" />
          <span>CRYSTALLINE SCROLLS OF ATTAINMENT</span>
        </div>
      </div>

      {/* Grid of Illuminated Vellum Scrolls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {elvenCertifications.map((c) => (
          <div
            key={c.id}
            className="p-5 rounded-xl bg-[#121626]/90 border border-[#a5b4fc]/20 hover:border-[#a5b4fc] hover:bg-[#161c32] transition-all duration-300 flex flex-col justify-between space-y-4 group"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-2xl font-bold font-norse-title text-[#a5b4fc]">
                  {c.rune}
                </span>
                <span className="text-[10px] font-norse-sub px-2.5 py-0.5 rounded border border-[#a5b4fc]/40 bg-[#0e1220] text-[#c7d2fe]">
                  {c.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold font-norse-sub text-[#f5eedb] group-hover:text-[#a5b4fc] transition-colors mt-3 uppercase tracking-wide">
                {c.title}
              </h3>
              <p className="text-sm text-[#cbd5e1] font-norse-body mt-1 italic">
                {c.issuer} ({c.date})
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {c.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-norse-mono px-2 py-0.5 rounded border border-white/10 bg-[#090d16] text-[#93c5fd]"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-norse-sub">
              <span className="text-slate-400">AUTHENTICATED</span>
              <span className="text-[#38bdf8] font-bold flex items-center gap-1">
                <span>INSCRIBED</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
