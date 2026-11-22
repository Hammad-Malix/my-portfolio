import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const visibleItems = [0, 1, 2].map(
    (offset) => testimonials[(activeIndex + offset) % testimonials.length]
  );

  return (
    <section id="testimonials" className="section section--white">
      <div className="container">
        <div className="section-header">
          <span className="pill-eyebrow">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Feedback from mentors, collaborators, and peers I have had the
            pleasure of working with.
          </p>
        </div>

        <div className="testimonials-wrapper">
          <button
            type="button"
            onClick={prevSlide}
            className="carousel-arrow carousel-arrow--prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="testimonials-grid">
            {visibleItems.map((item, idx) => (
              <article key={`${item.name}-${idx}`} className="testimonial-card">
                <div className="testimonial-card__stars" aria-label="5 stars">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      size={14}
                      fill="#facc15"
                      color="#facc15"
                    />
                  ))}
                </div>

                <p className="testimonial-card__quote">“{item.quote}”</p>

                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{item.initial}</div>
                  <div>
                    <div className="testimonial-card__name">{item.name}</div>
                    <div className="testimonial-card__role">{item.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="carousel-arrow carousel-arrow--next"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`carousel-dot ${
                activeIndex === idx ? "carousel-dot--active" : ""
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}