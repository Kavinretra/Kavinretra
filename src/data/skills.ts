export interface SkillItem {
  name: string;
  context: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & Systems Architecture",
    description: "Robust business logic, clean RESTful APIs, and secure authentication flows.",
    icon: "Server",
    skills: [
      { name: "Python", context: "Production application logic & scripting", featured: true },
      { name: "Django & DRF", context: "ORM, REST framework, serializer validation & middleware", featured: true },
      { name: "Node.js", context: "Asynchronous runtime & event-driven microservices", featured: true },
      { name: "Express.js", context: "RESTful route handlers, error pipelines & middlewares", featured: true },
      { name: "RESTful API Design", context: "RFC-compliant HTTP status codes, pagination & error responses", featured: true },
      { name: "Auth & Security", context: "JWT tokens, role-based access control (RBAC), password hashing" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Interface Engineering",
    description: "Fluid, accessible, and high-performance interfaces built with modern React.",
    icon: "Layout",
    skills: [
      { name: "React.js", context: "Hooks, component lifecycles, and custom hook abstractions", featured: true },
      { name: "Next.js", context: "App Router, SSR, Server Components & static generation", featured: true },
      { name: "TypeScript", context: "Strict type safety, generic interfaces & Zod schemas", featured: true },
      { name: "JavaScript (ES6+)", context: "Promises, async/await, closures & DOM APIs" },
      { name: "Tailwind CSS", context: "Utility-first design tokens, responsive layouts & dark mode", featured: true },
      { name: "State Management", context: "Zustand, React Context & Redux patterns" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    description: "Relational integrity, indexing strategies, and optimized query execution.",
    icon: "Database",
    skills: [
      { name: "MySQL", context: "Relational schema design, foreign keys, ACID transactions", featured: true },
      { name: "Query Optimization", context: "EXPLAIN plans, composite indexes, eliminating N+1 queries", featured: true },
      { name: "Django ORM", context: "select_related, prefetch_related & complex aggregations", featured: true },
      { name: "PostgreSQL", context: "Relational constraints, joins, and indexing" },
      { name: "Redis Caching", context: "Cache-aside strategy, session storage & key expiration" },
    ],
  },
  {
    id: "devops-tooling",
    title: "DevOps, Tooling & Practices",
    description: "Modern developer workflows, version control, and production reliability.",
    icon: "Cpu",
    skills: [
      { name: "System Design", context: "Client-server separation, caching, horizontal scaling basics", featured: true },
      { name: "Git & GitHub", context: "Feature branch workflows, PR reviews, merge hygiene", featured: true },
      { name: "Linux / Bash", context: "Command-line navigation, shell scripting & server config" },
      { name: "Postman / Swagger", context: "API contract testing, mock servers & documentation" },
      { name: "Docker Basics", context: "Containerizing services for local parity and deployment" },
      { name: "CI / CD & Vercel", context: "Automated linting, testing, and continuous deployment" },
    ],
  },
];
