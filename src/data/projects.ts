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
  category: "Enterprise System" | "FinTech & Payments" | "Cloud & HRMS" | "AI & Automation";
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
    id: "sales-crm-platform",
    title: "Enterprise Sales CRM Platform",
    category: "Enterprise System",
    tagline: "Comprehensive CRM engine with lead pipeline tracking, invoicing, and granular RBAC.",
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
        solution: "Implemented custom Django REST permission classes combined with JWT claims, ensuring users only access authorized leads and financial records.",
      },
      {
        problem: "Frontend redundancy across deal stages and repetitive reporting interfaces.",
        solution: "Constructed a library of reusable React components (data tables, filter chips, status badges) that accelerated subsequent module development by 40%.",
      },
    ],
    metrics: [
      { label: "Architecture", value: "Decoupled REST" },
      { label: "Security", value: "JWT + RBAC" },
      { label: "Modules", value: "Leads, Deals, Invoices" },
    ],
    githubUrl: "https://github.com/Kavinretra",
    liveUrl: "https://linkedin.com/in/kavinretra",
    diagramAscii: `[React.js Client] --(JWT Bearer)--> [Django REST Framework API]
                                         |
                                         +--(RBAC Guard)--> [MySQL Database: Leads / Deals / Invoices]`,
  },
  {
    id: "accounting-payments-platform",
    title: "Accounting & Financial Management Platform",
    category: "FinTech & Payments",
    tagline: "Financial operations engine combining Django REST with Node.js payment microservices.",
    description:
      "Architected a financial management and ledger platform. Handled core accounting transactions via Django and built high-performance payment-related services using Node.js and Express.js, deployed in Docker environments.",
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
        problem: "Integrating asynchronous payment gateway webhooks without delaying core ledger calculations.",
        solution: "Decoupled payment gateway listeners into a lightweight Node.js/Express service, updating MySQL transaction tables and triggering Django ledger updates asynchronously.",
      },
      {
        problem: "Ensuring exact environment parity between local development and staging servers.",
        solution: "Containerized the multi-service stack with Docker, establishing reproducible database migrations and runtime dependencies.",
      },
    ],
    metrics: [
      { label: "Services", value: "Django + Node.js" },
      { label: "Deployment", value: "Docker Containers" },
      { label: "Data Integrity", value: "ACID Ledger" },
    ],
    githubUrl: "https://github.com/Kavinretra",
    liveUrl: "https://linkedin.com/in/kavinretra",
    diagramAscii: `[React.js UI] ---> [Django REST: Accounting & Invoices] ---> [MySQL 8.0 DB]
                  ---> [Node.js / Express: Payment Service] -----^`,
  },
  {
    id: "hrms-platform",
    title: "Enterprise Employee Management System (HRMS)",
    category: "Cloud & HRMS",
    tagline: "HRMS platform featuring organizational hierarchy workflows and AWS S3 document vaults.",
    description:
      "Developed enterprise HRMS modules for comprehensive employee management, onboarding workflows, attendance logging, and organizational reporting. Integrated AWS S3 for secure employee document storage.",
    featured: true,
    architecture: {
      client: "Responsive React.js web and mobile-adapted interfaces for employee self-service",
      server: "Django & REST APIs managing complex hierarchy approvals and multi-level permissions",
      database: "MySQL for organizational employee schemas, attendance tracking, and audit logs",
      caching: "AWS S3 for encrypted document storage (contracts, IDs, verification certificates)",
    },
    stack: ["React.js", "Python", "Django", "AWS S3", "MySQL", "Role-Based Access Control"],
    challenges: [
      {
        problem: "Securely handling sensitive employee identity documents and confidential contracts.",
        solution: "Integrated AWS S3 with pre-signed upload URLs and access restricted via IAM and application-level role authentication.",
      },
      {
        problem: "Modeling complex reporting hierarchies where manager approvals cascade dynamically.",
        solution: "Designed recursive relational hierarchy queries in MySQL and verified permission validation across every approval step.",
      },
    ],
    metrics: [
      { label: "Cloud Storage", value: "AWS S3 Secure" },
      { label: "Access Control", value: "Hierarchical RBAC" },
      { label: "Workflows", value: "Onboard, Attend, Report" },
    ],
    githubUrl: "https://github.com/Kavinretra",
    liveUrl: "https://linkedin.com/in/kavinretra",
    diagramAscii: `[React.js Frontend] --> [Django REST API] --> [MySQL: Employee Schemas]
                                      |
                                      +--(Pre-signed URLs)--> [AWS S3 Document Vault]`,
  },
  {
    id: "ai-agent-automation",
    title: "AI Agent & LLM Automation Workflows",
    category: "AI & Automation",
    tagline: "Intelligent agent orchestration, tool calling, and prompt engineering pipelines.",
    description:
      "Engineered automated agentic workflows integrating Large Language Models (LLMs) with enterprise tools. Implemented prompt engineering techniques, function orchestration, and structured tool calling to automate multi-step business tasks.",
    featured: true,
    architecture: {
      client: "Interactive chat & task execution monitoring dashboard",
      server: "Python orchestration service managing LLM context, schema validation, and tool dispatch",
      database: "PostgreSQL / MySQL for persistent conversation logs and tool output caching",
    },
    stack: ["Python", "AI Agents", "LLM Integration", "Prompt Engineering", "Tool Calling", "REST APIs"],
    challenges: [
      {
        problem: "Preventing hallucinations and ensuring LLM outputs conform to rigid API schemas.",
        solution: "Implemented strict function calling specifications with Pydantic/JSON schema validation, enforcing tool argument formats before execution.",
      },
    ],
    metrics: [
      { label: "Orchestration", value: "Tool Calling" },
      { label: "Output Schema", value: "Strict JSON" },
      { label: "Architecture", value: "Agentic Loop" },
    ],
    githubUrl: "https://github.com/Kavinretra",
    liveUrl: "https://linkedin.com/in/kavinretra",
  },
];
