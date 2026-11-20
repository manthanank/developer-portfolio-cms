import { describe, it, expect } from "vitest";
import { GET as getProjects } from "../app/api/projects/route";
import { GET as getGithub } from "../app/api/github/route";

describe("Developer Portfolio CMS API Routes", () => {
  it("GET /api/projects returns portfolio projects", async () => {
    const req = new Request("http://localhost:3000/api/projects");
    const res = await getProjects(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
    expect(Array.isArray(data.projects)).toBe(true);
  });

  it("GET /api/github returns profile and repos fallback data", async () => {
    const res = await getGithub();
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data).toHaveProperty("profile");
    expect(data).toHaveProperty("repos");
    expect(Array.isArray(data.repos)).toBe(true);
    expect(data.repos.length).toBeGreaterThan(0);
  });
});
