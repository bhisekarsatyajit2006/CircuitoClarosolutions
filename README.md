# CircuitoClaro Solutions — Official Website

A stunning, professional React website for CircuitoClaro Solutions Pvt. Ltd., featuring:

## ✨ Features

- **Dark / Light Theme Toggle** — Smooth animated toggle with memory (localStorage)
- **Particle Canvas** — Animated connected-particle background that adapts to theme
- **Spotlight Effect** — Cursor-following glow on the hero section
- **Scroll Animations** — Intersection Observer-based reveal animations on every section
- **3D Card Tilt** — Mouse-tracking 3D perspective tilt on product cards
- **Typing Animation** — Rotating word cycling in the hero headline
- **Infinite Marquee** — Auto-scrolling tech stack rows (Magic UI style)
- **Timeline Workshops** — Staggered timeline for all workshop entries
- **Bento Grid Services** — Card grid with hover glow and reveal animations
- **Glassmorphism Navbar** — Blur + border navbar on scroll
- **Responsive Design** — Fully mobile-optimized layout
- **Custom Cursor Scrollbar** — Themed scrollbar

## 🚀 Setup

```bash
cd circuitoclaro
npm install
npm run dev
```

Open http://localhost:5173

## 🏗 Build for Production

```bash
npm run build
npm run preview
```

## 📁 Structure

```
src/
  components/
    Navbar.jsx        — Sticky nav with dark mode toggle
    Hero.jsx          — Particle canvas, spotlight, typing animation, stats
    About.jsx         — Company info, vision, mission, municipality focus
    Services.jsx      — 7-program bento grid with hover effects
    TechStack.jsx     — Marquee tech scrollers + stats
    Workshops.jsx     — Timeline of all workshops & MOUs
    Products.jsx      — 3D tilt cards for BoneLink & Home Automation Kit
    Team.jsx          — Team grid, mentor section, NGO partnership
    Contact.jsx       — Contact form + info cards
    Footer.jsx        — Footer with links
  hooks/
    useTheme.jsx      — Dark/light theme context
    useScrollAnimation.js — Intersection observer + parallax + spotlight
  index.css           — Global styles, CSS variables, keyframe animations
  App.jsx             — Main app composition
```

## 🎨 Design System

Uses CSS custom properties (variables) for theming:
- Dark mode: Deep navy + neon cyan/green/purple palette
- Light mode: Clean white + electric blue accent palette
- Fonts: Syne (display) + DM Sans (body) + JetBrains Mono (code)
