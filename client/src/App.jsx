import { useCallback, useState } from 'react';
import { profile, projects } from './data/content.js';
import { useReveal } from './hooks/useReveal.js';

import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Impact from './components/Impact.jsx';
import About from './components/About.jsx';
import WhyMe from './components/WhyMe.jsx';
import Skills from './components/Skills.jsx';
import Journey from './components/Journey.jsx';
import Projects from './components/Projects.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import Experience from './components/Experience.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const [openId, setOpenId] = useState(null);
  const [zoomed, setZoomed] = useState(null);

  useReveal();

  const openProject = useCallback((id) => setOpenId(id), []);
  const closeProject = useCallback(() => setOpenId(null), []);
  const zoom = useCallback((src) => setZoomed(src), []);

  const active = projects.find((p) => p.id === openId) ?? null;

  return (
    <>
      <div className="bg-wash" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />
        <Impact />
        <About />
        <WhyMe />
        <Skills />
        <Journey onOpenProject={openProject} onZoom={zoom} />
        <Projects onOpenProject={openProject} />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <span>
            Designed &amp; built by {profile.name} · React + Node · © {new Date().getFullYear()}
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      {active && <ProjectModal project={active} onClose={closeProject} onZoom={zoom} />}

      {zoomed && (
        <div className="lightbox" onClick={() => setZoomed(null)} role="dialog" aria-modal="true">
          <img src={zoomed} alt="Enlarged view" />
        </div>
      )}
    </>
  );
}
