export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
  tradeoff?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack System" | "Backend API" | "Interactive Web Product";
  description: string;
  featured: boolean;
  architecture: {
    client: string;
    server: string;
    database: string;
    caching?: string;
  };
  stack: string[];
  challenges: ProjectChallenge[];
  metrics: ProjectMetric[];
  githubUrl: string;
  liveUrl?: string;
  diagramAscii?: string;
}

export const projects: Project[] = [
  {
    id: "enterprise-ops-hub",
    title: "OmniOps - Multi-Tenant Operations & Resource Platform",
    category: "Full-Stack System",
    tagline: "Scalable full-stack operational engine built with Django REST, React, and MySQL.",
    description:
      "An end-to-end multi-tenant business operations dashboard allowing organizations to manage work streams, automated billing pipelines, and team permissions with granular role-based security.",
    featured: true,
    architecture: {
      client: "React 19 + TypeScript + Tailwind CSS with optimistic state updates",
      server: "Django REST Framework (DRF) with custom permission classes & throttled endpoints",
      database: "MySQL 8.0 with InnoDB relational constraints, foreign keys, and indexed foreign columns",
      caching: "Redis cache-aside for high-frequency dashboard summary queries",
    },
    stack: ["React", "Python", "Django", "Django REST", "MySQL", "TypeScript", "Tailwind CSS"],
    challenges: [
      {
        problem: "Slow dashboard aggregations across 50,000+ relational records causing 800ms+ API latency.",
        solution: "Identified unindexed foreign keys and eliminated N+1 ORM queries using `select_related()` and added composite indexing on `(tenant_id, created_at, status)`.",
        tradeoff: "Slightly higher write overhead on record inserts in exchange for 75% faster read performance.",
      },
      {
        problem: "Race conditions during concurrent status transitions across multi-user sessions.",
        solution: "Implemented atomic database transactions (`transaction.atomic()`) with `select_for_update()` row-level locks in MySQL.",
      },
    ],
    metrics: [
      { label: "Query Latency Reduction", value: "75%" },
      { label: "P95 Response Time", value: "< 85ms" },
      { label: "Concurrency Safety", value: "100% ACID" },
    ],
    githubUrl: "https://github.com/Kavinretra",
    liveUrl: "https://github.com/Kavinretra",
    diagramAscii: `[React Frontend] --(HTTPS / JWT)--> [Django REST API] --(ORM / Raw SQL)--> [MySQL 8.0 DB]
                                       |
                                       +--(Cache Aside)--> [Redis Store]`,
  },
  {
    id: "async-task-router",
    title: "StreamForge - Asynchronous Event & Task Router",
    category: "Backend API",
    tagline: "High-throughput Node.js microservice handling decoupled background jobs and webhooks.",
    description:
      "A high-concurrency Node.js and Express RESTful engine designed to process inbound webhook payloads, validate schemas with strict contracts, and queue jobs asynchronously.",
    featured: true,
    architecture: {
      client: "Lightweight admin monitoring dashboard in React with live status pills",
      server: "Node.js (LTS) + Express.js with async middlewares, rate-limiting & structured Pino logging",
      database: "MySQL for persistent transactional logs, state tracking, and failure re-drive queues",
    },
    stack: ["Node.js", "Express.js", "MySQL", "JavaScript", "REST APIs", "Postman"],
    challenges: [
      {
        problem: "Inbound webhook retries causing duplicate task processing and conflicting database writes.",
        solution: "Engineered an idempotency layer utilizing unique payload hash keys stored in a dedicated MySQL deduplication table with automated TTL cleanup.",
      },
      {
        problem: "Memory spikes and event loop blocking during batch JSON ingestion.",
        solution: "Streamed large payloads via JSON chunking pipelines instead of loading entire payloads into V8 heap memory.",
      },
    ],
    metrics: [
      { label: "Throughput Capacity", value: "3,500 req/s" },
      { label: "Deduplication Rate", value: "100%" },
      { label: "Uptime Target", value: "99.95%" },
    ],
    githubUrl: "https://github.com/Kavinretra",
    liveUrl: "https://github.com/Kavinretra",
    diagramAscii: `[External Webhooks] --> [Express Rate Limiter] --> [Idempotency Key Check]
                                                  |
                                                  v
                                     [MySQL Persistent Queue] --> [Worker Loop]`,
  },
  {
    id: "catalog-inventory-engine",
    title: "InventoryCore - High-Integrity Catalog & Order System",
    category: "Full-Stack System",
    tagline: "Relational inventory management system with live stock ledgering and dynamic filtering.",
    description:
      "Engineered an inventory control system with real-time stock allocation, dynamic multi-attribute product filters, and audit trail ledgering built on Python/Django and MySQL.",
    featured: true,
    architecture: {
      client: "React with client-side caching and debounced faceted filtering",
      server: "Python / Django with optimized ORM serialization and custom viewsets",
      database: "MySQL normalized schema with strict foreign key cascading rules and audit history logs",
    },
    stack: ["React", "Python", "Django", "MySQL", "Tailwind CSS"],
    challenges: [
      {
        problem: "Stock discrepancies when multiple users reserved inventory items at the exact same second.",
        solution: "Designed an inventory ledger pattern where mutations are append-only rows, preventing negative balance discrepancies and maintaining full audit trails.",
      },
    ],
    metrics: [
      { label: "Inventory Discrepancy", value: "0%" },
      { label: "Filter Query Execution", value: "< 35ms" },
      { label: "Database Normalization", value: "3NF Compliant" },
    ],
    githubUrl: "https://github.com/Kavinretra",
    liveUrl: "https://github.com/Kavinretra",
  },
];
