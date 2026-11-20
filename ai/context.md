# AI System Context & Engineering Guidelines

This document provides system context, architectural conventions, and project relationships for AI assistants, agents, and human collaborators working on Manthan Ank's 10-project full-stack suite.

---

## 1. Suite Overview & Standalone Architecture
All 10 projects are maintained as independent, standalone repositories under `c:\Users\manth\projects/`:

1. `developer-portfolio-cms`: Next.js 15, MDX, GitHub API, gray-matter, Vercel Analytics, Framer Motion. (The central showcase).
2. `personal-finance-dashboard`: Next.js, Recharts, Supabase (PostgreSQL + RLS, CSV bank statement ingestion).
3. `job-search-tracker`: Next.js, PostgreSQL, Prisma, Tailwind CSS (Kanban application pipeline).
4. `ai-document-assistant`: Next.js, OpenAI API, Vector DB (pgvector/Pinecone, PDF chunking, streamed RAG).
5. `realtime-chat-app`: Next.js, Socket.IO, MongoDB, Zustand (presence, typing indicators, channels).
6. `social-media-dashboard`: React, Next.js, GraphQL, Redis (cursor pagination, cache-aside, moderation queue).
7. `event-booking-platform`: Next.js, Stripe, PostgreSQL (QR ticket check-in, seat reservations).
8. `ecommerce-platform`: Next.js, TypeScript, PostgreSQL, Stripe, Prisma (catalog, cart sync, admin dashboard).
9. `project-management-saas`: Next.js, React Query, WebSockets, PostgreSQL (multi-tenant workspaces, Kanban).
10. `learning-management-system`: Next.js, TypeScript, PostgreSQL, Mux Video (quizzes, progress, certificates).

---

## 2. Core Architectural Principles

- **Framework**: Next.js 15 with App Router (`app/`), React Server Components (RSC) by default, and `'use client'` only where interactive state or event listeners are required.
- **Language**: Strict TypeScript without `any` overrides.
- **Data Mutations**: Prefer Next.js Server Actions with runtime schema parsing using `zod`.
- **Styling**: Tailwind CSS with dark-mode first design tokens, glassmorphic cards, and `@vercel/analytics` instrumentation.
- **Micro-Interactions**: Use `framer-motion` for fluid page transitions, layout animations, and interactive progress bars.
- **Observability**: Include `@vercel/analytics` and `@vercel/speed-insights` in production builds.

---

## 3. Contact & Authorship
- **Author**: Manthan Ank
- **GitHub**: [https://github.com/manthanank](https://github.com/manthanank)
- **Primary Domain**: [https://manthanank.dev](https://manthanank.dev)

