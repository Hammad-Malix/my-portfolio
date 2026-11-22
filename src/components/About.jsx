import React, { useState } from "react";
import { Download, User } from "lucide-react";

export default function About({ personal, stats }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section section--white">
      <div className="container about-grid">
        <div className="about-media">
          {!imgError && personal.profileImage ? (
            <img
              src={personal.profileImage}
              alt={personal.fullName}
              className="about-media__img"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="about-media__fallback">
              <User size={56} />
              <span>{personal.fullName}</span>
            </div>
          )}
        </div>

        <div className="about-content">
          <h2 className="about-content__title">{personal.aboutTitle}</h2>

          <div className="about-content__text">
            {personal.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="about-stats">
            {stats.map((item) => (
              <div key={item.label} className="about-stat">
                <span className="about-stat__value">{item.value}</span>
                <span className="about-stat__label">{item.label}</span>
              </div>
            ))}
          </div>

          <a
            href={personal.resumePath}
            download={personal.resumeDownloadName}
            className="btn btn--outline btn--sm"
          >
            <Download size={15} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}