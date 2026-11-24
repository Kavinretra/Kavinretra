export interface Profile {
  name: string;
  role: string;
  headline: string;
  bio: string;
  location: string;
  status: {
    available: boolean;
    text: string;
  };
  socials: {
    github: string;
    linkedin?: string;
    email: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const profile: Profile = {
  name: "Kavin Retra",
  role: "Full-Stack Software Engineer",
  headline: "Architecting end-to-end web applications with Python, Django, Node.js, and React.",
  bio: "Full-Stack Developer with 1–2 years of hands-on experience engineering scalable web systems. Passionate about product engineering, resilient database schemas, clean REST APIs, and responsive frontend experiences that solve real problems.",
  location: "Nagercoil, India (Open to Remote & Global Relocation)",
  status: {
    available: true,
    text: "Open to Full-Stack & Backend Product Roles",
  },
  socials: {
    github: "https://github.com/Kavinretra",
    linkedin: "https://linkedin.com/in/kavinretra",
    email: "kavinretra91@gmail.com",
  },
  stats: [
    {
      value: "1–2+",
      label: "Years Experience",
      description: "Shipping production full-stack features end-to-end",
    },
    {
      value: "4+",
      label: "Core Stack Pillars",
      description: "React, Python/Django, Node.js, and MySQL",
    },
    {
      value: "< 100ms",
      label: "API Target Latency",
      description: "Focused on query optimization & schema indexing",
    },
    {
      value: "100%",
      label: "Commitment to Craft",
      description: "Clean architectures, testable code & system design",
    },
  ],
};
