# Developer Portfolio CMS

> Dynamic portfolio, MDX technical blog, and GitHub API dashboard built with Next.js 15, TypeScript, Tailwind CSS, and gray-matter.

## 🚀 Features

- **Dynamic Project Directory**: Features all 10 projects from the full-stack suite with category filters (Full-Stack, AI & Data, Real-Time, SaaS & Enterprise) and architecture disclosure cards.
- **MDX Technical Blog**: Markdown & MDX blogging engine with frontmatter parsing, reading time estimates, syntax highlighting, and SEO tags.
- **Live GitHub Sync**: REST API endpoint (`/api/github`) fetching live user profile metrics, repositories, stars, and activity with graceful fallbacks.
- **Contact Inquiry System**: API endpoint (`/api/contact`) with validation, client-side loading/feedback states, and inquiry logging.
- **Modern Dark UI**: Designed with glassmorphic cards, gradient accents, responsive mobile navigation drawer, and animated terminal preview.
- **Full SEO & Social Suite**: OpenGraph cards, Twitter cards, dynamic `sitemap.xml`, `robots.txt`, and JSON-LD schema markup.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS, Lucide Icons
- **Content Engine**: gray-matter (MDX)
- **API**: Next.js Edge / Node Route Handlers

## 📦 Getting Started

1. Navigate to the project directory:
   ```bash
   cd c:\Users\manth\projects\developer-portfolio-cms
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure environment variables in `.env.local`:
   ```bash
   NEXT_PUBLIC_GITHUB_USERNAME=manthanank
   GITHUB_TOKEN=your_personal_access_token_if_needed
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

