import { useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Close } from './Icons.jsx';

/**
 * Full-screen viewer. `items` is the list being browsed and `index` the one on
 * screen, so a certificate deck can be stepped through with the arrows or the
 * keyboard. A single image is just a list of one, and the arrows hide.
 */
export default function Lightbox({ items, index, onClose, onStep }) {
  const item = items?.[index];
  const many = items.length > 1;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (!many) return;
      if (e.key === 'ArrowLeft') onStep(-1);
      if (e.key === 'ArrowRight') onStep(1);
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('is-locked');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [onClose, onStep, many]);

  if (!item) return null;

  const isPdfOnly = !item.img && item.href;

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <Close width={18} height={18} />
      </button>

      {many && (
        <>
          <button
            className="lightbox-nav is-prev"
            onClick={(e) => {
              e.stopPropagation();
              onStep(-1);
            }}
            aria-label="Previous"
          >
            <ChevronLeft width={22} height={22} />
          </button>
          <button
            className="lightbox-nav is-next"
            onClick={(e) => {
              e.stopPropagation();
              onStep(1);
            }}
            aria-label="Next"
          >
            <ChevronRight width={22} height={22} />
          </button>
        </>
      )}

      <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        {item.img && <img src={item.img} alt={item.title} />}

        <p className="lightbox-caption">{item.title}</p>

        <div className="lightbox-actions">
          {many && (
            <span className="lightbox-count">
              {index + 1} / {items.length}
            </span>
          )}
          {item.href && (
            <a className="btn btn-ghost" href={item.href} target="_blank" rel="noreferrer">
              {isPdfOnly ? 'Open the certificate' : 'Open the original'}{' '}
              <ArrowUpRight width={16} height={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
