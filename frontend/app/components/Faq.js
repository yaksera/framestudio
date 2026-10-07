"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { Chevron } from "./Icons";

function Item({ faq, open, onToggle }) {
  const body = useRef(null);

  const toggle = () => {
    gsap.killTweensOf(body.current);
    gsap.to(body.current, open
      ? { height: 0, duration: 0.5, ease: "power3.inOut" }
      : { height: "auto", duration: 0.6, ease: "power3.out" });
    onToggle();
  };

  return (
    <div className={`faq__item ${open ? "is-open" : ""}`}>
      <button aria-expanded={open} onClick={toggle}>
        <span>{faq.question}</span>
        <Chevron />
      </button>
      <div className="faq__body" ref={body} style={{ height: 0 }}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}

export default function Faq({ faqs }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="section section--alt faq" id="faq">
      <div className="wrap">
        <header className="faq__head" data-reveal>
          <p className="kicker-serif kicker--ink">ANSWERS &amp; DETAILS</p>
          <h2>Frequently Contemplated Questions</h2>
        </header>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <div key={f.id} data-reveal data-delay={i * 0.06}>
              <Item faq={f} open={open === f.id} onToggle={() => setOpen(open === f.id ? null : f.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
