"use client";

import { useState } from "react";
import { subscribe } from "@/lib/api";

const SOCIAL = ["INSTAGRAM", "EDITORIAL SUBSTACK", "PINTEREST"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState({ status: "idle", message: "" });

  const submit = async (e) => {
    e.preventDefault();
    setState({ status: "sending", message: "" });
    try {
      const res = await subscribe(email);
      setEmail("");
      setState({ status: "ok", message: res.detail });
    } catch (err) {
      setState({ status: "error", message: err.message });
    }
  };

  return (
    <>
      <div className="band" aria-hidden="true" />
      <footer className="footer" id="journal">
        <div className="wrap">
          <div className="footer__top">
            <div className="footer__about">
              <span className="chip chip--white">
                <i className="dot" /> CURRENTLY ACCEPTING BOOKINGS FOR 2025/2026
              </span>
              <h2>Nepal &amp; India • Available Globally for Commissions</h2>
              <p>Documentary fine art, monograph publications, and bespoke campaign commissions for discerning houses and collectors.</p>
            </div>
            <div className="footer__news">
              <p className="footer__label">PRIVATE PRINT DROPS</p>
              <p>Receive archival folio notices, curatorial essays, and rare physical edition launches.</p>
              <form className="news" onSubmit={submit}>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your correspondence email" aria-label="Email" />
                <button disabled={state.status === "sending"}>Join</button>
              </form>
              <p className={`form__msg form__msg--${state.status}`} role="status" aria-live="polite">{state.message}</p>
            </div>
          </div>

          <p className="wordmark" aria-hidden="true">FRAME STUDIO</p>

          <div className="footer__bottom">
            <nav aria-label="Social">
              {SOCIAL.map((s) => (
                <a key={s} href="#top">{s}</a>
              ))}
            </nav>
            <p>© 2026 FRAME STUDIO. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
