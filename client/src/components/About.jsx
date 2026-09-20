import { about } from '../data/content.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <h2 className="section-title">{about.heading}</h2>
        <hr className="rule" />

        {/* Polaroid collage */}
        <div className="polaroids reveal">
          {about.polaroids.map((p) => (
            <figure className="polaroid" key={p.src} style={{ '--tilt': `${p.tilt}deg` }}>
              <img src={p.src} alt={p.caption.replace('\n', ' ')} loading="lazy" />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>

        {/* One paragraph, flanked by two shots */}
        <div className="about-block reveal">
          <div className="about-text">
            <p>{about.intro}</p>
          </div>
          {about.introImages.map((img) => (
            <img className="about-shot" key={img.src} src={img.src} alt={img.alt} loading="lazy" />
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

        <p className="traits-label reveal">My lecturers and teammates say I am</p>
        <div className="traits reveal">
          {about.traits.map((trait) => (
            <span className="trait" key={trait}>
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
