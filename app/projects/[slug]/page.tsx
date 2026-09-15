import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";

const caseStudies: Record<string, {
  title: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  tech: string[];
  features: string[];
  liveUrl: string;
}> = {
  "university-ai-assistant": {
    title: "University AI Assistant",
    category: "AI Web Application",
    summary: "An AI-powered university assistant designed to provide students with fast, conversational access to university information and academic guidance.",
    challenge: "Students often need quick answers to repeated university and academic questions without searching through multiple pages or documents.",
    solution: "Built a modern Next.js interface around an AI chat experience, combining a focused student-facing UX with structured university information and real-time AI responses.",
    tech: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
    features: ["AI-powered chat interface", "University information experience", "Real-time responses", "Student guidance workflow"],
    liveUrl: "https://aamro-university-agent.vercel.app/",
  },
  "personal-portfolio-website": {
    title: "Personal Portfolio Website",
    category: "Professional Portfolio",
    summary: "A responsive professional portfolio showcasing development skills, deployed projects, contact options, and an AI portfolio assistant.",
    challenge: "A portfolio needs to communicate technical ability quickly while making it easy for potential clients and employers to explore work and start a conversation.",
    solution: "Created a responsive Next.js portfolio with project showcases, contact workflows, dark mode, CV access, WhatsApp contact, and a Gemini-powered AI assistant.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React PDF", "Gemini AI", "Supabase"],
    features: ["Responsive portfolio UI", "AI portfolio assistant", "Project showcase", "Contact-to-Supabase workflow", "Dark/light mode", "CV download"],
    liveUrl: "https://my-portfilo-41201.vercel.app/",
  },
  "physical-ai-humanoid-robotics-platform": {
    title: "Physical AI & Humanoid Robotics Platform",
    category: "AI / Documentation Platform",
    summary: "An interactive learning and documentation platform focused on physical AI and humanoid robotics concepts.",
    challenge: "Complex technical topics need a structured, readable and engaging presentation that works for both learners and technical visitors.",
    solution: "Built a modern Next.js documentation-style experience with structured content, responsive layouts and interactive presentation patterns.",
    tech: ["Next.js", "TypeScript", "3D Graphics", "Tailwind CSS"],
    features: ["Interactive robotics content", "AI technology showcase", "Research documentation", "Responsive design"],
    liveUrl: "https://book-skp-claude.vercel.app/",
  },
};

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies[slug];

  if (!project) {
    return (
      <div className="min-h-screen section-padding text-center">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <Link href="/projects" className="btn-primary">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom max-w-5xl">
          <Link href="/projects" className="inline-flex items-center gap-2 mb-8 text-primary-600 hover:text-primary-700">
            <ArrowLeft size={18} /> Back to Projects
          </Link>
          <span className="block w-fit text-sm font-semibold px-3 py-1 rounded-full bg-white dark:bg-gray-800 shadow mb-5">{project.category}</span>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">{project.summary}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2"><ExternalLink size={18} /> Live Demo</a>
            <a href="https://github.com/SuhailAhmedAamro" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2"><Github size={18} /> GitHub</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-5xl grid md:grid-cols-2 gap-8">
          <article className="p-7 rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-7">{project.challenge}</p>
          </article>
          <article className="p-7 rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-7">{project.solution}</p>
          </article>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">{project.tech.map((item) => <span key={item} className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 shadow-sm font-medium">{item}</span>)}</div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">{project.features.map((item) => <li key={item} className="flex gap-3 text-gray-700 dark:text-gray-300"><CheckCircle2 className="text-primary-600 shrink-0" size={20} />{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Want something similar?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-7">Tell me about your idea, goals and timeline. I can help turn it into a production-ready web experience.</p>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </section>
    </div>
  );
}
