import React, { useState } from 'react';
import { Flame, Hammer, GraduationCap, Award, Calendar, BookOpen, CheckCircle, Sparkles } from 'lucide-react';

const RESUME_EDUCATION = [
  {
    id: 0,
    stage: 'INGOT I: THE FOUNDRY OF AI & MACHINE LEARNING',
    degree: 'Diploma in AI & Machine Learning',
    institution: 'CSMSS CSCOE (MSBTE)',
    universityFullName: 'Maharashtra State Board of Technical Education',
    score: '7.5 / 10 CGPA',
    year: '2021 – 2024',
    rune: 'ᛏ',
    color: 'border-[#fb923c] text-[#fb923c]',
    heat: 'TEMPERED IN MACHINE INTELLIGENCE',
    summary:
      'Rigorous technical foundation in artificial intelligence, neural networks, machine learning algorithms, computer vision, data structures, and Python data preprocessing pipelines.',
    subjects: ['Artificial Intelligence', 'Machine Learning', 'Python Programming', 'Neural Networks', 'Computer Vision', 'Mathematics & Logic'],
  },
  {
    id: 1,
    stage: 'INGOT II: THE BLADE OF ADVANCED COMPUTING',
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'CSMSS CSCOE (DBATU)',
    universityFullName: 'Dr. Babasaheb Ambedkar Technological University',
    score: '7.2 / 10 CGPA',
    year: '2024 – 2027',
    rune: 'ᚨ',
    color: 'border-[#ffd700] text-[#ffd700]',
    heat: 'FORGED IN MODERN SOFTWARE ARCHITECTURE',
    summary:
      'Advanced undergraduate degree in computer science engineering focusing on full-stack web platforms, database design, REST APIs, distributed logic, and generative AI systems.',
    subjects: ['Software Engineering', 'Data Structures & Algorithms', 'Database Management', 'Full Stack Development', 'Distributed Systems', 'Computer Networks'],
  },
];

const CORE_PROFICIENCIES = [
  { name: 'PYTHON & BACKEND PIPELINES (DJANGO, FASTAPI, FLASK)', val: 95, heatColor: 'bg-gradient-to-r from-[#ea580c] to-[#ffd700]' },
  { name: 'FRONTEND & REACT ARCHITECTURE (REACT.JS, TAILWIND)', val: 92, heatColor: 'bg-gradient-to-r from-[#38bdf8] to-[#60a5fa]' },
  { name: 'GENERATIVE AI & AGENTIC SYSTEMS (RAG, LANGCHAIN, LLMS)', val: 94, heatColor: 'bg-gradient-to-r from-[#a855f7] to-[#ec4899]' },
  { name: 'DATABASE DESIGN & REST APIS (SQL, MYSQL, MONGODB)', val: 93, heatColor: 'bg-gradient-to-r from-[#22c55e] to-[#4ade80]' },
  { name: 'AI & MACHINE LEARNING (TENSORFLOW, KERAS, OPENCV)', val: 90, heatColor: 'bg-gradient-to-r from-[#f97316] to-[#fbbf24]' },
];

export default function Realm5Muspelheim() {
  const [selectedDegree, setSelectedDegree] = useState(1);

  const activeDegree = RESUME_EDUCATION[selectedDegree] || RESUME_EDUCATION[1];

  return (
    <div className="p-4 sm:p-6 md:p-8 norse-panel text-left space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 border-b border-[#f97316]/30 pb-3 sm:pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded border border-[#f97316]/40 bg-[#1e0d06] text-[#fb923c] text-[11px] sm:text-xs font-norse-sub mb-1">
            <Flame className="w-3.5 h-3.5 text-[#ef4444] animate-pulse" />
            <span>REALM V // MUSPELHEIM — FORGE</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-norse-title text-[#f5eedb] uppercase m-0 tracking-wide">
            ACADEMIC CRUCIBLE
          </h2>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#200c06] border border-[#f97316]/40 text-[10px] sm:text-xs font-norse-sub text-[#fdba74]">
          <GraduationCap className="w-3.5 h-3.5 text-[#ffd700]" />
          <span>VERIFIED DEGREES</span>
        </div>
      </div>

      {/* Degree Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {RESUME_EDUCATION.map((edu, idx) => {
          const isSelected = selectedDegree === idx;
          return (
            <button
              key={edu.id}
              onClick={() => setSelectedDegree(idx)}
              className={`p-3.5 rounded-xl text-left transition-all border flex items-center justify-between ${
                isSelected
                  ? 'bg-[#220d06] border-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.35)]'
                  : 'bg-[#10141d]/90 border-white/10 hover:border-[#f97316]/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-2xl font-bold font-norse-title ${edu.color}`}>
                  {edu.rune}
                </span>
                <div>
                  <div className="text-xs font-bold font-norse-sub text-[#f5eedb]">
                    {edu.degree}
                  </div>
                  <div className="text-[10px] font-norse-mono text-[#fdba74]">
                    {edu.institution} // {edu.year}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold font-norse-mono text-[#ffd700] block">
                  {edu.score}
                </span>
                <span className="text-[9px] font-norse-sub text-slate-400">
                  {isSelected ? 'SELECTED' : 'INSPECT'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Degree Detail Card */}
      <div className="p-5 rounded-xl bg-[#140b07]/95 border border-[#f97316]/40 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div>
            <span className="text-[10px] font-norse-mono text-[#fb923c] tracking-widest font-bold">
              {activeDegree.stage}
            </span>
            <h3 className="text-lg font-bold font-norse-title text-[#f5eedb] uppercase mt-0.5">
              {activeDegree.degree}
            </h3>
            <div className="text-xs font-norse-sub text-[#f5eedb] mt-0.5 flex flex-wrap items-center gap-2">
              <span className="text-[#ffd700] font-bold">{activeDegree.institution}</span>
              <span className="text-white/30">•</span>
              <span className="text-slate-300 font-norse-body">{activeDegree.universityFullName}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-[#251007] border border-[#f97316]/40 text-right">
              <div className="text-[9px] font-norse-sub text-[#fdba74]">GRADE ACHIEVED</div>
              <div className="text-sm font-bold font-norse-mono text-[#ffd700]">{activeDegree.score}</div>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-[#251007] border border-[#f97316]/40 text-right">
              <div className="text-[9px] font-norse-sub text-[#fdba74]">TIMELINE</div>
              <div className="text-sm font-bold font-norse-mono text-[#f5eedb]">{activeDegree.year}</div>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#cbd5e1] font-norse-body leading-relaxed">
          {activeDegree.summary}
        </p>

        {/* Subjects Studied */}
        <div>
          <span className="text-[10px] font-norse-sub text-[#ffd700] tracking-wider uppercase block mb-1.5">
            CORE SYLLABUS & APPLIED COMPETENCIES:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {activeDegree.subjects.map((sub, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded text-[10px] font-norse-mono bg-[#220f08] border border-[#f97316]/30 text-[#fdba74]"
              >
                ✦ {sub}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Engineering Heat Gauges */}
      <div className="p-4 rounded-xl bg-[#0f141d]/90 border border-white/10 space-y-2.5">
        <div className="flex items-center justify-between text-xs font-norse-sub text-[#fdba74] border-b border-white/10 pb-1.5">
          <span className="flex items-center gap-1.5 font-bold">
            <Hammer className="w-3.5 h-3.5 text-[#f97316]" />
            <span>RESUME TECHNICAL PROFICIENCY GAUGES</span>
          </span>
          <span className="text-[10px] font-norse-mono text-slate-400">PRACTICAL PRODUCTION READY</span>
        </div>

        <div className="space-y-2">
          {CORE_PROFICIENCIES.map((p, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-[10px] font-norse-sub text-[#cbd5e1]">
                <span>{p.name}</span>
                <span className="font-norse-mono font-bold text-[#ffd700]">{p.val}%</span>
              </div>
              <div className="w-full bg-[#1e1310] h-1.5 rounded-full overflow-hidden border border-white/5">
                <div
                  className={`h-full ${p.heatColor} rounded-full transition-all duration-700`}
                  style={{ width: `${p.val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
