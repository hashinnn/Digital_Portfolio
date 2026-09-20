import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/content.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { Menu, Close } from './Icons.jsx';

const ids = navLinks.map((l) => l.id);

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${stuck ? ' is-stuck' : ''}`}>
      <div className="shell">
        <div className="nav-inner">
          <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
            &lt;GH /&gt;
          </a>

          <nav className="nav-links" aria-label="Sections">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link${active === link.id ? ' is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`nav-drawer${open ? ' is-open' : ''}`}>
        <div className="shell">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
