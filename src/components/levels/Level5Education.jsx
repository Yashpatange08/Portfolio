import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Layers, BarChart3, ChevronRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export default function Level5Education() {
  const [selectedNode, setSelectedNode] = useState(3);

  const educationNodes = [
    {
      id: 0,
      stage: 'TIER 01: FOUNDATION',
      degree: '10th SSC (Secondary School Certificate)',
      institution: 'State Board of Secondary Education',
      score: '91.8 %',
      grade: 'Distinction // Merit Rank',
      year: '2018',
      desc: 'Mastered mathematical concepts, scientific reasoning, and computational fundamentals.',
      skills: ['Mathematical Analysis', 'Logic Formulation', 'Computer Basics'],
      pillClass: 'pill-lavender',
    },
    {
      id: 1,
      stage: 'TIER 02: DIPLOMA',
      degree: 'Diploma in Computer Engineering',
      institution: 'Polytechnic Engineering Institute',
      score: '89.4 %',
      grade: 'First Class with Distinction',
      year: '2021',
      desc: 'Hands-on practical engineering in C++, Java, relational database systems, hardware architecture, and computer networks.',
      skills: ['Object-Oriented Programming', 'Data Structures', 'Database Systems', 'Operating Systems'],
      pillClass: 'pill-yellow',
    },
    {
      id: 2,
      stage: 'TIER 03: UNDERGRADUATE',
      degree: 'B.Tech in Computer Engineering / Science',
      institution: 'Faculty of Engineering & Technology',
      score: '8.85 CGPA',
      grade: 'First Class Distinction',
      year: '2024',
      desc: 'Comprehensive engineering in distributed systems, web architectures, algorithms, 3D graphics, and computer networks.',
      skills: ['Full-Stack Web Dev', 'Python & Django', 'WebGL & Graphics', 'System Architecture'],
      pillClass: 'pill-pink',
    },
    {
      id: 3,
      stage: 'TIER 04: POSTGRADUATE',
      degree: 'M.Tech in Advanced Computer Science & AI',
      institution: 'Postgraduate Institute of Advanced Technology',
      score: '9.20 CGPA',
      grade: 'Distinction // Top Tier',
      year: '2026',
      desc: 'Advanced research in machine learning, computer vision, spatial computing, neural architectures, and scalable software pipelines.',
      skills: ['AI & Computer Vision', '3D Spatial Web', 'Advanced Microservices', 'Research & Optimization'],
      pillClass: 'pill-peach',
    },
  ];

  const skillAttributes = [
    { name: 'PYTHON & DJANGO ECOSYSTEM', val: 96, color: 'bg-[#FFE500]' },
    { name: 'FULL-STACK & REACT THREE FIBER', val: 93, color: 'bg-[#FFD8F5]' },
    { name: 'DATA STRUCTURES & ALGORITHMS', val: 94, color: 'bg-[#E9E3F3]' },
    { name: 'AI, OPENCV & COMPUTER VISION', val: 91, color: 'bg-[#FDEDD4]' },
    { name: 'DATABASE & REST API ARCHITECTURES', val: 95, color: 'bg-[#FD513B]' },
  ];

  return (
    <div className="p-6 md:p-10 toy-panel text-left space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="toy-pill pill-peach text-xs font-black">LEVEL 05</span>
            <span className="toy-pill pill-dark text-xs font-mono-toy">EDUCATION STATS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#FAF6EF] uppercase tracking-tight m-0">
            ACADEMIC SKILL TREE
          </h2>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-toy text-slate-300">
          <GraduationCap className="w-3.5 h-3.5 text-[#FFE500]" />
          <span>PROGRESSION // 10TH → M.TECH</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: 4 Progression Tiers */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs font-mono-toy text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#FFE500]" />
            <span>PROGRESSION MILESTONES (CLICK TO INSPECT)</span>
          </div>

          <div className="space-y-3">
            {educationNodes.map((node) => {
              const active = selectedNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedNode(node.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`cursor-pointer p-4 rounded-xl transition-all duration-300 border flex flex-col justify-between ${
                    active
                      ? 'bg-white/10 border-[#FFE500] scale-[1.01] shadow-lg'
                      : 'bg-[#151518]/90 border-white/5 hover:border-white/20 hover:bg-[#1a1a1f]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono-toy tracking-widest text-slate-400">
                      {node.stage}
                    </span>
                    <span className={`toy-pill ${node.pillClass} text-xs font-black`}>
                      {node.score}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black font-display text-[#FAF6EF] mt-1.5 tracking-tight">
                    {node.degree}
                  </h3>
                  <div className="text-xs text-slate-400 font-body mt-0.5">
                    {node.institution} ({node.year})
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Node Details & Character Stats */}
        <div className="lg:col-span-5 space-y-4">
          {/* Selected Node Inspector */}
          <div className="p-5 rounded-xl bg-[#151518]/90 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-toy text-[#FFE500] font-bold">MILESTONE DETAILS</span>
              <span className="text-xs font-mono-toy text-slate-400">{educationNodes[selectedNode].year}</span>
            </div>

            <h4 className="text-lg font-black font-display text-[#FAF6EF] tracking-tight">
              {educationNodes[selectedNode].degree}
            </h4>

            <p className="text-xs text-slate-300 font-body leading-relaxed">
              {educationNodes[selectedNode].desc}
            </p>

            <div className="pt-2 border-t border-white/10 space-y-1.5">
              <span className="text-[10px] font-mono-toy text-slate-400 uppercase">UNLOCKED COMPETENCIES:</span>
              <div className="flex flex-wrap gap-1.5">
                {educationNodes[selectedNode].skills.map((sk, idx) => (
                  <span
                    key={idx}
                    className="toy-pill pill-dark text-[10px] font-mono-toy"
                  >
                    +{sk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Character Attribute Meters */}
          <div className="p-5 rounded-xl bg-[#151518]/90 border border-white/10 space-y-3.5">
            <div className="flex items-center justify-between text-xs font-mono-toy">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#FFE500]" />
                <span className="font-bold text-[#FAF6EF]">CORE ATTRIBUTES</span>
              </div>
              <span className="text-[#FFE500]">STAT LVL 99</span>
            </div>

            <div className="space-y-3">
              {skillAttributes.map((st, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono-toy">
                    <span className="text-slate-300">{st.name}</span>
                    <span className="text-[#FFE500] font-bold">{st.val}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#0e0e12] rounded-full overflow-hidden border border-white/10">
                    <div
                      className={`h-full ${st.color} transition-all duration-700`}
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
