"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Roll from "./Roll";

export default function Hero({ ready }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ready) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(ref);
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(q(".hero__top > *"), { opacity: 0, y: 12, stagger: 0.1, duration: 0.7 }, 0)
        .from(q(".hero__rule"), { scaleX: 0, transformOrigin: "left", duration: 1.2, ease: "power2.inOut" }, 0.1)
        .from(q(".hero__kicker"), { opacity: 0, y: 14, duration: 0.7 }, 0.3)
        .from(q(".line > span"), { yPercent: 105, stagger: 0.12, duration: 1.1 }, 0.35)
        .from(q(".hero__aside > *"), { opacity: 0, y: 20, stagger: 0.12, duration: 0.8 }, 0.7)
        .from(q(".hero__media"), { clipPath: "inset(18% 4% 0% 4%)", duration: 1.6, ease: "power4.out" }, 0.6)
        .from(q(".hero__media img"), { scale: 1.25, duration: 2, ease: "power3.out" }, 0.6)
        .from(q(".hero__caption > *"), { opacity: 0, y: 16, stagger: 0.1, duration: 0.8 }, 1.4);

      // Image settles from a slight inset to full width as it scrolls into place.
      gsap.fromTo(
        q(".hero__frame"),
        { scale: 0.952 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: q(".hero__frame")[0], start: "top 90%", end: "top 25%", scrub: true },
        }
      );
      gsap.to(q(".hero__media img"), {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: q(".hero__frame")[0], start: "top bottom", end: "bottom top", scrub: true },
      });
    });
    return () => mm.revert();
  }, [ready]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__text">
        <div className="hero__top">
          <span className="chip">
            <i className="dot" /> 2025 / 2026 COMMISSION CALENDAR OPEN
          </span>
          <ul className="hero__places">
            <li>NEPAL</li>
            <li>USA</li>
            <li>TURKEY</li>
          </ul>
        </div>
        <div className="hero__rule" />

        <div className="hero__main">
          <div>
            <p className="kicker-serif hero__kicker">MONOGRAPH &amp; EDITORIAL ARCHIVE</p>
            <h1>
              <span className="line"><span>Observing life in its quietest</span></span>
              <span className="line"><span>grandeur.</span></span>
            </h1>
          </div>
          <div className="hero__aside">
            <p>
              Fine art editorial and documentary commissions across weddings, artists, and architectural corporate
              houses. Honest light, timeless stillness, authentic human emotion.
            </p>
            <div className="hero__actions">
              <a href="#portfolio" className="btn btn--black"><Roll>EXPLORE WORKS</Roll></a>
              <a href="#contact" className="btn btn--soft"><Roll>CHECK DATE</Roll></a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="hero__frame">
          <div className="hero__media">
            <Image src="/images/hero.png" alt="A couple kisses beneath a floral arch above a mountain valley" fill priority sizes="(max-width: 1920px) 100vw, 1680px" />
            <div className="hero__caption">
              <span>FEATURED MONOGRAPH • CORNWALL COASTLINE</span>
              <strong>The Coastal Vows — Brittany Coast</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
