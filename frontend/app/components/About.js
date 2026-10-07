import Image from "next/image";
import { PUBLICATIONS } from "@/lib/data";

export default function About() {
  return (
    <section className="section section--tint" id="about">
      <div className="wrap about">
        <div className="about__media" data-reveal>
          <div className="about__frame">
            <Image data-parallax src="/images/camera.png" alt="A vintage film camera and lens beside a photography book" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <p className="about__sign">
            <strong>Elena Rostova</strong>
            <span>Lead Photographer &amp; Director</span>
          </p>
        </div>

        <div className="about__text">
          <p className="kicker" data-reveal>Curatorial Approach</p>
          <blockquote data-reveal>
            “Photography is not the art of staging; it is the quiet discipline of noticing.”
          </blockquote>
          <p data-reveal>
            Trained in classical fine art before picking up a medium-format camera in Florence, Elena brings an
            architect’s eye for spatial proportion and a painter’s reverence for unforced light. Every commission is
            approached as a living monograph rather than a checklist of formula exposures.
          </p>
          <p data-reveal>
            By combining analog medium-format film emulsions with modern high-dynamic digital sensors, our studio
            captures the intangible texture of a celebration, the profound stillness of an artist’s workspace, and
            the clean authority of world-class architecture.
          </p>
          <div className="press" data-reveal>
            <span className="kicker">Selected Features &amp; Publications</span>
            <ul>
              {PUBLICATIONS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <a href="#contact" className="btn btn--dark" data-reveal>Request studio dossier &amp; rates</a>
        </div>
      </div>
    </section>
  );
}
