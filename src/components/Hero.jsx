import { ArrowRight, FileText, Table2 } from "lucide-react";
import BackgroundMesh from "./BackgroundMesh";
import "./Hero.css";

function TechIcon({ name }) {
  if (name === "pandas") {
    return <Table2 aria-hidden="true" />;
  }

  if (name === "React") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="2.1" />
        <ellipse cx="16" cy="16" rx="13" ry="5" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
      </svg>
    );
  }

  if (name === "Python") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 4c-5 0-5 2-5 5v4h9v2H8c-3 0-4 2-4 5s1 5 4 5h4v-4c0-3 2-5 5-5h6c2 0 4-2 4-5s-2-7-6-7h-5Z" />
        <path d="M16 28c5 0 5-2 5-5v-4h-9v-2h12c3 0 4-2 4-5" />
        <circle cx="14" cy="8" r=".8" />
        <circle cx="19" cy="24" r=".8" />
      </svg>
    );
  }

  if (name === "Node.js") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m16 3 12 6.8v12.4L16 29 4 22.2V9.8L16 3Z" />
        <text className="tech-icon__text" x="16" y="19" textAnchor="middle">JS</text>
      </svg>
    );
  }

  if (name === "MySQL") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <ellipse cx="16" cy="7" rx="11" ry="4" />
        <path d="M5 7v17c0 2.2 4.9 4 11 4s11-1.8 11-4V7M5 15c0 2.2 4.9 4 11 4s11-1.8 11-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="8" y="8" width="16" height="16" rx="3" />
      <path d="M12 2v6m8-6v6M12 24v6m8-6v6M2 12h6m-6 8h6m16-8h6m-6 8h6" />
      <path d="m13 19 2-6 2 6" />
    </svg>
  );
}

export default function Hero({ personal, techBadges }) {
  return (
    <section id="top" className="hero">
      <BackgroundMesh />
      <div className="container hero__container">
        <p className="hero__greeting">{personal.greeting}</p>

        <h1 className="hero__title">
          <span className="hero__title-dark">{personal.heroTitleLine1}</span>
          <span className="hero__title-purple">{personal.heroTitleLine2}</span>
        </h1>

        <p className="hero__bio">{personal.heroBio}</p>

        <div className="hero__buttons">
          <a href="#projects" className="btn btn--primary">
            <span>View My Work</span>
            <ArrowRight size={16} />
          </a>

          <a
            href={personal.resumePath}
            download={personal.resumeDownloadName}
            className="btn btn--outline"
          >
            <FileText size={16} />
            <span>Download CV</span>
          </a>
        </div>

        <div className="hero__tech-row">
          {techBadges.map((item) => (
            <div key={item.name} className="tech-tile">
              <div className="tech-tile__box">
                <TechIcon name={item.name} />
              </div>
              <span className="tech-tile__label">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}