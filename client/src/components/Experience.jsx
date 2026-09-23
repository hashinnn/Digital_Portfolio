import { experience } from '../data/content.js';
import { Doc } from './Icons.jsx';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <h2 className="section-title">{experience.heading}</h2>
        <hr className="rule" />

        <div className="exp-list-wrap">
          {experience.items.map((job) => (
            <article className="exp-card reveal" key={`${job.org}-${job.role}`}>
              <div className="exp-meta">
                <span className="exp-period">{job.period}</span>
                {job.kind && <span className="exp-kind">{job.kind}</span>}
              </div>

              <div>
                <h3 className="exp-role">{job.role}</h3>
                <p className="exp-org">
                  <strong>{job.org}</strong> — {job.orgNote}
                </p>

                <ul className="exp-list">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                {job.quote && (
                  <figure className="exp-quote">
                    <blockquote>{job.quote.text}</blockquote>
                    <figcaption>
                      {job.quote.by} <i>— {job.quote.role}</i>
                    </figcaption>
                  </figure>
                )}

                <div className="exp-docs">
                  {job.docs.map((doc) => (
                    <a
                      className={`doc-link${doc.kind === 'reference' ? ' is-reference' : ''}`}
                      key={doc.href}
                      href={doc.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Doc width={16} height={16} />
                      {doc.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
