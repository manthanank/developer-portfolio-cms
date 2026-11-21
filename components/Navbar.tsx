"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  Code2,
  FolderGit2,
  BookOpen,
  Mail,
  Github,
  Menu,
  X,
  Terminal,
  User,
  LogOut,
  LogIn,
  Repeat,
  Edit3,
  Eye,
  Check,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { user, isAuthenticated, login, logout, switchRole, toggleDraftMode } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "/", icon: Terminal },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Blog / Notes", href: "/blog", icon: BookOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="h-5 w-5" />
          </div>
          <div>
            <div className="font-bold text-white text-base tracking-tight flex items-center gap-1.5">
              <span>Manthan Ank</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">Full-Stack Engineer</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-800 text-indigo-400"
                    : "text-slate-300 hover:text-white hover:bg-slate-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action button & User Dropdown */}
        <div className="hidden lg:flex items-center gap-3">
          {/* User Session Dropdown */}
          <div className="relative">
            {isAuthenticated && user ? (
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-800 bg-slate-900 hover:border-slate-700 transition cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-7 h-7 rounded-full object-cover ring-1 ring-indigo-500/50"
                />
                <div className="hidden sm:block text-left text-xs">
                  <div className="font-medium text-slate-200 leading-tight flex items-center gap-1.5">
                    <span>{user.name}</span>
                    {user.role === "Portfolio Owner" && (
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        CMS
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-indigo-400 font-mono">{user.tier}</div>
                </div>
              </button>
            ) : (
              <button
                onClick={() => login("manthan@devfolio.dev", "Manthan Ank")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>CMS Login</span>
              </button>
            )}

            {/* Dropdown Menu */}
            {userDropdownOpen && user && (
              <div
                className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-800 bg-slate-900/95 backdrop-blur-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setUserDropdownOpen(false)}
              >
                <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
                  <div className="font-semibold text-sm text-white">{user.name}</div>
                  <div className="text-xs text-slate-400 truncate">{user.email}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Role: {user.role}</span>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <button
                    onClick={() => {
                      toggleDraftMode();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs text-indigo-300 hover:bg-slate-800/60 rounded-xl transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      {user.isDraftMode ? (
                        <Edit3 className="w-3.5 h-3.5 text-indigo-400" />
                      ) : (
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                      )}
                      <span>Draft Mode: {user.isDraftMode ? "Enabled" : "Disabled"}</span>
                    </div>
                    {user.isDraftMode && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                  </button>

                  <button
                    onClick={() => {
                      switchRole();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-300 hover:bg-slate-800/60 rounded-xl transition cursor-pointer"
                  >
                    <Repeat className="w-3.5 h-3.5 text-slate-400" />
                    <span>Switch to {user.role === "Portfolio Owner" ? "Guest View" : "CMS Owner"}</span>
                  </button>

                  <div className="border-t border-slate-800/80 my-1" />

                  <button
                    onClick={() => {
                      logout();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-400 hover:bg-rose-500/10 rounded-xl transition cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <a
            href="https://github.com/manthanank"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white text-xs font-mono transition-all"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-md shadow-indigo-600/20 transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                <Icon className="h-4 w-4 text-indigo-400" />
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://github.com/manthanank"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-lg border border-slate-800 text-slate-200 text-sm font-mono"
            >
              <Github className="h-4 w-4" />
              <span>github.com/manthanank</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
