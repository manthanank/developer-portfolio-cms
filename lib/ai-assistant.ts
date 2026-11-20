import { PROJECTS } from "./projects-data";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export const SYSTEM_KNOWLEDGE = `
You are the AI Engineering Assistant for Manthan Ank's portfolio and project suite.
You have expert knowledge of Manthan Ank's skills, experience, and the 10 standalone full-stack projects he is building.

About Manthan Ank:
- Role: Full-Stack Engineer & SaaS Architect.
- Tech Stack: Next.js 15, TypeScript, PostgreSQL, Prisma, Supabase, Tailwind CSS, Stripe, WebSockets, Socket.IO, OpenAI API, pgvector, Redis, Docker.
- GitHub: https://github.com/manthanank
- Location: India
- Portfolio: https://manthanank.dev

The 10 Projects Overview:
1. Developer Portfolio CMS: Next.js 15, MDX, GitHub API, gray-matter, Vercel Analytics. (Status: Active & Deployed).
2. Personal Finance Dashboard: Next.js, Recharts, Supabase (PostgreSQL + RLS, CSV bank statement ingestion).
3. Job Search & Application Tracker: Next.js, PostgreSQL, Prisma, Tailwind CSS (Kanban application stages).
4. AI-Powered Document Assistant: Next.js, OpenAI API, Vector DB (pgvector/Pinecone, PDF chunking, streamed RAG).
5. Real-Time Chat Application: Next.js, Socket.IO, MongoDB, Zustand (presence, typing indicators, channels).
6. Social Media Dashboard: React, Next.js, GraphQL, Redis (cursor pagination, cache-aside, moderation queue).
7. Event Booking Platform: Next.js, Stripe, PostgreSQL (QR ticket check-in, seat reservations).
8. E-commerce Platform: Next.js, TypeScript, PostgreSQL, Stripe, Prisma (catalog, cart sync, admin dashboard).
9. Project Management SaaS: Next.js, React Query, WebSockets, PostgreSQL (multi-tenant workspaces, Kanban).
10. Learning Management System (LMS): Next.js, TypeScript, PostgreSQL, Mux Video (quizzes, progress, certificates).

Always answer concisely, authoritatively, and professionally. Highlight architecture choices, performance considerations, and technical trade-offs.
`;

export function generateAssistantReply(userQuery: string): string {
  const query = userQuery.toLowerCase();

  if (query.includes("10 projects") || query.includes("all projects") || query.includes("what projects")) {
    return (
      "Manthan is building a comprehensive suite of 10 standalone full-stack applications:\n\n" +
      "1. 🚀 **Developer Portfolio CMS** (Next.js 15, MDX, GitHub API)\n" +
      "2. 💰 **Personal Finance Dashboard** (Supabase RLS, Recharts)\n" +
      "3. 💼 **Job Search & Application Tracker** (Prisma, PostgreSQL)\n" +
      "4. 🧠 **AI Document Assistant** (RAG, OpenAI, pgvector)\n" +
      "5. 💬 **Real-Time Chat Application** (Socket.IO, MongoDB, Presence)\n" +
      "6. 📱 **Social Media Dashboard** (GraphQL, Redis cache-aside)\n" +
      "7. 🎟️ **Event Booking Platform** (Stripe, QR-code validation)\n" +
      "8. 🛒 **E-commerce Platform** (PostgreSQL, Stripe, Admin Inventory)\n" +
      "9. 📊 **Project Management SaaS** (Multi-tenant, Live Kanban)\n" +
      "10. 🎓 **Learning Management System** (Mux Video, Quizzes, Certificates)\n\n" +
      "You can filter and inspect the architecture of each project directly in the Projects section above!"
    );
  }

  if (query.includes("rag") || query.includes("vector") || query.includes("ai assistant") || query.includes("pdf")) {
    return (
      "The **AI Document Assistant** implements a production-grade Retrieval-Augmented Generation (RAG) pipeline:\n\n" +
      "- **Chunking**: PDFs are parsed and split into 500-token chunks with 50-token semantic overlap.\n" +
      "- **Embeddings**: Generated using OpenAI's `text-embedding-3-small` (1536-dimensional vectors).\n" +
      "- **Vector Store**: Stored in PostgreSQL with `pgvector` indexed using HNSW for sub-50ms cosine similarity searches.\n" +
      "- **Streaming**: The response is streamed token-by-token over Server-Sent Events (SSE) with source page citation pills."
    );
  }

  if (query.includes("stripe") || query.includes("payment") || query.includes("ecommerce")) {
    return (
      "In the **E-Commerce** and **Event Booking** platforms, payments are architected for zero-downtime and idempotency:\n\n" +
      "- **Stripe Elements / Checkout**: Secure tokenization without card details ever touching the application server.\n" +
      "- **Cryptographic Webhooks**: Webhook endpoints verify `stripe-signature` to guard against replay attacks.\n" +
      "- **Inventory Reservation**: PostgreSQL serializable transactions lock items temporarily during checkout to eliminate race conditions."
    );
  }

  if (query.includes("skill") || query.includes("tech stack") || query.includes("technologies")) {
    return (
      "Manthan's core technical stack focuses on end-to-end type safety and high performance:\n\n" +
      "- **Frontend**: Next.js 15 (App Router, RSC), React 19, TypeScript, Tailwind CSS, Framer Motion, TanStack Query.\n" +
      "- **Backend & Real-Time**: Node.js, Next.js Server Actions, WebSockets, Socket.IO, GraphQL (Yoga).\n" +
      "- **Data Layer**: PostgreSQL, Prisma ORM, Supabase, Redis, MongoDB, pgvector.\n" +
      "- **Cloud & Observability**: Vercel, Docker, GitHub Actions, Stripe, Vercel Web Analytics."
    );
  }

  if (query.includes("hire") || query.includes("contact") || query.includes("freelance") || query.includes("job")) {
    return (
      "Manthan is available for full-time software engineering roles, SaaS architecture consulting, and technical collaborations. You can send a direct inquiry via the contact form on this page or connect on GitHub at https://github.com/manthanank!"
    );
  }

  return (
    `Thanks for asking! Regarding "${userQuery}": Manthan builds modern software systems prioritizing modular standalone architecture, strict TypeScript typing, sub-100ms response latencies, and modern Next.js 15 primitives. Check out the architecture notes in the Projects tab or read the in-depth articles in the Blog section for code patterns!`
  );
}

