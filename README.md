# Digital Portfolio — Ginjala Hasini

Personal portfolio site. React (Vite) front end, Express back end, deployed as a single
Node service.

**Live:** https://portfolio-ginjalahasini.onrender.com

## Stack

| Layer    | Choice                                                    |
| -------- | --------------------------------------------------------- |
| Front end | React 18, Vite 6, hand-written CSS (no UI framework)       |
| Icons     | Iconify (`@iconify/react`) for the tech logos, inline SVG for the rest |
| Back end  | Node 20, Express 4, Nodemailer, express-rate-limit         |
| Hosting   | Render — one web service serving the API and the built SPA |

## Design

| Token | Value | Used for |
| ----- | ----- | -------- |
| `--navy` | `#0a0f2c` | page background |
| `--navy-mid` | `#0d1235` | alternating section bands (translucent, so the starfield reads through) |
| `--navy-light` | `#111640` | cards |
| `--teal` | `#2dd4bf` | every accent, link and highlight |
| `--white` | `#f0f0f0` | all text |
| `--grey`, `--grey-light` | `#a0a0b0`, `#c8c8d4` | hero and nav secondary text |
| `--purple`, `--pink` | `#a78bfa`, `#f472b6` | the name gradient only |

Navy, teal and white carry the whole page. Violet and pink appear in exactly one place —
the gradient across the name in the hero — and the tech logos in the Skills baskets keep
their own brand colours. Every text colour clears WCAG AA against its background
(the lowest is 5.36:1).

## Images

The rendered images are WebP, resized to the largest size they are ever displayed at:
1600px for project shots, 1200px for certificates and About photos, 700px for the
portrait. That is 1.8 MB for the 33 images on the page, down from 10.4 MB as PNG/JPEG.

Originals are kept unconverted in `Projects/`, `Certifications/` and `About_Me/` at the
repo root. If you replace an image, run it through the same treatment or the page weight
climbs straight back.

## Running locally

```bash
npm install
npm run dev
```

`npm run dev` starts the Express API on `:8080` and the Vite dev server on `:5173` with
`/api` proxied through. Open http://localhost:5173.

To run exactly what production runs:

```bash
npm run build && npm start
```

Then open http://localhost:8080.

## Project layout

```
client/                 React app
  public/assets/        Images, certificates and reference letters (served as-is)
    projects/           Project thumbnails and dashboard screenshots
    certs/              Certificates — PDFs and images
    docs/               Internship certificate and reference letters
  src/
    data/content.js     ← ALL site copy lives here
    components/         One component per section
    hooks/              Scroll reveal + active-section tracking
    index.css           Design tokens and every style rule
server/
  index.js              Express: /api/contact, /api/health, static SPA
render.yaml             Render deployment blueprint
```

## Editing content

Everything you would want to change — your bio, projects, the hackathon journey, skills,
certifications, contact details — is in **`client/src/data/content.js`**. No JSX changes
needed to add a project or reword a section.

To add a project, append an object to the `projects` array and drop its thumbnail into
`client/public/assets/projects/`. Give it a `links` entry of `{ kind: 'github', href }`
and the card renders a GitHub icon under "See more on:".

To swap a photo in the About collage, drop yours into `client/public/assets/about/` and
point the `polaroids` entry at it — `tilt` is the rotation in degrees. The same goes for
the picture in each Hackathons storyboard panel.

About paragraphs support `**bold**` markers for the terms a skim-reader should catch;
`About.jsx` renders them, so no Markdown dependency is involved.

Certificates are a fanned deck; each entry takes an `img` (the poster shown on the card)
and an `href` (the real document). Entries with no `img` get a generated navy cover and
the viewer offers a link straight to the PDF.

## Space backdrop

`SpaceBackdrop.jsx` carries over the two effects from the previous portfolio: a canvas
starfield of drifting teal particles that link up when they pass within 120px, and a
400px radial glow that follows the cursor. Both are decorative, so the glow is skipped
below 768px and both are skipped entirely under `prefers-reduced-motion`. The section
bands are translucent so the field stays visible through them.

## A note on icons

The tech icons load from the Iconify API at runtime rather than being bundled. They are
cached by the browser after the first visit. If Iconify is ever unreachable, the skill
bubbles render as empty circles with their text labels still readable — nothing else on
the page is affected.

Not every name exists in every Iconify set: `logos:aws-textract` does not, for instance.
Check a new icon renders before trusting it.

## Contact form

The form composes the visitor's message and opens WhatsApp with it already typed out,
addressed to the number in `profile.whatsapp`. A web page cannot send WhatsApp messages
on someone's behalf, so the visitor presses send in WhatsApp themselves — which also
means the message arrives from their own number, with a thread you can reply in.

The Express endpoint below is still wired up and working, but nothing on the page posts
to it any more. Keep it if you ever want an email-based form back; otherwise `nodemailer`
and `/api/contact` can both be removed.

`POST /api/contact` validates the submission, drops anything that fills the hidden
honeypot field, and rate-limits to 5 messages per IP per 15 minutes.

Email delivery is optional. Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` and `SMTP_PASS`
(see `.env.example`) and messages are sent to `CONTACT_TO`. Leave them unset and the form
still succeeds, logging the message to the server console instead — useful in development.

For Gmail, `SMTP_USER` is your address and `SMTP_PASS` must be an
[App Password](https://myaccount.google.com/apppasswords), not your account password.

## Deploying to Render

The repo includes `render.yaml`, so Render can create the service from the blueprint.
Otherwise, create a Web Service manually with:

- **Build command:** `npm install && npm run build`
- **Start command:** `npm start`
- **Health check path:** `/api/health`

Add the SMTP variables in the dashboard if you want the contact form to actually send
mail.
