import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/content.js';

/** Counts 0 → target once the strip scrolls into view. */
function Counter({ to, suffix = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const duration = 1100;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast off the line, gentle landing.
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setValue(Math.round(eased * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <p className="stat-num" ref={ref}>
      {value}
      {suffix}
    </p>
  );
}

export default function Stats() {
  return (
    <section className="section band">
      <div className="shell">
        <h2 className="section-title">{stats.heading}</h2>
        <hr className="rule" />

        <div className="stats-grid">
          {stats.items.map((item, i) => (
            <div className="stat reveal" key={item.verb} data-reveal-delay={i * 90}>
              <p className="stat-verb">{item.verb}</p>
              <div className="stat-row">
                <Counter to={item.value} suffix={item.suffix} />
                <div className="stat-lines">
                  {item.lines.map((line) => (
                    <p key={line} style={{ margin: 0 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
