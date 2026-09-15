"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GitHubProjects from "@/components/GitHubProjects";

const projects = [
  { title: "University AI Assistant", slug: "university-ai-assistant", description: "Intelligent university assistant built with Next.js and AI integration for student queries and academic guidance.", tech: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"], category: "AI Web Application", liveUrl: "https://aamro-university-agent.vercel.app/", image: "/NEXT.JS/University Assistant.png" },
  { title: "Personal Portfolio Website", slug: "personal-portfolio-website", description: "Professional portfolio with project showcase, contact workflow, responsive design, dark mode and Gemini AI assistant.", tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini AI"], category: "Professional Portfolio", liveUrl: "https://my-portfilo-41201.vercel.app/", image: "/NEXT.JS/portfilo.png" },
  { title: "Physical AI & Humanoid Robotics Platform", slug: "physical-ai-humanoid-robotics-platform", description: "Modern learning and documentation platform showcasing physical AI and humanoid robotics technology.", tech: ["Next.js", "TypeScript", "3D Graphics", "Tailwind CSS"], category: "AI / Documentation", liveUrl: "https://book-skp-claude.vercel.app/", image: "/NEXT.JS/physical AI & Humanoid Robotics.png" },
  { title: "Islamic Worship Assistant (Ramadan App)", description: "Comprehensive worship assistant featuring prayer times, Quran features and Ramadan tools.", tech: ["Next.js", "TypeScript", "Islamic APIs", "Tailwind CSS"], category: "Web Application", liveUrl: "https://v0-ramzan-app-features.vercel.app/", image: "/NEXT.JS/Islamic Worship Assistant.png" },
  { title: "E-Commerce Book Store", description: "Modern e-commerce platform with catalog, cart, authentication, checkout and order management.", tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"], category: "E-Commerce", liveUrl: "https://final-hackthoon-2-ska-git-main-suhailahmedaamros-projects.vercel.app/", image: "/NEXT.JS/E-Commerce website.png" },
  { title: "NJV School Management System", description: "School management system covering student registration, attendance, grades and communication workflows.", tech: ["Next.js", "TypeScript", "Database", "Tailwind CSS"], category: "Management System", liveUrl: "https://njv-school.vercel.app/", image: "/NEXT.JS/NJV Form.png" },
  { title: "GDP Dashboard", description: "Interactive global economic data visualization dashboard with country comparisons and historical trends.", tech: ["Python", "Streamlit", "Pandas", "Plotly"], category: "Python Application", liveUrl: "https://gdp-dashboard-uskmsgizln.streamlit.app/", image: "/PY/GDP.png" },
  { title: "Multi-Project Python App", description: "Collection of 15 interactive Python projects including calculators, productivity tools and utilities.", tech: ["Python", "Streamlit", "Plotly", "Pandas"], category: "Python Application", liveUrl: "https://suhailahmedaamro-python-projects-projects-60ybw3.streamlit.app/", image: "/PY/Multiple Projects.png" },
  { title: "Personal Library Manager", description: "Library management system for cataloging books, tracking reading status and visualizing collection statistics.", tech: ["Python", "Streamlit", "Pandas", "Plotly"], category: "Python Application", liveUrl: "https://suhailahmedaamro-library-manager-py-library-manager-txxaiw.streamlit.app/", image: "/PY/Personal Library Manger.png" },
];

export default function Projects() {
  const categories = ["All", "AI Web Application", "Professional Portfolio", "AI / Documentation", "E-Commerce", "Management System", "Python Application"];
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">My <span className="gradient-text">Projects</span></h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">Selected work across AI, web development, Python and automation.</p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">{categories.map((category) => <span key={category} className="px-3 py-1.5 rounded-full text-sm bg-white dark:bg-gray-800 border dark:border-gray-700">{category}</span>)}</div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" style={{ animation: `fadeInUp .5s ease-out ${index * .06}s both` }}>
              <div className="relative w-full h-52 overflow-hidden bg-gray-100 dark:bg-gray-700"><Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">{project.category}</span>
                <h2 className="text-xl font-bold mt-2 mb-3">{project.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">{project.tech.map((tech) => <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700">{tech}</span>)}</div>
                <div className="flex flex-wrap gap-3">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm"><ExternalLink size={16}/> Live Demo</a>
                  {project.slug ? <Link href={`/projects/${project.slug}`} className="btn-secondary inline-flex items-center gap-2 text-sm">Case Study <ArrowRight size={16}/></Link> : <a href="https://github.com/SuhailAhmedAamro" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 text-sm"><Github size={16}/> Code</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <GitHubProjects />
    </div>
  );
}
