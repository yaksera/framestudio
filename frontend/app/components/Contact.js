"use client";

import { useState } from "react";
import { NATURES } from "@/lib/data";
import { sendInquiry } from "@/lib/api";
import Roll from "./Roll";

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
    <section className="section contact" id="contact">
      <div className="wrap contact__grid">
        <div className="contact__intro" data-reveal>
          <p className="kicker-serif kicker--ink">INITIATE CONTACT</p>
          <h2>Begin a Conversation</h2>
          <p className="contact__lede">
            We treat every inquiry with prompt discretion and personal attention. Tell us about your projected
            gathering, creative residency, or editorial assignment.
          </p>
          <dl className="contact__details">
            <div>
              <dt className="kicker-serif kicker--ink">DIRECT STUDIO EMAIL</dt>
              <dd className="contact__email"><a href="mailto:commissions@framestudio.co">commissions@framestudio.co</a></dd>
            </div>
            <div>
              <dt>STUDIO ATELIERS</dt>
              <dd className="contact__address">7 Rue de Tournon, 75006 Paris<br />14 Redchurch St, Shoreditch, London</dd>
            </div>
            <div>
              <dt>DIRECT CONCIERGE</dt>
              <dd>WhatsApp Monograph Office: +33 (0) 1 42 68 09 11</dd>
            </div>
          </dl>
        </div>

        <form className="form" onSubmit={submit} data-reveal data-delay="0.1">
          <div className="form__row">
            <label>
              YOUR FULL NAME(S) *
              <input required value={form.name} onChange={set("name")} placeholder="e.g. Clara & Julian" />
            </label>
            <label>
              EMAIL ADDRESS *
              <input required type="email" value={form.email} onChange={set("email")} placeholder="clara@domain.com" />
            </label>
          </div>

          <fieldset>
            <legend>NATURE OF COMMISSION *</legend>
            <div className="chips">
              {NATURES.map((n) => (
                <button
                  type="button"
                  key={n.value}
                  aria-pressed={form.nature === n.value}
                  className={form.nature === n.value ? "is-active" : ""}
                  onClick={() => setForm({ ...form, nature: n.value })}
                >
                  {n.label.toUpperCase()}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="form__row">
            <label>
              DATE OR PROJECTED SEASON *
              <input required value={form.date_or_season} onChange={set("date_or_season")} className="ph-body" placeholder="e.g. September 2025" />
            </label>
            <label>
              LOCATION OR VENUE
              <input value={form.location} onChange={set("location")} className="ph-body" placeholder="e.g. Lake Como, Italy" />
            </label>
          </div>

          <label>
            TELL US ABOUT YOUR CELEBRATION, AESTHETIC VISION, OR PROJECT DETAILS
            <textarea rows={2} value={form.message} onChange={set("message")} placeholder="Atmosphere, approximate guest count, planned schedule, or specific requirements..." />
          </label>

          <div className="form__foot">
            <button className="btn btn--black" disabled={state.status === "sending"}>
              <Roll>{state.status === "sending" ? "SENDING…" : "SEND COMMISSION INQUIRY"}</Roll>
            </button>
            <span>Replies dispatched within 24 hours.</span>
          </div>
          <p className={`form__msg form__msg--${state.status}`} role="status" aria-live="polite">{state.message}</p>
        </form>
      </div>
    </section>
  );
}
