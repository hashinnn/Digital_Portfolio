# Digital Portfolio — Ginjala Hasini

Personal portfolio site. React (Vite) front end, Express back end, deployed as a single
Node service.

**Live:** https://portfolio-ginjalahasini.onrender.com

## Stack

| Layer    | Choice                                                    |
| -------- | --------------------------------------------------------- |
| Front end | React 18, Vite 6, hand-written CSS (no UI framework)       |
| Back end  | Node 20, Express 4, Nodemailer, express-rate-limit         |
| Hosting   | Render — one web service serving the API and the built SPA |

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
`client/public/assets/projects/`. The `tags` you give it automatically appear as a filter
button.

## Contact form

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
