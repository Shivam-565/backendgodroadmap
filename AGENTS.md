# AGENTS.md — Interactive Space Website

## Project
Single-page website. Full-screen interactive canvas background where 
elements that pop around cursor on desktop and scroll on mobile.
Minimal clean UI overlaid on top, sourced from Stitch design.

## Stack
- Next.js App Router (Headless Monolith Architecture)
- Tailwind CSS
- tsParticles — interactive cursor background (lighter than R3F on mobile)
- Stitch MCP — fetch UI design before building any component

## Rules

### Data Architecture (Strict constraints)
- All progress state must be stored in the browser's `localStorage` as a single JSON object mapping task IDs to boolean values (e.g., `{"1-1": true, "1-2": false}`).
- Ensure the app safely checks if `window` is defined before accessing `localStorage` to prevent Next.js hydration errors.

### Stitch
- ALWAYS fetch the Stitch design via MCP before writing any UI component.
- Extract colours, spacing, font sizes, and layout structure from the Stitch output.
- Do not invent UI — use what Stitch provides, then layer animation on top.

### Mobile (highest priority)
- Mobile first. Design for 320px minimum width before desktop.
- Cursor interactions on desktop = touch interactions on mobile. Never 
  build a cursor effect without its touch equivalent.
- Interactive background: cursor-reactive on desktop, 
  touch/scroll-reactive on mobile.
- Test every component at 320px, 375px, and 768px before marking done.
- No hover-only states. Every hover effect must have a touch fallback.

### Animation (keep it light)
- Framer Motion for: button hovers, card reveals, page fade-in, 
  staggered list entries.
- GSAP ScrollTrigger for: section reveals, subtle parallax, 
  fade-in-from-below on scroll.
- No complex multi-step timelines. Simple, satisfying, quick.
- Only animate transform and opacity. Never width, height, top, left.
- Add "use client" to every Framer Motion file.
- All canvas components: next/dynamic + { ssr: false }.

### Canvas Background
- Use tsParticles for the interactive background.
- Elements must feel like floating in space — slow drift, 
  respond to cursor within a radius.
- On mobile: respond to touch position or gentle scroll parallax instead.
- Keep particle count low on mobile (max 40) vs desktop (max 120) 
  for performance.
- Background must never block UI interaction — pointer-events: none 
  on the canvas layer.

### Design Quality — No AI Slop

#### Colours
- Use ONLY colours from the Stitch design. Zero exceptions.
- No gradients unless they exist in the Stitch design.
- No gradient text (background-clip: text is banned).
- No purple, teal, or blue glows on anything.
- Buttons are flat or outlined. No gradient fill, no glow shadow.

#### Shapes and Surfaces
- No glassmorphism. Ever. No backdrop-blur + semi-transparent combo.
- No border-radius above rounded-lg on content containers.
- No rounded-full on anything except avatars or circular icons.
- No decorative box-shadows. Shadows exist for elevation only, 
  used sparingly and subtly.
- Cards are defined by spacing and typography, not by a box with 
  a shadow and a border-radius.

#### Layout
- No centered hero text over a dark background. 
  Text aligns left or right. Background is the canvas.
- No cookie-cutter section structure: 
  centered-title + subtitle + 3-column-icon-card-grid.
- Layouts are asymmetric. Not everything lives in a 
  max-w-7xl mx-auto text-center container.
- Whitespace is intentional and varied. 
  Not every section has the same py-20 padding.

#### Typography
- Typography leads the layout. Hierarchy comes from 
  size and weight contrast, not from boxes.
- No bolding entire paragraphs.
- No oversized subtitles that are basically the same 
  visual weight as the headline.
- Font choices come from the Stitch design. 
  Do not substitute with Inter or system-ui unless Stitch uses it.

#### Components
- No icon + title + short description repeated in a grid of 3 or 6.
  If features need showing, find a different structure.
- No feature lists with emoji bullets.
- No "badge" labels stuck above every headline 
  (the little rounded pill that says "NEW" or "FEATURES").
- Buttons have one clear purpose per page section. 
  Not every section needs a CTA button.

### Performance
- Particle count scales down on low-end devices via 
  tsParticles' responsive config.
- No jank. 60fps minimum on desktop, 50fps acceptable on mobile.