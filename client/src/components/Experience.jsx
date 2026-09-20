import { experience } from '../data/content.js';
import { Doc } from './Icons.jsx';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <h2 className="section-title">Experience</h2>
        <hr className="rule" />

        {experience.map((job) => (
          <article className="exp-card reveal" key={job.org}>
            <div className="exp-period">{job.period}</div>

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

              <div className="exp-docs">
                {job.docs.map((doc) => (
                  <a
                    className="doc-link"
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
    </section>
  );
}
