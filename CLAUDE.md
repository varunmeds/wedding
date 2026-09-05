# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: start the Vite dev server (http://localhost:5173)
- `npm run build`: production build into `dist/`
- `npm run preview`: serve the built `dist/` locally

There is no test suite, linter, or type checker configured.

## Architecture

A static, single-page wedding website. **Vite + React 19 + Tailwind CSS v4.** No backend, router, or data fetching; the whole site renders from local content and builds to static files in `dist/`.

- **All editable wedding content is centralized in `src/content.js`**: couple names, date, ceremonies, venue/travel, accommodation, RSVP, gallery, and nav links. Components import named exports from this file and are otherwise presentational. When asked to change any wedding *detail* (as opposed to layout/styling), edit `src/content.js`, not the components.
- **`src/App.jsx`** composes the page as a fixed sequence of section components: `Hero → Countdown → Ceremonies → Gallery → Venue → Stay → Rsvp`, wrapped by `Nav` and `Footer`. Anchor nav scrolls to section `id`s that must match the `id` fields in `content.js`'s `nav` array.
- **`Ceremonies`** renders the three Kodava (Codava) wedding ceremonies from `content.js`'s `ceremonies` export (Oorkuduva, Muhurtha, Ganga Pooje). This is a Kodava wedding with no priest; the rites are led by family elders.
- **`Countdown`** ticks every second toward `couple.dateISO` (a local-time `YYYY-MM-DDTHH:MM:SS` string in `content.js`, distinct from the human-readable `couple.date`). It shows a celebratory message once the date passes. The ticking digits are `aria-hidden`; an `sr-only` sentence carries the same information without flooding screen readers.
- **`src/components/Section.jsx`** is a shared wrapper giving every content section its heading style, spacing, and scroll-reveal animation. Prefer reusing it over hand-rolling section markup. Pass `floral` for the dark hibiscus backdrop with cream text, `corners` for the coffee-branch accents.
- **Scroll-reveal** is driven by `src/useReveal.js` (an IntersectionObserver hook) plus the `.reveal` / `.is-visible` keyframes in `src/index.css`.

### Sections that hide themselves

Several sections render `null` rather than showing an empty shell, so unfinished content is simply absent instead of broken:

- `Gallery`: hidden while `gallery.images` is empty.
- `Stay`: hidden while `stay.options` is empty.
- `Rsvp`: shows `rsvp.fallback` text instead of the button while `rsvp.formUrl` is empty.
- `Illustration`: renders nothing if the file is missing, so empty image slots never show a broken-image icon.

Keep this behaviour when adding new content-driven sections.

## Styling conventions

- Tailwind v4 is configured via the `@tailwindcss/vite` plugin (see `vite.config.js`), so there is **no `tailwind.config.js`**. The theme is defined in the `@theme` block at the top of `src/index.css`.
- Custom palette tokens (`cream`, `blush`, `clay`, `terracotta`, `leaf`, `ink`) and the `serif`/`sans` font families are used throughout as Tailwind utility classes (e.g. `bg-cream`, `text-terracotta`, `font-serif`). Add new colors to the `@theme` block, not inline hex values.
- Most sections are dark (`floral`). **`Rsvp` is deliberately the one light section**; that contrast is what makes the call to action stand out. Don't "fix" it for consistency.
- Fonts (Cormorant Garamond, Jost) are loaded via `<link>` in `index.html`.

## Images

Images are served from `public/invites/` and referenced by absolute path (e.g. `/invites/hibiscus.jpeg`) in `content.js` and background-image styles. The source `invites/` folder at the repo root is the original copy; the served copy lives under `public/`.

`public/illustrations/` holds three optional ceremony illustrations (see the README there). **The folder is intentionally empty**; the slots are wired up and waiting, and the site renders correctly without them. Do not fill them from `public/prompt_images/`; those were rejected.

## Social preview

`index.html` carries Open Graph and Twitter card tags with absolute URLs pointing at the live site, `https://tanviandvarun.com/`. If the domain ever changes, update them, since WhatsApp and most scrapers ignore relative `og:image` URLs.

## Deployment

The site is published with GitHub Pages from the public repo `varunmeds/wedding`. A push to `main` runs `.github/workflows/deploy.yml`, which builds with `BASE_PATH=/` and deploys `dist/` to the custom domain `tanviandvarun.com` (set in the Pages settings and in `public/CNAME`). Root-relative asset paths in JSX and `content.js` go through `src/assetUrl.js`, so the site would also work from a sub-path if it ever had to. `public/prompt_images/` is gitignored and never deployed.
