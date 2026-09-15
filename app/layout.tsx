import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AIPortfolioAssistant from "@/components/AIPortfolioAssistant";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfilo-41201.vercel.app"),
  title: {
    default: "Suhail Ahmed | AI & Web Developer",
    template: "%s | Suhail Ahmed",
  },
  description: "Suhail Ahmed's portfolio featuring AI applications, Next.js web development, Python projects, dashboards and automation work.",
  keywords: ["Suhail Ahmed", "AI Developer", "Web Developer", "Next.js", "TypeScript", "Python", "Portfolio"],
  authors: [{ name: "Suhail Ahmed" }],
  creator: "Suhail Ahmed",
  openGraph: {
    title: "Suhail Ahmed | AI & Web Developer",
    description: "Explore AI applications, web projects, Python tools and software work by Suhail Ahmed.",
    type: "website",
    url: "https://my-portfilo-41201.vercel.app",
    siteName: "Suhail Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhail Ahmed | AI & Web Developer",
    description: "AI, web development, Python and software projects by Suhail Ahmed.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg">Skip to content</a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppFloat />
            <AIPortfolioAssistant />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
