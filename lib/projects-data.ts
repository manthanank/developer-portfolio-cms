export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "AI & Data" | "Real-Time" | "SaaS & Enterprise";
  status: "Production Live" | "Active" | "Beta";
  techStack: string[];
  features: string[];
  architectureNotes: string;
  githubRepo?: string;
  demoUrl?: string;
  slug: string;
  featured?: boolean;
  liveStars?: number;
  liveForks?: number;
  lastPushedAt?: string;
  openIssues?: number;
  isLiveSynced?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "developer-portfolio-cms",
    title: "Developer Portfolio CMS",
    tagline: "High-performance developer portfolio with MDX blog and AI assistant",
    description:
      "A developer portfolio and content management system built with Next.js 15 App Router, dynamic MDX rendering, interactive project filtering, live GitHub statistics, and an AI chat assistant.",
    category: "Full-Stack",
    status: "Production Live",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "MDX", "Framer Motion"],
    features: [
      "Dynamic MDX blog with syntax highlighting and read times",
      "Interactive multi-criteria project showcase filters",
      "Live GitHub statistics & commit metrics sync",
      "OpenGraph and JSON-LD structured data for SEO",
      "Type-safe contact inquiry dispatch system",
    ],
    architectureNotes:
      "Built with Next.js App Router for hybrid rendering. Uses gray-matter for local MDX file system resolution and client/server edge caching for GitHub REST endpoints.",
    githubRepo: "https://github.com/manthanank/developer-portfolio-cms",
    demoUrl: "https://developer-portfolio-cms-puce.vercel.app",
    slug: "developer-portfolio-cms",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "Industrial-grade hardware store with Stripe, cart sync & merchant admin",
    description:
      "Full-scale e-commerce storefront with relational product catalog, persistent shopping carts, Stripe Checkout integration, and an administrative inventory cockpit with live order tracking.",
    category: "Full-Stack",
    status: "Production Live",
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "Stripe", "Prisma"],
    features: [
      "Faceted product filtering (price, category, in-stock)",
      "Optimistic shopping cart with cross-page persistence",
      "Secure Stripe Checkout (PCI-DSS Level 1) & commercial invoices",
      "Inventory locking and instant webhook order fulfillment",
      "Admin analytics dashboard for revenue and inventory",
    ],
    architectureNotes:
      "PostgreSQL via Prisma ORM with serializable transactions for inventory decrements. Webhooks verified with cryptographic signatures to ensure zero double-spending.",
    githubRepo: "https://github.com/manthanank/ecommerce-platform",
    demoUrl: "https://ecommerce-platform-roan-pi.vercel.app",
    slug: "ecommerce-platform",
    featured: true,
  },
  {
    id: "personal-finance-dashboard",
    title: "Personal Finance Dashboard",
    tagline: "Ledger management, recurring bills & wealth forecasting",
    description:
      "A privacy-first wealth and budgeting dashboard with bank statement CSV import, recurring expense detection, category spending breakdowns, and time-series balance charts.",
    category: "AI & Data",
    status: "Production Live",
    techStack: ["Next.js 15", "Recharts", "Supabase", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Supabase Row Level Security (RLS) for complete privacy",
      "Interactive time-series charts for expense distribution",
      "Stream-based CSV bank statement importer and parser",
      "Subscription detection and recurring bill alerts",
      "Monthly savings goals and budget variance tracking",
    ],
    architectureNotes:
      "Supabase PostgreSQL with strict RLS policies ensuring users can only read/write their own financial ledgers. Recharts renders client-side SVG visualizations.",
    githubRepo: "https://github.com/manthanank/personal-finance-dashboard",
    demoUrl: "https://personal-finance-dashboard-eight-sigma.vercel.app",
    slug: "personal-finance-dashboard",
    featured: true,
  },
  {
    id: "project-management-saas",
    title: "Project Management SaaS",
    tagline: "Multi-tenant agile workspace with live Kanban and sprint burndown",
    description:
      "A collaborative project management application featuring multi-tenant workspaces, drag-and-drop Kanban boards, granular role-based permissions, and real-time multiplayer updates.",
    category: "SaaS & Enterprise",
    status: "Production Live",
    techStack: ["Next.js 15", "React Query", "WebSockets", "PostgreSQL", "Prisma"],
    features: [
      "Workspace and team isolation with invite tokens",
      "Drag-and-drop Kanban task pipelines",
      "Role-Based Access Control (Owner, Admin, Member)",
      "Real-time task synchronization over WebSockets",
      "Sprint burndown telemetry and velocity forecaster",
    ],
    architectureNotes:
      "TanStack Query handles optimistic cache mutation on drag events, while WebSockets broadcast delta changes to connected team members.",
    githubRepo: "https://github.com/manthanank/project-management-saas",
    demoUrl: "https://project-management-saas-rouge.vercel.app",
    slug: "project-management-saas",
    featured: true,
  },
  {
    id: "ai-document-assistant",
    title: "AI-Powered Document Assistant",
    tagline: "Intelligent PDF analysis and semantic Q&A with Vector Search",
    description:
      "Retrieval-Augmented Generation (RAG) platform that allows users to upload PDF documents, extract chunks, generate vector embeddings, and stream grounded answers with source citations.",
    category: "AI & Data",
    status: "Production Live",
    techStack: ["Next.js 15", "OpenAI API", "pgvector", "Vercel AI SDK"],
    features: [
      "Drag-and-drop document upload and recursive text chunking",
      "Vector embeddings with cosine similarity matching",
      "Conversational chat with token streaming via SSE",
      "Source citation pills linking directly to document pages",
      "User token quotas and usage metering",
    ],
    architectureNotes:
      "Server-Sent Events stream OpenAI completions. Embeddings are stored in pgvector using an HNSW index for sub-50ms semantic search queries.",
    githubRepo: "https://github.com/manthanank/ai-document-assistant",
    demoUrl: "https://ai-document-assistant-lyart.vercel.app",
    slug: "ai-document-assistant",
    featured: true,
  },
  {
    id: "job-search-tracker",
    title: "Job Search & Application Tracker",
    tagline: "Pipeline tracker, analytics dashboard & application stages",
    description:
      "A career management suite to organize job applications, track recruitment stages through an interactive pipeline, store recruiter contacts, and analyze conversion metrics.",
    category: "Full-Stack",
    status: "Production Live",
    techStack: ["Next.js 15", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: [
      "Visual application stage pipeline (Applied, Interviewing, Offer)",
      "Recruiter and referral contact directory",
      "Interview calendar reminders and task checklists",
      "Salary offer analytics and conversion velocity charts",
      "Resume version tagging per submission",
    ],
    architectureNotes:
      "Next.js Server Actions with Zod validation. Normalized relational schema linking companies, applications, contacts, and interview stages.",
    githubRepo: "https://github.com/manthanank/job-search-tracker",
    demoUrl: "https://job-search-tracker-lime.vercel.app",
    slug: "job-search-tracker",
    featured: true,
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Chat Application",
    tagline: "Instant messaging engine with WebSockets, presence and channels",
    description:
      "A low-latency messaging application offering 1-on-1 direct conversations, multi-user channels, online presence detection, typing indicators, and file attachments.",
    category: "Real-Time",
    status: "Production Live",
    techStack: ["Next.js 15", "WebSockets", "MongoDB", "Zustand"],
    features: [
      "Direct 1-on-1 and persistent group channels",
      "Heartbeat-based online presence status (Online, Away, Offline)",
      "Real-time typing indicators with debounce",
      "Interactive emoji reactions and automated assistant bots",
      "Optimistic UI updates with client-side deduplication",
    ],
    architectureNotes:
      "WebSockets connection manager decoupled from Next.js server with MongoDB for flexible message document storage and message read receipts.",
    githubRepo: "https://github.com/manthanank/realtime-chat-app",
    demoUrl: "https://realtime-chat-app-eight-sable.vercel.app",
    slug: "realtime-chat-app",
    featured: true,
  },
  {
    id: "social-media-dashboard",
    title: "Social Media Dashboard",
    tagline: "High-throughput social feed with GraphQL and Redis caching",
    description:
      "A scalable social network feed engine demonstrating GraphQL query federation, Redis cache-aside patterns, post scheduling queues, and real-time feed publishing.",
    category: "Full-Stack",
    status: "Production Live",
    techStack: ["React", "Next.js 15", "GraphQL", "Redis", "PostgreSQL"],
    features: [
      "GraphQL API with DataLoader N+1 query prevention",
      "Redis caching layer for hot feeds and trending posts",
      "Multi-platform queue scheduler with instant publishing",
      "Sentiment analysis telemetry across social posts",
      "Engagement rate and impression performance graphs",
    ],
    architectureNotes:
      "Combines Yoga GraphQL on Next.js edge routes with Upstash Redis caching for hot feeds and sliding-window rate limiters.",
    githubRepo: "https://github.com/manthanank/social-media-dashboard",
    demoUrl: "https://social-media-dashboard-beta-ten.vercel.app",
    slug: "social-media-dashboard",
    featured: true,
  },
  {
    id: "event-booking-platform",
    title: "Event Booking Platform",
    tagline: "Ticketing system with Stripe checkout & QR check-in scanner",
    description:
      "An event discovery and ticketing platform supporting tiered tickets, seat reservation locks, Stripe checkout flows, and mobile QR code validation for event organizers.",
    category: "Full-Stack",
    status: "Production Live",
    techStack: ["Next.js 15", "Stripe", "PostgreSQL", "QR Engine"],
    features: [
      "Event discovery directory by category, city, and dates",
      "Multi-tier ticket purchasing (General, VIP, Early Bird)",
      "Digital ticket wallet with scannable QR passes and calendar .ics export",
      "Gate security check-in portal with live camera QR scanner",
      "Real-time ticket admission validation and fraud prevention",
    ],
    architectureNotes:
      "Database row-locking prevents overselling of finite tickets during high-traffic drops. HMAC signatures on QR codes prevent forgery.",
    githubRepo: "https://github.com/manthanank/event-booking-platform",
    demoUrl: "https://event-booking-platform-ruddy.vercel.app",
    slug: "event-booking-platform",
    featured: true,
  },
  {
    id: "learning-management-system",
    title: "Learning Management System (LMS)",
    tagline: "Course platform with video lessons, quizzes & certificates",
    description:
      "An educational platform enabling creators to build structured courses with video modules, assess students with dynamic quizzes, track completion, and issue cryptographic certificates.",
    category: "SaaS & Enterprise",
    status: "Production Live",
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "Mux Video"],
    features: [
      "Adaptive bitrate 4K video playback powered by Mux HLS",
      "Module quizzes with interactive auto-grading engine",
      "Granular student progress tracking state machine",
      "Verifiable cryptographic credential certificates with SHA-256 hash",
      "Printable official graduation diplomas and skill badges",
    ],
    architectureNotes:
      "Adaptive HLS video streaming with chapter navigation. Verifiable SHA-256 credential hashing for accreditation verification.",
    githubRepo: "https://github.com/manthanank/learning-management-system",
    demoUrl: "https://learning-management-system-lac-rho.vercel.app",
    slug: "learning-management-system",
    featured: true,
  },
];
