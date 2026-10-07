"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["Portfolio", "#portfolio"],
  ["Categories", "#categories"],
  ["About", "#about"],
  ["Services", "#method"],
  ["Journal", "#journal"],
  ["FAQ", "#faq"],
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${solid ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}>
      <a href="#top" className="nav__brand" aria-label="Frame Studio">
        FRAME<span>studio.</span>
      </a>
      <nav className="nav__links" aria-label="Primary">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="nav__cta" onClick={() => setOpen(false)}>
        Inquire / Book a date
      </a>
      <button className="nav__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <i /> <i />
      </button>
    </header>
  );
}
