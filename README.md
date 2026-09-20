# Digital Portfolio — Ginjala Hasini

Personal portfolio. A fully static React site — no backend, no database, no API calls.

**Live:** https://hashinnn.github.io/Digital_Portfolio/

## Stack

| Layer | Choice |
| ----- | ------ |
| Front end | React 18, Vite 6, hand-written CSS (no UI framework) |
| Icons | Iconify (`@iconify/react`) for tech logos, inline SVG for the rest |
| Hosting | GitHub Pages, deployed by GitHub Actions on every push to `main` |

Nothing runs on a server. The contact form hands the message to WhatsApp, certificates
and reference letters are static files, and every section renders from one data file.

## Running locally

```bash
npm install
npm run dev
```

Opens on http://localhost:5173.

```bash
npm run build && npm run preview
```

builds to `client/dist` and serves the production output.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to
`main`. To enable it once: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

The workflow sets `VITE_BASE` to `/<repository-name>/`, because Pages serves a project
repo from a subpath. Asset URLs in `content.js` are wrapped in a small `asset()` helper
that prefixes `import.meta.env.BASE_URL`, so the same source builds correctly for:

- a project page — `hashinnn.github.io/Digital_Portfolio/`
- a user page — rename the repo to `hashinnn.github.io`, then drop the `VITE_BASE` line
- a custom domain — add a `CNAME` file and drop the `VITE_BASE` line

## Editing content

Everything — bio, projects, hackathon storyboard, skills, certifications, contact
details — is in **`client/src/data/content.js`**. No JSX changes needed to add a project
or reword a section.

Asset paths go through `asset('/assets/...')` so they survive the base path. Keep that
wrapper on anything new.

To add a project, append to the `projects` array and drop its image into
`client/public/assets/projects/`. A `links` entry of `{ kind: 'github', href }` renders a
GitHub icon under "See more on:"; `link`, `linkedin` and `tableau` are the other kinds.

About paragraphs support `**bold**` markers for the terms a skim-reader should catch.

Certificates are a fanned deck; each entry takes an `img` (the card face) and an `href`
(the real document). Entries with no `img` get a generated navy cover.

## Design

| Token | Value | Used for |
| ----- | ----- | -------- |
| `--navy` | `#0a0f2c` | page background |
| `--navy-mid` | `#0d1235` | alternating bands (translucent, so the starfield shows through) |
| `--navy-light` | `#111640` | cards |
| `--teal` | `#2dd4bf` | every accent, link and highlight |
| `--white` | `#f0f0f0` | all text |
| `--grey`, `--grey-light` | `#a0a0b0`, `#c8c8d4` | hero and nav secondary text |
| `--purple`, `--pink` | `#a78bfa`, `#f472b6` | the name gradient only |

Navy, teal and white carry the page. Violet and pink appear in one place — the gradient
across the name — and the tech logos keep their brand colours. Every text colour clears
WCAG AA against its background; the lowest is 5.36:1.

`SpaceBackdrop.jsx` draws the drifting teal starfield and the glow that follows the
cursor. Both are decorative: the glow is skipped below 768px, and both stop under
`prefers-reduced-motion`.

## Images

Rendered images are WebP, resized to the largest size each is ever displayed at — 1600px
for project shots, 1200px for certificates and About photos, 700px for the portrait.
That is 1.8 MB across 33 images, down from 10.4 MB as PNG/JPEG.

Originals are kept unconverted in `Projects/`, `Certifications/` and `About_Me/`. Run
replacements through the same treatment or the page weight climbs straight back.

## A note on icons

Tech icons load from the Iconify API at runtime rather than being bundled, and are cached
after the first visit. If Iconify is unreachable the skill bubbles render as empty circles
with their labels still readable — nothing else is affected.

Not every name exists in every Iconify set (`logos:aws-textract` does not, for example).
Check a new icon renders before trusting it.
