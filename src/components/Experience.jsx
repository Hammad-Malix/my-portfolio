import React from "react";
import { Check } from "lucide-react";

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section section--tinted">
      <div className="container">
        <div className="section-header">
          <span className="pill-eyebrow">Experience</span>
          <h2 className="section-title">Career Journey</h2>
          <p className="section-subtitle">
            A timeline of my academic milestones, engineering builds, and
            initiatives.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline__line" aria-hidden="true" />

          {experience.map((item, idx) => (
            <div
              key={idx}
              className={`timeline__row timeline__row--${item.side}`}
            >
              <div className="timeline__dot" aria-hidden="true" />

              <div className="timeline__content">
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__company">{item.company}</p>

                <ul className="timeline__points">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="timeline__point">
                      <Check size={14} className="timeline__check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}