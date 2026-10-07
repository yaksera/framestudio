"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FALLBACK_FAQS, FALLBACK_WORKS } from "@/lib/data";
import { getFaqs, getWorks } from "@/lib/api";
import Loader from "./Loader";
import Nav from "./Nav";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import About from "./About";
import Method from "./Method";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const root = useRef(null);
  const [works, setWorks] = useState(FALLBACK_WORKS);
  const [faqs, setFaqs] = useState(FALLBACK_FAQS);
  const [ready, setReady] = useState(false);

  // Content comes from the Django API; the bundled copy is the fallback.
  useEffect(() => {
    getWorks().then((d) => d.length && setWorks(d)).catch(() => {});
    getFaqs().then((d) => d.length && setFaqs(d)).catch(() => {});
  }, []);

  // Scroll-driven reveals for every [data-reveal] element.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          delay: Number(el.dataset.delay || 0),
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={root}>
      <Loader onDone={() => setReady(true)} />
      <Nav />
      <main>
        <Hero ready={ready} />
        <Portfolio works={works} />
        <About />
        <Method />
        <Faq faqs={faqs} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
