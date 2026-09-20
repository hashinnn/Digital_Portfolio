import { about } from '../data/content.js';

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
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="extras reveal">
          <h3>Extracurriculars</h3>
          <ul>
            {about.extracurriculars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
