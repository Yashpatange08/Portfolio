import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowUpRight, FileCheck } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export default function Level4Certificates() {
  const certifications = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      issuer: 'Meta / Coursera Specialization',
      date: '2024 // CERTIFIED',
      pillClass: 'pill-yellow',
      skills: ['Python', 'Django', 'React', 'REST APIs'],
      credId: 'META-DEV-9921',
    },
    {
      id: 2,
      title: 'Python for Data Science & AI',
      issuer: 'IBM Professional Certification',
      date: '2024 // CERTIFIED',
      pillClass: 'pill-pink',
      skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
      credId: 'IBM-PY-8841',
    },
    {
      id: 3,
      title: 'Creative WebGL & Three.js',
      issuer: 'Three.js Creative Coding Lab',
      date: '2025 // CERTIFIED',
      pillClass: 'pill-lavender',
      skills: ['Three.js', 'React Three Fiber', 'GLSL Shaders', '3D Camera'],
      credId: 'R3F-DEV-7712',
    },
    {
      id: 4,
      title: 'Computer Vision & Deep Learning',
      issuer: 'DeepLearning.AI',
      date: '2025 // CERTIFIED',
      pillClass: 'pill-peach',
      skills: ['OpenCV', 'Face Recognition', 'Neural Networks'],
      credId: 'DL-CV-5520',
    },
    {
      id: 5,
      title: 'Cloud Architecture & DevOps',
      issuer: 'Cloud Native Computing Foundation',
      date: '2024 // CERTIFIED',
      pillClass: 'pill-coral',
      skills: ['Docker', 'CI/CD Pipelines', 'AWS Deployment'],
      credId: 'CNCF-OPS-3310',
    },
    {
      id: 6,
      title: 'Data Structures & Algorithms Mastery',
      issuer: 'Competitive Programming Institute',
      date: '2024 // CERTIFIED',
      pillClass: 'pill-yellow',
      skills: ['Dynamic Programming', 'Graph Theory', 'Trees', 'Complexity'],
      credId: 'DSA-PRO-4419',
    },
  ];

  return (
    <div className="p-6 md:p-10 toy-panel text-left space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="toy-pill pill-pink text-xs font-black">LEVEL 04</span>
            <span className="toy-pill pill-dark text-xs font-mono-toy">VERIFIED SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#FAF6EF] uppercase tracking-tight m-0">
            CERTIFICATIONS & VAULT
          </h2>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-toy text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FFE500]" />
          <span>AUTHENTICATED CREDENTIALS</span>
        </div>
      </div>

      {/* Grid of Certification Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((c) => (
          <div
            key={c.id}
            onMouseEnter={() => soundFx.playHover()}
            className="p-5 rounded-xl bg-[#151518]/90 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-4 group"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className={`toy-pill ${c.pillClass} text-[11px] font-black`}>
                  {c.date}
                </span>
                <div className="p-1.5 rounded-lg bg-white/5 text-slate-300">
                  <FileCheck className="w-4 h-4 text-[#FFE500]" />
                </div>
              </div>

              <h3 className="text-lg font-black font-display text-[#FAF6EF] group-hover:text-[#FFE500] transition-colors mt-3 tracking-tight">
                {c.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono-toy mt-1">
                {c.issuer}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {c.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="toy-pill pill-dark text-[10px] font-mono-toy"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-toy">
              <span className="text-slate-500">ID: {c.credId}</span>
              <span className="text-[#FFE500] font-bold flex items-center gap-1">
                <span>VERIFIED</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
