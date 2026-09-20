import { journey } from '../data/content.js';

export default function Journey({ onZoom }) {
  return (
    <section className="section" id="hackathons">
      <div className="shell">
        <h2 className="section-title">{journey.heading}</h2>
        <hr className="rule" />
        <p className="section-lead">{journey.lead}</p>

        <div className="storyboard">
          {journey.panels.map((panel, i) => (
            <article
              className={`panel reveal${i % 2 === 1 ? ' is-flipped' : ''}`}
              key={panel.chapter}
            >
              <div className="panel-text">
                <div className="panel-chapter">
                  <span className="panel-num">{panel.chapter}</span>
                  <span className="panel-year">{panel.year}</span>
                </div>

                <h3 className="panel-title">{panel.title}</h3>
                <span className={`verdict${panel.verdict === 'No placing' ? ' is-loss' : ''}`}>
                  {panel.verdict}
                </span>
                <p className="panel-body">{panel.body}</p>
              </div>

              <div className="panel-media">
                <figure>
                  <img
                    src={panel.image}
                    alt={panel.caption}
                    loading="lazy"
                    onClick={() => onZoom({ img: panel.image, title: panel.caption })}
                  />
                  <figcaption>{panel.caption}</figcaption>
                </figure>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
