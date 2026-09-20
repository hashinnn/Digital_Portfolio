import { useMemo, useState } from 'react';
import { projects } from '../data/content.js';
import { ArrowRight } from './Icons.jsx';

export const tones = {
  silver: 'var(--silver)',
  blue: 'var(--blue)',
  amber: 'var(--amber)',
  bronze: 'var(--bronze)',
  neutral: 'var(--muted)',
  violet: 'var(--violet)',
  teal: 'var(--teal)',
};

export default function Projects({ onOpenProject }) {
  const [filter, setFilter] = useState('All');

  const tags = useMemo(
    () => ['All', ...new Set(projects.flatMap((p) => p.tags))],
    []
  );

  const shown = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section className="section" id="projects">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">05 — Projects</span>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-lead">
            Six builds, each one recognised for something. Open any card for the problem, the
            approach and what came of it.
          </p>
        </header>

        <div className="filters reveal">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`filter${filter === tag ? ' is-active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {shown.map((project, i) => (
            <button
              className="project-card reveal"
              key={project.id}
              data-reveal-delay={i * 70}
              onClick={() => onOpenProject(project.id)}
              aria-label={`Open details for ${project.title}`}
            >
              <div className="project-shot">
                <img src={project.image} alt="" loading="lazy" />
                <span className="project-badge" style={{ '--tone': tones[project.badgeTone] }}>
                  {project.badge}
                </span>
              </div>

              <div className="project-body">
                <div className="project-head">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-sub">{project.subtitle}</p>
                <p className="project-summary">{project.summary}</p>

                <div className="project-stack">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span className="stack-chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="stack-chip">+{project.stack.length - 5}</span>
                  )}
                </div>

                <span className="project-cta">
                  Read the case <ArrowRight width={16} height={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
