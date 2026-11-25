import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { PrintResumeButton } from "@/components/common/print-resume-button";

export const metadata: Metadata = {
  title: "Resume | Kavin Retra S N",
  description:
    "Resume of Kavin Retra S N — Software Engineer & Full Stack Developer specializing in Python, Django, React.js, Node.js, AWS, and AI Agent workflows.",
};

export default function ResumePage() {
  const skillRows = [
    {
      label: "Programming Languages",
      value: "Python, JavaScript, TypeScript, C, C++",
    },
    {
      label: "Backend Technologies",
      value: "Django, Django REST Framework, Node.js, Express.js, REST API Development",
    },
    {
      label: "AI & Agent Development",
      value:
        "AI Agents, Agentic Workflows, LLM Integration, Prompt Engineering, Tool Calling & Function Orchestration, AI-Assisted Automation",
    },
    {
      label: "Frontend Technologies",
      value: "React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery, Vite",
    },
    { label: "Databases", value: "MySQL, PostgreSQL" },
    { label: "Cloud & DevOps", value: "AWS (S3, EC2), Docker, Linux" },
    {
      label: "Authentication & Security",
      value: "JWT Authentication, Role-Based Access Control (RBAC)",
    },
    { label: "Tools & Platforms", value: "Git, WordPress, Elementor" },
    {
      label: "Other Skills",
      value:
        "Database Design, API Integration, Responsive UI Development, Application Testing, Debugging",
    },
  ];

  const coolgenProjects = [
    {
      title: "Project: Sales CRM Platform",
      bullets: [
        "Developed and maintained CRM modules covering lead management, deal tracking, invoicing, and reporting dashboards.",
        "Implemented JWT-based authentication and role-based access control to manage user access and application security.",
        "Built reusable React components to improve code maintainability and frontend development efficiency.",
        "Developed and integrated REST APIs to support business workflows and frontend operations.",
      ],
    },
    {
      title: "Project: Accounting & Payments Platform",
      bullets: [
        "Developed an accounting and financial management platform using Django and Django REST Framework.",
        "Built backend services and REST APIs for financial operations and business processes.",
        "Worked with Node.js and Express.js to develop payment-related services.",
        "Integrated frontend and backend services using React.js and Docker-based development environments.",
        "Worked with MySQL database structures to support application data management.",
      ],
    },
    {
      title: "Project: Employee Management System (HRMS)",
      bullets: [
        "Developed HRMS modules for employee management, onboarding, attendance, and organizational reporting.",
        "Implemented role-based access and employee hierarchy management workflows.",
        "Integrated AWS S3 for secure document storage and management.",
        "Contributed to frontend development, application testing, debugging, and maintenance across web and mobile interfaces.",
      ],
    },
    {
      title: "Project: WordPress Websites",
      bullets: [
        "Developed and maintained WordPress websites using Elementor.",
        "Customized website layouts and responsive UI components using HTML and CSS.",
        "Worked on website performance, SEO improvements, and accessibility.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-8 px-4 sm:px-6 print:bg-white print:text-zinc-900 print:py-0 print:px-0">
      {/* Top Action Bar (hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Portfolio</span>
        </Link>

        <PrintResumeButton />
      </div>

      {/* Printable Resume Sheet */}
      <article className="max-w-4xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-10 shadow-2xl print:border-0 print:bg-white print:shadow-none print:p-6">
        {/* Header */}
        <header className="text-center border-b border-zinc-800 pb-6 print:border-zinc-300">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white print:text-zinc-900">
            KAVIN RETRA S N
          </h1>
          <p className="mt-1 text-sm sm:text-base font-semibold text-emerald-400 print:text-blue-700">
            {profile.role}
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-400 print:text-zinc-600">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.socials.email}`}
              className="inline-flex items-center gap-1 hover:text-white print:text-zinc-700"
            >
              <Mail className="h-3 w-3" />
              {profile.socials.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-1 hover:text-white print:text-zinc-700"
            >
              <Phone className="h-3 w-3" />
              {profile.phone}
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white print:text-blue-700"
            >
              linkedin.com/in/kavinretra
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-6">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800 pb-1.5 print:text-zinc-900 print:border-zinc-300">
            Professional Summary
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 print:text-zinc-800">
            Full Stack Software Engineer with 2+ years of experience developing business applications using Python, Django, Django REST Framework, React.js, and Node.js, alongside knowledge in designing and building AI agents and LLM-powered automation workflows. Experienced in building enterprise applications, including HRMS, CRM, and financial management systems. Strong understanding of AI agent orchestration, tool calling, prompt engineering, REST API development, database design, authentication, role-based access control (RBAC), responsive frontend development, and application deployment using Docker and AWS. Passionate about developing scalable, intelligent, and user-friendly software solutions.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mt-6">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800 pb-1.5 print:text-zinc-900 print:border-zinc-300">
            Technical Skills
          </h2>
          <dl className="mt-3 space-y-1.5 text-sm">
            {skillRows.map((row) => (
              <div key={row.label} className="leading-relaxed">
                <dt className="inline font-semibold text-zinc-100 print:text-zinc-900">
                  {row.label}:{" "}
                </dt>
                <dd className="inline text-zinc-300 print:text-zinc-800">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Professional Experience */}
        <section className="mt-6">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800 pb-1.5 print:text-zinc-900 print:border-zinc-300">
            Professional Experience
          </h2>

          {/* CoolGen Solutions */}
          <div className="mt-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-bold text-white print:text-zinc-900">
                CoolGen Solutions
              </h3>
              <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">
                December 2024 – Present
              </span>
            </div>
            <p className="text-xs font-medium text-emerald-400 print:text-blue-700">
              Software Engineer
            </p>
            <p className="mt-1.5 text-sm text-zinc-300 print:text-zinc-800">
              Working on the development and maintenance of enterprise business applications, including CRM, accounting, HRMS, and web solutions.
            </p>

            <div className="mt-3 space-y-3">
              {coolgenProjects.map((proj) => (
                <div key={proj.title}>
                  <h4 className="text-sm font-semibold text-zinc-100 print:text-zinc-900">
                    {proj.title}
                  </h4>
                  <ul className="mt-1 list-disc pl-5 space-y-1 text-sm text-zinc-300 print:text-zinc-800">
                    {proj.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Scope India */}
          <div className="mt-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-bold text-white print:text-zinc-900">
                Scope India
              </h3>
              <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">
                April 2023 – March 2024
              </span>
            </div>
            <p className="text-xs font-medium text-emerald-400 print:text-blue-700">
              Full Stack Developer Intern
            </p>
            <ul className="mt-1.5 list-disc pl-5 space-y-1 text-sm text-zinc-300 print:text-zinc-800">
              <li>
                Developed a responsive educational website with frontend and backend functionality.
              </li>
              <li>
                Implemented CRUD operations for managing application data.
              </li>
              <li>
                Built user-friendly interfaces and integrated backend services.
              </li>
              <li>
                Participated in the software development lifecycle, including development, testing, debugging, and deployment.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800 pb-1.5 print:text-zinc-900 print:border-zinc-300">
            Education
          </h2>
          <div className="mt-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-bold text-white print:text-zinc-900">
                Bachelor of Engineering (B.E.) – Electronics &amp; Communication Engineering
              </h3>
              <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">
                2019 – 2023 &bull; Percentage: 76%
              </span>
            </div>
            <p className="text-sm text-zinc-300 print:text-zinc-800">
              Amrita College of Engineering and Technology, Anna University
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-6">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800 pb-1.5 print:text-zinc-900 print:border-zinc-300">
            Certifications
          </h2>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-zinc-300 print:text-zinc-800">
            {profile.certifications.map((cert) => (
              <li key={cert.title}>
                {cert.title} &ndash; {cert.issuer}
                {cert.year !== "Certified" ? ` (${cert.year})` : ""}
              </li>
            ))}
          </ul>
        </section>

        {/* Additional Information */}
        <section className="mt-6">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800 pb-1.5 print:text-zinc-900 print:border-zinc-300">
            Additional Information
          </h2>
          <div className="mt-3 space-y-1 text-sm text-zinc-300 print:text-zinc-800">
            <p>
              <strong className="text-zinc-100 print:text-zinc-900">Languages:</strong>{" "}
              {profile.languages.join(", ")}
            </p>
            <p>
              <strong className="text-zinc-100 print:text-zinc-900">Areas of Interest:</strong>{" "}
              {profile.interests.join(", ")}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
