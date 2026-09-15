import Link from "next/link";
import { Download, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Suhail Ahmed</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-4">
              AI & Full-Stack Developer — Building Production Web Apps with Next.js, TypeScript & Python
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I build AI-powered web applications and production-ready software using Next.js, TypeScript,
              Python and modern backend services, with a focus on useful user experiences and reliable workflows.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary">Get In Touch</Link>
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 hover:scale-110 transition-transform duration-300"><Download size={20} />Download CV</a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center text-gray-600 dark:text-gray-400">
              <a href="mailto:suhailahmedamro786@gmail.com" className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 group"><Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" /><span className="hidden sm:inline font-medium">suhailahmedamro786@gmail.com</span></a>
              <a href="tel:+923093305243" className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 group"><Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" /><span className="font-medium">+92 309 3305243</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-400"><div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">15+</div><div className="text-gray-600 dark:text-gray-400">Technologies</div></div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-400"><div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">13+</div><div className="text-gray-600 dark:text-gray-400">Projects Deployed</div></div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-400"><div className="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400 mb-2 leading-tight">Physical AI & Humanoid Robotics Platform</div><div className="text-gray-600 dark:text-gray-400">Featured Project</div></div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-400"><div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2">3</div><div className="text-gray-600 dark:text-gray-400">Languages Spoken</div></div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Core <span className="gradient-text">Competencies</span></h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="skill-card text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">⚛️</div><h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Frontend Development</h3><p className="text-gray-600 dark:text-gray-400">React.js, Next.js, TypeScript, Tailwind CSS</p></div>
            <div className="skill-card text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">🐍</div><h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Python Programming</h3><p className="text-gray-600 dark:text-gray-400">Complete Python, Streamlit, Google Colab</p></div>
            <div className="skill-card text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">💼</div><h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Office Automation</h3><p className="text-gray-600 dark:text-gray-400">MS Office Suite, Documentation, Administration</p></div>
          </div>
          <div className="text-center mt-12"><Link href="/skills" className="btn-primary">View All Skills</Link></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding"><div className="container-custom"><div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-12 text-white"><h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2><p className="text-lg mb-8 text-blue-100">I'm available for freelance projects and full-time opportunities</p><div className="flex flex-wrap gap-4 justify-center"><Link href="/contact" className="px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">Contact Me</Link><Link href="/projects" className="px-8 py-3 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors border-2 border-white">View Projects</Link></div></div></div></section>
    </div>
  );
}
