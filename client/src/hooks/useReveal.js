import { useEffect } from 'react';

/**
 * Adds `.is-visible` to every `.reveal` element once it scrolls into view.
 * Elements already on screen at mount reveal immediately.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!nodes.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = Number(entry.target.dataset.revealDelay || 0);
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          io.unobserve(entry.target);
        });
      },
      // A fractional threshold can never be reached by an element taller than
      // the viewport, so gate on "any part visible" plus a bottom margin.
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  });
}
