# FitArenaa - AI-Powered Gym Intelligence Platform

A modern, dark-themed, minimal Nordic-tech styled website built with Next.js, TailwindCSS, and Framer Motion.

## Features

- 🎨 Nordic minimalism design with dark backgrounds and cyan accents
- 📱 Fully responsive for desktop and mobile
- ✨ Smooth animations with Framer Motion
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Sticky header with navigation
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features with tabs
│   ├── Packages.tsx     # Package cards and pricing
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx       # Footer with contact info
├── public/
│   └── logo.png         # FitArenaa logo
└── package.json
```

## Design System

- **Background**: `#0E0E0E` (nordic-dark)
- **Accent**: `#00FFD1` (nordic-accent)
- **Text**: `#FFFFFF` (nordic-white)
- **Typography**: Thin, light fonts with generous spacing
- **Animations**: Subtle, smooth transitions

## License

© 2025 FitArenaa. All rights reserved.

