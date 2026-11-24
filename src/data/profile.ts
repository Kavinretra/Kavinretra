export interface Profile {
  name: string;
  role: string;
  headline: string;
  bio: string;
  location: string;
  phone: string;
  status: {
    available: boolean;
    text: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  languages: string[];
  certifications: {
    title: string;
    issuer: string;
    year: string;
  }[];
}

export const profile: Profile = {
  name: "Kavin Retra S N",
  role: "Software Engineer | Full Stack Developer",
  headline: "Building enterprise web platforms & intelligent AI agent workflows with Django, React, Node.js, and AWS.",
  bio: "Full Stack Software Engineer with 2+ years of experience developing enterprise business applications (CRM, HRMS, Accounting) using Python, Django, Django REST Framework, React.js, and Node.js. Skilled in AI agent orchestration, tool calling, prompt engineering, relational database design (MySQL, PostgreSQL), and cloud deployment using Docker and AWS.",
  location: "Kanyakumari, Tamil Nadu, India",
  phone: "+91-9150620059",
  status: {
    available: true,
    text: "Open to Full-Stack, Backend & AI Engineering Roles",
  },
  socials: {
    github: "https://github.com/Kavinretra",
    linkedin: "https://linkedin.com/in/kavinretra",
    email: "kavinretra91@gmail.com",
  },
  stats: [
    {
      value: "2+",
      label: "Years Experience",
      description: "Developing enterprise business applications & web solutions",
    },
    {
      value: "4+",
      label: "Enterprise Platforms",
      description: "Sales CRM, Accounting & Payments, HRMS, and Web portals",
    },
    {
      value: "AWS & Docker",
      label: "Cloud & DevOps",
      description: "S3 document storage, EC2 instances, and containerization",
    },
    {
      value: "AI & Agents",
      label: "Intelligent Workflows",
      description: "Agent orchestration, function calling & LLM integration",
    },
  ],
  languages: ["English", "Tamil", "Malayalam"],
  certifications: [
    {
      title: "AWS for Data Science",
      issuer: "Simplilearn",
      year: "2025",
    },
    {
      title: "Generative AI for Beginners",
      issuer: "Simplilearn SkillUp",
      year: "2025",
    },
    {
      title: "Microsoft Power BI Data Analyst",
      issuer: "Atos Prayas Foundation",
      year: "Certified",
    },
    {
      title: "Optical Communication System Design",
      issuer: "OptiSystem Simulation Software",
      year: "Certified",
    },
  ],
};
