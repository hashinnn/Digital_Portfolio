import { journey, projects } from '../data/content.js';
import { ArrowRight } from './Icons.jsx';

const tones = {
  neutral: 'var(--muted)',
  work: 'var(--teal)',
  bronze: 'var(--bronze)',
  silver: 'var(--silver)',
};

export default function Journey({ onOpenProject, onZoom }) {
  return (
    <section className="section" id="hackathons">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">04 — Hackathons</span>
          <h2 className="section-title">{journey.heading}</h2>
          <p className="section-lead">{journey.lead}</p>
        </header>

        <div className="journey">
          {journey.steps.map((step, i) => {
            const project = projects.find((p) => p.id === step.projectId);
            return (
              <div
                className="journey-step reveal"
                key={`${step.year}-${step.title}`}
                data-reveal-delay={i * 80}
                style={{ '--tone': tones[step.verdictTone] }}
              >
                <div className="journey-when">
                  <span className="journey-node" aria-hidden="true" />
                  <span className="journey-year">{step.year}</span>
                </div>

                <article className="journey-card">
                  <div className="journey-top">
                    <h3 className="journey-title">{step.title}</h3>
                    <span className="verdict">{step.verdict}</span>
                  </div>

                  <p className="journey-body">{step.body}</p>

                  {step.compare && (
                    <div className="compare">
                      <figure>
                        <img
                          src="/assets/projects/suss2025-original.jpeg"
                          alt="The dashboard I submitted in 2025 — four separate views of the question"
                          loading="lazy"
                          onClick={() => onZoom('/assets/projects/suss2025-original.jpeg')}
                        />
                        <figcaption>What I submitted</figcaption>
                      </figure>
                      <div className="compare-arrow" aria-hidden="true">
                        →
                      </div>
                      <figure>
                        <img
                          src="/assets/projects/suss2025-improved.jpeg"
                          alt="The dashboard I rebuilt afterwards — one headline finding with every chart supporting it"
                          loading="lazy"
                          onClick={() => onZoom('/assets/projects/suss2025-improved.jpeg')}
                        />
                        <figcaption>What I rebuilt</figcaption>
                      </figure>
                    </div>
                  )}

                  {project && !step.compare && (
                    <button className="journey-link" onClick={() => onOpenProject(project.id)}>
                      See {project.title} <ArrowRight width={16} height={16} />
                    </button>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
