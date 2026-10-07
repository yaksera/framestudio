"use client";

import { useState } from "react";
import { NATURES } from "@/lib/data";
import { sendInquiry } from "@/lib/api";

const EMPTY = { name: "", email: "", nature: "wedding", date_or_season: "", location: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [state, setState] = useState({ status: "idle", message: "" });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setState({ status: "sending", message: "" });
    try {
      const res = await sendInquiry(form);
      setForm(EMPTY);
      setState({ status: "ok", message: res.detail });
    } catch (err) {
      setState({ status: "error", message: err.message || "We could not send your inquiry." });
    }
  };

  return (
    <section className="section" id="contact">
      <div className="wrap contact">
        <div className="contact__intro" data-reveal>
          <p className="kicker">Initiate Contact</p>
          <h2>Begin a Conversation</h2>
          <p>
            We treat every inquiry with prompt discretion and personal attention. Tell us about your projected
            gathering, creative residency, or editorial assignment.
          </p>
          <dl>
            <div>
              <dt>Direct Studio Email</dt>
              <dd><a href="mailto:commissions@framestudio.co">commissions@framestudio.co</a></dd>
            </div>
            <div>
              <dt>Studio Ateliers</dt>
              <dd>7 Rue de Tournon, 75006 Paris<br />14 Redchurch St, Shoreditch, London</dd>
            </div>
            <div>
              <dt>Direct Concierge</dt>
              <dd>WhatsApp Monograph Office: +33 (0) 1 42 68 09 11</dd>
            </div>
          </dl>
        </div>

        <form className="form" onSubmit={submit} data-reveal data-delay="0.1">
          <div className="form__row">
            <label>
              Your full name(s) *
              <input required value={form.name} onChange={set("name")} placeholder="e.g. Clara & Julian" />
            </label>
            <label>
              Email address *
              <input required type="email" value={form.email} onChange={set("email")} placeholder="clara@domain.com" />
            </label>
          </div>
          <label>
            Nature of commission *
            <select value={form.nature} onChange={set("nature")}>
              {NATURES.map((n) => (
                <option key={n.value} value={n.value}>{n.label}</option>
              ))}
            </select>
          </label>
          <div className="form__row">
            <label>
              Date or projected season *
              <input required value={form.date_or_season} onChange={set("date_or_season")} placeholder="e.g. September 2025" />
            </label>
            <label>
              Location or venue
              <input value={form.location} onChange={set("location")} placeholder="e.g. Lake Como, Italy" />
            </label>
          </div>
          <label>
            Tell us about your celebration, aesthetic vision, or project details
            <textarea rows={4} value={form.message} onChange={set("message")} placeholder="Atmosphere, approximate guest count, planned schedule, or specific requirements..." />
          </label>
          <div className="form__foot">
            <button className="btn btn--dark" disabled={state.status === "sending"}>
              {state.status === "sending" ? "Sending…" : "Send Commission Inquiry"}
            </button>
            <span>Replies dispatched within 24 hours.</span>
          </div>
          <p className={`form__msg form__msg--${state.status}`} role="status" aria-live="polite">{state.message}</p>
        </form>
      </div>
    </section>
  );
}
