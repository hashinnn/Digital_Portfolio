import { useEffect, useState } from 'react';
import { profile } from '../data/content.js';
import { ArrowRight, Download, Github, LinkedIn, Mail } from './Icons.jsx';

/** Types each role out, holds it, deletes it, moves to the next. */
function useTypewriter(words, { type = 68, erase = 34, hold = 1700 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!erasing && text === word) {
      const t = setTimeout(() => setErasing(true), hold);
      return () => clearTimeout(t);
    }

    if (erasing && text === '') {
      setErasing(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setText(erasing ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      erasing ? erase : type
    );
    return () => clearTimeout(t);
  }, [text, erasing, index, words, type, erase, hold]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section className="section hero" id="top">
      <div className="shell">
        <div className="hero-grid">
          <div className="reveal is-visible">
            <span className="hero-status">
              <span className="dot" />
              Open to software &amp; data engineering roles
            </span>

            <p className="hero-hi">Hi, I&apos;m</p>
            <h1 className="hero-name">{profile.name}</h1>

            <p className="hero-typed">
              I build <span className="accent">{typed}</span>
              <span className="caret" />
            </p>

            <p className="hero-role">{profile.tagline}</p>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                See my work <ArrowRight width={17} height={17} />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
              <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <Download width={17} height={17} /> Credentials
              </a>
            </div>

            <div className="hero-socials">
              <a
                className="icon-btn"
                href={`mailto:${profile.email}`}
                aria-label="Email Hasini"
              >
                <Mail />
              </a>
              <a
                className="icon-btn"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedIn />
              </a>
              <a
                className="icon-btn"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <Github />
              </a>
            </div>
          </div>

          <div className="hero-photo reveal is-visible">
            <span className="hero-ring" aria-hidden="true" />
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
          </div>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}
