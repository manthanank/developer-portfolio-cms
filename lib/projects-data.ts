export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "AI & Data" | "Real-Time" | "SaaS & Enterprise";
  status: "Active / Scaffolding" | "In Development" | "Planned";
  techStack: string[];
  features: string[];
  architectureNotes: string;
  githubRepo?: string;
  demoUrl?: string;
  slug: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "portfolio-cms",
    title: "Developer Portfolio CMS",
    tagline: "Dynamic portfolio, MDX technical blog & GitHub API integration",
    description:
      "A high-performance developer hub and content management system featuring dynamic project filtering, MDX blogging with code highlights, live GitHub analytics, and SEO optimization.",
    category: "Full-Stack",
    status: "Active / Scaffolding",
    techStack: ["Next.js", "TypeScript", "MDX", "GitHub API", "Tailwind CSS"],
    features: [
      "Dynamic project directory with live roadmap statuses",
      "MDX technical blog with reading time estimation",
      "Live GitHub statistics & commit metrics sync",
      "OpenGraph and JSON-LD structured data for SEO",
      "Type-safe contact inquiry dispatch system",
    ],
    architectureNotes:
      "Built with Next.js App Router for hybrid rendering. Uses gray-matter for local MDX file system resolution and client/server edge caching for GitHub REST endpoints.",
    githubRepo: "https://github.com/manthanank/developer-portfolio-cms",
    demoUrl: "https://manthanank.dev",
    slug: "developer-portfolio-cms",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "Production-ready digital store with Stripe, cart sync & admin panel",
    description:
      "Full-scale e-commerce storefront with relational product catalog, persistent shopping carts, Stripe Checkout integration with idempotent webhooks, and an administrative inventory dashboard.",
    category: "Full-Stack",
    status: "Planned",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Prisma"],
    features: [
      "Faceted product filtering (price, category, in-stock)",
      "Optimistic shopping cart with guest-to-auth sync",
      "Secure Stripe Checkout & customer portal",
      "Inventory locking and webhook-based order fulfillment",
      "Admin analytics dashboard for revenue and inventory",
    ],
    architectureNotes:
      "PostgreSQL via Prisma ORM with serializable transactions for inventory decrements. Webhooks verified with cryptographic signatures to ensure zero double-spending.",
    githubRepo: "https://github.com/manthanank/ecommerce-platform",
    slug: "ecommerce-platform",
    featured: true,
  },
  {
    id: "project-management-saas",
    title: "Project Management SaaS",
    tagline: "Multi-tenant agile workspace with live Kanban and WebSockets",
    description:
      "A collaborative project management application featuring multi-tenant workspaces, drag-and-drop Kanban boards, granular role-based permissions, and real-time multiplayer updates.",
    category: "SaaS & Enterprise",
    status: "Planned",
    techStack: ["Next.js", "React Query", "WebSockets", "PostgreSQL", "Prisma"],
    features: [
      "Workspace and team isolation with invite tokens",
      "Drag-and-drop Kanban task pipelines",
      "Role-Based Access Control (Owner, Admin, Member)",
      "Real-time task synchronization over WebSockets",
      "Interactive activity audit logs and notifications",
    ],
    architectureNotes:
      "TanStack Query handles optimistic cache mutation on drag events, while WebSockets broadcast delta changes to connected team members.",
    githubRepo: "https://github.com/manthanank/project-management-saas",
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
    status: "Active / Scaffolding",
    techStack: ["Next.js", "OpenAI API", "Vector DB / pgvector", "Vercel AI SDK"],
    features: [
      "Drag-and-drop PDF upload and recursive text chunking",
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
    status: "Active / Scaffolding",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
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
    id: "social-media-dashboard",
    title: "Social Media Dashboard",
    tagline: "High-throughput social feed with GraphQL and Redis caching",
    description:
      "A scalable social network feed engine demonstrating GraphQL query federation, Redis cache-aside patterns, infinite scroll with cursor pagination, and content moderation queues.",
    category: "Full-Stack",
    status: "Planned",
    techStack: ["React", "Next.js", "GraphQL", "Redis", "PostgreSQL"],
    features: [
      "GraphQL API with DataLoader N+1 query prevention",
      "Redis caching layer for hot feeds and trending posts",
      "Infinite scroll feed with cursor-based pagination",
      "Follow/unfollow relationship graph",
      "Automated content moderation reporting queue",
    ],
    architectureNotes:
      "Combines Yoga GraphQL on Next.js edge routes with Upstash Redis caching for hot feeds and sliding-window rate limiters.",
    githubRepo: "https://github.com/manthanank/social-media-dashboard",
    slug: "social-media-dashboard",
    featured: false,
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Chat Application",
    tagline: "Instant messaging engine with WebSockets, presence and rooms",
    description:
      "A low-latency messaging application offering 1-on-1 direct conversations, multi-user channels, online presence detection, typing indicators, and file attachments.",
    category: "Real-Time",
    status: "Planned",
    techStack: ["Next.js", "Socket.IO", "MongoDB", "Zustand"],
    features: [
      "Direct 1-on-1 and persistent group channels",
      "Heartbeat-based online presence status (Online, Away, Offline)",
      "Real-time typing indicators with debounce",
      "Media and document attachment uploads",
      "Optimistic UI updates with client-side deduplication",
    ],
    architectureNotes:
      "Socket.IO connection manager decoupled from Next.js server with MongoDB for flexible message document storage and message read receipts.",
    githubRepo: "https://github.com/manthanank/realtime-chat-app",
    slug: "realtime-chat-app",
    featured: false,
  },
  {
    id: "learning-management-system",
    title: "Learning Management System (LMS)",
    tagline: "Course platform with video lessons, quizzes & certificates",
    description:
      "An educational platform enabling creators to build structured courses with video modules, assess students with dynamic quizzes, track completion, and issue cryptographic certificates.",
    category: "SaaS & Enterprise",
    status: "Planned",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Mux Video"],
    features: [
      "Instructor course creation studio with chapter reordering",
      "Adaptive bitrate video playback powered by Mux",
      "Module quizzes with auto-grading engine",
      "Granular student progress tracking state machine",
      "Automated PDF certificate generation upon course completion",
    ],
    architectureNotes:
      "Video upload directly to cloud transcoders with webhook-driven asset status tracking. Server-side certificate rendering via PDFKit.",
    githubRepo: "https://github.com/manthanank/learning-management-system",
    slug: "learning-management-system",
    featured: false,
  },
  {
    id: "personal-finance-dashboard",
    title: "Personal Finance Dashboard",
    tagline: "Expense tracking, recurring bills & Supabase RLS analytics",
    description:
      "A privacy-first wealth and budgeting dashboard with bank statement CSV import, recurring expense detection, category spending breakdowns, and time-series balance charts.",
    category: "AI & Data",
    status: "Active / Scaffolding",
    techStack: ["Next.js", "Recharts", "Supabase", "PostgreSQL", "PapaParse"],
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
    id: "event-booking-platform",
    title: "Event Booking Platform",
    tagline: "Ticketing system with Stripe checkout & QR check-in scanner",
    description:
      "An event discovery and ticketing platform supporting tiered tickets, seat reservation locks, Stripe checkout flows, and mobile QR code validation for event organizers.",
    category: "Full-Stack",
    status: "Planned",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "html5-qrcode"],
    features: [
      "Event discovery directory by category, city, and dates",
      "Multi-tier ticket purchasing (General, VIP, Early Bird)",
      "Race-condition safe ticket reservation locks",
      "Digital ticket generation with cryptographically signed QR codes",
      "Organizer mobile check-in portal with live camera QR scanner",
    ],
    architectureNotes:
      "Database row-locking prevents overselling of finite tickets during high-traffic drops. HMAC signatures on QR codes prevent forgery.",
    githubRepo: "https://github.com/manthanank/event-booking-platform",
    slug: "event-booking-platform",
    featured: false,
  },
];

