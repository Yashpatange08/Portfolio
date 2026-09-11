import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, GitFork, Search, RefreshCw, FolderGit2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { soundFx } from '../../utils/audio';

const YASH_PROJECTS = [
  {
    id: 1,
    name: 'Assistant-Jarvis',
    description: 'Personal AI Assistant Jarvis functioning as an automated helper for desktop workflows, system commands, and task automation.',
    html_url: 'https://github.com/Yashpatange08/Assistant-Jarvis',
    language: 'Python',
    topics: ['python', 'ai-assistant', 'automation'],
    stargazers_count: 5,
    forks_count: 2,
  },
  {
    id: 2,
    name: 'JOB-PORTAL',
    description: 'A lightweight, clean, and robust Django-based full-stack web application designed for job recruitment, candidate applications, and portal management.',
    html_url: 'https://github.com/Yashpatange08/JOB-PORTAL',
    language: 'Django / Python',
    topics: ['django', 'python', 'fullstack', 'database'],
    stargazers_count: 7,
    forks_count: 3,
  },
  {
    id: 3,
    name: 'PRAP (Relocation Recommender)',
    description: 'Personalized Relocation Apartment Recommender that analyzes Google Maps APIs, geo-coordinates, and amenities to find optimal housing.',
    html_url: 'https://github.com/Yashpatange08/PRAP',
    language: 'Python',
    topics: ['google-maps-api', 'python', 'recommender-system'],
    stargazers_count: 6,
    forks_count: 1,
  },
  {
    id: 4,
    name: 'FC_recognition_module',
    description: 'Facial Recognition & Image Analysis module utilizing computer vision to detect, align, and classify human faces with high confidence.',
    html_url: 'https://github.com/Yashpatange08/FC_recognition_module',
    language: 'Python / OpenCV',
    topics: ['computer-vision', 'face-recognition', 'deep-learning'],
    stargazers_count: 8,
    forks_count: 2,
  },
  {
    id: 5,
    name: 'Resume-Analyzer',
    description: 'Intelligent AI-driven resume scoring and keyword extraction system assessing candidate resumes against technical job descriptions.',
    html_url: 'https://github.com/Yashpatange08/Resume-Analyzer',
    language: 'Python / NLP',
    topics: ['nlp', 'python', 'ats-analyzer'],
    stargazers_count: 4,
    forks_count: 1,
  },
  {
    id: 6,
    name: 'SocialMedia_clone',
    description: 'Full-stack social platform clone featuring real-time user feeds, posts, profile authentication, and media interactions.',
    html_url: 'https://github.com/Yashpatange08/SocialMedia_clone',
    language: 'Python / Django',
    topics: ['django', 'social-media', 'rest-api'],
    stargazers_count: 9,
    forks_count: 4,
  },
];

export default function Level3Projects() {
  const [username, setUsername] = useState('Yashpatange08');
  const [inputUser, setInputUser] = useState('Yashpatange08');
  const [projects, setProjects] = useState(YASH_PROJECTS);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [apiSource, setApiSource] = useState('VERIFIED CODEBASES');

  const fetchGithubRepos = async (targetUser) => {
    if (!targetUser.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${targetUser}/repos?sort=updated&per_page=12`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          // Map description fallbacks if empty
          const enriched = data.map((d) => {
            const match = YASH_PROJECTS.find(p => p.name.toLowerCase() === d.name.toLowerCase());
            return {
              ...d,
              description: d.description || (match ? match.description : 'Open-source software codebase on GitHub.'),
              language: d.language || (match ? match.language : 'Python'),
            };
          });
          setProjects(enriched);
          setApiSource(`LIVE GITHUB SYNC (${data.length} REPOS)`);
        } else {
          setProjects(YASH_PROJECTS);
        }
      } else {
        setProjects(YASH_PROJECTS);
        setApiSource('SHOWCASE ARCHIVE (RATE LIMIT GUARD)');
      }
    } catch (err) {
      setProjects(YASH_PROJECTS);
      setApiSource('OFFLINE FALLBACK ARCHIVE');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubRepos('Yashpatange08');
  }, []);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    soundFx.playClick();
    setUsername(inputUser);
    fetchGithubRepos(inputUser);
  };

  const filteredProjects = projects.filter((p) => {
    const q = searchQuery.toLowerCase();
    return p.name?.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q));
  });

  return (
    <div className="p-6 md:p-10 toy-panel text-left space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="toy-pill pill-lavender text-xs font-black">LEVEL 03</span>
            <span className="toy-pill pill-dark text-xs font-mono-toy">SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#FAF6EF] uppercase tracking-tight m-0">
            GITHUB WORK & CODEBASES
          </h2>
        </div>

        {/* GitHub Username Switcher / Live Sync */}
        <form onSubmit={handleUserSubmit} className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-48">
            <span className="absolute left-2.5 top-2 text-xs font-mono-toy text-slate-400">@</span>
            <input
              type="text"
              value={inputUser}
              onChange={(e) => setInputUser(e.target.value)}
              placeholder="github username"
              className="w-full bg-[#151518] border border-white/15 focus:border-[#FFE500] rounded-full px-3 py-1.5 pl-6 text-xs font-mono-toy text-slate-100 outline-none"
            />
          </div>
          <button
            type="submit"
            onMouseEnter={() => soundFx.playHover()}
            className="toy-btn px-3.5 py-1.5 bg-[#FFE500] text-[#0D0D0E] text-xs font-display hover:bg-[#fff066]"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            <span>SYNC</span>
          </button>
        </form>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono-toy text-slate-400">
          <span className="w-2 h-2 rounded-full bg-[#FFE500] animate-pulse" />
          <span>REPOSITORIES // <strong className="text-[#FAF6EF]">{apiSource}</strong></span>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search codebases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#151518] border border-white/15 focus:border-[#FFE500] rounded-full px-3 py-1.5 pl-9 text-xs font-mono-toy text-slate-200 outline-none"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[380px] overflow-y-auto pr-1">
        {filteredProjects.map((p, idx) => (
          <div
            key={p.id || idx}
            onMouseEnter={() => soundFx.playHover()}
            className="p-5 rounded-xl bg-[#151518]/90 border border-white/5 hover:border-white/20 transition-all duration-200 flex flex-col justify-between group space-y-4"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-mono-toy font-bold text-slate-500">
                  {(idx + 1).toString().padStart(2, '0')} //
                </span>
                {p.language && (
                  <span className="toy-pill pill-yellow text-[10px] font-black">
                    {p.language}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-black font-display text-[#FAF6EF] group-hover:text-[#FFE500] transition-colors mt-2 tracking-tight">
                {p.name}
              </h3>

              <p className="text-xs text-slate-300 font-body mt-1.5 line-clamp-3 leading-relaxed">
                {p.description || 'Full-stack software engineering project by Yash Patange.'}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-toy">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[#FFE500]" />
                  {p.stargazers_count ?? 0}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5 text-slate-400" />
                  {p.forks_count ?? 0}
                </span>
              </div>

              <a
                href={p.html_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="toy-btn px-2.5 py-1 bg-white/10 text-[#FAF6EF] hover:bg-[#FFE500] hover:text-[#0D0D0E] text-[11px] font-display flex items-center gap-1 transition-all"
              >
                <span>VIEW REPO</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
