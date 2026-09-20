import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { skills } from '../data/content.js';
import { ChevronDown } from './Icons.jsx';

const BUBBLE_W = 62;
const BUBBLE_H = 58;

/**
 * Arranges the icon bubbles inside their basket and drifts them around,
 * bouncing off the walls and off each other. Transform-only, so the work
 * stays on the compositor rather than triggering layout each frame.
 *
 * The arrangement is settled before the first paint, so it is already clean
 * if the animation is skipped for reduced motion or paused by the browser.
 */
function useDrift(fieldRef, count) {
  useEffect(() => {
    const field = fieldRef.current;
    if (!field || !count) return;

    const nodes = Array.from(field.children);
    let w = field.clientWidth;
    let h = field.clientHeight;
    let bodies = [];

    const maxX = () => Math.max(w - BUBBLE_W, 0);
    const maxY = () => Math.max(h - BUBBLE_H, 0);

    /** Seed on a jittered grid — spread out, but not mechanically regular. */
    const layout = () => {
      const cols = Math.max(1, Math.ceil(Math.sqrt(count)));
      const cellW = maxX() / cols || 1;
      const cellH = maxY() / Math.max(1, Math.ceil(count / cols)) || 1;

      bodies = nodes.map((_, i) => ({
        x: (i % cols) * cellW + Math.random() * cellW * 0.5,
        y: Math.floor(i / cols) * cellH + Math.random() * cellH * 0.5,
        vx: (Math.random() - 0.5) * 0.7 || 0.35,
        vy: (Math.random() - 0.5) * 0.7 || 0.35,
      }));
    };

    /** One pass of pushing overlapping pairs apart. */
    const separate = (bounce) => {
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const a = bodies[i];
          const b = bodies[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const overlapX = BUBBLE_W - Math.abs(dx);
          const overlapY = BUBBLE_H - Math.abs(dy);
          if (overlapX <= 0 || overlapY <= 0) continue;

          // Resolve along whichever axis needs the smaller correction.
          if (overlapX < overlapY) {
            const push = (overlapX / 2) * (dx < 0 ? -1 : 1);
            a.x -= push;
            b.x += push;
            if (bounce) {
              a.vx = -Math.abs(a.vx) * (dx < 0 ? -1 : 1);
              b.vx = Math.abs(b.vx) * (dx < 0 ? -1 : 1);
            }
          } else {
            const push = (overlapY / 2) * (dy < 0 ? -1 : 1);
            a.y -= push;
            b.y += push;
            if (bounce) {
              a.vy = -Math.abs(a.vy) * (dy < 0 ? -1 : 1);
              b.vy = Math.abs(b.vy) * (dy < 0 ? -1 : 1);
            }
          }
        }
      }
    };

    const clamp = () => {
      for (const b of bodies) {
        b.x = Math.min(Math.max(b.x, 0), maxX());
        b.y = Math.min(Math.max(b.y, 0), maxY());
      }
    };

    const paint = () => {
      for (let i = 0; i < bodies.length; i++) {
        nodes[i].style.transform =
          `translate(${bodies[i].x.toFixed(1)}px, ${bodies[i].y.toFixed(1)}px)`;
      }
    };

    /**
     * Resolve the seeded layout before anything is shown. Without this the
     * bubbles can start overlapping and only untangle once the animation has
     * run a few frames — which never happens if it is paused or skipped.
     */
    const settle = () => {
      for (let pass = 0; pass < 60; pass++) {
        separate(false);
        clamp();
      }
    };

    const build = () => {
      w = field.clientWidth;
      h = field.clientHeight;
      layout();
      settle();
      paint();
    };

    build();

    // Motion runs everywhere except for visitors who have asked against it.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frame;
    if (!reduced) {
      let last = performance.now();

      const step = (now) => {
        // Advance by elapsed time rather than per frame, so the drift runs at
        // the same speed on a 60Hz laptop, a 120Hz phone and anything that
        // drops frames. Capped so returning from a background tab nudges the
        // bubbles rather than flinging them across the basket.
        const dt = Math.min((now - last) / 16.667, 3);
        last = now;

        for (const b of bodies) {
          b.x += b.vx * dt;
          b.y += b.vy * dt;
          if (b.x <= 0) { b.x = 0; b.vx = Math.abs(b.vx); }
          if (b.x >= maxX()) { b.x = maxX(); b.vx = -Math.abs(b.vx); }
          if (b.y <= 0) { b.y = 0; b.vy = Math.abs(b.vy); }
          if (b.y >= maxY()) { b.y = maxY(); b.vy = -Math.abs(b.vy); }
        }
        separate(true);
        clamp();
        paint();
        frame = requestAnimationFrame(step);
      };

      frame = requestAnimationFrame(step);
    }

    const onResize = () => build();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, [fieldRef, count]);
}

function Basket({ basket }) {
  const fieldRef = useRef(null);
  useDrift(fieldRef, basket.items.length);

  return (
    <article className="basket reveal">
      <h3>{basket.name}</h3>
      <hr />
      <div className="basket-field" ref={fieldRef}>
        {basket.items.map((item) => (
          <div className="bubble" key={item.label} title={item.label}>
            <span className="bubble-disc">
              <Icon icon={item.icon} width={24} height={24} />
            </span>
            <span className="bubble-label">{item.label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  const [showList, setShowList] = useState(false);

  return (
    <section className="section" id="skills">
      <div className="shell">
        <h2 className="section-title">{skills.heading}</h2>
        <hr className="rule" />

        <div className="skills-grid">
          {skills.baskets.map((basket) => (
            <Basket basket={basket} key={basket.name} />
          ))}
        </div>

        {/* The bubbles drift, so offer the same contents as plain text. */}
        <div className="skills-summary-bar reveal">
          <button
            className="btn btn-ghost"
            onClick={() => setShowList((v) => !v)}
            aria-expanded={showList}
            aria-controls="skills-summary"
          >
            {showList ? 'Hide skills summary' : 'View skills summary'}
            <ChevronDown width={16} height={16} className={showList ? 'is-flipped' : ''} />
          </button>
        </div>

        {showList && (
          <div className="skills-summary" id="skills-summary">
            {skills.baskets.map((basket) => (
              <div className="summary-group" key={basket.name}>
                <h4>{basket.name}</h4>
                <p>{basket.items.map((i) => i.label).join(' · ')}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
