import { useState } from 'react';
import { contact, profile } from '../data/content.js';
import { ArrowRight, Github, LinkedIn, Mail, Phone } from './Icons.jsx';

const empty = { name: '', email: '', message: '', company: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    setErrors({});

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setStatus({ ok: false, text: data.error || 'Please check the fields above.' });
        return;
      }

      setForm(empty);
      setStatus({ ok: true, text: 'Thanks — your message is on its way. I will get back to you soon.' });
    } catch {
      setStatus({
        ok: false,
        text: `Something went wrong. You can reach me directly at ${profile.email}.`,
      });
    } finally {
      setSending(false);
    }
  }

  const socials = [
    { icon: Mail, label: profile.email, name: 'Email', href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, name: 'Phone', href: `tel:+65${profile.phone.replace(/\s/g, '')}` },
    { icon: LinkedIn, label: 'LinkedIn', name: 'LinkedIn', href: profile.linkedin },
    { icon: Github, label: 'GitHub', name: 'GitHub', href: profile.github },
  ];

  return (
    <section className="section band" id="contact">
      <div className="shell">
        <h2 className="section-title">{contact.heading}</h2>
        <hr className="rule" />
        <p className="section-lead">{contact.lead}</p>

        <div className="contact-socials reveal">
          {socials.map(({ icon: Icon, label, name, href }) => (
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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={set('email')}
              placeholder="you@company.com"
              autoComplete="email"
              required
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

          {/* Honeypot — hidden from people, filled in by bots. */}
          <div className="hp" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={set('company')}
            />
          </div>

          {status && (
            <p className={`form-status${status.ok ? '' : ' bad'}`} role="status">
              {status.text}
            </p>
          )}

          <button className="btn btn-primary" type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send message'}
            {!sending && <ArrowRight width={17} height={17} />}
          </button>
        </form>
      </div>
    </section>
  );
}
