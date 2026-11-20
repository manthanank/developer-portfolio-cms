"use client";

import React, { useState, useEffect } from "react";
import { PROJECTS, Project } from "@/lib/projects-data";
import { ProjectCard } from "@/components/ProjectCard";
import { Search, FolderGit2, Sparkles, Filter, CheckCircle2, ChevronRight, Github, Radio, RefreshCw } from "lucide-react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [isLiveSync, setIsLiveSync] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.projects && Array.isArray(data.projects)) {
          setProjects(data.projects);
          setIsLiveSync(data.dataSource?.includes("GitHub"));
          setLastSyncTime(new Date(data.lastSyncedAt).toLocaleTimeString());
        }
      })
      .catch((err) => console.warn("Failed to fetch live projects API:", err));
  }, []);

  const categories = [
    "All",
    "Full-Stack",
    "AI & Data",
    "Real-Time",
    "SaaS & Enterprise",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Master Projects Directory</span>
            </div>
            {isLiveSync && (
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
                <Radio className="h-3 w-3 animate-pulse" />
                <span>GitHub API Live Synchronized {lastSyncTime ? `(${lastSyncTime})` : ""}</span>
              </div>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            10 Full-Stack Applications
          </h1>
          <p className="mt-3 text-base text-slate-400 max-w-2xl leading-relaxed">
            A comprehensive catalog of 10 standalone web applications covering modern SaaS, AI document
            intelligence, real-time collaboration, and fintech dashboards.
          </p>
        </div>

        {/* Controls: Search + Filter */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
          {/* Search Box */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by project name, tech stack, keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-800 bg-slate-950 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Results */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 rounded-2xl border border-slate-800/80 bg-slate-900/30 p-8">
            <FolderGit2 className="h-12 w-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No Matching Projects Found</h3>
            <p className="text-sm text-slate-400 mt-1">
              Try adjusting your search query or category filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

