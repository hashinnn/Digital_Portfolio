import { projects } from '../data/content.js';
import { ArrowUpRight, Github } from './Icons.jsx';

const linkIcon = { github: Github, link: ArrowUpRight };
const linkLabel = { github: 'View on GitHub', link: 'Open live site' };

export default function Projects() {
  return (
    <section className="section band" id="projects">
      <div className="shell">
        <h2 className="section-title">Projects</h2>
        <hr className="rule" />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article className="project-card reveal" key={project.id} data-reveal-delay={i * 80}>
              <img src={project.image} alt={project.title} loading="lazy" />

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-award">{project.award}</p>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.length > 0 ? (
                    <>
                      <p className="label">See more on:</p>
                      {project.links.map((link) => {
                        const LinkIcon = linkIcon[link.kind] ?? ArrowUpRight;
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${linkLabel[link.kind] ?? 'Open'} — ${project.title}`}
                            title={linkLabel[link.kind]}
                          >
                            <LinkIcon width={22} height={22} />
                          </a>
                        );
                      })}
                    </>
                  ) : (
                    <p className="none">Tableau build — no public repo</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
