import { useEffect, useRef, useState } from 'react';
import { impact } from '../data/content.js';

/** Counts 0 → target once the strip scrolls into view. */
function Counter({ to, suffix }) {
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

        const duration = 1200;
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
    <div className="impact-num" ref={ref}>
      {value}
      {suffix}
    </div>
  );
}

export default function Impact() {
  return (
    <section className="impact">
      <div className="shell">
        <p className="impact-label">{impact.heading}</p>
        <div className="impact-grid reveal">
          {impact.stats.map((stat) => (
            <div className="impact-cell" key={stat.label}>
              <Counter to={stat.value} suffix={stat.suffix} />
              <div className="impact-label-main">{stat.label}</div>
              <div className="impact-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
