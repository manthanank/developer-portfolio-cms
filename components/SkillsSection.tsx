"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Cpu,
  Cloud,
  Radio,
  CheckCircle2,
  Sparkles,
  Layers,
  Zap,
} from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0 - 100
  experience: string;
  highlight: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: any;
  description: string;
  skills: Skill[];
}

export function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      id: "frontend",
      name: "Frontend & UI Engineering",
      icon: Code2,
      description: "Modern component architectures, streaming SSR, and micro-interactions.",
      skills: [
        { name: "Next.js 15 (App Router, RSC)", level: 95, experience: "4+ yrs", highlight: "Server Components & Server Actions" },
        { name: "TypeScript (Strict Mode)", level: 95, experience: "5+ yrs", highlight: "Full end-to-end type safety" },
        { name: "React 19 & Concurrent Primitives", level: 92, experience: "5+ yrs", highlight: "Transitions & Optimistic State" },
        { name: "Tailwind CSS & shadcn/ui", level: 96, experience: "4+ yrs", highlight: "Design systems & responsive tokens" },
        { name: "Framer Motion & Animations", level: 88, experience: "3+ yrs", highlight: "Gesture physics & spring transitions" },
        { name: "TanStack Query & State Stores", level: 90, experience: "4+ yrs", highlight: "Cache synchronization & optimistic mutations" },
      ],
    },
    {
      id: "backend",
      name: "Backend & Real-Time APIs",
      icon: Radio,
      description: "Scalable route handlers, WebSocket clusters, and real-time multiplayer protocols.",
      skills: [
        { name: "Node.js & Edge Runtime", level: 92, experience: "5+ yrs", highlight: "High-throughput async event loops" },
        { name: "WebSockets & Socket.IO", level: 88, experience: "3+ yrs", highlight: "Presence state & channel clustering" },
        { name: "GraphQL & DataLoader", level: 85, experience: "3+ yrs", highlight: "Batching & N+1 prevention" },
        { name: "RESTful API & Webhooks", level: 95, experience: "5+ yrs", highlight: "Idempotent signing & rate limiting" },
      ],
    },
    {
      id: "databases",
      name: "Databases, ORM & Caching",
      icon: Database,
      description: "ACID transactions, relational modeling, Redis caching, and vector indexing.",
      skills: [
        { name: "PostgreSQL & Complex Queries", level: 90, experience: "4+ yrs", highlight: "Composite indexing & serializable transactions" },
        { name: "Prisma ORM & Migrations", level: 94, experience: "4+ yrs", highlight: "Automated migrations & relational joins" },
        { name: "Supabase & Row Level Security", level: 88, experience: "3+ yrs", highlight: "Multi-tenant auth & RLS policies" },
        { name: "Redis & Cache-Aside", level: 86, experience: "3+ yrs", highlight: "Pub/Sub, rate limiters, session caches" },
        { name: "MongoDB & Mongoose", level: 85, experience: "4+ yrs", highlight: "Document collections & aggregation pipelines" },
      ],
    },
    {
      id: "ai",
      name: "AI & Vector Search (RAG)",
      icon: Cpu,
      description: "Retrieval-Augmented Generation, vector embeddings, and streaming LLM integrations.",
      skills: [
        { name: "OpenAI API & Vercel AI SDK", level: 90, experience: "2+ yrs", highlight: "Token streaming over Server-Sent Events" },
        { name: "pgvector & Pinecone", level: 88, experience: "2+ yrs", highlight: "Cosine similarity & HNSW indexing" },
        { name: "Document Chunking & Embeddings", level: 89, experience: "2+ yrs", highlight: "Semantic overlap & text normalization" },
        { name: "Prompt Engineering & Guardrails", level: 91, experience: "2+ yrs", highlight: "Structured outputs & schema validation" },
      ],
    },
    {
      id: "cloud",
      name: "Cloud, DevOps & Payments",
      icon: Cloud,
      description: "Production deployments, CI/CD pipelines, and financial payment gateways.",
      skills: [
        { name: "Stripe Checkout & Connect", level: 92, experience: "3+ yrs", highlight: "Custom flows & signed webhook listeners" },
        { name: "Vercel & Edge Deployment", level: 95, experience: "4+ yrs", highlight: "Edge functions, analytics & domain routing" },
        { name: "Docker & Containerization", level: 84, experience: "3+ yrs", highlight: "Multi-stage builds & local dev parity" },
        { name: "GitHub Actions & CI/CD", level: 88, experience: "3+ yrs", highlight: "Automated linting, tests & deployments" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("frontend");
  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-800/80 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <Sparkles className="h-4 w-4" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & Architectural Capabilities
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            A comprehensive matrix of technical competencies and production tools across the full application stack.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-102"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content with Framer Motion Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 backdrop-blur-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800/80 gap-3">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>{currentCategory.name}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">{currentCategory.description}</p>
              </div>
              <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full self-start sm:self-auto">
                {currentCategory.skills.length} Core Technologies
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {currentCategory.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-semibold text-sm text-slate-200 group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-500">{skill.experience}</span>
                      <span className="text-xs font-mono font-bold text-indigo-400">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.05 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    />
                  </div>

                  {/* Highlight pill */}
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Zap className="h-3 w-3 text-amber-400 shrink-0" />
                    <span className="truncate">{skill.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

