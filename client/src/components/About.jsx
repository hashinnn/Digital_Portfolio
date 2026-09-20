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

        {/* Alternating text / image blocks */}
        {about.blocks.map((block, i) => (
          <div className="about-block reveal" key={i}>
            {block.layout === 'images-first' &&
              block.images.map((img) => (
                <img className="about-shot" key={img.src} src={img.src} alt={img.alt} loading="lazy" />
              ))}

            <div className="about-text">
              {block.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>

            {block.layout === 'text-first' &&
              block.images.map((img) => (
                <img className="about-shot" key={img.src} src={img.src} alt={img.alt} loading="lazy" />
              ))}
          </div>
        ))}

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
