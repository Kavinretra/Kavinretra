# Kavin Retra — Full-Stack Engineer Portfolio

> Production-grade, high-performance portfolio engineered for a Full-Stack Developer specializing in **React**, **Python & Django**, **Node.js**, and **MySQL**.

![Next.js](https://img.shields.io/badge/Next.js-15%2F16-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-emerald)

---

## ⚡ Features & Engineering Highlights

- **Product & Systems-First Narrative:** Instead of generic skill percentages, features real-world case studies detailing **MySQL 3NF schema design**, **Django REST & Node.js API contracts**, query indexing optimizations, and quantified business impact.
- **Interactive Command Palette (`Cmd + K` / `Ctrl + K`):** Instant keyboard-driven navigation across case studies, engineering philosophies, contact links, and external repositories.
- **Architectural Topology Viewers:** Collapsible ASCII architecture topology maps illustrating client tiers, server handlers, cache layers, and relational storage.
- **Zero-Shift Dark Mode Aesthetic:** Deep zinc/slate palette `#09090b` accented with emerald `#10b981` status glows, backdrop blur glassmorphism, and responsive typography.
- **Type-Safe Content Layer:** 100% typed configuration (`src/data/`) enabling instant updates to profile, projects, skills, and work history without touching UI markup.
- **Interactive Contact & Delight:** Client-side validated contact form with celebratory confetti trigger and one-click email clipboard copy.

---

## 🛠️ Tech Stack

| Tier | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Static site generation (SSG), fast edge delivery, metadata & SEO |
| **Library** | **React 19** | Modern hooks, transitions, component architecture |
| **Language** | **TypeScript 5** | Strict type safety and predictable interfaces |
| **Styling** | **Tailwind CSS v4** | CSS-first `@theme` configuration, utility tokens, responsive design |
| **Animations** | **Framer Motion & Canvas Confetti** | Snappy micro-interactions and visual feedback |
| **Icons** | **Lucide Icons + Custom SVGs** | Clean, tree-shakeable developer iconography |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx             # Root layout, fonts, and OpenGraph SEO metadata
│   ├── page.tsx               # Main assembly page with grid background
│   └── globals.css            # Tailwind directives, theme variables & animations
├── components/
│   ├── common/
│   │   └── command-palette.tsx# Cmd + K quick launcher & search modal
│   ├── layout/
│   │   ├── navbar.tsx         # Responsive blur navbar with mobile drawer
│   │   └── footer.tsx         # Minimal copyright & social footer
│   ├── sections/
│   │   ├── hero.tsx           # Headline, live availability badge, core stack pills, stats
│   │   ├── about.tsx          # 4 Engineering pillars (Schema, APIs, React, Product)
│   │   ├── featured-projects.tsx # Deep-dive case studies with architecture & metrics
│   │   ├── skills-grid.tsx    # Categorized toolkit (Backend, Frontend, DBs, Tooling)
│   │   ├── experience-timeline.tsx # Career history & education timeline
│   │   └── contact-section.tsx# Contact form with confetti & direct email copy
│   └── ui/                    # Reusable button, badge, card, and icon primitives
├── data/
│   ├── profile.ts             # Name, bio, socials, location, and stats
│   ├── projects.ts            # Detailed project case studies, metrics & architectures
│   ├── skills.ts              # Categorized skills with production context notes
│   └── experience.ts          # Career history at CoolGen Tech Solution & Education
└── lib/
    └── utils.ts               # Tailwind class merger (cn)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.17+` or `v20+` (tested on Node v24)
- npm `v9+` or `v10+`

### 1. Clone & Install
```bash
git clone https://github.com/Kavinretra/kavin_portfolio.git
cd kavin_portfolio
npm install
```

### 2. Run Locally in Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ How to Customize Your Data

All portfolio data is located in `src/data/`:
1. **Personal Information:** Edit `src/data/profile.ts` to update your email, LinkedIn, or bio.
2. **Projects:** Add or edit case studies in `src/data/projects.ts` (supports architecture descriptions, metrics, and ASCII topology maps).
3. **Experience:** Update your roles and achievements in `src/data/experience.ts`.
4. **Skills:** Modify technical categories in `src/data/skills.ts`.

---

## 🌐 One-Click Deploy to Vercel

1. Push this repository to GitHub: `https://github.com/Kavinretra/portfolio`.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Next.js will be auto-detected. Click **Deploy**.

---

## 📄 License
MIT © [Kavin Retra](https://github.com/Kavinretra)
