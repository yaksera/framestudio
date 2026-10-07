"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CATEGORIES } from "@/lib/data";
import Roll from "./Roll";
import { ArrowRight } from "./Icons";

export default function Portfolio({ works }) {
  const [active, setActive] = useState("all");
  const grid = useRef(null);
  const first = useRef(true);

  const shown = active === "all" ? works : works.filter((w) => w.category === active);

  // Animate cards in whenever the filter changes (the first render is handled by the scroll reveal).
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const tween = gsap.fromTo(
      grid.current.querySelectorAll(".card"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }
    );
    return () => tween.kill();
  }, [active]);

  return (
    <section className="section section--alt portfolio" id="portfolio">
      <div className="wrap">
        <header className="portfolio__head" id="categories">
          <div data-reveal>
            <p className="kicker-serif">CURATED FOLIO</p>
            <h2>Selected Works &amp; Editions</h2>
          </div>
          <div className="tabs" role="tablist" data-reveal data-delay="0.1">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                role="tab"
                aria-selected={active === c.key}
                className={active === c.key ? "is-active" : ""}
                onClick={() => setActive(c.key)}
              >
                {c.label.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="grid" ref={grid}>
          {shown.map((w, i) => (
            <article className={`card card--${i < 3 ? (i === 0 ? "wide" : "narrow") : "third"}`} key={w.id} data-reveal data-delay={(i % 3) * 0.08}>
              <div className="card__media">
                <Image src={w.image} alt={w.title} fill sizes="(max-width: 800px) 100vw, 45vw" />
              </div>
              <h3>{w.title}</h3>
              <p>{w.description}</p>
            </article>
          ))}
        </div>

        <div className="folio-cta" data-reveal>
          <p>Seeking a tailored curation or bespoke print acquisition?</p>
          <a href="#contact" className="link-arrow">
            <Roll>INQUIRE REGARDING CUSTOM FOLIOS</Roll>
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
