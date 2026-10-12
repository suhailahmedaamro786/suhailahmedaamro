import type { Metadata } from "next";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Suhail Ahmed",
  description: "Explore completed web apps, AI projects, school systems, e-commerce websites and Python applications built by Suhail Ahmed.",
  openGraph: {
    title: "Projects | Suhail Ahmed",
    description: "Completed software projects with live demos, technology details and source-code links.",
    type: "website",
  },
};

const projects = [
  {
    title: "Education Hub",
    description: "Educational platform bringing learning resources, articles and job or internship opportunities together in one accessible website.",
    tech: ["Next.js", "React", "TypeScript", "Vercel"],
    category: "Education Platform",
    liveUrl: "https://education-hub-dusky.vercel.app/",
    image: null,
  },
  {
    title: "D-Pizza — Online Restaurant Website",
    description: "Restaurant website showcasing menu categories and helping customers place orders through WhatsApp, without forcing customers to create accounts.",
    tech: ["Next.js", "React", "Sanity CMS", "WhatsApp"],
    category: "Restaurant / E-Commerce",
    liveUrl: "https://d-pizza.vercel.app/",
    githubUrl: "https://github.com/suhailahmedaamro786/dinesmooth-vibes",
    image: null,
  },
  {
    title: "AI StudyMate",
    description: "AI-assisted study application designed to support learning workflows, document-based study and question answering.",
    tech: ["React", "Supabase", "AI", "Railway"],
    category: "AI Education",
    liveUrl: "https://ai-studymate-dkel.vercel.app/",
    image: null,
  },
  {
    title: "Personal AI Assistant",
    description: "A personal AI assistant web app built with a modern React interface and Supabase integration.",
    tech: ["React", "Vite", "Supabase", "AI"],
    category: "AI Application",
    liveUrl: "https://personal-ai-assistance-pearl.vercel.app/",
    githubUrl: "https://github.com/suhailahmedaamro786/PERSONAL-AI-ASSISTANCE-",
    image: null,
  },
  {
    title: "NPSD School ERP",
    description: "Multi-portal school management platform for student, teacher and admin workflows, including admissions, attendance, results, digital ID cards and role-based access.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "QR"],
    category: "School ERP / SaaS",
    liveUrl: "https://student-portal-chi-navy.vercel.app/",
    githubUrl: "https://github.com/suhailahmedaamro786/Student-Portal-",
    image: "/NPSD School ERP.svg",
    portalLinks: [
      { label: "Student Portal", url: "https://student-portal-chi-navy.vercel.app/" },
      { label: "Teacher Portal", url: "https://npsd-teacher.vercel.app/" },
      { label: "Admin Portal", url: "https://npsd-admin-dashboard.vercel.app/" },
    ],
  },
  {
    title: "University AI Assistant",
    description: "Conversational assistant concept for university information and academic guidance, presented through a responsive web interface.",
    tech: ["Next.js", "TypeScript", "AI", "Tailwind CSS"],
    category: "AI Application",
    liveUrl: "https://aamro-university-agent.vercel.app/",
    image: "/NEXT.JS/University Assistant.png",
  },
  {
    title: "Physical AI & Humanoid Robotics Platform",
    description: "Structured learning and documentation website focused on Physical AI, robotics concepts and humanoid systems.",
    tech: ["Next.js", "TypeScript", "Documentation", "Vercel"],
    category: "AI / Documentation",
    liveUrl: "https://book-skp-claude.vercel.app/",
    githubUrl: "https://github.com/SuhailAhmedAamro/BOOK-SKP-Claude-",
    image: "/NEXT.JS/physical AI & Humanoid Robotics.png",
  },
  {
    title: "E-Commerce Book Store",
    description: "Online bookstore experience with a product catalogue and e-commerce shopping workflows.",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    category: "E-Commerce",
    liveUrl: "https://final-hackthoon-2-ska-git-main-suhailahmedaamros-projects.vercel.app/",
    githubUrl: "https://github.com/SuhailAhmedAamro/E-Comm",
    image: "/NEXT.JS/E-Commerce website.png",
  },
  {
    title: "NJV School Management System",
    description: "Web-based school workflow project focused on student registration and school administration tasks.",
    tech: ["Next.js", "TypeScript", "Database", "Tailwind CSS"],
    category: "Management System",
    liveUrl: "https://njv-school.vercel.app/",
    image: "/NEXT.JS/NJV Form.png",
  },
  {
    title: "GDP Dashboard",
    description: "Interactive economic data dashboard for exploring country comparisons and historical GDP trends.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    category: "Python Application",
    liveUrl: "https://gdp-dashboard-uskmsgizln.streamlit.app/",
    image: "/PY/GDP.png",
  },
  {
    title: "Python Projects Collection",
    description: "A collection of interactive Python utilities and mini-projects presented in a single Streamlit application.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    category: "Python Application",
    liveUrl: "https://suhailahmedaamro-python-projects-projects-60ybw3.streamlit.app/",
    image: "/PY/Multiple Projects.png",
  },
  {
    title: "Personal Library Manager",
    description: "Book catalogue and reading tracker with collection statistics and data visualizations.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    category: "Python Application",
    liveUrl: "https://suhailahmedaamro-library-manager-py-library-manager-txxaiw.streamlit.app/",
    image: "/PY/Personal Library Manger.png",
  },
];

export default function Projects() {
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">Selected work</p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">My <span className="gradient-text">Projects</span></h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">A curated showcase of completed and deployed web applications, AI tools, education platforms, management systems and Python projects. Open a live demo to explore each project.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => <span key={category} className="rounded-full border bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-800">{category}</span>)}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800" style={{ animation: `fadeInUp .5s ease-out ${index * .04}s both` }}>
              {project.image ? (
                <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              ) : (
                <div className="flex h-52 w-full items-center justify-center border-b border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-400">
                  Real project screenshot coming soon
                </div>
              )}
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">{project.category}</span>
                <h2 className="mb-3 mt-2 text-xl font-bold">{project.title}</h2>
                <p className="mb-4 text-sm leading-6 text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs dark:bg-gray-700">{tech}</span>)}</div>
                <div className="flex flex-wrap gap-3">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm"><ExternalLink size={16} /> Live Demo</a>
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 text-sm"><Github size={16} /> Source Code</a>}
                  {project.portalLinks?.map((portal) => <a key={portal.label} href={portal.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary-200 px-3 py-1.5 text-xs text-primary-700 transition-colors hover:bg-primary-50 dark:border-primary-800 dark:text-primary-300 dark:hover:bg-gray-700">{portal.label} ↗</a>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
