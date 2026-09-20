import { about } from '../data/content.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">01 — About</span>
          <h2 className="section-title">{about.heading}</h2>
        </header>

        <div className="about-grid">
          <div className="about-body reveal">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="about-side reveal" data-reveal-delay="120">
            <dl className="fact-card">
              {about.facts.map((fact) => (
                <div className="fact-row" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="extras-card">
              <h3>Beyond the code</h3>
              <ul>
                {about.extras.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
