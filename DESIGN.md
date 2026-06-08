# DESIGN.md — Stitch Design Reference

## Source
Stitch Project: Tropical Neumorphic Roadmap
Project ID: 9564389136618090297 
Primary Screen ID: 96a25929f3e04cbbbcd717cc3b8704da

## How to fetch
1. Use Stitch MCP extract_design_context with the above Project ID 
   and Screen ID to get the Design DNA.
2. Use fetch_screen_code with the same IDs to get the raw HTML/structure.
3. Build all UI components using ONLY what is in the fetched design.
   Do not invent colours, fonts, spacing, or layout.

## What to extract and lock in
- Colours → use as Tailwind custom tokens in tailwind.config.ts
- Font family and sizes → apply globally in layout.tsx
- Spacing scale → use as-is, do not adjust
- Layout structure → replicate section order exactly
- Border radius, shadows → match precisely

## What NOT to carry over from Stitch
- Any inline CSS animations (will be replaced by Framer Motion + GSAP)
- Any JavaScript interactions (will be replaced entirely)
- Background colours on the page body (replaced by tsParticles canvas)