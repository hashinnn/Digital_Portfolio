import { useEffect, useRef, useState } from 'react';
import { certifications } from '../data/content.js';
import { Certificate } from './Icons.jsx';

const CARD_W = 240;

/** True once the viewport is too narrow for the fan to read well. */
function useIsNarrow(breakpoint = 720) {
  const [narrow, setNarrow] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < breakpoint
  );
  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < breakpoint);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  return narrow;
}

function CertFace({ cert }) {
  return cert.img ? (
    <img src={cert.img} alt={cert.title} loading="lazy" />
  ) : (
    <span className="cert-cover">
      <Certificate width={28} height={28} />
      <span>{cert.title}</span>
    </span>
  );
}

export default function Certifications({ onOpen }) {
  const stackRef = useRef(null);
  const [spacing, setSpacing] = useState(60);
  const [hovered, setHovered] = useState(null);
  const narrow = useIsNarrow();

  const [filter, setFilter] = useState('All');

  const items =
    filter === 'All'
      ? certifications.items
      : certifications.items.filter((c) => c.cat === filter);

  // Fan the deck across whatever width we have, without letting the cards
  // overlap so far that nothing is recognisable.
  useEffect(() => {
    if (narrow) return;
    const measure = () => {
      const width = stackRef.current?.offsetWidth ?? 0;
      const usable = Math.max(width - CARD_W, 1);
      setSpacing(Math.min(usable / Math.max(items.length - 1, 1), CARD_W - 30));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [items.length, narrow, filter]);

  return (
    <section className="section band" id="certs">
      <div className="shell">
        <h2 className="section-title">{certifications.heading}</h2>
        <hr className="rule" />
        <div className="filters">
          {certifications.filters.map((name) => (
            <button
              key={name}
              className={`filter${filter === name ? ' is-active' : ''}`}
              onClick={() => {
                setFilter(name);
                setHovered(null);
              }}
            >
              {name}
              <span className="filter-count">
                {name === 'All'
                  ? certifications.items.length
                  : certifications.items.filter((c) => c.cat === name).length}
              </span>
            </button>
          ))}
        </div>

        <p className="cert-hint">
          {narrow
            ? 'Swipe through, tap any to view.'
            : 'Hover to lift one out, click to open it — then use the arrows to step through the rest.'}
        </p>

        {narrow ? (
          <div className="cert-rail">
            {items.map((cert, i) => (
              <button className="cert-card" key={cert.title} onClick={() => onOpen(items, i)} title={cert.title}>
                <CertFace cert={cert} />
              </button>
            ))}
          </div>
        ) : (
          <div className="cert-stack" ref={stackRef} onMouseLeave={() => setHovered(null)}>
            {items.map((cert, i) => {
              let transform = 'translateX(0) rotate(0deg) scale(1)';
              if (hovered !== null) {
                if (i < hovered) transform = 'translateX(-14px) rotate(-4deg)';
                else if (i > hovered) transform = 'translateX(14px) rotate(4deg)';
                else transform = 'translateY(-96px) scale(1.18)';
              }

              // Earlier cards stack on top of later ones, so the fan reads left
              // to right: the first certificate is the one fully in view and
              // each one after it tucks in behind.
              return (
                <button
                  className="cert-card"
                  key={cert.title}
                  title={cert.title}
                  style={{
                    left: `${i * spacing}px`,
                    zIndex: hovered === i ? 50 : items.length - i,
                    transform,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  onClick={() => onOpen(items, i)}
                >
                  <CertFace cert={cert} />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
