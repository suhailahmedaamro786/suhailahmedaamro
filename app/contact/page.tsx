"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Briefcase, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "Website / Web App", budget: "", timeline: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (!response.ok) throw new Error("Failed");
      setStatus("success"); setFormData({ name: "", email: "", projectType: "Website / Web App", budget: "", timeline: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch { setStatus("error"); setTimeout(() => setStatus("idle"), 5000); }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });
  return <div className="min-h-screen">
    <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"><div className="container-custom max-w-4xl mx-auto text-center"><h1 className="text-4xl sm:text-5xl font-bold mb-6">Let's <span className="gradient-text">Work Together</span></h1><p className="text-lg text-gray-700 dark:text-gray-300">Tell me what you want to build, and let's turn the idea into a real product.</p></div></section>
    <section className="section-padding"><div className="container-custom max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
      <div><h2 className="text-3xl font-bold mb-6">Start a Project</h2><p className="text-gray-600 dark:text-gray-400 mb-8">Share a few details about your project so I can understand your needs before we connect.</p><div className="space-y-5"><div className="flex gap-4"><Briefcase className="text-primary-600"/><div><b>Freelance & Web Projects</b><p className="text-sm text-gray-500">Websites, dashboards, AI-powered applications and custom software.</p></div></div><div className="flex gap-4"><Clock className="text-primary-600"/><div><b>Quick Response</b><p className="text-sm text-gray-500">I aim to respond to project inquiries within 24 hours.</p></div></div><div className="flex gap-4"><Mail className="text-primary-600"/><div><b>Email</b><p className="text-sm text-gray-500">suhailahmedamro786@gmail.com</p></div></div><div className="flex gap-4"><Phone className="text-primary-600"/><div><b>Phone / WhatsApp</b><p className="text-sm text-gray-500">+92 309 3305243</p></div></div><div className="flex gap-4"><MapPin className="text-primary-600"/><div><b>Location</b><p className="text-sm text-gray-500">Dadu, Sindh, Pakistan</p></div></div></div></div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-7 sm:p-8 border dark:border-gray-700 shadow-xl"><form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5"><label className="block"><span className="text-sm font-medium">Name *</span><input name="name" value={formData.name} onChange={handleChange} required className="w-full mt-2 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-transparent" placeholder="Your name" /></label><label className="block"><span className="text-sm font-medium">Email *</span><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full mt-2 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-transparent" placeholder="you@example.com" /></label></div>
        <div className="grid sm:grid-cols-2 gap-5"><label className="block"><span className="text-sm font-medium">Project Type</span><select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full mt-2 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-transparent"><option>Website / Web App</option><option>AI Application</option><option>Dashboard / Admin Panel</option><option>Python Application</option><option>Automation</option><option>Other</option></select></label><label className="block"><span className="text-sm font-medium">Budget</span><select name="budget" value={formData.budget} onChange={handleChange} className="w-full mt-2 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-transparent"><option value="">Select budget</option><option>Under $250</option><option>$250 - $500</option><option>$500 - $1,000</option><option>$1,000+</option><option>Let's discuss</option></select></label></div>
        <label className="block"><span className="text-sm font-medium">Timeline</span><select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full mt-2 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-transparent"><option value="">Select timeline</option><option>ASAP</option><option>1 - 2 weeks</option><option>2 - 4 weeks</option><option>1 - 2 months</option><option>Flexible</option></select></label>
        <label className="block"><span className="text-sm font-medium">Subject *</span><input name="subject" value={formData.subject} onChange={handleChange} required className="w-full mt-2 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-transparent" placeholder="Project inquiry" /></label>
        <label className="block"><span className="text-sm font-medium">Project Details *</span><textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full mt-2 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-transparent resize-none" placeholder="What do you want to build? Include key features if you know them." /></label>
        <button type="submit" disabled={status === "sending"} className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50">{status === "sending" ? "Sending..." : <><Send size={19}/> Send Project Inquiry</>}</button>
        {status === "success" && <p className="text-center text-green-600 font-medium">Thanks! Your project inquiry has been received.</p>}
        {status === "error" && <p className="text-center text-red-600 font-medium">Something went wrong. Please try again.</p>}
      </form></div>
    </div></section>
  </div>;
}
