<div align="center">

# 💊 PharmaX.ai

### AI-Driven Drug Repurposing Engine — Built for EY Techathon · Powered by Agentic AI · React + TypeScript + Vite

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://pharmaxaiey.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel)](https://pharmaxaiey.vercel.app/)

</div>

---

## 🌐 Live Demo

| | Link |
|---|---|
| 🚀 **Deployed App** | [pharmaxaiey.vercel.app](https://pharmaxaiey.vercel.app/) |

---

## 🚀 What is This?

**PharmaX.ai** is an agentic AI platform for pharmaceutical research teams to explore new drug indications, analyze clinical evidence, evaluate patent landscapes, and accelerate drug repurposing pipelines — all from a single search interface.

Enter any drug name and seven specialized AI agents orchestrate in real-time to generate a comprehensive repurposing dossier, complete with opportunity scores, clinical trial data, patent intelligence, market insights, and scientific literature.

---

## ✨ Key Features

| Feature | Description |
|--------|-------------|
| 🔍 **Drug Repurposing Search** | Enter any drug name to trigger multi-agent analysis |
| 🤖 **7 Specialized AI Agents** | Each focused on a distinct research domain |
| 📊 **Interactive Knowledge Graph** | Visual mapping of drug-disease-target relationships |
| 📋 **Comprehensive Dossier** | Opportunity score, mechanism of action, and risk assessment |
| 🏥 **Clinical Trials Tracker** | Status, phase, and NCT IDs from global databases |
| 🔒 **Patent Intelligence** | IP landscape analysis and freedom-to-operate insights |
| 📈 **Market Insights** | Market size, CAGR, and competitor landscape |
| 📚 **Scientific Literature** | Relevance-ranked papers from top journals |
| 📄 **PDF Export** | Download the full repurposing dossier via jsPDF |
| 🌗 **Dark Mode** | Fully themed UI with next-themes |

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

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        USER BROWSER                         │
│        React 18 + TypeScript + Vite + Tailwind CSS          │
└────────────────────────┬────────────────────────────────────┘
                         │  Drug name input
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  Multi-Agent Orchestration                   │
│                                                             │
│  [1] Master Agent — coordinates all agents                  │
│       ↓                                                     │
│  [2] BioLit Agent — biomedical literature scan              │
│       ↓                                                     │
│  [3] Clinical Trials Agent — global trial databases         │
│       ↓                                                     │
│  [4] Patent Agent — IP landscape analysis                   │
│       ↓                                                     │
│  [5] Market Intelligence Agent — commercial viability       │
│       ↓                                                     │
│  [6] Safety/Risk Agent — regulatory + safety assessment     │
│       ↓                                                     │
│  [7] Report Generator — full dossier + opportunity score    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧩 Tech Stack

### Frontend
- **[React 18](https://react.dev)** — Component-based UI framework
- **[TypeScript 5.8](https://www.typescriptlang.org)** — Full type safety across components
- **[Vite 5](https://vitejs.dev)** — Build tool with SWC
- **[Tailwind CSS v3](https://tailwindcss.com)** — Utility-first styling + tailwindcss-animate
- **[shadcn/ui](https://ui.shadcn.com)** — Radix UI primitives
- **[React Router DOM v6](https://reactrouter.com)** — Client-side routing
- **[TanStack React Query v5](https://tanstack.com/query)** — Data fetching
- **[Recharts](https://recharts.org)** — Chart components
- **[React Hook Form](https://react-hook-form.com)** + **[Zod](https://zod.dev)** — Forms and validation
- **[jsPDF](https://github.com/parallax/jsPDF)** — PDF export
- **[Lucide React](https://lucide.dev)** — Icon library

### Deployment
- **[Vercel](https://vercel.com)** — SPA hosting with custom routing config

---

## 📁 Project Structure

```
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

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm / bun

### 1. Clone the Repository

```bash
git clone https://github.com/AasthaKapoor27/PharmaX_EY_Techathon.git
cd PharmaX_EY_Techathon
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) 🚀

### 4. Build for Production

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

## 🗺️ Roadmap

- [ ] Integration with live LLM/API backends
- [ ] Real-time data from PubMed, ClinicalTrials.gov, and USPTO
- [ ] User authentication & saved research sessions
- [ ] Redis caching for repeated drug queries
- [ ] Collaborative dossier editing for research teams
- [ ] Deploy n8n-based agentic backend

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

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by [Aastha Kapoor](https://github.com/AasthaKapoor27)**

*If you found this useful, please ⭐ star the repository!*

</div>
