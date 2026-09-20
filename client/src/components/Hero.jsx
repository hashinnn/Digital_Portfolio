import { useEffect, useState } from 'react';
import { profile } from '../data/content.js';
import { Download, Github, LinkedIn, Mail } from './Icons.jsx';

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
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero-photo">
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
        </div>

        <h1 className="hero-name">Hi! I&apos;m {profile.name}.</h1>

        <h2 className="hero-typed">
          I build {typed}
          <span className="caret" />
        </h2>

        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
          <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <Download width={17} height={17} /> Download CV
          </a>
        </div>

        <div className="hero-socials">
          <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email Hasini">
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
    </section>
  );
}
