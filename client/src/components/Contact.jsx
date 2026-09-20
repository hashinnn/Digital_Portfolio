import { useState } from 'react';
import { contact, profile } from '../data/content.js';
import { ArrowUpRight, Github, LinkedIn, Mail, WhatsApp } from './Icons.jsx';

const empty = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  /**
   * WhatsApp has no way for a web page to send on someone's behalf, so the
   * form composes the message and hands it to WhatsApp already typed out —
   * the visitor just presses send, and it arrives from their own number.
   */
  function onSubmit(e) {
    e.preventDefault();

    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your name.';
    if (form.message.trim().length < 10) next.message = 'Please write a little more.';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = 'That email address does not look right.';
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    const lines = [
      `Hi Hasini, I'm ${form.name.trim()}.`,
      '',
      form.message.trim(),
    ];
    if (form.email.trim()) lines.push('', `You can reach me at ${form.email.trim()}`);

    const url = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  }

  const socials = [
    { icon: WhatsApp, name: 'WhatsApp', href: `https://wa.me/${profile.whatsapp}` },
    { icon: Mail, name: 'Email', href: `mailto:${profile.email}` },
    { icon: LinkedIn, name: 'LinkedIn', href: profile.linkedin },
    { icon: Github, name: 'GitHub', href: profile.github },
  ];

  return (
    <section className="section band" id="contact">
      <div className="shell">
        <h2 className="section-title">{contact.heading}</h2>
        <hr className="rule" />
        <p className="section-lead">{contact.lead}</p>

        <div className="contact-socials reveal">
          {socials.map(({ icon: Icon, name, href }) => (
            <a
              className="contact-social"
              key={name}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={name}
            >
              <Icon width={24} height={24} />
              <span className="label">{name}</span>
            </a>
          ))}
        </div>

        <form className="form reveal" onSubmit={onSubmit} noValidate>
          <div className={`field${errors.name ? ' has-error' : ''}`}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={form.name}
              onChange={set('name')}
              placeholder="Your name"
              autoComplete="name"
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className={`field${errors.email ? ' has-error' : ''}`}>
            <label htmlFor="email">Email (optional)</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={set('email')}
              placeholder="you@company.com"
              autoComplete="email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className={`field${errors.message ? ' has-error' : ''}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={form.message}
              onChange={set('message')}
              placeholder="Tell me about the role, the project, or just say hi."
              required
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button className="btn btn-primary" type="submit">
            <WhatsApp width={18} height={18} /> Send on WhatsApp
          </button>

          <p className="form-note">
            This opens WhatsApp with your message ready to send — nothing is sent until you
            press send there. Prefer email?{' '}
            <a href={`mailto:${profile.email}`}>
              {profile.email} <ArrowUpRight width={13} height={13} />
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
