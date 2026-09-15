"use client";

import { ExternalLink, GitFork, Github, Star } from "lucide-react";
import { useEffect, useState } from "react";

type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updated_at: string;
  topics: string[];
};

export default function GitHubProjects() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/github")
      .then((response) => {
        if (!response.ok) throw new Error("GitHub request failed");
        return response.json() as Promise<{ repositories: Repository[] }>;
      })
      .then((data) => {
        if (!cancelled) setRepositories(data.repositories.slice(0, 6));
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/60">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">OPEN SOURCE</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Latest GitHub Work</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl">
              Recent public repositories and development work from my GitHub profile.
            </p>
          </div>
          <a
            href="https://github.com/suhailahmedaamro786"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 w-fit"
          >
            <Github size={18} /> View GitHub
          </a>
        </div>

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-56 rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 animate-pulse" />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">GitHub projects are temporarily unavailable.</p>
          </div>
        )}

        {!loading && !error && repositories.length === 0 && (
          <div className="rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">No public repositories found.</p>
          </div>
        )}

        {!loading && !error && repositories.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo) => (
              <article
                key={repo.id}
                className="rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <Github className="text-primary-600 dark:text-primary-400 shrink-0" size={24} />
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-5 mb-3 break-words">{repo.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 min-h-16 line-clamp-3">
                  {repo.description || "Public software project on GitHub."}
                </p>

                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-400">
                  {repo.language && <span className="font-medium">{repo.language}</span>}
                  <span className="inline-flex items-center gap-1"><Star size={15} /> {repo.stars}</span>
                  <span className="inline-flex items-center gap-1"><GitFork size={15} /> {repo.forks}</span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-sm mt-6"
                >
                  View on GitHub <ExternalLink size={15} />
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
