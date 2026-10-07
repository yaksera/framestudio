import Image from "next/image";
import { PUBLICATIONS } from "@/lib/data";
import Roll from "./Roll";
import { ArrowUpRight } from "./Icons";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about__grid">
        <figure className="about__figure" data-reveal>
          <div className="about__frame">
            <div className="about__img" data-parallax>
              <Image src="/images/camera.png" alt="A vintage film camera and lens beside a photography book" fill sizes="(max-width: 900px) 100vw, 36vw" />
            </div>
          </div>
          <figcaption>
            <span className="about__name">ELENA ROSTOVA</span>
            <span>Lead Photographer &amp; Director</span>
          </figcaption>
        </figure>

        <div className="about__text">
          <p className="kicker-sans" data-reveal>CURATORIAL APPROACH</p>
          <blockquote data-reveal>
            &quot;Photography is not the art of staging; it is the quiet discipline of noticing.&quot;
          </blockquote>
          <p data-reveal>
            Trained in classical fine art before picking up a medium-format camera in Florence, Elena brings an
            architect&apos;s eye for spatial proportion and a painter&apos;s reverence for unforced light. Every commission
            is approached as a living monograph rather than a checklist of formula exposures.
          </p>
          <p data-reveal>
            By combining analog medium-format film emulsions with modern high-dynamic digital sensors, our studio
            captures the intangible texture of a celebration, the profound stillness of an artist&apos;s workspace, and
            the clean authority of world-class architecture.
          </p>
          <div className="press" data-reveal>
            <p className="kicker-sans">SELECTED FEATURES &amp; PUBLICATIONS</p>
            <ul>
              {PUBLICATIONS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <a href="#contact" className="btn btn--black btn--icon" data-reveal>
            <Roll>REQUEST STUDIO DOSSIER &amp; RATES</Roll>
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
