const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const ArrowRight = (p) => (
  <svg width="18" height="14" viewBox="0 0 18 14" {...base} {...p}>
    <path d="M1 7h16M11 1l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p) => (
  <svg width="12" height="12" viewBox="0 0 12 12" {...base} {...p}>
    <path d="M2 10 10 2M3.5 2H10v6.5" />
  </svg>
);

export const Chevron = (p) => (
  <svg width="18" height="10" viewBox="0 0 18 10" {...base} {...p}>
    <path d="m1 1 8 8 8-8" />
  </svg>
);

export const User = (p) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...p}>
    <circle cx="10" cy="6" r="4" />
    <path d="M2 19c0-4.4 3.6-7 8-7s8 2.6 8 7z" />
  </svg>
);
