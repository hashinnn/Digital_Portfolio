import { navLinks } from '../data/content.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { Home } from './Icons.jsx';

// The hero counts as a stop too. It leads the rail, so it gets a home glyph
// rather than another anonymous dot.
const stops = [{ id: 'top', label: 'Home' }, ...navLinks];
const ids = stops.map((s) => s.id);

/** Fixed rail of section markers down the right edge. */
export default function SectionDots() {
  const active = useActiveSection(ids);

  return (
    <nav className="dots" aria-label="Page sections">
      {stops.map((stop) => {
        const isHome = stop.id === 'top';

        return (
          <a
            key={stop.id}
            href={`#${stop.id}`}
            className={`dot${isHome ? ' is-home' : ''}${active === stop.id ? ' is-active' : ''}`}
            aria-label={stop.label}
            aria-current={active === stop.id ? 'true' : undefined}
          >
            {isHome && <Home width={15} height={15} aria-hidden="true" />}
            <span className="dot-tip">{stop.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
