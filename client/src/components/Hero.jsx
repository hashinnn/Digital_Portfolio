import { useEffect, useState } from 'react';
import { profile } from '../data/content.js';

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
      <div className="home-container">
        <div className="home-text">
          <p className="home-greeting">Hi there, I&apos;m</p>

          <h1 className="home-name">
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="typed-wrapper">
            <span className="typed-prefix">I build </span>
            <span className="typed-text">{typed}</span>
            <span className="typed-cursor">|</span>
          </div>

          <p className="home-education">
            <span className="school">{profile.education.school}</span>
            <span className="course">{profile.education.course}</span>
          </p>

          <p className="home-tagline">{profile.tagline}</p>

          <div className="home-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-primary">
              Download CV
            </a>
          </div>
        </div>

        <div className="home-image">
          <div className="pfp-wrapper">
            <img className="pfp" src={profile.photo} alt={`Portrait of ${profile.name}`} />
          </div>
        </div>
      </div>

      <a className="scroll-indicator" href="#about" aria-label="Scroll to About">
        <span className="mouse" aria-hidden="true">
          <span className="mouse-wheel" />
        </span>
        <span className="scroll-text">Scroll down</span>
      </a>
    </section>
  );
}
