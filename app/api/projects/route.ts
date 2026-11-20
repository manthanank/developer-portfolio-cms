import { NextResponse } from "next/server";
import { PROJECTS, Project } from "@/lib/projects-data";

export const revalidate = 60; // Cache for 60 seconds

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "manthanank";
  const token = process.env.GITHUB_TOKEN;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Developer-Portfolio-CMS",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=50`,
      {
        headers,
        next: { revalidate: 60 },
      }
    );

    let enrichedProjects = [...PROJECTS];
    let liveRepoCount = 0;

    if (res.ok) {
      const liveRepos = await res.json();
      if (Array.isArray(liveRepos)) {
        liveRepoCount = liveRepos.length;

        // Map live stats to projects
        enrichedProjects = enrichedProjects.map((p) => {
          const match = liveRepos.find(
            (r: any) =>
              r.name.toLowerCase() === p.id.toLowerCase() ||
              r.name.toLowerCase() === p.slug.toLowerCase() ||
              (p.githubRepo && p.githubRepo.toLowerCase().endsWith(`/${r.name.toLowerCase()}`))
          );

          if (match) {
            return {
              ...p,
              liveStars: match.stargazers_count,
              liveForks: match.forks_count,
              lastPushedAt: match.pushed_at,
              openIssues: match.open_issues_count,
              language: match.language || p.techStack[0],
              isLiveSynced: true,
            };
          }
          return {
            ...p,
            isLiveSynced: false,
          };
        });
      }
    }

    return NextResponse.json({
      success: true,
      lastSyncedAt: new Date().toISOString(),
      liveRepoCount,
      dataSource: "GitHub REST API v3 (Live)",
      projects: enrichedProjects,
    });
  } catch (error) {
    console.error("Failed to sync live GitHub data for projects:", error);
    return NextResponse.json({
      success: true,
      lastSyncedAt: new Date().toISOString(),
      dataSource: "Local Snapshot",
      projects: PROJECTS,
    });
  }
}

