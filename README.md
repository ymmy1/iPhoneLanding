# iPhone Landing 
#### (React + Vite + R3F + GSAP + Tailwind)

![hippo](https://i.imgur.com/BPRBF6T.gif)

This is an interactive landing page inspired by Apple's iPhone product site. It features a responsive hero, scroll‑triggered highlights, a 3D iPhone viewer with lighting and orbit controls, video sections, and subtle UI polish, all built with modern React, Vite, Tailwind v4, GSAP, and React Three Fiber.

- Demo‑ready build via GitHub Pages
- 3D model (glTF) with orbit controls and custom lights
- Scroll‑driven animations and video carousels
- Responsive Tailwind v4 utilities and tokens

## Tech Stack

- React 19 + TypeScript (Vite 7)
- Tailwind CSS v4 (`@tailwindcss/vite`) with `@theme` tokens
- React Three Fiber + Drei + Three.js
- GSAP + ScrollTrigger
- gh-pages (deployment)

## Features

- Hero with responsive videos (desktop/mobile) and staged reveals
- Highlights section with video carousel, play/pause/replay controls
- 3D model viewer:
  - Orbit controls (pan/zoom disabled), smooth rotations
  - Size toggle (6.1"/6.7") and color swatches
  - Lights, environment maps, and preloading
- “How It Works” chip reveal and inline video in device frame
- Polished, responsive UI with Tailwind v4 utilities

## Getting Started

Prerequisites:
- Node 18+ (recommended 18.17+)
- npm

Install:
- `npm install`

Run dev server:
- `npm run dev`
- Open the printed local URL

Build and preview:
- `npm run build`
- `npm run preview`

Lint:
- `npm run lint`

## Scripts

- `dev`: Start Vite dev server
- `build`: Type‑check and build to `dist/`
- `preview`: Preview the production build
- `lint`: Run ESLint
- `deploy`: Build with proper base and publish `dist/` to GitHub Pages (runs `predeploy` automatically)

## Deploy to GitHub Pages

The project includes a deploy workflow using `gh-pages`.

1. `npm run deploy`
2. In your GitHub repo settings, set Pages to deploy from the `gh-pages` branch
3. If your repo name or path differs, update the base path in the `predeploy` script of `package.json` (`vite build --base=/iPhoneLanding/`) to match your repository name

Note: `predeploy` also copies `dist/index.html` to `dist/404.html` to support refresh routing on Pages.

## Project Structure

- `index.html`: Base HTML document and app mount
- `package.json`: Scripts, dependencies, and GH Pages config
- `vite.config.ts`: Vite + React SWC + Tailwind v4 plugin
- `src/main.tsx`: App bootstrap
- `src/App.tsx`: Page composition
- `src/index.css`: Tailwind v4 setup, tokens, and utilities
- `src/components/`: UI sections and 3D components
  - `src/components/Hero.tsx`: Responsive hero videos + GSAP staging
  - `src/components/Highlights.tsx`: Section heading + link reveals
  - `src/components/VideoCarousel.tsx`: Scroll‑triggered carousel, progress indicators, play/pause/replay
  - `src/components/Model.tsx`: Size/color picker + R3F canvas/viewports
  - `src/components/ModelView.tsx`: Orbit controls, lights, camera per viewport
  - `src/components/IPhone.tsx`: glTF iPhone model + `useGLTF.preload`
  - `src/components/Lights.tsx`: Environment + Lightformers + spot lights
  - `src/components/HowItWorks.tsx`: Chip reveal and framed inline video
  - `src/components/Navbar.tsx`, `src/components/Footer.tsx`: Header and footer
- `src/constants/index.ts`: Data for nav, highlights, models, sizes, footer
- `src/utils/index.ts`: Centralized asset imports (images/videos)
- `src/utils/animations.ts`: GSAP helpers + ScrollTrigger registration
- `public/assets`: Images and videos
- `public/models`: 3D models (`Iphone17.glb`, `scene.glb`)

## Key Implementation Notes

- Tailwind v4:
  - Config via `@tailwindcss/vite` and `@theme` tokens in `src/index.css`
- GSAP:
  - ScrollTrigger registered in `src/utils/animations.ts`
  - Section reveals and progress indicators driven by GSAP timelines
- 3D:
  - R3F `Canvas` + `View.Port` for multi‑view setup
  - `OrbitControls` (rotation only), `Environment`, `Lightformer`, spot lights
  - Model preloaded: `useGLTF.preload('/models/Iphone17.glb')`
- Media:
  - Videos are `muted` to allow autoplay
  - Use `npm run preview` to validate production behavior with optimized assets

## Customization

- Update deployment base in `package.json` “predeploy” if your repo name changes
- Replace `public/assets` media with your own
- Swap or adjust the 3D model in `public/models/` and `src/components/IPhone.tsx`
- Tweak Tailwind tokens/utilities in `src/index.css`

## Attribution

This project is an educational, non‑commercial clone. Apple, iPhone, and related marks are trademarks of Apple Inc. All included media are for demonstration purposes.
