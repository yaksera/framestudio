"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CATEGORIES } from "@/lib/data";

export default function Portfolio({ works }) {
  const [active, setActive] = useState("all");
  const grid = useRef(null);
  const first = useRef(true);

  const shown = active === "all" ? works : works.filter((w) => w.category === active);

  // Animate cards in whenever the filter changes (skip the first render; scroll reveal handles it).
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const cards = grid.current.querySelectorAll(".card");
    const tween = gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }
    );
    return () => tween.kill();
  }, [active]);

  return (
    <section className="section" id="portfolio">
      <div className="wrap">
        <div className="tabs" id="categories" data-reveal role="tablist">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={active === c.key}
              className={active === c.key ? "is-active" : ""}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <header className="head" data-reveal>
          <p className="kicker">Curated Folio</p>
          <h2>Selected Works &amp; Editions</h2>
        </header>

        <div className="grid" ref={grid}>
          {shown.map((w, i) => (
            <article className={`card card--${i % 6}`} key={w.id}>
              <div className="card__media">
                <Image src={w.image} alt={w.title} fill sizes="(max-width: 800px) 100vw, 40vw" />
              </div>
              <h3>{w.title}</h3>
              <p>{w.description}</p>
            </article>
          ))}
        </div>

        <div className="cta" data-reveal>
          <p>Seeking a tailored curation or bespoke print acquisition?</p>
          <a href="#contact" className="btn btn--dark">Inquire regarding custom folios</a>
        </div>
      </div>
    </section>
  );
}
