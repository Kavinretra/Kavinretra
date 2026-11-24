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
    id: "ai-agents",
    title: "AI & Agentic Workflows",
    description: "Designing intelligent automation, function calling, and LLM-assisted systems.",
    icon: "Sparkles",
    skills: [
      { name: "AI Agents", context: "Autonomous agent loops & multi-step execution", featured: true },
      { name: "Agentic Workflows", context: "Planning, reflection, and task decomposition", featured: true },
      { name: "LLM Integration", context: "Model API integration, structured JSON outputs", featured: true },
      { name: "Prompt Engineering", context: "Few-shot prompting, system instructions & guardrails", featured: true },
      { name: "Tool Calling & Orchestration", context: "Function calling schemas & API execution", featured: true },
      { name: "AI Automation", context: "Workflow streamlining & intelligent task processing" },
    ],
  },
  {
    id: "backend",
    title: "Backend & RESTful Services",
    description: "Robust business logic, clean RESTful APIs, and secure access controls.",
    icon: "Server",
    skills: [
      { name: "Python", context: "Core application logic, scripting & data manipulation", featured: true },
      { name: "Django & DRF", context: "ORM, serializers, viewsets, authentication & middleware", featured: true },
      { name: "Node.js & Express.js", context: "Event loop microservices & payment processing APIs", featured: true },
      { name: "REST API Development", context: "Clean HTTP endpoints, status codes & request validation", featured: true },
      { name: "JWT Authentication", context: "Stateless token-based authentication & refresh flows", featured: true },
      { name: "RBAC (Access Control)", context: "Granular role and permission hierarchies" },
      { name: "C / C++", context: "Foundational systems programming & algorithms" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & User Interfaces",
    description: "Responsive, component-driven client applications built with modern tooling.",
    icon: "Layout",
    skills: [
      { name: "React.js", context: "Reusable component libraries, hooks, and clean state flows", featured: true },
      { name: "Vite & Next.js", context: "Fast build tooling, bundle optimization & SSR", featured: true },
      { name: "JavaScript (ES6+)", context: "Modern async/await syntax, DOM APIs, and closures", featured: true },
      { name: "HTML5 & CSS3", context: "Semantic web architecture & responsive CSS layouts" },
      { name: "Tailwind CSS & Bootstrap", context: "Utility styling, design tokens & responsive grids" },
      { name: "jQuery", context: "Legacy DOM manipulation and UI component integration" },
    ],
  },
  {
    id: "cloud-databases",
    title: "Databases, Cloud & DevOps",
    description: "Relational data structures, cloud storage, containerization, and hosting.",
    icon: "Database",
    skills: [
      { name: "MySQL", context: "Schema normalization, indexing, foreign keys, transaction safety", featured: true },
      { name: "PostgreSQL", context: "Relational constraints, complex queries & data integrity", featured: true },
      { name: "AWS (S3, EC2)", context: "S3 document storage integration, EC2 instance hosting", featured: true },
      { name: "Docker", context: "Containerized development environments & deployments", featured: true },
      { name: "Linux / Bash", context: "Server configuration, shell navigation & automation" },
      { name: "Git & GitHub", context: "Version control, branching strategies & PR workflows" },
      { name: "WordPress & Elementor", context: "Custom layout customization, performance & SEO" },
    ],
  },
];
