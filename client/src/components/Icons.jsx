/** Inline stroke icons — 24×24 grid, currentColor, no icon-font dependency. */

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const Trophy = (p) => (
  <svg {...base} {...p}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
    <path d="M7 6H4.5a2.5 2.5 0 0 0 2.5 4M17 6h2.5a2.5 2.5 0 0 1-2.5 4" />
    <path d="M12 14v3M9 20h6M10 17h4" />
  </svg>
);

export const Medal = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="15" r="5" />
    <path d="M12 13.5 12.8 15l1.7.2-1.2 1.2.3 1.6-1.6-.8-1.6.8.3-1.6L9.5 15.2l1.7-.2.8-1.5Z" />
    <path d="M8.5 10 6 3h4l2 4M15.5 10 18 3h-4" />
  </svg>
);

export const Star = (p) => (
  <svg {...base} {...p}>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
  </svg>
);

export const Handshake = (p) => (
  <svg {...base} {...p}>
    <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2l-.5-.5" />
    <path d="M14.5 16.5 16 18a1.4 1.4 0 0 0 2-2l-4-4" />
    <path d="M3 10 7 6l3 1 4-1 4 4M3 10l4 4 2-2" />
    <path d="M21 10v5M3 10v5" />
  </svg>
);

export const Spray = (p) => (
  <svg {...base} {...p}>
    <rect x="7" y="9" width="8" height="12" rx="2" />
    <path d="M9 9V6h4v3M18 5h.01M20.5 8h.01M18 11h.01M20.5 14h.01" />
  </svg>
);

export const Mail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" />
  </svg>
);

export const Phone = (p) => (
  <svg {...base} {...p}>
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2.5 2.5 0 0 1-2.7 2.5A16.5 16.5 0 0 1 3.5 5.7 2.5 2.5 0 0 1 6 3Z" />
  </svg>
);

export const LinkedIn = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-3.6a2.1 2.1 0 0 1 4.2 0V17" />
    <path d="M11.5 10.5V17" />
  </svg>
);

export const Github = (p) => (
  <svg {...base} {...p}>
    <path d="M9 19c-4 1.3-4-2.1-5.6-2.6M15 21v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.5 2.6 5.5 2.9 5.5 2.9a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4 9.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.2V21" />
  </svg>
);

export const MapPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Download = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v11M7.5 10 12 14.5 16.5 10M4 19h16" />
  </svg>
);

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Close = (p) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const Menu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Doc = (p) => (
  <svg {...base} {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);

export const Certificate = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M7 8h6M7 11h4" />
    <circle cx="17" cy="17.5" r="2.5" />
    <path d="M15.5 19.5 15 23l2-1 2 1-.5-3.5" />
  </svg>
);

export const icons = { trophy: Trophy, medal: Medal, star: Star, handshake: Handshake, spray: Spray };
