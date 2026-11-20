import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { BookOpen, Calendar, Clock, Tag, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Technical Notes & Architecture Blog",
  description:
    "Engineering deep-dives into Next.js 15, PostgreSQL schemas, RAG vector pipelines, and real-time WebSocket state machines.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Engineering Logs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Architecture Notes & Insights
          </h1>
          <p className="mt-3 text-base text-slate-400 max-w-2xl leading-relaxed">
            Written reflections, architectural breakdowns, and implementation lessons learned while
            building modern full-stack web applications.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags and CTA */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      <Tag className="h-3 w-3 text-indigo-400" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

