import { skills } from '../data/content.js';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">03 — Skills</span>
          <h2 className="section-title">{skills.heading}</h2>
          <p className="section-lead">
            The stack I actually build with — everything here has shipped in a project below.
          </p>
        </header>

        <div className="skills-grid">
          {skills.groups.map((group, i) => (
            <article className="skill-card reveal" key={group.name} data-reveal-delay={i * 60}>
              <h3>{group.name}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
