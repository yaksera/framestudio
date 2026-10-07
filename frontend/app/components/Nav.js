"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Roll from "./Roll";
import { User } from "./Icons";

const LINKS = [
  ["Portfolio", "#portfolio"],
  ["Categories", "#categories"],
  ["About", "#about"],
  ["Services", "#method"],
  ["Journal", "#journal"],
  ["FAQ", "#faq"],
];

export default function Nav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${compact ? "nav--compact" : ""} ${open ? "nav--open" : ""}`}>
      <a href="#top" className="nav__logo" aria-label="Frame Studio home" onClick={close}>
        <Image src="/images/logo.png" alt="Frame Studio" width={224} height={112} priority />
      </a>
      <nav className="nav__links" aria-label="Primary">
        {LINKS.map(([label, href], i) => (
          <a key={href} href={href} onClick={close} className={i === 0 ? "is-current" : ""}>
            <Roll>{label.toUpperCase()}</Roll>
          </a>
        ))}
      </nav>
      <div className="nav__actions">
        <a href="#contact" className="pill" onClick={close}>
          <Roll>INQUIRE / BOOK A DATE</Roll>
        </a>
        <a href="#contact" className="avatar" aria-label="Client area" onClick={close}>
          <User />
        </a>
        <button className="nav__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}
