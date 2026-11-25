export type ProjectCategory =
  | "Enterprise System"
  | "FinTech & Payments"
  | "Cloud & HRMS"
  | "AI & Automation"
  | "Web & Performance";

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
  category: ProjectCategory;
  description: string;
  featured: boolean;
  visibility: "enterprise" | "public";
  organization: string;
  architecture: {
    client: string;
    server: string;
    database: string;
    caching?: string;
  };
  stack: string[];
  challenges: ProjectChallenge[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  diagramAscii?: string;
}

export const projects: Project[] = [
  {
    id: "sales-crm-platform",
    title: "Enterprise Sales CRM Platform",
    category: "Enterprise System",
    organization: "CoolGen Solutions",
    visibility: "enterprise",
    tagline:
      "Comprehensive CRM engine with lead pipeline tracking, invoicing, and granular RBAC.",
    description:
      "Engineered an enterprise-grade Sales CRM platform at CoolGen Solutions covering end-to-end sales lifecycles: lead acquisition, stage-by-stage deal tracking, automated invoice generation, and real-time revenue analytics dashboards.",
    featured: true,
    architecture: {
      client: "React.js with reusable modular component hierarchy & responsive dashboards",
      server: "Django REST Framework with JWT authentication & role-based access control (RBAC)",
      database: "MySQL relational design supporting normalized lead, deal, and invoicing pipelines",
    },
    stack: ["React.js", "Python", "Django", "Django REST Framework", "MySQL", "JWT Auth", "RBAC"],
    challenges: [
      {
        problem: "Managing granular permission boundaries across sales reps, managers, and executives.",
        solution:
          "Implemented custom Django REST permission classes combined with JWT claims, ensuring users only access authorized leads and financial records.",
        tradeoff: "Slightly richer JWT claims payload in exchange for zero extra RBAC round-trips on standard reads.",
      },
      {
        problem: "Frontend redundancy across deal stages and repetitive reporting interfaces.",
        solution:
          "Constructed a library of reusable React components (data tables, filter chips, status badges) to improve maintainability and development velocity.",
      },
    ],
    metrics: [
      { label: "Architecture", value: "Decoupled REST" },
      { label: "Security", value: "JWT + RBAC" },
      { label: "Modules", value: "Leads, Deals, Invoices" },
    ],
    diagramAscii: `[React.js Client] --(JWT Bearer)--> [Django REST Framework API]
                                         |
                                         +--(RBAC Guard)--> [MySQL Database: Leads / Deals / Invoices]`,
  },
  {
    id: "accounting-payments-platform",
    title: "Accounting & Financial Management Platform",
    category: "FinTech & Payments",
    organization: "CoolGen Solutions",
    visibility: "enterprise",
    tagline: "Financial operations engine combining Django REST with Node.js payment microservices.",
    description:
      "Architected a financial management and ledger platform. Handled core accounting transactions via Django and built payment-related services using Node.js and Express.js, integrated with React.js in Docker-based environments.",
    featured: true,
    architecture: {
      client: "React.js frontend interface with transactional summary views and audit logs",
      server: "Hybrid backend: Django for ledger calculations + Node.js/Express.js for payment pipelines",
      database: "MySQL transactional database enforcing strict balance constraints and foreign keys",
      caching: "Docker containerization for local environment parity and production deployment",
    },
    stack: ["Django", "Django REST", "Node.js", "Express.js", "React.js", "MySQL", "Docker"],
    challenges: [
      {
        problem: "Integrating asynchronous payment workflows without blocking core ledger calculations.",
        solution:
          "Decoupled payment listeners into a lightweight Node.js/Express service, recording transaction states in MySQL and coordinating Django ledger updates.",
      },
      {
        problem: "Ensuring consistent environment parity across multi-service local development and staging.",
        solution:
          "Containerized the Python, Node.js, and MySQL stack with Docker, establishing reproducible migrations and runtime dependencies.",
      },
    ],
    metrics: [
      { label: "Services", value: "Django + Node.js" },
      { label: "Deployment", value: "Docker Containers" },
      { label: "Data Integrity", value: "ACID Ledger" },
    ],
    diagramAscii: `[React.js UI] ---> [Django REST: Accounting & Invoices] ---> [MySQL DB]
                  ---> [Node.js / Express: Payment Service] -----^`,
  },
  {
    id: "hrms-platform",
    title: "Enterprise Employee Management System (HRMS)",
    category: "Cloud & HRMS",
    organization: "CoolGen Solutions",
    visibility: "enterprise",
    tagline: "HRMS platform featuring organizational hierarchy workflows and AWS S3 document vaults.",
    description:
      "Developed enterprise HRMS modules for employee management, onboarding workflows, attendance tracking, and organizational reporting across web and mobile interfaces, with AWS S3 integrated for secure document storage.",
    featured: true,
    architecture: {
      client: "Responsive React.js web and mobile-adapted interfaces for employee self-service",
      server: "Django & REST APIs managing hierarchy approvals and multi-level permissions",
      database: "MySQL for organizational employee schemas, attendance tracking, and audit logs",
      caching: "AWS S3 for secure document storage (contracts, IDs, verification certificates)",
    },
    stack: ["React.js", "Python", "Django", "AWS S3", "MySQL", "Role-Based Access Control"],
    challenges: [
      {
        problem: "Securely storing and serving sensitive employee identity documents and contracts.",
        solution:
          "Integrated AWS S3 with scoped IAM policies and time-limited access flows gated by application-level role authentication.",
      },
      {
        problem: "Modeling reporting hierarchies where manager approvals cascade dynamically.",
        solution:
          "Structured relational hierarchy tables in MySQL with permission validation enforced at each approval endpoint.",
      },
    ],
    metrics: [
      { label: "Cloud Storage", value: "AWS S3 Secure" },
      { label: "Access Control", value: "Hierarchical RBAC" },
      { label: "Workflows", value: "Onboard, Attend, Report" },
    ],
    diagramAscii: `[React.js Frontend] --> [Django REST API] --> [MySQL: Employee Schemas]
                                      |
                                      +--(IAM Scoped)--> [AWS S3 Document Vault]`,
  },
  {
    id: "ai-agent-automation",
    title: "AI Agent & LLM Automation Workflows",
    category: "AI & Automation",
    organization: "R&D / Automation",
    visibility: "enterprise",
    tagline: "Intelligent agent orchestration, tool calling, and prompt engineering pipelines.",
    description:
      "Engineered automated agentic workflows integrating Large Language Models (LLMs) with business APIs. Implemented structured prompt engineering, function orchestration, and tool-calling validation loops to automate multi-step tasks reliably.",
    featured: true,
    architecture: {
      client: "Interactive prompt & task execution monitoring interface",
      server: "Python orchestration layer managing LLM context, schema validation, and tool dispatch",
      database: "PostgreSQL / MySQL for persistent conversation traces and tool execution logs",
    },
    stack: [
      "Python",
      "AI Agents",
      "LLM Integration",
      "Prompt Engineering",
      "Tool Calling",
      "REST APIs",
    ],
    challenges: [
      {
        problem: "Preventing malformed tool arguments and ensuring LLM outputs conform to strict API contracts.",
        solution:
          "Defined deterministic JSON tool schemas and validated arguments prior to dispatch, returning structured error feedback into the agent loop for self-correction.",
      },
      {
        problem: "Balancing multi-step reasoning depth against latency and token cost in production workflows.",
        solution:
          "Constrained tool-call budgets, injected concise system guardrails, and separated deterministic CRUD steps from LLM decision steps.",
        tradeoff: "Capped loop iterations require explicit fallback handling for ambiguous inputs.",
      },
    ],
    metrics: [
      { label: "Orchestration", value: "Tool Calling" },
      { label: "Output Schema", value: "Strict JSON" },
      { label: "Architecture", value: "Agentic Loop" },
    ],
    diagramAscii: `[User / Trigger] --> [Prompt Guardrails + Context] --> [LLM Reasoning]
                                                              |
      [Response / Audit Log] <-- [Tool Dispatcher & Validator] <--(JSON Tool Call)`,
  },
  {
    id: "wordpress-web-solutions",
    title: "WordPress Web Solutions & Performance Optimization",
    category: "Web & Performance",
    organization: "CoolGen Solutions",
    visibility: "enterprise",
    tagline: "Custom Elementor layouts, responsive HTML/CSS components, SEO, and accessibility.",
    description:
      "Developed and maintained client-facing WordPress websites using Elementor, crafting custom responsive UI components in HTML and CSS while improving page performance, technical SEO, and accessibility compliance.",
    featured: false,
    architecture: {
      client: "Responsive Elementor templates enhanced with custom HTML5/CSS3 components",
      server: "WordPress CMS with optimized asset delivery and metadata structure",
      database: "MySQL backing WordPress content types and SEO taxonomy",
    },
    stack: ["WordPress", "Elementor", "HTML5", "CSS3", "Technical SEO", "Accessibility"],
    challenges: [
      {
        problem: "Heavy visual builder markup hurting mobile responsiveness and Core Web Vitals.",
        solution:
          "Replaced bloated sections with lightweight custom HTML/CSS modules, tuned image sizing, and streamlined semantic heading hierarchy.",
      },
    ],
    metrics: [
      { label: "Focus", value: "SEO & A11y" },
      { label: "UI", value: "Responsive CSS" },
      { label: "Platform", value: "WordPress + Elementor" },
    ],
  },
  {
    id: "scope-india-portal",
    title: "Educational Web Portal & CRUD Platform",
    category: "Web & Performance",
    organization: "Scope India",
    visibility: "enterprise",
    tagline: "Responsive full-stack educational portal with end-to-end CRUD and REST integration.",
    description:
      "Built a responsive educational website during my full-stack internship at Scope India, delivering user-friendly frontend interfaces connected to backend CRUD services across development, testing, debugging, and deployment.",
    featured: false,
    architecture: {
      client: "Responsive HTML5, CSS3, Bootstrap, and React.js user interfaces",
      server: "Node.js / REST backend services handling course and student CRUD operations",
      database: "MySQL relational tables for educational records and enrollments",
    },
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Node.js", "MySQL", "REST APIs"],
    challenges: [
      {
        problem: "Coordinating clean form validation and state updates across multi-entity CRUD flows.",
        solution:
          "Standardized client-server request payloads and tested API edge cases end-to-end prior to deployment.",
      },
    ],
    metrics: [
      { label: "Lifecycle", value: "Full SDLC" },
      { label: "Data Ops", value: "Full CRUD" },
      { label: "UI", value: "Mobile Responsive" },
    ],
  },
];
