"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Loader({ onDone }) {
  const ref = useRef(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const finish = () => {
      setGone(true);
      onDone();
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const call = gsap.delayedCall(0, finish);
      return () => call.kill();
    }
    const tl = gsap.timeline({ onComplete: finish });
    tl.from(ref.current.querySelector("img"), { opacity: 0, scale: 0.94, duration: 0.9, ease: "power2.out" })
      .to(ref.current.querySelector("img"), { opacity: 0, y: -20, duration: 0.5, delay: 0.5, ease: "power2.in" })
      .to(ref.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.1");
    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;
  return (
    <div className="loader" ref={ref} aria-hidden="true">
      <Image src="/images/logo.png" alt="" width={260} height={130} priority />
    </div>
  );
}
