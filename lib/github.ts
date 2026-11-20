export interface GitHubProfile {
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  htmlUrl: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  stars: number;
  forks: number;
  language: string | null;
  updatedAt: string;
}

export interface GitHubData {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  totalStars: number;
}

const FALLBACK_PROFILE: GitHubProfile = {
  username: "manthanank",
  name: "Manthan Ank",
  avatarUrl: "https://avatars.githubusercontent.com/u/72120015?v=4",
  bio: "Full-Stack Engineer building modern SaaS architectures, AI platforms, and distributed systems with Next.js & TypeScript.",
  publicRepos: 24,
  followers: 48,
  following: 36,
  htmlUrl: "https://github.com/manthanank",
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "developer-portfolio-cms",
    description: "Dynamic Next.js 15 portfolio, MDX CMS & GitHub API dashboard.",
    htmlUrl: "https://github.com/manthanank/developer-portfolio-cms",
    stars: 12,
    forks: 3,
    language: "TypeScript",
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "ecommerce-platform",
    description: "Production-ready digital store with Stripe, cart sync & admin panel.",
    htmlUrl: "https://github.com/manthanank/ecommerce-platform",
    stars: 18,
    forks: 5,
    language: "TypeScript",
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "ai-document-assistant",
    description: "RAG pipeline with vector search, PDF embeddings & token streaming.",
    htmlUrl: "https://github.com/manthanank/ai-document-assistant",
    stars: 29,
    forks: 7,
    language: "TypeScript",
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: "project-management-saas",
    description: "Multi-tenant agile workspace with live Kanban and WebSockets.",
    htmlUrl: "https://github.com/manthanank/project-management-saas",
    stars: 22,
    forks: 6,
    language: "TypeScript",
    updatedAt: new Date().toISOString(),
  },
];

export async function getGitHubData(): Promise<GitHubData> {
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
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=updated`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      console.warn("GitHub API returned non-200. Using fallback profile data.");
      return {
        profile: FALLBACK_PROFILE,
        repos: FALLBACK_REPOS,
        totalStars: 81,
      };
    }

    const rawProfile = await profileRes.json();
    const rawRepos = await reposRes.json();

    const profile: GitHubProfile = {
      username: rawProfile.login,
      name: rawProfile.name || rawProfile.login,
      avatarUrl: rawProfile.avatar_url,
      bio: rawProfile.bio || FALLBACK_PROFILE.bio,
      publicRepos: rawProfile.public_repos,
      followers: rawProfile.followers,
      following: rawProfile.following,
      htmlUrl: rawProfile.html_url,
    };

    const repos: GitHubRepo[] = Array.isArray(rawRepos)
      ? rawRepos.map((r: any) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          htmlUrl: r.html_url,
          stars: r.stargazers_count,
          forks: r.forks_count,
          language: r.language,
          updatedAt: r.updated_at,
        }))
      : FALLBACK_REPOS;

    const totalStars = repos.reduce((acc, curr) => acc + curr.stars, 0);

    return {
      profile,
      repos,
      totalStars,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return {
      profile: FALLBACK_PROFILE,
      repos: FALLBACK_REPOS,
      totalStars: 81,
    };
  }
}

