import React from "react";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero({ personal, techBadges, stats }) {
  return (
    <section id="top" className="hero">
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
              <div className="tech-tile__box">{item.short}</div>
              <span className="tech-tile__label">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Curved Wave Divider */}
      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
          <path d="M0,35 C360,75 1080,-5 1440,35 L1440,70 L0,70 Z" />
        </svg>
      </div>

      {/* 4-Column Stats Strip */}
      <div className="stats-strip">
        <div className="container stats-strip__grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-item__value">{stat.value}</div>
              <div className="stat-item__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}