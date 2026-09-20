import { useState } from 'react';
import { contact, profile } from '../data/content.js';
import { ArrowRight, Github, LinkedIn, Mail, MapPin, Phone } from './Icons.jsx';

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

  const channels = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:+65${profile.phone.replace(/\s/g, '')}` },
    { icon: LinkedIn, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'See the code', href: profile.github },
    { icon: MapPin, label: 'Based in', value: profile.location, href: null },
  ];

  return (
    <section className="section" id="contact">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">08 — Contact</span>
          <h2 className="section-title">{contact.heading}</h2>
          <p className="section-lead">{contact.lead}</p>
        </header>

        <div className="contact-grid">
          <div className="contact-list reveal">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="contact-icon">
                    <Icon width={18} height={18} />
                  </span>
                  <span className="contact-meta">
                    <span className="label">{label}</span>
                    <span className="value">{value}</span>
                  </span>
                </>
              );

              return href ? (
                <a
                  className="contact-item"
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div className="contact-item" key={label}>
                  {inner}
                </div>
              );
            })}
          </div>

          <form className="form reveal" data-reveal-delay="120" onSubmit={onSubmit} noValidate>
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
              <input id="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={set('company')} />
            </div>

            {status && (
              <p className={`form-status ${status.ok ? 'ok' : 'bad'}`} role="status">
                {status.text}
              </p>
            )}

            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send message'}
              {!sending && <ArrowRight width={17} height={17} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
