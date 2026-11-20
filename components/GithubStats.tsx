"use client";

import React from "react";
import { GitHubData } from "@/lib/github";
import { Github, Star, GitFork, Users, BookMarked, Code2 } from "lucide-react";

interface GithubStatsProps {
  data: GitHubData;
}

export function GithubStats({ data }: GithubStatsProps) {
  const { profile, repos, totalStars } = data;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-md">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>{profile.name}</span>
              <span className="text-xs font-mono font-normal text-slate-400">@{profile.username}</span>
            </h3>
            <p className="text-xs text-slate-400 max-w-md line-clamp-1">{profile.bio}</p>
          </div>
        </div>

        <a
          href={profile.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors"
        >
          <Github className="h-4 w-4" />
          <span>Follow on GitHub</span>
        </a>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-slate-800/80">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
            <Star className="h-4 w-4 text-amber-400" />
            <span>Total Stars</span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{totalStars}+</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
            <BookMarked className="h-4 w-4 text-indigo-400" />
            <span>Public Repos</span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{profile.publicRepos}</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
            <Users className="h-4 w-4 text-emerald-400" />
            <span>Followers</span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{profile.followers}</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
            <Code2 className="h-4 w-4 text-purple-400" />
            <span>Primary Focus</span>
          </div>
          <div className="text-lg font-bold text-indigo-400 font-mono truncate">Next.js & TS</div>
        </div>
      </div>

      {/* Recent Repos */}
      <div className="pt-6">
        <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4 flex items-center justify-between">
          <span>Active Repositories</span>
          <span className="text-[11px] font-mono text-slate-500 font-normal">Real-Time Sync</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {repos.slice(0, 4).map((repo) => (
            <a
              key={repo.id}
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm text-slate-200 group-hover:text-indigo-400 transition-colors font-mono">
                    {repo.name}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-amber-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5 text-slate-400" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {repo.description || "Project repository in development."}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="text-indigo-400/80">{repo.language || "TypeScript"}</span>
                <span>Updated recently</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

