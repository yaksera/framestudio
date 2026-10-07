import { STEPS } from "@/lib/data";

export default function Method() {
  return (
    <section className="section method" id="method">
      <div className="wrap">
        <header data-reveal>
          <p className="kicker-serif">METHODOLOGY</p>
          <h2>The Photographic Cadence</h2>
          <p className="lede">
            From first correspondence to archival handover, we protect space for natural rhythm, intentional
            stillness, and unforced human truth.
          </p>
        </header>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.n} data-reveal data-delay={i * 0.1}>
              <span className="steps__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
