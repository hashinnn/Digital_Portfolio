import { useEffect, useRef } from 'react';
import { ArrowUpRight, Close } from './Icons.jsx';
import { tones } from './Projects.jsx';

export default function ProjectModal({ project, onClose, onZoom }) {
  const panelRef = useRef(null);

  // Lock the page behind the modal and close on Escape.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.classList.add('is-locked');
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="modal"
        ref={panelRef}
        tabIndex={-1}
        style={{ '--tone': tones[project.badgeTone] }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <Close width={18} height={18} />
        </button>

        <div className="modal-scroll">
          <img className="modal-shot" src={project.image} alt="" />

          <div className="modal-body">
            <span className="modal-badge">{project.badge}</span>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-sub">{project.subtitle}</p>

            <div className="modal-block">
              <p>{project.summary}</p>
            </div>

            <div className="modal-block">
              <h4>The problem</h4>
              <p>{project.problem}</p>
            </div>

            <div className="modal-block">
              <h4>What I built</h4>
              <ul>
                {project.approach.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {project.gallery?.length > 0 && (
              <div className="modal-gallery">
                {project.gallery.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => onZoom(src)}
                  />
                ))}
              </div>
            )}

            <div className="modal-block">
              <h4>Outcome</h4>
              <p className="modal-outcome">{project.outcome}</p>
            </div>

            <div className="modal-block">
              <h4>Stack</h4>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span className="stack-chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.links.length > 0 && (
              <div className="modal-links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    className="btn btn-primary"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} <ArrowUpRight width={16} height={16} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
