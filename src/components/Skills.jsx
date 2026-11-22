import React from "react";
import { Code2, Server, Cpu } from "lucide-react";

const iconMap = {
  Code2: Code2,
  Server: Server,
  Cpu: Cpu,
};

export default function Skills({ expertise }) {
  return (
    <section id="skills" className="section section--tinted">
      <div className="container">
        <div className="section-header">
          <span className="pill-eyebrow">Skills</span>
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle">
            A versatile skill set spanning frontend development, backend
            engineering, and applied AI.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((card) => {
            const Icon = iconMap[card.iconName] || Code2;
            return (
              <article key={card.title} className="expertise-card">
                <div className="expertise-card__icon">
                  <Icon size={20} />
                </div>
                <h3 className="expertise-card__title">{card.title}</h3>
                <div className="expertise-card__tags">
                  {card.skills.map((skill) => (
                    <span key={skill} className="tag-gray">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}