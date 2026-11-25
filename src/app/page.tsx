import React from "react";
import { PortfolioShell } from "@/components/common/portfolio-shell";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <PortfolioShell>
      <Hero />
      <About />
      <FeaturedProjects />
      <SkillsGrid />
      <ExperienceTimeline />
      <ContactSection />
    </PortfolioShell>
  );
}
