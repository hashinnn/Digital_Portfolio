import { navLinks } from '../data/content.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

// The hero counts as a stop too, so it gets a dot of its own at the top.
const stops = [{ id: 'top', label: 'Home' }, ...navLinks];
const ids = stops.map((s) => s.id);

/** Fixed rail of section markers down the right edge. */
export default function SectionDots() {
  const active = useActiveSection(ids);

  return (
    <nav className="dots" aria-label="Page sections">
      {stops.map((stop) => (
        <a
          key={stop.id}
          href={`#${stop.id}`}
          className={`dot${active === stop.id ? ' is-active' : ''}`}
          aria-label={stop.label}
          aria-current={active === stop.id ? 'true' : undefined}
        >
          <span className="dot-tip">{stop.label}</span>
        </a>
      ))}
    </nav>
  );
}
