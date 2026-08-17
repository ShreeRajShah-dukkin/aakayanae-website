# Aakayanae — website

React + Vite, no UI framework — plain CSS with design tokens in `src/index.css`.

## Run it

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for deployment:

```
npm run build
```

This outputs a `dist/` folder you can upload to any static host (Vercel, Netlify, etc).

## File structure

```
index.html                 Page shell, fonts, favicon
src/
  main.jsx                 React entry point
  App.jsx                  Assembles all sections in order
  index.css                Design tokens (colors, type, spacing) + shared motifs
  assets/
    logo.png                Your logo, used in nav + footer
  components/
    Navbar.jsx / .css       Sticky top nav
    Hero.jsx   / .css       Headline + sample "presence check" card
    Services.jsx / .css     6-item service grid
    Insights.jsx / .css     The differentiator: mock analytics panel, animates in on scroll
    WebsiteTypes.jsx / .css Static / Dynamic / Animated / E-commerce / Landing breakdown
    Process.jsx / .css      5-step engagement process
    CTA.jsx / .css          Closing form section
    Footer.jsx / .css       Footer nav + copyright
```

## Design notes

- Palette: deep purple (`--purple`), warm near-black (`--void`), off-white canvas
  (`--canvas`) — pulled straight from your logo.
- The logo's "A" is a cut/torn shard shape. That's echoed everywhere as a
  motif: notched corners on cards and buttons (`.cut-corner`), and a jagged
  (not straight) line between the light and dark sections.
- Fonts: Bricolage Grotesque for headings, Inter for body text, IBM Plex Mono
  for numbers and data — loaded from Google Fonts in `index.html`.
- All copy is real draft copy, not lorem ipsum — edit directly in each
  component file.

## Next steps to make it "yours"

1. Swap the sample stats in `Hero.jsx` / `Insights.jsx` for a real example
   or case study once you have one.
2. Wire the form in `CTA.jsx` to your email service or a form backend
   (it currently just prevents the default submit).
3. Replace placeholder contact details in `Footer.jsx`.
