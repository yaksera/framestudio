"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

function Item({ faq, open, onToggle }) {
  const body = useRef(null);

  const toggle = () => {
    const el = body.current;
    gsap.killTweensOf(el);
    if (open) {
      gsap.to(el, { height: 0, duration: 0.5, ease: "power3.inOut" });
    } else {
      gsap.to(el, { height: "auto", duration: 0.6, ease: "power3.out" });
    }
    onToggle();
  };

  return (
    <div className={`faq__item ${open ? "is-open" : ""}`}>
      <button aria-expanded={open} onClick={toggle}>
        <span>{faq.question}</span>
        <i aria-hidden="true" />
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
    <section className="section section--tint" id="faq">
      <div className="wrap wrap--narrow">
        <header className="head head--center" data-reveal>
          <p className="kicker">Answers &amp; Details</p>
          <h2>Frequently Contemplated Questions</h2>
        </header>
        <div className="faq" data-reveal>
          {faqs.map((f) => (
            <Item key={f.id} faq={f} open={open === f.id} onToggle={() => setOpen(open === f.id ? null : f.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}
