import { about } from '../data/content.js';

const BOLD = /(\*\*[^*]+\*\*)/g;

/**
 * Renders the **marked** terms in a paragraph as bold, leaving the rest as
 * plain text. Keeps content.js readable without pulling in a Markdown parser.
 */
function Emphasised({ text }) {
  return text.split(BOLD).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

export default function About({ onZoom }) {
  return (
    <section className="section" id="about">
      <div className="shell">
        <h2 className="section-title">{about.heading}</h2>
        <hr className="rule" />

        {/* Polaroid collage */}
        <div className="polaroids reveal">
          {about.polaroids.map((p) => (
            <figure className="polaroid" key={p.src} style={{ '--tilt': `${p.tilt}deg` }}>
              <button
                className="polaroid-shot"
                onClick={() => onZoom({ img: p.src, title: p.caption.replace('\n', ' — ') })}
                aria-label={`View ${p.caption.replace('\n', ' ')} full size`}
              >
                <img src={p.src} alt={p.caption.replace('\n', ' ')} loading="lazy" />
              </button>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="about-prose reveal">
          {about.paragraphs.map((p, i) => (
            <p key={i}>
              <Emphasised text={p} />
            </p>
          ))}
        </div>

        <div className="extras reveal">
          {about.extracurriculars.map((group) => (
            <div className="extras-group" key={group.label}>
              <h3>{group.label}</h3>
              <p className="extras-note">{group.note}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
