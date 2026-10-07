"use client";

import { useState } from "react";
import { subscribe } from "@/lib/api";

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
    <footer className="footer" id="journal">
      <div className="wrap footer__grid">
        <div>
          <p className="kicker">Currently accepting bookings for 2025/2026</p>
          <h2>Nepal &amp; India · Available Globally for Commissions</h2>
          <p>Documentary fine art, monograph publications, and bespoke campaign commissions for discerning houses and collectors.</p>
          <p className="footer__brand">FRAME STUDIO</p>
          <nav className="footer__social" aria-label="Social">
            {["Instagram", "Editorial", "Substack", "Pinterest"].map((s) => (
              <a key={s} href="#top">{s}</a>
            ))}
          </nav>
        </div>
        <div>
          <p className="kicker">Private Print Drops</p>
          <p>Receive archival folio notices, curatorial essays, and rare physical edition launches.</p>
          <form className="news" onSubmit={submit}>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your correspondence email" aria-label="Email" />
            <button disabled={state.status === "sending"}>Join</button>
          </form>
          <p className={`form__msg form__msg--${state.status}`} role="status" aria-live="polite">{state.message}</p>
          <p className="footer__legal">© 2026 Frame Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
