import { useCallback, useState } from 'react';
import { profile } from './data/content.js';
import { useReveal } from './hooks/useReveal.js';

import Nav from './components/Nav.jsx';
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
  const [viewing, setViewing] = useState(null);

  useReveal();

  const open = useCallback((item) => setViewing(item), []);
  const close = useCallback(() => setViewing(null), []);

  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Stats />
        <About />
        <WhyMe />
        <Skills />
        <Certifications onOpen={open} />
        <Journey onZoom={open} />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="footer">
        <div className="shell">
          Built by {profile.name} with React + Node · © {new Date().getFullYear()} ·{' '}
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      {viewing && <Lightbox item={viewing} onClose={close} />}
    </>
  );
}
