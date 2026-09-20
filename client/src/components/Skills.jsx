import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { skills } from '../data/content.js';
import { ChevronDown } from './Icons.jsx';

const BUBBLE_W = 62;
const BUBBLE_H = 58;

/**
 * Drifts the icon bubbles around inside their basket, bouncing them off the
 * walls. Pure rAF on transform — no physics library, no layout thrash.
 */
function useDrift(fieldRef, count) {
  useEffect(() => {
    const field = fieldRef.current;
    if (!field || !count) return;

    const nodes = Array.from(field.children);
    let w = field.clientWidth;
    let h = field.clientHeight;

    // Lay them out on a jittered grid rather than at random, so they start
    // spread out instead of already piled on top of each other.
    const cols = Math.max(1, Math.ceil(Math.sqrt(count)));
    const rows = Math.max(1, Math.ceil(count / cols));
    const cellW = Math.max(w - BUBBLE_W, 1) / cols;
    const cellH = Math.max(h - BUBBLE_H, 1) / rows;

    const bodies = nodes.map((_, i) => ({
      x: (i % cols) * cellW + Math.random() * cellW * 0.5,
      y: Math.floor(i / cols) * cellH + Math.random() * cellH * 0.5,
      vx: (Math.random() - 0.5) * 0.7 || 0.35,
      vy: (Math.random() - 0.5) * 0.7 || 0.35,
    }));

    let frame;
    const step = () => {
      for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i];
        b.x += b.vx;
        b.y += b.vy;

        if (b.x <= 0) { b.x = 0; b.vx = Math.abs(b.vx); }
        if (b.x >= w - BUBBLE_W) { b.x = w - BUBBLE_W; b.vx = -Math.abs(b.vx); }
        if (b.y <= 0) { b.y = 0; b.vy = Math.abs(b.vy); }
        if (b.y >= h - BUBBLE_H) { b.y = h - BUBBLE_H; b.vy = -Math.abs(b.vy); }

      }

      // Separation: nudge any overlapping pair apart so the labels stay
      // readable instead of stacking into an unreadable clump.
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
            a.vx = -Math.abs(a.vx) * (dx < 0 ? -1 : 1);
            b.vx = Math.abs(b.vx) * (dx < 0 ? -1 : 1);
          } else {
            const push = (overlapY / 2) * (dy < 0 ? -1 : 1);
            a.y -= push;
            b.y += push;
            a.vy = -Math.abs(a.vy) * (dy < 0 ? -1 : 1);
            b.vy = Math.abs(b.vy) * (dy < 0 ? -1 : 1);
          }
        }
      }

      for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i];
        b.x = Math.min(Math.max(b.x, 0), Math.max(w - BUBBLE_W, 0));
        b.y = Math.min(Math.max(b.y, 0), Math.max(h - BUBBLE_H, 0));
        nodes[i].style.transform = `translate(${b.x.toFixed(1)}px, ${b.y.toFixed(1)}px)`;
      }
      frame = requestAnimationFrame(step);
    };

    const paint = () => {
      for (let i = 0; i < bodies.length; i++) {
        nodes[i].style.transform = `translate(${bodies[i].x.toFixed(1)}px, ${bodies[i].y.toFixed(
          1
        )}px)`;
      }
    };

    // Place them before anything animates. Without this the bubbles sit
    // stacked at the origin whenever the loop never runs — for a visitor who
    // asked for reduced motion, or while the tab is in the background.
    paint();

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) frame = requestAnimationFrame(step);

    const onResize = () => {
      w = field.clientWidth;
      h = field.clientHeight;
      paint();
    };
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
