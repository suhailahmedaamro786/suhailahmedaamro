import { NextResponse } from "next/server";

const GITHUB_USERNAME = "suhailahmedaamro786";

export const revalidate = 3600;

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "GitHub API is temporarily unavailable" },
        { status: 502 },
      );
    }

    const repositories = await response.json();
    const data = repositories
      .filter((repo: { fork: boolean; archived: boolean }) => !repo.fork && !repo.archived)
      .map(
        (repo: {
          id: number;
          name: string;
          html_url: string;
          description: string | null;
          language: string | null;
          stargazers_count: number;
          forks_count: number;
          updated_at: string;
          topics?: string[];
        }) => ({
          id: repo.id,
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated_at: repo.updated_at,
          topics: repo.topics ?? [],
        }),
      );

    return NextResponse.json({ repositories: data });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to load GitHub repositories" },
      { status: 500 },
    );
  }
}
