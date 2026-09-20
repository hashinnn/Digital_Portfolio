import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import express from 'express';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDist = path.join(__dirname, '..', 'client', 'dist');

const app = express();
app.set('trust proxy', 1);
app.use(compression());
app.use(express.json({ limit: '32kb' }));

// --- Contact API -----------------------------------------------------------

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many messages sent. Please try again later.' },
});

function buildTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

const transport = buildTransport();

app.post('/api/contact', contactLimiter, async (req, res) => {
  const name = String(req.body?.name ?? '').trim();
  const email = String(req.body?.email ?? '').trim();
  const message = String(req.body?.message ?? '').trim();
  // Honeypot: bots fill every field, humans never see this one.
  const trap = String(req.body?.company ?? '').trim();

  if (trap) return res.json({ ok: true });

  const errors = {};
  if (name.length < 2 || name.length > 80) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'Please enter a valid email address.';
  if (message.length < 10 || message.length > 4000) errors.message = 'Message should be 10–4000 characters.';
  if (Object.keys(errors).length) return res.status(400).json({ ok: false, errors });

  const payload = {
    to: process.env.CONTACT_TO || 'hasinirg7@gmail.com',
    subject: `Portfolio enquiry from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  if (!transport) {
    // No SMTP configured — keep the form usable in dev and log the message.
    console.log('[contact] (not sent, SMTP unconfigured)', payload);
    return res.json({ ok: true, delivered: false });
  }

  try {
    await transport.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      replyTo: `"${name}" <${email}>`,
      ...payload,
    });
    res.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[contact] send failed:', err.message);
    res.status(502).json({ ok: false, error: 'Could not send right now — please email me directly.' });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true, uptime: process.uptime() }));

// --- Static client ---------------------------------------------------------

if (fs.existsSync(clientDist)) {
  app.use(
    express.static(clientDist, {
      etag: true,
      setHeaders(res, filePath) {
        // Hashed build assets are immutable and safe to cache forever.
        if (filePath.includes(`${path.sep}assets${path.sep}build${path.sep}`)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          return;
        }
        // index.html must never be cached: a stale copy would point at asset
        // hashes that no longer exist after a deploy.
        if (filePath.endsWith('index.html')) {
          res.setHeader('Cache-Control', 'no-cache, must-revalidate');
        }
      },
    })
  );
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    res.sendFile(path.join(clientDist, 'index.html'));
  });
} else {
  console.warn('[server] client/dist not found — run `npm run build` first.');
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`[server] listening on http://localhost:${port}`));
