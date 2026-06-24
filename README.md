<div align="center">

# 💊 PharmaX.ai

### AI-Driven Drug Repurposing Engine

**Built for the EY Techathon** · Powered by Agentic AI · React + TypeScript + Vite

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 🧬 Overview

**PharmaX.ai** is an agentic AI platform for pharmaceutical research teams to explore new drug indications, analyze clinical evidence, evaluate patent landscapes, and accelerate drug repurposing pipelines — all from a single search interface.

Enter any drug name and seven specialized AI agents orchestrate in real-time to generate a comprehensive repurposing dossier, complete with opportunity scores, clinical trial data, patent intelligence, market insights, and scientific literature.

---

## ✨ Features

- 🔍 **Drug Repurposing Search** — Enter any drug name to trigger multi-agent analysis
- 🤖 **7 Specialized AI Agents** — Each focused on a distinct research domain
- 📊 **Interactive Knowledge Graph** — Visual mapping of drug-disease-target relationships
- 📋 **Comprehensive Dossier** — Opportunity score, mechanism of action, and risk assessment
- 🏥 **Clinical Trials Tracker** — Status, phase, and NCT IDs from global databases
- 🔒 **Patent Intelligence** — IP landscape analysis and freedom-to-operate insights
- 📈 **Market Insights** — Market size, CAGR, and competitor landscape
- 📚 **Scientific Literature** — Relevance-ranked papers from top journals
- 📄 **PDF Export** — Download the full repurposing dossier via jsPDF
- 🌗 **Dark Mode** — Fully themed UI with next-themes

---

## 🤖 The 7 AI Agents

| Agent | Role |
|-------|------|
| **Master Agent** | Orchestrates all specialized agents and synthesizes findings into actionable insights |
| **BioLit Agent** | Scans biomedical literature for relevant research and mechanistic evidence |
| **Clinical Trials Agent** | Monitors global clinical trial databases for relevant studies and outcomes |
| **Patent Agent** | Analyzes intellectual property landscape and freedom-to-operate considerations |
| **Market Intelligence Agent** | Evaluates market dynamics, competitive positioning, and commercial viability |
| **Safety/Risk Agent** | Assesses regulatory pathways and identifies potential safety concerns |
| **Report Generator** | Compiles comprehensive dossiers with opportunity scores and recommendations |

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 with SWC |
| **Styling** | Tailwind CSS v3 + tailwindcss-animate |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Routing** | React Router DOM v6 |
| **Data Fetching** | TanStack React Query v5 |
| **Charts** | Recharts |
| **Forms** | React Hook Form + Zod |
| **PDF Export** | jsPDF |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```text
pharmax-ey-techathon/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── pharmax/            # Core feature components
│   │   │   ├── HeroSearch.tsx          # Landing search interface
│   │   │   ├── ResultsView.tsx         # Tabbed results layout
│   │   │   ├── ResultsHeader.tsx       # Drug name + action bar
│   │   │   ├── DossierSection.tsx      # Opportunity score + dossier
│   │   │   ├── KnowledgeGraph.tsx      # Interactive graph visualization
│   │   │   ├── ClinicalTrialsContent.tsx
│   │   │   ├── PatentInfoContent.tsx
│   │   │   ├── MarketInsightsContent.tsx
│   │   │   ├── LiteratureContent.tsx
│   │   │   ├── AccordionSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── ui/                 # shadcn/ui base components
│   │   └── NavLink.tsx
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility helpers
│   ├── pages/
│   │   ├── Index.tsx           # Main application page
│   │   └── NotFound.tsx        # 404 fallback
│   ├── services/
│   │   └── mockDataService.ts  # Stub AI service + data models
│   ├── types/                  # TypeScript type definitions
│   ├── utils/                  # Shared utility functions
│   ├── App.tsx                 # Root router configuration
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles + Tailwind directives
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── vercel.json                 # Vercel SPA routing config
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm / bun

### Local Development

```bash
# Clone the repository
git clone https://github.com/AasthaKapoor27/PharmaX_EY_Techathon.git
cd PharmaX_EY_Techathon

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔬 How It Works

1. **Enter a drug name** in the hero search bar (e.g., `Metformin`, `Aspirin`)
2. **Agents activate** — a simulated 3-second multi-agent orchestration pipeline runs
3. **Results surface** across 5 tabs:
   - **Dossier** — Opportunity score, mechanism of action, evidence summary, risk assessment
   - **Clinical Trials** — Active, completed, and terminated trials with NCT IDs
   - **Patents** — Filed patents with assignee, inventor, and filing date
   - **Market Insights** — Market size, CAGR, competitor analysis
   - **Literature** — Top-cited papers ranked by relevance score
4. **Knowledge Graph** — Visual exploration of drug-disease-target relationships
5. **Export Dossier** — Download a full PDF report

> **Note:** The current version uses a mock data service (`mockDataService.ts`) that returns curated data for `Metformin` and dynamically generated data for all other drug queries. Integration with live LLM/API backends is roadmapped.

---

## 👩‍💻 Team

| Name | Role |
|------|------|
| Ms. Spriha Podder | AI Research Lead |
| Ms. Aarushi Shreevastava | System Architect |
| Ms. Namita Narang | Clinical Strategy Lead |
| Ms. Aastha Kapoor | Cloud Architect |
| Ms. Rakshita Singh | Data Engineer |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Aastha Kapoor](https://github.com/AasthaKapoor27)**

*If you found this useful, please ⭐ star the repository!*

</div>
