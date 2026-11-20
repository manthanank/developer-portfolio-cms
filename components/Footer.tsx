import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Heart, Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-indigo-600 flex items-center justify-center text-white">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-bold text-white text-base">Manthan Ank — Projects Suite</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Full-Stack engineer specializing in modern Next.js architectures, scalable backend services,
              real-time systems, and AI-powered document intelligence.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition-colors">Overview</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-indigo-400 transition-colors">All 10 Projects</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-400 transition-colors">Technical Blog</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-indigo-400 transition-colors">Contact Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/manthanank"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500 font-mono">
              Status: All systems operational
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Manthan Ank. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js 15, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

