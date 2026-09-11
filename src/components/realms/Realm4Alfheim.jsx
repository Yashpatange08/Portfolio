import React from 'react';
import { Moon, Feather, CheckCircle2, Award, Clock, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

const RESUME_CERTIFICATIONS = [
  {
    id: 'ibm-rag',
    title: 'IBM RAG and Agentic AI',
    issuer: 'IBM // Coursera',
    year: '2026',
    hours: '100+ Hours of Practical Mastery',
    rune: 'ᚨ',
    badge: 'AGENTIC AI & RAG ARCHITECT',
    color: 'border-[#a5b4fc] text-[#a5b4fc]',
    accentGlow: 'shadow-[0_0_20px_rgba(165,180,252,0.25)]',
    tagline: 'RETRIEVAL-AUGMENTED GENERATION, VECTOR RETRIEVAL & AGENTS',
    description:
      'Completed 100+ hours of extensive, hands-on coursework covering modern RAG pipelines, vector databases, multimodal applications, LangChain orchestration, LangGraph stateful multi-agent workflows, and Large Language Models (LLMs).',
    topics: [
      'RAG Applications',
      'Vector Databases',
      'Multimodal Applications',
      'LangChain Orchestration',
      'LangGraph Agentic Flows',
      'LLM Integrations',
    ],
  },
  {
    id: 'flask-ai',
    title: 'Developing AI Applications with Flask',
    issuer: 'Coursera',
    year: '2026',
    hours: '13 Hours of Intensive Production Labs',
    rune: 'ᛖ',
    badge: 'FLASK & AI DEPLOYMENT SPECIALIST',
    color: 'border-[#38bdf8] text-[#38bdf8]',
    accentGlow: 'shadow-[0_0_20px_rgba(56,189,248,0.25)]',
    tagline: 'MICROSERVICES, EMBEDDED DASHBOARDS & REAL-TIME INFERENCE',
    description:
      'Completed 13 hours of practical coursework covering Flask backend architecture, AI model deployment, data cleaning, interactive analytics dashboards, and production presentations.',
    topics: [
      'Flask Microservices',
      'Model Deployment',
      'Data Cleaning',
      'Interactive Dashboards',
      'Presentation Pipelines',
      'REST Endpoints',
    ],
  },
];

export default function Realm4Alfheim() {
  return (
    <div className="p-4 sm:p-6 md:p-8 norse-panel text-left space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 border-b border-[#a5b4fc]/30 pb-3 sm:pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded border border-[#a5b4fc]/40 bg-[#12162a] text-[#a5b4fc] text-[11px] sm:text-xs font-norse-sub mb-1">
            <Moon className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>REALM IV // ALFHEIM — SANCTUM</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-norse-title text-[#f5eedb] uppercase m-0 tracking-wide">
            CONSECRATED CERTIFICATIONS
          </h2>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#161a30] border border-[#a5b4fc]/40 text-[10px] sm:text-xs font-norse-sub text-[#c7d2fe]">
          <Feather className="w-3 h-3 text-[#38bdf8]" />
          <span>IBM & COURSERA VERIFIED</span>
        </div>
      </div>

      {/* Intro Bio Note */}
      <p className="text-xs sm:text-sm text-[#cbd5e1] font-norse-body leading-relaxed">
        Illuminated scrolls of technical distinction in Generative AI, Retrieval-Augmented Generation (RAG), and production Flask service deployments, certified by IBM and Coursera.
      </p>

      {/* Grid of 2 Real Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {RESUME_CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className={`p-5 rounded-xl bg-[#0f1422]/95 border ${cert.color} ${cert.accentGlow} flex flex-col justify-between space-y-4 transition-all duration-300 hover:translate-y-[-2px]`}
          >
            <div className="space-y-3">
              {/* Header Badges */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xl font-bold font-norse-title border ${cert.color} bg-[#141a2e]`}>
                    {cert.rune}
                  </div>
                  <div>
                    <span className="text-[10px] font-norse-mono text-[#38bdf8] block font-bold">
                      {cert.issuer} ({cert.year})
                    </span>
                    <span className={`text-[10px] font-norse-sub px-2 py-0.5 rounded border bg-[#0b0e18] ${cert.color}`}>
                      {cert.badge}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-norse-mono text-[#cbd5e1] bg-[#1a2136] px-2 py-1 rounded border border-white/10">
                  <Clock className="w-3 h-3 text-[#38bdf8]" />
                  <span>{cert.hours}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-lg font-bold font-norse-title text-[#f5eedb] uppercase tracking-wide">
                  {cert.title}
                </h3>
                <div className="text-[10px] font-norse-mono text-[#a5b4fc] tracking-wider mt-0.5">
                  {cert.tagline}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#cbd5e1] font-norse-body leading-relaxed">
                {cert.description}
              </p>

              {/* Curriculum Topics */}
              <div>
                <span className="text-[10px] font-norse-sub text-[#ffd700] tracking-wider uppercase block mb-1.5">
                  CURRICULUM INCLUSIONS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.topics.map((top, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded text-[10px] font-norse-mono bg-[#141c2c] border border-[#a5b4fc]/30 text-[#e0f2fe]"
                    >
                      ✦ {top}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-norse-sub">
              <span className="text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>PRACTICAL LAB WORK</span>
              </span>
              <span className="text-[#38bdf8] font-bold flex items-center gap-1">
                <span>AUTHENTICATED</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
