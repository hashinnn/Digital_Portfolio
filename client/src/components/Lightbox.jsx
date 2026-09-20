import { useEffect } from 'react';
import { ArrowUpRight, Close } from './Icons.jsx';

/**
 * Full-screen viewer for certificates and storyboard images.
 * `item` is { img?, title, href? } — a PDF-only certificate shows a link out.
 */
export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.classList.add('is-locked');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [onClose]);

  if (!item) return null;

  const isPdfOnly = !item.img && item.href;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.title}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <Close width={18} height={18} />
      </button>

      {item.img && <img src={item.img} alt={item.title} onClick={(e) => e.stopPropagation()} />}

      <p className="lightbox-caption">{item.title}</p>

      {item.href && (
        <a
          className="btn btn-ghost"
          href={item.href}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {isPdfOnly ? 'Open the certificate' : 'Open the original'}{' '}
          <ArrowUpRight width={16} height={16} />
        </a>
      )}
    </div>
  );
}
