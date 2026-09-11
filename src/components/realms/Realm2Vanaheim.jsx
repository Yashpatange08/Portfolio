import React, { useState } from 'react';
import { Trees, Sparkles, Terminal, Code, Cpu, Database, BarChart3, Wrench, Globe, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

const SKILL_DOMAINS = [
  {
    id: 'backend',
    category: 'Backend Development',
    rune: 'ᛞ',
    tagline: 'SACRED SERVER PIPELINES & REST APIS',
    skills: ['Django', 'Flask', 'FastAPI', 'REST APIs'],
    description: 'Specializing in robust backend services, asynchronous endpoints, secure authentication, and scalable API architectures.',
    color: 'border-[#22c55e] text-[#22c55e]',
    accentBg: 'bg-[#14261b]',
    icon: <Terminal className="w-4 h-4 text-[#4ade80]" />,
  },
  {
    id: 'languages',
    category: 'Programming Languages',
    rune: 'ᚠ',
    tagline: 'PRIMORDIAL CODE RUNES',
    skills: ['Python', 'C++', 'C', 'Java', 'JavaScript'],
    description: 'Commanding high-performance logic, object-oriented systems, and dynamic scripting across multiple computational paradigms.',
    color: 'border-[#ffd700] text-[#ffd700]',
    accentBg: 'bg-[#221c0b]',
    icon: <Code className="w-4 h-4 text-[#ffd700]" />,
  },
  {
    id: 'genai',
    category: 'Generative AI & LLMs',
    rune: 'ᚨ',
    tagline: 'AGENTIC AI & NEURAL EMBEDDINGS',
    skills: ['RAG', 'LangChain', 'LangGraph', 'LLMs'],
    description: 'Engineering cutting-edge Retrieval-Augmented Generation (RAG) pipelines, multi-agent workflows, vector retrieval, and LLM integrations.',
    color: 'border-[#a855f7] text-[#a855f7]',
    accentBg: 'bg-[#1f132e]',
    icon: <Cpu className="w-4 h-4 text-[#c084fc]" />,
  },
  {
    id: 'frontend',
    category: 'Frontend Development',
    rune: 'ᚱ',
    tagline: 'RESPONSIVE USER INTERFACES',
    skills: ['React.js', 'Tailwind CSS', 'Bootstrap'],
    description: 'Crafting responsive, cross-device web interfaces with reusable components, fluid animations, and modern CSS frameworks.',
    color: 'border-[#38bdf8] text-[#38bdf8]',
    accentBg: 'bg-[#0f2130]',
    icon: <Globe className="w-4 h-4 text-[#38bdf8]" />,
  },
  {
    id: 'aiml',
    category: 'AI & Machine Learning',
    rune: 'ᛏ',
    tagline: 'TENSORS & NEURAL NETWORKS',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NumPy', 'Pandas', 'Feature Engineering', 'Data Preprocessing'],
    description: 'Developing artificial neural networks, computer vision pipelines with OpenCV, feature extraction, and predictive statistical models.',
    color: 'border-[#f97316] text-[#f97316]',
    accentBg: 'bg-[#25130b]',
    icon: <Flame className="w-4 h-4 text-[#fb923c]" />,
  },
  {
    id: 'databases',
    category: 'Databases & Storage',
    rune: 'ᛗ',
    tagline: 'RELATIONAL & DOCUMENT VAULTS',
    skills: ['SQL', 'MySQL', 'MongoDB', 'JSON'],
    description: 'Designing relational database schemas, writing optimized SQL queries, and managing scalable NoSQL document stores.',
    color: 'border-[#34d399] text-[#34d399]',
    accentBg: 'bg-[#0e241b]',
    icon: <Database className="w-4 h-4 text-[#34d399]" />,
  },
  {
    id: 'analytics',
    category: 'Data Analysis & Insights',
    rune: 'ᛋ',
    tagline: 'EXPLORATORY DATA ANALYSIS (EDA)',
    skills: ['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Descriptive Statistics', 'Data Visualization'],
    description: 'Extracting actionable signals from raw data, performing rigorous cleaning, and synthesizing statistical visual narratives.',
    color: 'border-[#ec4899] text-[#ec4899]',
    accentBg: 'bg-[#26101c]',
    icon: <BarChart3 className="w-4 h-4 text-[#f472b6]" />,
  },
  {
    id: 'tools',
    category: 'Developer Tools & Workflows',
    rune: 'ᚲ',
    tagline: 'ENGINEERING PIPELINE FORGES',
    skills: ['Git', 'GitHub', 'NPM', 'RESTful Workflows'],
    description: 'Enforcing version control discipline, collaborative Git workflows, package distribution, and modern automated CI/CD habits.',
    color: 'border-[#94a3b8] text-[#94a3b8]',
    accentBg: 'bg-[#151c24]',
    icon: <Wrench className="w-4 h-4 text-[#94a3b8]" />,
  },
];

export default function Realm2Vanaheim() {
  const [selectedCategory, setSelectedCategory] = useState(SKILL_DOMAINS[0].id);

  const handleSelectDomain = (domain) => {
    setSelectedCategory(domain.id);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#22c55e', '#d4af37', '#38bdf8', '#a855f7'],
    });
  };

  const activeDomain = SKILL_DOMAINS.find((d) => d.id === selectedCategory) || SKILL_DOMAINS[0];

  return (
    <div className="p-4 sm:p-6 md:p-8 norse-panel text-left space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 border-b border-[#22c55e]/30 pb-3 sm:pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded border border-[#22c55e]/40 bg-[#0c1810] text-[#4ade80] text-[11px] sm:text-xs font-norse-sub mb-1">
            <Trees className="w-3.5 h-3.5" />
            <span>REALM II // VANAHEIM — SACRED GROVE</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-norse-title text-[#f5eedb] uppercase m-0 tracking-wide">
            TECHNICAL COMPETENCE
          </h2>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#15231a] border border-[#22c55e]/40 text-[10px] sm:text-xs font-norse-sub text-[#86efac]">
          <Sparkles className="w-3 h-3 text-[#ffd700]" />
          <span>8 ENGINEERING DOMAINS</span>
        </div>
      </div>

      {/* Domain Quick Tabs */}
      <div className="flex flex-wrap gap-1 sm:gap-1.5">
        {SKILL_DOMAINS.map((dom) => {
          const isSelected = selectedCategory === dom.id;
          return (
            <button
              key={dom.id}
              onClick={() => handleSelectDomain(dom)}
              className={`px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-norse-sub transition-all flex items-center gap-1 sm:gap-1.5 border ${
                isSelected
                  ? 'bg-[#182d20] border-[#22c55e] text-[#4ade80] shadow-[0_0_12px_rgba(34,197,94,0.4)]'
                  : 'bg-[#0f141d]/80 border-white/10 text-slate-300 hover:text-white hover:border-[#22c55e]/40'
              }`}
            >
              <span className="font-bold">{dom.rune}</span>
              <span>{dom.category}</span>
            </button>
          );
        })}
      </div>

      {/* Active Selected Domain Detailed Rune Plate */}
      <div className="p-5 rounded-xl bg-[#0d141e]/95 border border-[#22c55e]/40 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xl font-bold font-norse-title border ${activeDomain.color} ${activeDomain.accentBg}`}>
              {activeDomain.rune}
            </div>
            <div>
              <h3 className="text-lg font-bold font-norse-title text-[#f5eedb] uppercase tracking-wide flex items-center gap-2">
                <span>{activeDomain.category}</span>
                {activeDomain.icon}
              </h3>
              <span className="text-[10px] font-norse-mono text-[#86efac] tracking-widest">
                {activeDomain.tagline}
              </span>
            </div>
          </div>
          <span className="text-[10px] font-norse-sub px-2.5 py-0.5 rounded border border-[#22c55e]/30 bg-[#14261b] text-[#86efac]">
            VERIFIED IN RESUME
          </span>
        </div>

        <p className="text-sm text-[#cbd5e1] font-norse-body leading-relaxed">
          {activeDomain.description}
        </p>

        {/* Skill Pills */}
        <div>
          <span className="text-[11px] font-norse-sub text-[#ffd700] uppercase tracking-wider block mb-2">
            CONSECRATED TECHNOLOGIES & TOOLKITS:
          </span>
          <div className="flex flex-wrap gap-2">
            {activeDomain.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md text-xs font-norse-mono font-semibold bg-[#111b24] border border-[#22c55e]/30 text-[#e2e8f0] shadow-sm flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Overview of All 8 Competence Runes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
        {SKILL_DOMAINS.map((dom) => {
          const isSelected = selectedCategory === dom.id;
          return (
            <div
              key={dom.id}
              onClick={() => handleSelectDomain(dom)}
              className={`p-3 rounded-lg cursor-pointer transition-all border flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#15271d] border-[#22c55e] shadow-[0_0_10px_rgba(34,197,94,0.3)]'
                  : 'bg-[#0f141d]/90 border-white/10 hover:border-[#22c55e]/50 hover:bg-[#121c17]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-base font-bold font-norse-title ${dom.color}`}>
                  {dom.rune}
                </span>
                {dom.icon}
              </div>
              <div className="mt-2">
                <div className="text-[11px] font-bold font-norse-sub text-[#f5eedb] line-clamp-1">
                  {dom.category}
                </div>
                <div className="text-[9px] font-norse-mono text-slate-400 line-clamp-1 mt-0.5">
                  {dom.skills.slice(0, 2).join(', ')}...
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
