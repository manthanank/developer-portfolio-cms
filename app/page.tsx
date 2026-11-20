"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects-data";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilter } from "@/components/ProjectFilter";
import { ContactForm } from "@/components/ContactForm";
import {
  ArrowRight,
  Terminal,
  Sparkles,
  Layers,
  Database,
  Cpu,
  Radio,
  BookOpen,
  FolderGit2,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Full-Stack",
    "AI & Data",
    "Real-Time",
    "SaaS & Enterprise",
  ];

  const counts: Record<string, number> = {
    All: PROJECTS.length,
    "Full-Stack": PROJECTS.filter((p) => p.category === "Full-Stack").length,
    "AI & Data": PROJECTS.filter((p) => p.category === "AI & Data").length,
    "Real-Time": PROJECTS.filter((p) => p.category === "Real-Time").length,
    "SaaS & Enterprise": PROJECTS.filter((p) => p.category === "SaaS & Enterprise").length,
  };

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative">
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/15 to-purple-600/15 blur-[120px]" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>10 Production-Ready Full-Stack Applications</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Engineering Scalable{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Full-Stack SaaS
                </span>{" "}
                & Real-Time Systems
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Welcome to my engineering hub. Here you will find an interconnected suite of 10 standalone
                web applications built with <strong>Next.js 15, TypeScript, PostgreSQL, Stripe, WebSockets, and AI Document Intelligence</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all"
                >
                  <FolderGit2 className="h-4 w-4" />
                  <span>Explore All 10 Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all"
                >
                  <BookOpen className="h-4 w-4 text-indigo-400" />
                  <span>System Design Notes</span>
                </Link>
              </div>

              {/* Quick stats pills */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-2xl font-bold font-mono text-white">10</div>
                  <div className="text-xs text-slate-400">Target Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-indigo-400">100%</div>
                  <div className="text-xs text-slate-400">TypeScript & Next.js</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-purple-400">Hybrid</div>
                  <div className="text-xs text-slate-400">SQL + NoSQL + Vectors</div>
                </div>
              </div>
            </div>

            {/* Hero Right - Terminal Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Terminal Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/80">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Terminal className="h-3.5 w-3.5 text-indigo-400" />
                    <span>architecture-blueprint.ts</span>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    ACTIVE
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto space-y-2">
                  <div className="text-slate-500">// 10 Standalone Full-Stack Applications</div>
                  <div>
                    <span className="text-indigo-400">const</span>{" "}
                    <span className="text-purple-300">stack</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">framework:</span>{" "}
                    <span className="text-emerald-300">'Next.js 15 (App Router)'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">database:</span>{" "}
                    <span className="text-emerald-300">'PostgreSQL + Prisma / Supabase'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">payments:</span>{" "}
                    <span className="text-emerald-300">'Stripe Connect & Webhooks'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">realTime:</span>{" "}
                    <span className="text-emerald-300">'WebSockets & Socket.IO'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">intelligence:</span>{" "}
                    <span className="text-emerald-300">'OpenAI + pgvector RAG'</span>,
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-indigo-300">
                    export default async function runSuite() &#123;
                  </div>
                  <div className="pl-4 text-slate-400">
                    console.log(<span className="text-emerald-300">"Starting with 01. Portfolio CMS"</span>);
                  </div>
                  <div className="pl-4 text-emerald-400">
                    return &#123; ready: true, status: 'scaffolded' &#125;;
                  </div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-16 md:py-24 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                <FolderGit2 className="h-4 w-4" />
                <span>The 10-Project Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Comprehensive Project Suite
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-xl">
                Filter across domains to inspect system architectures, data models, and live implementation progress.
              </p>
            </div>

            <ProjectFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              counts={counts}
            />
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture Radar */}
      <section className="py-16 md:py-24 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              <Layers className="h-4 w-4" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              System Architecture & Tech Radar
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              The modern technologies and design patterns powering the entire 10-project portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Frontend & Core</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                React 19, Next.js 15 App Router, Server Components, Tailwind CSS, TanStack Query, Framer Motion.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Server Actions with Zod</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Optimistic Cache Invalidation</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <Database className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Data & ORM</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                PostgreSQL, Prisma ORM, Supabase RLS, MongoDB, Redis Cache-Aside, DataLoader query batching.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Multi-Tenant DB Schemas</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>ACID Transaction Guarantees</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
                <Radio className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Real-Time & Events</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                WebSockets, Socket.IO, Server-Sent Events (SSE), Presence detection, Zustand local stores.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Heartbeat Connection Pooling</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Sub-100ms Delta Broadcasts</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">AI & Commerce</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                OpenAI API, pgvector semantic search, Stripe Checkout & Webhooks, Mux adaptive streaming.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>RAG Vector Pipelines</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Cryptographic Webhook Signatures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

