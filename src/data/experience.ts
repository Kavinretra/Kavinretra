export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current: boolean;
  type: "Full-Time" | "Education" | "Milestone";
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "coolgen-tech",
    role: "Full-Stack Software Engineer",
    company: "CoolGen Tech Solution Pvt Ltd",
    companyUrl: "https://github.com/Kavinretra",
    location: "Nagercoil, India",
    period: "2023 — Present",
    current: true,
    type: "Full-Time",
    summary:
      "Core developer responsible for architecting and delivering production web applications, database schemas, and REST APIs for scalable client platforms.",
    responsibilities: [
      "Engineered full-stack features end-to-end using React on the frontend and Django / Node.js on the backend, accelerating feature turnaround by 30%.",
      "Designed and maintained MySQL relational schemas with strict foreign key integrity, creating composite indexes that lowered critical query latency by up to 50%.",
      "Built resilient RESTful API endpoints utilizing Django REST Framework and Express.js, implementing JWT authentication, input validation, and role-based permissions.",
      "Diagnosed and resolved performance bottlenecks across both client-side rendering cycles and backend database queries.",
      "Collaborated with product stakeholders to break down user requirements into technical architecture specifications, schemas, and API contracts.",
    ],
    technologies: ["React", "Python", "Django", "Node.js", "MySQL", "JavaScript", "TypeScript", "REST APIs", "Git"],
  },
  {
    id: "engineering-education",
    role: "Bachelor of Engineering (B.E.)",
    company: "University / Engineering Institute",
    location: "Tamil Nadu, India",
    period: "2019 — 2023",
    current: false,
    type: "Education",
    summary:
      "Foundational computer science education with rigorous coursework in Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, and Object-Oriented Software Engineering.",
    responsibilities: [
      "Built capstone full-stack web applications utilizing Python and relational databases.",
      "Deep study of Relational Database Theory, Normalization forms (1NF through BCNF), and SQL query execution.",
      "Active participant in technical code symposiums and collaborative hackathons.",
    ],
    technologies: ["Data Structures", "Algorithms", "DBMS", "SQL", "Python", "Object-Oriented Programming"],
  },
];
