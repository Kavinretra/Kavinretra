export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  current: boolean;
  type: "Full-Time" | "Internship" | "Education";
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "coolgen-solutions",
    role: "Software Engineer",
    company: "CoolGen Solutions",
    location: "Kanyakumari / Nagercoil, India",
    period: "December 2024 — Present",
    duration: "Full-Time",
    current: true,
    type: "Full-Time",
    summary:
      "Developing and maintaining enterprise business applications including Sales CRM, Accounting & Payments, HRMS, and custom WordPress web solutions.",
    responsibilities: [
      "Sales CRM Platform: Developed and maintained CRM modules covering lead management, deal tracking, invoicing, and reporting dashboards.",
      "Security & Auth: Implemented JWT-based authentication and role-based access control (RBAC) to enforce user access and application security.",
      "Frontend Architecture: Built reusable React components to improve code maintainability and frontend development efficiency.",
      "Accounting & Payments: Developed an accounting and financial management platform using Django and Django REST Framework, alongside Node.js and Express.js payment services in Docker-based environments.",
      "HRMS Platform: Developed HRMS modules for employee management, onboarding, attendance, and organizational reporting with AWS S3 secure document storage.",
      "WordPress Solutions: Built and maintained WordPress websites using Elementor, customizing responsive HTML/CSS components and improving performance, SEO, and accessibility.",
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "AWS (S3, EC2)",
      "Docker",
      "JWT",
      "RBAC",
      "WordPress",
    ],
  },
  {
    id: "scope-india",
    role: "Full Stack Developer Intern",
    company: "Scope India",
    location: "Tamil Nadu, India",
    period: "April 2023 — March 2024",
    duration: "1 Year",
    current: false,
    type: "Internship",
    summary:
      "Built responsive full-stack educational web applications, implementing CRUD operations, clean UIs, and backend service integrations across the full SDLC.",
    responsibilities: [
      "Developed a responsive educational website with integrated frontend and backend functionality.",
      "Implemented full CRUD operations for managing application and educational data.",
      "Built user-friendly interfaces and integrated backend REST services.",
      "Participated across the software development lifecycle, including development, testing, debugging, and deployment.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Node.js",
      "MySQL",
      "Git",
    ],
  },
  {
    id: "amrita-engineering",
    role: "Bachelor of Engineering (B.E.) — Electronics & Communication Engineering",
    company: "Amrita College of Engineering and Technology, Anna University",
    location: "Tamil Nadu, India",
    period: "2019 — 2023",
    duration: "76% Aggregate",
    current: false,
    type: "Education",
    summary:
      "Graduated with 76%. Engineering foundation in programming, digital systems, communication networks, and software engineering fundamentals.",
    responsibilities: [
      "Academic Score: 76% aggregate.",
      "Core technical foundation in C, C++, database design, and structured problem-solving.",
      "Completed Optical Communication System Design project work using OptiSystem simulation software.",
    ],
    technologies: [
      "C",
      "C++",
      "Database Design",
      "Software Engineering",
      "OptiSystem",
      "Digital Systems",
    ],
  },
];
