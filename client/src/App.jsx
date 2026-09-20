import { useCallback, useState } from 'react';
import { profile } from './data/content.js';
import { useReveal } from './hooks/useReveal.js';

import SpaceBackdrop from './components/SpaceBackdrop.jsx';
import Nav from './components/Nav.jsx';
import SectionDots from './components/SectionDots.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';
import WhyMe from './components/WhyMe.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Journey from './components/Journey.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Lightbox from './components/Lightbox.jsx';

export default function App() {
  // The viewer always holds a list, so the certificate deck can be stepped
  // through; a one-off image is simply a list of one.
  const [viewer, setViewer] = useState(null);

  useReveal();

  const openOne = useCallback((item) => setViewer({ items: [item], index: 0 }), []);
  const openList = useCallback((items, index) => setViewer({ items, index }), []);
  const close = useCallback(() => setViewer(null), []);

  const step = useCallback(
    (delta) =>
      setViewer((v) => {
        if (!v) return v;
        const next = (v.index + delta + v.items.length) % v.items.length;
        return { ...v, index: next };
      }),
    []
  );

  return (
    <>
      <SpaceBackdrop />
      <Nav />
      <SectionDots />

      <main>
        <Hero />
        <Stats />
        <About onZoom={openOne} />
        <WhyMe />
        <Skills />
        <Certifications onOpen={openList} />
        <Journey onZoom={openOne} />
        <Projects onZoom={openOne} />
        <Experience />
        <Contact />
      </main>

      <footer className="footer">
        <div className="shell">
          Built by {profile.name} with React + Node · © {new Date().getFullYear()} ·{' '}
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      {viewer && (
        <Lightbox items={viewer.items} index={viewer.index} onClose={close} onStep={step} />
      )}
    </>
  );
}
