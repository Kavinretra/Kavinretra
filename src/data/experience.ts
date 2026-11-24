export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
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
    companyUrl: "https://linkedin.com/in/kavinretra",
    location: "Kanyakumari / Nagercoil, India",
    period: "December 2024 — Present",
    current: true,
    type: "Full-Time",
    summary:
      "Engineered and maintained mission-critical enterprise business platforms including Sales CRM, Accounting & Payments, HRMS, and custom web applications.",
    responsibilities: [
      "Sales CRM Platform: Developed and maintained CRM modules for lead management, deal tracking, automated invoicing, and reporting dashboards.",
      "Security & Auth: Implemented JWT-based authentication and role-based access control (RBAC) to enforce strict enterprise security policies.",
      "Frontend Architecture: Built reusable React component libraries that dramatically enhanced UI maintainability and team development velocity.",
      "Accounting & Payments: Developed an accounting and financial management platform using Django REST Framework, integrating Node.js and Express.js payment-related services in Docker environments.",
      "HRMS Platform: Created HRMS modules covering employee onboarding, attendance, and organizational reporting with AWS S3 cloud document storage integration.",
      "WordPress Solutions: Developed and customized WordPress websites using Elementor, tailoring responsive UI with HTML/CSS and optimizing SEO and accessibility.",
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
    companyUrl: "https://linkedin.com/in/kavinretra",
    location: "Tamil Nadu, India",
    period: "April 2023 — March 2024",
    current: false,
    type: "Internship",
    summary:
      "Built full-stack web applications and educational portals, working across frontend UI design, backend CRUD services, and application deployment.",
    responsibilities: [
      "Developed a responsive educational website delivering intuitive frontend navigation and reliable backend data processing.",
      "Implemented full CRUD operations for managing educational records, courses, and application data.",
      "Constructed clean, responsive user interfaces and seamlessly integrated backend REST services.",
      "Participated actively across the entire software development lifecycle (SDLC), including feature development, testing, debugging, and deployment.",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Node.js", "MySQL", "Git"],
  },
  {
    id: "amrita-engineering",
    role: "Bachelor of Engineering (B.E.) — Electronics & Communication Engineering",
    company: "Amrita College of Engineering and Technology, Anna University",
    location: "Tamil Nadu, India",
    period: "2019 — 2023",
    current: false,
    type: "Education",
    summary:
      "Graduated with 76%. Rigorous engineering foundation in digital systems, programming, communication networks, and software engineering methodologies.",
    responsibilities: [
      "Academic Score: 76% aggregate.",
      "Coursework in Object-Oriented Programming, C, C++, Data Structures, Database Design, and Digital Signal Processing.",
      "Hands-on project work in optical communication system design and simulation using OptiSystem software.",
    ],
    technologies: ["C", "C++", "Database Design", "Software Engineering", "OptiSystem", "Digital Systems"],
  },
];
