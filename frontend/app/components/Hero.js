"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero({ ready }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ready) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(ref);
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(q(".hero__img"), { scale: 1.18, duration: 2.2, ease: "power2.out" }, 0)
        .from(q(".hero__eyebrow > *"), { opacity: 0, y: 16, stagger: 0.12, duration: 0.8 }, 0.2)
        .from(q(".line > span"), { yPercent: 110, stagger: 0.14, duration: 1.2 }, 0.3)
        .from(q(".hero__side > *"), { opacity: 0, y: 24, stagger: 0.12, duration: 0.9 }, 0.9)
        .from(q(".hero__foot > *"), { opacity: 0, y: 20, stagger: 0.1, duration: 0.8 }, 1.1);
      gsap.to(q(".hero__img"), {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, ref);
    return () => mm.revert();
  }, [ready]);

  return (
    <section className="hero" id="top" ref={ref}>
      <Image className="hero__img" src="/images/hero.png" alt="A couple kisses beneath a floral arch above a mountain valley" fill priority sizes="100vw" />
      <div className="hero__shade" />
      <div className="hero__inner">
        <div className="hero__eyebrow">
          <span>2025 / 2026 Commission Calendar Open</span>
          <span>Nepal · USA · Turkey</span>
        </div>
        <div className="hero__main">
          <div>
            <p className="kicker">Monograph &amp; Editorial Archive</p>
            <h1>
              <span className="line"><span>Observing life in</span></span>
              <span className="line"><span>its quietest <em>grandeur.</em></span></span>
            </h1>
          </div>
          <div className="hero__side">
            <p>
              Fine art editorial and documentary commissions across weddings, artists, and architectural corporate
              houses. Honest light, timeless stillness, authentic human emotion.
            </p>
            <div className="hero__actions">
              <a href="#portfolio" className="btn btn--light">Explore Works</a>
              <a href="#contact" className="btn btn--ghost">Check Date</a>
            </div>
          </div>
        </div>
        <div className="hero__foot">
          <span>Featured Monograph — Cornwall Coastline</span>
          <span className="hero__caption">The Coastal Vows — Brittany Coast</span>
        </div>
      </div>
    </section>
  );
}
