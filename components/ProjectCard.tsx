"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/projects-data";
import { ExternalLink, Github, ChevronDown, ChevronUp, Layers, CheckCircle2, Sparkles, Star, GitFork, Radio } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showArchitecture, setShowArchitecture] = useState(false);

  const statusColor: Record<string, string> = {
    "Production Live": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-semibold",
    "Active": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    "Beta": "bg-amber-500/10 text-amber-400 border-amber-500/30",
    "Active / Scaffolding": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    "In Development": "bg-amber-500/10 text-amber-400 border-amber-500/30",
    "Planned": "bg-slate-800 text-slate-400 border-slate-700",
  };
  const activeStatusClass = statusColor[project.status] || "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";

  const categoryColor = {
    "Full-Stack": "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    "AI & Data": "bg-purple-500/10 text-purple-400 border-purple-500/30",
    "Real-Time": "bg-sky-500/10 text-sky-400 border-sky-500/30",
    "SaaS & Enterprise": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  }[project.category];

  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-indigo-500/5">
      {/* Top badges */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${categoryColor}`}>
          {project.category}
        </span>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${activeStatusClass}`}>
          {(project.status === "Production Live" || project.status === "Active") && (
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          )}
          {project.status}
        </span>
      </div>

      {/* Title & Tagline */}
      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-indigo-400/90">{project.tagline}</p>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-grow">{project.description}</p>

      {/* Tech Stack Pills */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-slate-800 bg-slate-950 px-2 py-0.5 text-xs font-mono text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Live GitHub Telemetry Badge */}
      {project.isLiveSynced && (
        <div className="mt-3 flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-950/90 border border-indigo-500/20 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5 text-indigo-400">
            <Radio className="h-3 w-3 animate-pulse text-emerald-400" />
            <span className="font-semibold text-slate-200">Live Repo Telemetry</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-amber-300">
              <Star className="h-3 w-3 fill-amber-300/80" />
              <span>{project.liveStars ?? 0}</span>
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <GitFork className="h-3 w-3" />
              <span>{project.liveForks ?? 0}</span>
            </span>
          </div>
        </div>
      )}

      {/* Architecture Toggle */}
      <div className="mt-5 border-t border-slate-800/80 pt-4">
        <button
          onClick={() => setShowArchitecture(!showArchitecture)}
          className="flex items-center justify-between w-full text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-indigo-400" />
            <span>Architecture & System Design</span>
          </span>
          {showArchitecture ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {showArchitecture && (
          <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950/80 p-3 text-xs text-slate-300 space-y-2">
            <p className="leading-relaxed font-sans">{project.architectureNotes}</p>
            <div className="pt-2 border-t border-slate-800/60">
              <span className="font-semibold text-slate-200 block mb-1">Key Deliverables:</span>
              <ul className="space-y-1">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs">
        {project.githubRepo ? (
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-slate-300 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>Repository</span>
          </a>
        ) : (
          <span className="text-slate-500 font-mono">Repo: Initializing</span>
        )}

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Launch Live App</span>
            <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <Link
            href={`/projects#${project.slug}`}
            className="flex items-center gap-1 font-medium text-slate-400 hover:text-slate-200 transition-colors"
          >
            <span>Details</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}

