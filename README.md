# Portfolio boilerplate

A clean, section-based React + Vite boilerplate, styled with **Tailwind CSS
v4** and animated with **GSAP**. Ships with two sections already built to
match your reference screenshots — **Hero** and **Projects** — and is
structured so you can keep dropping in new sections without touching what's
already there.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build
```

## Folder structure

```
src/
  components/
    layout/
      Navbar.jsx          Fixed top bar (logo, notification badge, menu, CV button)
    sections/
      Hero/
        Hero.jsx           "Rahul©" hero + about blurb + CTAs + full-bleed image
      Projects/
        Projects.jsx        Section intro + grid/list toggle
        ProjectCard.jsx      One project thumbnail (image, tags, status, title)
    ui/
      PillButton.jsx        Shared rounded button (outline / solid, arrow / download icon)
      Chip.jsx               Small rounded tag/status label
      Eyebrow.jsx             "( Label )" section eyebrow
      Container.jsx            Shared max-width + side padding wrapper
  data/
    projects.js              Project content — add a project by adding one object here
  styles/
    global.css                Tailwind entry point + design tokens (@theme) + base layer
  App.jsx                     Section registry (see below)
  main.jsx                     Entry point
```

There are no more `.css` files next to components — every component is
styled with Tailwind utility classes directly in its JSX.

## Adding a new section

`App.jsx` renders whatever is listed in its `sections` array — it doesn't
know or care what's inside each section. To add one:

1. Create `src/components/sections/YourSection/YourSection.jsx`.
2. Import it at the top of `App.jsx`.
3. Add an entry to the `sections` array with an `id`, the `Component`, and
   whatever `props` it needs:

```jsx
const sections = [
  { id: 'home', Component: Hero, props: { image: heroImage } },
  { id: 'projects', Component: Projects, props: { projects } },
  { id: 'skills', Component: Skills, props: { skills } }, // ← new section
];
```

No other file needs to change, and sections can be reordered just by
reordering this array.

## Styling approach (Tailwind v4)

- Tailwind is wired in via `@tailwindcss/vite` in `vite.config.js` — no
  separate `tailwind.config.js` needed for v4.
- All design tokens (color, font, radius) live in `src/styles/global.css`
  inside an `@theme` block, which is Tailwind v4's way of turning custom
  values into real utility classes:

  ```css
  @theme {
    --color-bg: #eeece7;
    --color-accent: #c1440e;
    --font-display: 'Space Grotesk', Inter, sans-serif;
    --radius-pill: 999px;
  }
  ```

  This is what makes classes like `bg-bg`, `text-ink-soft`, `font-display`
  and `rounded-pill` available everywhere in the app. Change the palette or
  type scale once here and it updates across every component.
- Anything that doesn't fit Tailwind's default scale (an exact `22px`
  padding to match the reference design, a `600ms` transition) is written as
  an arbitrary value, e.g. `px-[22px]`, `duration-[600ms]` — same convention
  used throughout the codebase.
- `Container.jsx` centralizes the page's max-width and responsive side
  padding so the navbar and every section line up without repeating the
  same class string everywhere.

## Animation (GSAP)

`gsap` is installed and used in two ways, both cleaned up correctly on
unmount via `gsap.context()`:

- **Hero** — a single page-load timeline: the name slides up out of a
  clipped mask, the © mark and CTA row fade in, then the portrait scales
  into place.
- **Projects** — cards fade/slide in as they scroll into view, using
  `ScrollTrigger` (registered once in `Projects.jsx`).

Add motion to a new section the same way: import `gsap` (and `ScrollTrigger`
if it needs to react to scroll), animate inside a `useLayoutEffect` +
`gsap.context()` block scoped to a `ref` on the section root, and return
`ctx.revert()` from the effect.

## Notes on the reference screenshots

Both screenshots were cropped by the screenshot tool, so a couple of things
were rebuilt rather than copied 1:1:

- The hero's full-bleed portrait is a placeholder image — swap the `heroImage`
  constant in `App.jsx` for a real photo (a local import works too).
- The Projects grid ships with 4 sample projects (2 of which reconstruct the
  visible "Evolv Design" / "Addscorner" cards) — edit `src/data/projects.js`
  to swap in your real projects and screenshots.
