import { whyMe } from '../data/content.js';

export default function WhyMe() {
  return (
    <section className="section band" id="why-me">
      <div className="shell">
        <h2 className="section-title">{whyMe.heading}</h2>
        <hr className="rule" />
        <p className="section-lead">{whyMe.lead}</p>

        <div className="why-grid">
          {whyMe.items.map((item, i) => (
            <article className="why-card reveal" key={item.project} data-reveal-delay={i * 70}>
              <p className="why-project">{item.project}</p>
              <h3 className="why-award">{item.award}</h3>
              <p className="why-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
