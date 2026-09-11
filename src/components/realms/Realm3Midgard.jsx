import React, { useState, useEffect } from 'react';
import { Scroll, ExternalLink, Star, GitFork, Search, RefreshCw, Anchor, Compass } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';

const MIDGARD_ARCHIVES = [
  {
    id: 1,
    name: 'Assistant-Jarvis',
    description: 'An enchanted automated aide crafted in Python for command execution, desktop rituals, and system automation.',
    html_url: 'https://github.com/Yashpatange08/Assistant-Jarvis',
    language: 'Python',
    topics: ['python', 'automation', 'intelligence'],
    stargazers_count: 5,
    forks_count: 2,
    rune: 'ᛃ',
  },
  {
    id: 2,
    name: 'JOB-PORTAL',
    description: 'A fortified Django portal forged for commerce, recruitment voyages, and career applicant management across Midgard.',
    html_url: 'https://github.com/Yashpatange08/JOB-PORTAL',
    language: 'Django / Python',
    topics: ['django', 'fullstack', 'database'],
    stargazers_count: 7,
    forks_count: 3,
    rune: 'ᛗ',
  },
  {
    id: 3,
    name: 'PRAP (Relocation System)',
    description: 'A spatial cartography engine parsing Google Maps coordinates and dwellings to guide wanderers to their ideal haven.',
    html_url: 'https://github.com/Yashpatange08/PRAP',
    language: 'Python',
    topics: ['maps-api', 'geo-spatial', 'recommender'],
    stargazers_count: 6,
    forks_count: 1,
    rune: 'ᚱ',
  },
  {
    id: 4,
    name: 'FC_recognition_module',
    description: 'An all-seeing computer vision rune utilizing facial recognition and neural alignment to identify wanderers.',
    html_url: 'https://github.com/Yashpatange08/FC_recognition_module',
    language: 'Python / OpenCV',
    topics: ['vision', 'face-recognition', 'deep-learning'],
    stargazers_count: 8,
    forks_count: 2,
    rune: 'ᚲ',
  },
  {
    id: 5,
    name: 'Resume-Analyzer',
    description: 'An oracle scroll analyzing warrior credentials and technical resumes against the high standards of great guilds.',
    html_url: 'https://github.com/Yashpatange08/Resume-Analyzer',
    language: 'Python / NLP',
    topics: ['nlp', 'analytics', 'scoring'],
    stargazers_count: 4,
    forks_count: 1,
    rune: 'ᚷ',
  },
  {
    id: 6,
    name: 'SocialMedia_clone',
    description: 'A town square communication engine featuring user chronicles, real-time message exchange, and interactive feeds.',
    html_url: 'https://github.com/Yashpatange08/SocialMedia_clone',
    language: 'Python / Django',
    topics: ['django', 'social', 'rest-api'],
    stargazers_count: 9,
    forks_count: 4,
    rune: 'ᛋ',
  },
];

export default function Realm3Midgard() {
  const [username, setUsername] = useState('Yashpatange08');
  const [inputUser, setInputUser] = useState('Yashpatange08');
  const [projects, setProjects] = useState(MIDGARD_ARCHIVES);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [apiSource, setApiSource] = useState('VERIFIED ARCHIVES');

  const fetchGithubRepos = async (targetUser) => {
    if (!targetUser.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${targetUser}/repos?sort=updated&per_page=12`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const enriched = data.map((d, i) => {
            const match = MIDGARD_ARCHIVES.find(p => p.name.toLowerCase() === d.name.toLowerCase());
            return {
              ...d,
              description: d.description || (match ? match.description : 'Open-source software artifact on GitHub.'),
              language: d.language || (match ? match.language : 'Python'),
              rune: match ? match.rune : 'ᛟ',
            };
          });
          setProjects(enriched);
          setApiSource(`MIDGARD HARBOR SYNC (${data.length} SCROLLS)`);
        } else {
          setProjects(MIDGARD_ARCHIVES);
        }
      } else {
        setProjects(MIDGARD_ARCHIVES);
        setApiSource('ANCIENT HARBOR ARCHIVE');
      }
    } catch (err) {
      setProjects(MIDGARD_ARCHIVES);
      setApiSource('OFFLINE MAP ARCHIVE');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubRepos('Yashpatange08');
  }, []);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setUsername(inputUser);
    fetchGithubRepos(inputUser);
  };

  const filteredProjects = projects.filter((p) => {
    const q = searchQuery.toLowerCase();
    return p.name?.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q));
  });

  return (
    <div className="p-6 md:p-10 norse-panel text-left space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#c29b38]/30 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#c29b38]/40 bg-[#1a160d] text-[#eab308] text-xs font-norse-sub mb-2">
            <Anchor className="w-3.5 h-3.5" />
            <span>REALM III // MIDGARD — REALM OF MEN & CODEBASES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-norse-title text-[#f5eedb] uppercase m-0">
            CHRONICLES OF WORK
          </h2>
        </div>

        {/* GitHub Vessel Switcher */}
        <form onSubmit={handleUserSubmit} className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-48">
            <span className="absolute left-2.5 top-2 text-xs font-norse-sub text-[#c29b38]">@</span>
            <input
              type="text"
              value={inputUser}
              onChange={(e) => setInputUser(e.target.value)}
              placeholder="github username"
              className="w-full bg-[#121620] border border-[#c29b38]/40 focus:border-[#ffd700] rounded px-3 py-1.5 pl-6 text-xs font-norse-mono text-[#f5eedb] outline-none"
            />
          </div>
          <button
            type="submit"
            className="norse-btn text-xs px-3 py-1.5 flex items-center gap-1.5"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            <span>COMMUNE</span>
          </button>
        </form>
      </div>

      {/* Stream Status & Search Input */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-norse-sub text-[#cbd5e1]">
          <span className="w-2 h-2 rounded-full bg-[#eab308] animate-pulse" />
          <span>VESSEL REGISTRY: <strong className="text-[#ffd700]">{apiSource}</strong></span>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#c29b38]" />
          <input
            type="text"
            placeholder="Search expedition scrolls..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#121620] border border-[#c29b38]/40 focus:border-[#ffd700] rounded px-3 py-1.5 pl-9 text-xs font-norse-body text-[#f5eedb] outline-none"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[380px] overflow-y-auto pr-1">
        {filteredProjects.map((p, idx) => (
          <div
            key={p.id || idx}
            className="p-5 rounded-xl bg-[#111722]/90 border border-[#c29b38]/20 hover:border-[#ffd700] hover:bg-[#151d2c] transition-all duration-300 flex flex-col justify-between space-y-4 group"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-xl font-bold font-norse-title text-[#d4af37]">
                  {p.rune || 'ᛟ'}
                </span>
                {p.language && (
                  <span className="text-[10px] font-norse-sub px-2 py-0.5 rounded border border-[#c29b38]/40 bg-[#1a150b] text-[#fde047]">
                    {p.language}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold font-norse-sub text-[#f5eedb] group-hover:text-[#ffd700] transition-colors mt-2 uppercase tracking-wide">
                {p.name}
              </h3>

              <p className="text-sm text-[#cbd5e1] font-norse-body mt-1.5 line-clamp-3 leading-relaxed">
                {p.description || 'A software artifact forged by Yash Patange in Midgard.'}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-norse-sub">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[#ffd700]" />
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
                className="norse-btn text-[11px] py-1 px-3 flex items-center gap-1"
              >
                <span>OPEN SCROLL</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
