# Take-Home Project: Ondo Tokenized Asset Dashboard

## Overview

Build a tokenized asset dashboard using **Next.js** and **TypeScript**. The finished app must run in **Docker**.

**Time limit:** 25 hours
**Stack:** Next.js 15, TypeScript, Tailwind CSS, Docker

---

## Requirements

### 1. Pages to Build

Build the following 5 pages inside the Next.js App Router (`src/app/`):

| Page | Route | What it should do |
|---|---|---|
| **Dashboard** | `/dashboard` | Show a portfolio summary (total value, average yield, number of holdings), a table of current holdings, and an allocation breakdown chart |
| **Asset Listing** | `/assets` | Display all available assets in a grid. Each card shows symbol, name, type (Treasury / Equity / ETF), price, yield, and supported chains |
| **Asset Detail** | `/assets/[id]` | Clicking an asset opens a detail view with full description, price, yield, total supply, market cap, and which chains it's available on |
| **Mint / Redeem** | `/mint` | A form where the user selects an asset, picks a chain, enters an amount, and sees the estimated USD value. Include a toggle between Mint and Redeem modes |
| **Bridge** | `/bridge` | A form to transfer tokens between chains. User picks an asset, selects source and destination chains, enters an amount. Show estimated value and transfer time |

### 2. Data

Use the mock data provided in `src/data/assets.ts`. It contains:

- **4 tokenized assets** (USDY, OUSG, oSPY, oAAPL) with typed interfaces
- **Initial portfolio holdings** across different chains
- A `getAsset()` helper function

No backend or database is needed. Everything runs client-side with this mock data.

**Do not change the data shape** (interfaces or field names). You may add more entries if you want.

### 3. Docker (Mandatory)

We will review your app by running:

```bash
docker compose up --build
```

Then opening **http://localhost:3000**. This must work with no additional setup.

A `Dockerfile` and `docker-compose.yml` are provided. They work with the current scaffolding. You may modify them if needed, but `docker compose up --build` must remain the single command to run.

### 4. UI & Code Quality

- Use **Tailwind CSS** for styling. Dark theme.
- Build **reusable components** - don't repeat markup across pages.
- Use **TypeScript strictly** - proper types for assets, holdings, component props.
- Keep files small and well-organized.

---

## What's Provided

The repo includes scaffolding so you can focus on building the pages:

```
├── Dockerfile                  # Multi-stage production build
├── docker-compose.yml          # docker compose up --build
├── next.config.ts              # Standalone output for Docker
├── tsconfig.json               # Strict TypeScript config
├── postcss.config.mjs          # Tailwind v4 setup
├── package.json                # Dependencies pre-configured
│
├── src/
│   ├── data/
│   │   └── assets.ts           # Mock data + types (DO NOT change the shape)
│   ├── lib/
│   │   ├── cn.ts               # Tailwind class merge utility
│   │   └── format.ts           # USD / number formatting helpers
│   ├── components/ui/
│   │   └── (empty)             # Put your reusable components here
│   └── app/
│       ├── globals.css         # Tailwind import + dark body styles
│       ├── layout.tsx          # Root layout (add your navigation here)
│       ├── page.tsx            # Redirects to /dashboard
│       ├── dashboard/page.tsx  # TODO: build this
│       ├── assets/page.tsx     # TODO: build this
│       ├── assets/[id]/page.tsx# TODO: build this
│       ├── mint/page.tsx       # TODO: build this
│       └── bridge/page.tsx     # TODO: build this
```

---

## What We Evaluate

| Area | What we look for |
|---|---|
| **Next.js & TypeScript** | Proper use of App Router (layouts, dynamic routes, server vs client components), strict typing |
| **Component design** | Reusable, composable components with clean props interfaces |
| **UI / UX** | Visual polish, consistent design, responsive layout, sensible user flows |
| **Docker** | Working multi-stage Dockerfile, runs cleanly with `docker compose up --build` |
| **Code quality** | Readability, file organization, no dead code or over-engineering |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run locally for development
npm run dev

# Run via Docker (this is how we will review it)
docker compose up --build
```

---

## Time Estimate - 25 Hours

| Phase | Hours | Scope |
|---|---|---|
| **Setup, layout & reusable components** | 5~7 | Navigation sidebar, Tailwind theming, UI primitives (Card, Badge, Button, etc.) |
| **Dashboard & asset pages** | 5~7 | Portfolio stats, holdings table, allocation chart, asset listing grid, dynamic detail page |
| **Mint/Redeem & Bridge forms** | 5~7 | Form logic, chain selectors, validation, value estimation, confirmation states |
| **Docker, testing & polish** | 5~7 | Verify Dockerfile works, responsive fixes, edge cases, final cleanup |
