import React, { useState, useEffect } from 'react';
import { Anchor, Star, ExternalLink, Code2, Sparkles, Brain, GraduationCap, MapPin, Music, CheckCircle, RefreshCw, Search } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';

const RESUME_PROJECTS = [
  {
    id: 'relocation',
    name: 'Personalized Re-Location Suggestion System',
    year: '2026',
    rune: 'ᚱ',
    category: 'Full-Stack Recommendation Engine',
    techStack: ['React.js', 'Django', 'Python', 'REST APIs', 'Google APIs', 'Tailwind CSS'],
    icon: <MapPin className="w-5 h-5 text-[#ffd700]" />,
    color: 'border-[#ffd700] text-[#ffd700]',
    summary: 'A personalized relocation recommendation system based on user preferences including budget, lifestyle, connectivity, and nearby amenities.',
    bullets: [
      'Developed a personalized relocation recommendation system using React.js and Django based on user preferences including budget, lifestyle, connectivity, and nearby amenities.',
      'Developed backend functionality using Python and Django, contributing to API integration, feature development, problem solving, and end-to-end application development.',
      'Designed reusable React.js components to build a responsive and scalable user interface.',
      'Integrated REST APIs and Google APIs to implement location-based functionality and personalized recommendations.',
      'Applied Python and Django-based development techniques throughout the project, contributing to planning, feature development, and problem-solving.',
    ],
    githubUrl: 'https://github.com/Yashpatange08',
  },
  {
    id: 'sound-gen',
    name: 'Sound Generation Using Neural Networks',
    year: '2024',
    rune: 'ᛋ',
    category: 'Deep Learning & Audio Processing',
    techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Scikit-learn', 'Librosa', 'Torchaudio'],
    icon: <Music className="w-5 h-5 text-[#38bdf8]" />,
    color: 'border-[#38bdf8] text-[#38bdf8]',
    summary: 'An Artificial Neural Network (ANN) pipeline synthesizing audio and preprocessing sound features using Librosa and Torchaudio.',
    bullets: [
      'Developed an Artificial Neural Network (ANN) using TensorFlow and Keras for sound-generation experimentation.',
      'Implemented audio preprocessing and feature extraction using Librosa and Torchaudio.',
      'Built an end-to-end pipeline for generating lyrics and converting text-based input into synthesized audio.',
      'Applied Python-based data processing and machine learning techniques throughout the project.',
    ],
    githubUrl: 'https://github.com/Yashpatange08',
  },
  {
    id: 'e-exams',
    name: 'E-Exams (Online Examination System)',
    year: '2025',
    rune: 'ᛖ',
    category: 'Full-Stack Testing & AI Chatbot Support',
    techStack: ['React.js', 'JavaScript', 'MySQL', 'REST APIs'],
    icon: <GraduationCap className="w-5 h-5 text-[#34d399]" />,
    color: 'border-[#34d399] text-[#34d399]',
    summary: 'Comprehensive online examination platform with exam scheduling, automated registration, MySQL database, and automated chatbot assistance.',
    bullets: [
      'Engineered a full-stack online examination platform featuring comprehensive modules for test management, exam scheduling, and automated registration.',
      'Designed responsive user interfaces utilizing React.js and JavaScript, improving cross-device compatibility and reducing average user test-setup time.',
      'Architected a relational MySQL database and integrated REST APIs, efficiently processing queries.',
      'Deployed a chatbot-based assistance tool to guide system navigation, automatically resolving 50% of common student support queries without manual intervention.',
    ],
    githubUrl: 'https://github.com/Yashpatange08',
  },
];

export default function Realm3Midgard() {
  const [activeTab, setActiveTab] = useState('resume'); // 'resume' | 'github'
  const [selectedProjectId, setSelectedProjectId] = useState(RESUME_PROJECTS[0].id);
  const [githubRepos, setGithubRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchGithubRepos = async () => {
    setLoadingRepos(true);
    try {
      const res = await fetch('https://api.github.com/users/Yashpatange08/repos?sort=updated&per_page=10');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setGithubRepos(data);
        }
      }
    } catch {
      // Fallback handled gracefully
    } finally {
      setLoadingRepos(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'github' && githubRepos.length === 0) {
      fetchGithubRepos();
    }
  }, [activeTab, githubRepos.length]);

  const activeProject = RESUME_PROJECTS.find((p) => p.id === selectedProjectId) || RESUME_PROJECTS[0];

  const filteredRepos = githubRepos.filter((r) => {
    const q = searchQuery.toLowerCase();
    return r.name?.toLowerCase().includes(q) || (r.description && r.description.toLowerCase().includes(q));
  });

  return (
    <div className="p-4 sm:p-6 md:p-8 norse-panel text-left space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 border-b border-[#c29b38]/30 pb-3 sm:pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded border border-[#c29b38]/40 bg-[#1a160d] text-[#eab308] text-[11px] sm:text-xs font-norse-sub mb-1">
            <Anchor className="w-3.5 h-3.5" />
            <span>REALM III // MIDGARD — CODEBASES</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-norse-title text-[#f5eedb] uppercase m-0 tracking-wide">
            ENGINEERING EXPEDITIONS
          </h2>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-[#0f141f] border border-[#c29b38]/40 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('resume')}
            className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-norse-sub rounded transition-all flex items-center gap-1 ${
              activeTab === 'resume'
                ? 'bg-[#d4af37] text-black font-bold shadow-md'
                : 'text-[#d8cfbe] hover:text-white'
            }`}
          >
            <span>ᛟ</span>
            <span>RESUME (3)</span>
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-norse-sub rounded transition-all flex items-center gap-1 ${
              activeTab === 'github'
                ? 'bg-[#d4af37] text-black font-bold shadow-md'
                : 'text-[#d8cfbe] hover:text-white'
            }`}
          >
            <GithubIcon className="w-3 h-3" />
            <span>GITHUB</span>
          </button>
        </div>
      </div>

      {activeTab === 'resume' ? (
        /* Resume Flagship Projects View */
        <div className="space-y-4">
          {/* Project Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {RESUME_PROJECTS.map((p) => {
              const isSelected = selectedProjectId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  className={`p-3 rounded-lg text-left transition-all border flex items-center gap-3 ${
                    isSelected
                      ? 'bg-[#1e1b12] border-[#ffd700] shadow-[0_0_12px_rgba(255,215,0,0.3)]'
                      : 'bg-[#0f141d]/80 border-white/10 hover:border-[#ffd700]/40'
                  }`}
                >
                  <span className={`text-xl font-bold font-norse-title ${p.color}`}>
                    {p.rune}
                  </span>
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold font-norse-sub text-[#f5eedb] truncate">
                      {p.name}
                    </div>
                    <div className="text-[10px] font-norse-mono text-[#ffd700]/80">
                      {p.year} // {p.category}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Project Card */}
          <div className="p-5 rounded-xl bg-[#0d141e]/95 border border-[#ffd700]/30 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold font-norse-title border ${activeProject.color} bg-[#19160d]`}>
                  {activeProject.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-norse-title text-[#f5eedb] uppercase">
                    {activeProject.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-norse-mono text-[#cbd5e1] mt-0.5">
                    <span className="text-[#ffd700] font-bold">YEAR: {activeProject.year}</span>
                    <span>✦</span>
                    <span className="text-[#38bdf8]">{activeProject.category}</span>
                  </div>
                </div>
              </div>

              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="norse-btn text-xs py-1.5 px-3 border-[#ffd700]/50 text-[#ffd700] flex items-center gap-1.5 hover:border-[#ffd700]"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>INSPECT REPOSITORY</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <span className="text-[10px] font-norse-sub text-[#ffd700] tracking-wider block mb-1.5 uppercase">
                CONSECRATED TECHNOLOGIES:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.techStack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded text-[11px] font-norse-mono font-semibold bg-[#181a24] border border-[#ffd700]/30 text-[#fde047]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bullet Points from Resume */}
            <div className="space-y-2 pt-1 border-t border-white/10">
              <span className="text-[10px] font-norse-sub text-slate-400 tracking-wider uppercase block">
                AUTHENTIC RESUME SPECIFICATIONS:
              </span>
              <ul className="space-y-2">
                {activeProject.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-norse-body text-[#cbd5e1] leading-relaxed">
                    <span className="text-[#ffd700] font-bold mt-0.5">ᚱ</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* GitHub Repositories Explorer */
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#c29b38]" />
              <input
                type="text"
                placeholder="Search GitHub repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#10141d] border border-[#c29b38]/30 rounded px-3 py-1.5 pl-9 text-xs font-norse-body text-[#f5eedb] outline-none"
              />
            </div>
            <button
              onClick={fetchGithubRepos}
              className="norse-btn text-xs py-1.5 px-3 border-[#c29b38]/40 text-[#fde047] flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3 h-3 ${loadingRepos ? 'animate-spin' : ''}`} />
              <span>SYNC</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
            {filteredRepos.length > 0 ? (
              filteredRepos.map((r) => (
                <a
                  key={r.id}
                  href={r.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-lg bg-[#0f141d]/90 border border-white/10 hover:border-[#ffd700] hover:bg-[#151a24] transition-all flex flex-col justify-between space-y-2 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold font-norse-sub text-[#f5eedb] group-hover:text-[#ffd700] truncate">
                        {r.name}
                      </span>
                      {r.language && (
                        <span className="text-[9px] font-norse-mono px-2 py-0.5 rounded border border-[#c29b38]/40 bg-[#1a150b] text-[#fde047]">
                          {r.language}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-300 font-norse-body line-clamp-2 mt-1">
                      {r.description || 'Public open-source repository by Yash Patange.'}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-norse-mono text-slate-400 pt-1 border-t border-white/10">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#ffd700]" />
                      {r.stargazers_count ?? 0}
                    </span>
                    <span className="text-[#ffd700] flex items-center gap-1">
                      <span>VIEW SCROLL</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-2 text-center py-6 text-xs font-norse-sub text-slate-400">
                {loadingRepos ? 'Communing with GitHub API...' : 'No repository scrolls matched your query.'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
