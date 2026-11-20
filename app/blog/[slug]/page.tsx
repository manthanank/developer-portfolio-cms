import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Clock, Tag, Share2, CheckCircle2 } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Post Header */}
        <header className="pb-8 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
            <span className="flex items-center gap-1.5 text-indigo-400">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author & Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full border border-slate-700"
              />
              <div>
                <div className="text-sm font-semibold text-white">{post.author.name}</div>
                <div className="text-xs text-slate-400 font-mono">Full-Stack Engineer</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                >
                  <Tag className="h-3 w-3 text-indigo-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="pt-8 text-slate-300 text-base leading-relaxed space-y-6">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800">
                  {trimmed.replace(/^## /, "")}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-indigo-300 mt-6 mb-2">
                  {trimmed.replace(/^### /, "")}
                </h3>
              );
            }
            if (trimmed.startsWith("```")) {
              const codeLines = trimmed.split("\n");
              const language = codeLines[0].replace("```", "") || "typescript";
              const code = codeLines.slice(1, -1).join("\n");
              return (
                <div key={idx} className="my-6 rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs overflow-x-auto text-slate-200">
                  <div className="flex justify-between items-center pb-2 mb-2 border-b border-slate-800/80 text-[11px] text-slate-500 font-mono">
                    <span>{language}</span>
                    <span className="text-emerald-400">code snippet</span>
                  </div>
                  <pre className="!bg-transparent !p-0 !border-0">
                    <code>{code}</code>
                  </pre>
                </div>
              );
            }
            if (trimmed.startsWith("1. ") || trimmed.startsWith("- ")) {
              const items = trimmed.split("\n");
              return (
                <ul key={idx} className="space-y-2 my-4 pl-4">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0 mt-1" />
                      <span>{item.replace(/^\d+\.\s+|^-\s+/, "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={idx} className="text-slate-300 leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Post Footer */}
        <footer className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>Published in Manthan Ank Architecture Notes</div>
          <Link
            href="/blog"
            className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            <span>Read Next Post</span>
            <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
          </Link>
        </footer>
      </div>
    </article>
  );
}

