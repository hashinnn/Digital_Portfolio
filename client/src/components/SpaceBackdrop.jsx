import { useEffect, useRef } from 'react';

const TEAL = '45, 212, 191';
const LINK_DISTANCE = 120;

/**
 * The space theme carried over from the previous portfolio: a drifting field
 * of teal particles that link up when they pass close, and a soft teal glow
 * that follows the cursor.
 *
 * Both are decorative, so they are skipped entirely on touch/small screens
 * and whenever the visitor has asked for reduced motion.
 */
export default function SpaceBackdrop() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  // --- Starfield ----------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let frame;

    const resize = () => {
      // Match the backing store to the device pixel ratio so the dots stay
      // crisp instead of blurring on high-DPI screens.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = Math.min(40, Math.floor(w / 30));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      }));
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        // Wrap around the edges so the field never thins out.
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${TEAL}, ${p.opacity})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist >= LINK_DISTANCE) continue;

          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${TEAL}, ${0.06 * (1 - dist / LINK_DISTANCE)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // --- Cursor glow --------------------------------------------------------
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    if (window.innerWidth <= 768) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let pending = null;

    const onMove = (e) => {
      // Coalesce to one paint per frame — mousemove fires far more often.
      if (pending !== null) return;
      pending = requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        glow.style.opacity = '1';
        pending = null;
      });
    };

    const onLeave = () => {
      glow.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      if (pending !== null) cancelAnimationFrame(pending);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <canvas id="particles" ref={canvasRef} aria-hidden="true" />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
    </>
  );
}
