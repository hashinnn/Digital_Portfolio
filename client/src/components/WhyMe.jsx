import { whyMe } from '../data/content.js';
import { icons } from './Icons.jsx';

const accents = {
  amber: 'var(--amber)',
  blue: 'var(--blue)',
  teal: 'var(--teal)',
  bronze: 'var(--bronze)',
  violet: 'var(--violet)',
};

export default function WhyMe() {
  return (
    <section className="section" id="why-me">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">02 — Why Me</span>
          <h2 className="section-title">{whyMe.heading}</h2>
          <p className="section-lead">{whyMe.lead}</p>
        </header>

        <div className="why-grid">
          {whyMe.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <article
                className="why-card reveal"
                key={item.project}
                data-reveal-delay={i * 70}
                style={{ '--accent': accents[item.accent] }}
              >
                <div className="why-icon">{Icon ? <Icon /> : null}</div>
                <p className="why-project">{item.project}</p>
                <h3 className="why-award">{item.award}</h3>
                <p className="why-detail">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
