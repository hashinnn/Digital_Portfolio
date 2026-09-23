import { journey } from '../data/content.js';
import { ArrowUpRight, Medal } from './Icons.jsx';

export default function Journey({ onZoom }) {
  return (
    <section className="section" id="hackathons">
      <div className="shell">
        <h2 className="section-title">{journey.heading}</h2>
        <hr className="rule" />
        <p className="section-lead">{journey.lead}</p>

        <ol className="storyboard">
          {journey.panels.map((panel, i) => {
            const lost = panel.verdict === 'No placing';
            return (
              <li className={`frame reveal${i % 2 === 1 ? ' is-flipped' : ''}`} key={panel.chapter}>
                {/* The storyboard cell: sprocketed film frame + slate strip */}
                <div className="frame-cell">
                  <span className="frame-scene">
                    Scene {panel.chapter} <i>·</i> {panel.year}
                  </span>

                  {panel.medal && (
                    <span
                      className={`frame-medal is-${panel.medal}`}
                      title={`${panel.medal === 'silver' ? 'Silver' : 'Bronze'} medal`}
                    >
                      <Medal width={28} height={28} aria-hidden="true" />
                    </span>
                  )}

                  <button
                    className="frame-window"
                    onClick={() =>
                      onZoom({ img: panel.image, title: panel.caption, href: panel.href })
                    }
                    aria-label={`View ${panel.caption} full size`}
                  >
                    <img src={panel.image} alt={panel.caption} loading="lazy" />
                  </button>

                  <span className="frame-slate">{panel.caption}</span>
                </div>

                {/* The beat sheet beside it */}
                <div className="frame-copy">
                  <span className="frame-ghost" aria-hidden="true">
                    {panel.chapter}
                  </span>

                  <h3 className="frame-title">{panel.title}</h3>

                  <span className={`stamp${lost ? ' is-loss' : ''}`}>{panel.verdict}</span>

                  <p className="frame-body">{panel.body}</p>

                  {panel.href && (
                    <a className="frame-link" href={panel.href} target="_blank" rel="noreferrer">
                      {panel.linkLabel} <ArrowUpRight width={15} height={15} />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
