# FlowPilot

### AI project management for small teams

FlowPilot is a polished, responsive SaaS landing page for a fictional AI-powered project management platform. The product turns conversations, meeting notes, and ideas into structured tasks so teams can spend less time organizing work and more time completing it.

![FlowPilot landing page preview](public/og-image.svg)

## Overview

This project was created as a portfolio-quality frontend build. It demonstrates how a modern B2B SaaS product can communicate its value through clear messaging, realistic product mockups, thoughtful interaction design, and a consistent visual system.

The website is a static frontend experience. Authentication, billing, integrations, and AI features are represented for demonstration purposes and are not connected to production services.

## Features

- Responsive single-page layout for desktop, tablet, and mobile
- Sticky navigation with a mobile menu
- Detailed dashboard interface built entirely with React and CSS
- Custom mockups for AI task creation, prioritization, meeting notes, and team workload
- Social proof, product metrics, testimonials, and three-tier pricing
- Interactive FAQ accordion
- Smooth section navigation and subtle interface animations
- Accessible semantic markup, keyboard focus states, and reduced-motion support
- SEO metadata, Open Graph metadata, custom favicon, and social preview artwork

## Built With

- [React](https://react.dev/) — component-based interface development
- [Vite](https://vite.dev/) — development server and production bundling
- JavaScript — application and interaction logic
- Vanilla CSS — responsive layouts, design tokens, animations, and component styling
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) — static code analysis

No UI framework, CSS framework, or external icon package is required. The interface, product mockups, and icon system are implemented directly in the project.

## Design Highlights

### Realistic product storytelling

The hero and feature sections use functional HTML and CSS compositions instead of flat screenshots. This keeps the interface crisp at every resolution and makes each mockup easier to maintain.

### Reusable content architecture

Navigation, features, integrations, testimonials, pricing plans, metrics, and FAQ content are stored as structured data. Reusable React components render the page consistently and make future edits straightforward.

### Responsive by design

Layouts adapt around their content rather than targeting individual devices. Dense dashboard visuals simplify on narrow screens while preserving the information hierarchy and usability of the page.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm

### Installation

```bash
git clone https://github.com/MilanVibeDev/flowpilot-landing-page.git
cd flowpilot-landing-page
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot module replacement |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for final review |
| `npm run lint` | Runs Oxlint across the project |

## Project Structure

```text
flowpilot-landing-page/
├── public/
│   ├── favicon.svg
│   └── og-image.svg
├── src/
│   ├── components/
│   │   ├── DashboardMockup.jsx
│   │   ├── FeatureMockups.jsx
│   │   ├── Footer.jsx
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx
│   │   └── Sections.jsx
│   ├── data/
│   │   └── siteData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Quality Checks

The project has been verified with:

- A successful production build
- A clean Oxlint run
- Desktop and mobile browser testing
- Mobile navigation and FAQ interaction testing
- Horizontal overflow checks at narrow viewport sizes
- Browser console checks with no warnings or errors

## Product Disclaimer

FlowPilot is a fictional product created for portfolio and demonstration purposes. Company names, customer quotes, statistics, pricing, and integrations shown on the website are fictional.

## Author

Built by [MilanVibeDev](https://github.com/MilanVibeDev).
