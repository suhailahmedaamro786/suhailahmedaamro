import { Mail, Phone, MapPin, Briefcase, Clock, ExternalLink } from "lucide-react";

const contactOptions = [
  { title: "Email", detail: "suhailahmedamro786@gmail.com", href: "mailto:suhailahmedamro786@gmail.com", icon: Mail },
  { title: "Phone / WhatsApp", detail: "+92 309 3305243", href: "https://wa.me/923093305243", icon: Phone },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Let's <span className="gradient-text">Connect</span></h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">Have a website, AI application or software idea? Contact me directly by email or WhatsApp. No contact form needed.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-6 text-2xl font-bold">Contact Details</h2>
            <div className="space-y-5">
              {contactOptions.map(({ title, detail, href, icon: Icon }) => (
                <a key={title} href={href} target={title.includes("WhatsApp") ? "_blank" : undefined} rel={title.includes("WhatsApp") ? "noopener noreferrer" : undefined} className="flex items-center gap-4 rounded-xl border p-4 transition-colors hover:border-primary-400 hover:bg-primary-50 dark:border-gray-700 dark:hover:bg-gray-700">
                  <Icon className="shrink-0 text-primary-600" size={22} />
                  <span><span className="block font-semibold">{title}</span><span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span></span>
                  <ExternalLink className="ml-auto shrink-0" size={16} />
                </a>
              ))}
              <div className="flex items-center gap-4 rounded-xl p-4"><MapPin className="shrink-0 text-primary-600" size={22} /><span><b className="block">Location</b><span className="text-sm text-gray-600 dark:text-gray-300">Dadu, Sindh, Pakistan</span></span></div>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-blue-700 p-8 text-white sm:p-10">
            <Briefcase size={34} className="mb-5" />
            <h2 className="mb-4 text-3xl font-bold">What can I build for you?</h2>
            <p className="mb-6 leading-7 text-blue-100">Business websites, e-commerce stores, dashboards, school management systems, custom web applications and AI-powered workflows.</p>
            <div className="mb-7 flex items-center gap-3 text-sm text-blue-100"><Clock size={18} /> Share your idea and project requirements directly.</div>
            <a href="https://wa.me/923093305243?text=Hi%20Suhail%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary-700 transition-colors hover:bg-blue-50">Message on WhatsApp <ExternalLink size={17} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
