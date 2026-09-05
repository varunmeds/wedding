# Wedding Website

A single-page wedding site built with **Vite + React + Tailwind CSS v4**. No backend; it builds to static files you can host free on Vercel, Netlify, or GitHub Pages.

## Run it

```bash
npm install      # first time only
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Editing your details

**Almost everything you'll want to change lives in [`src/content.js`](src/content.js)**: names, date, ceremonies, travel, accommodation, RSVP link, and the gallery. Edit that one file and the whole site updates.

Anything still needing your real details is marked `TODO` in that file.

- **Photos:** drop images into `public/` and reference them by path in `src/content.js`, e.g. `/photos/us.jpg`. The gallery section stays hidden until you list at least one.
- **Illustrations:** the three ceremony image slots read from `public/illustrations/`; see the [README there](public/illustrations/README.md). Missing files are hidden, not broken.
- **Colors & fonts:** the palette and typography are defined at the top of [`src/index.css`](src/index.css) under `@theme`.

## Sections

Hero → Countdown → Ceremonies → Gallery → Venue & Travel → Where to Stay → RSVP. Each is a component in `src/components/`.

Sections with no content yet hide themselves rather than showing an empty shell, so you can publish early and fill things in as they're confirmed.

## Before you share the link

1. **Set the RSVP link.** Create a Google Form (or Formspree), then paste its link into `rsvp.formUrl` in `src/content.js`. Until it's set, the RSVP section shows a holding message instead of a button.
2. **Fill in the ceremony times.** Each ceremony has an empty `time` field that stays hidden until set. The muhurtha time matters most, since guests book travel around it.
3. **Replace the domain in `index.html`.** Search for `example.com` and swap in your real URL, since social previews (WhatsApp especially) need absolute URLs for the share image.

## Deploy

Run `npm run build`, then upload the `dist/` folder, or connect the repo to Vercel or Netlify, which will pick up [`vercel.json`](vercel.json) / [`netlify.toml`](netlify.toml) automatically (build command `npm run build`, output directory `dist`).
