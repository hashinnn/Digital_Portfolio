import { useState } from 'react';
import { certifications } from '../data/content.js';
import { ArrowUpRight, Certificate } from './Icons.jsx';

export default function Certifications() {
  const [tab, setTab] = useState(0);
  const group = certifications.groups[tab];

  return (
    <section className="section" id="certifications">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">07 — Certifications</span>
          <h2 className="section-title">{certifications.heading}</h2>
          <p className="section-lead">
            Every certificate below opens the real document — nothing here is a claim you have to
            take on trust.
          </p>
        </header>

        <div className="cert-tabs reveal">
          {certifications.groups.map((g, i) => (
            <button
              key={g.name}
              className={`filter${tab === i ? ' is-active' : ''}`}
              onClick={() => setTab(i)}
            >
              {g.name}
            </button>
          ))}
        </div>

        <div className="cert-grid">
          {group.items.map((cert, i) => (
            <a
              className="cert-card reveal"
              key={`${cert.title}-${cert.issuer}`}
              data-reveal-delay={(i % 4) * 60}
              href={cert.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-thumb">
                {cert.thumb || cert.href.match(/\.(png|jpe?g)$/i) ? (
                  <img src={cert.thumb || cert.href} alt="" loading="lazy" />
                ) : (
                  <Certificate className="placeholder" width={34} height={34} />
                )}
              </div>

              <div>
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>

              <span className="cert-view">
                View <ArrowUpRight width={13} height={13} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
