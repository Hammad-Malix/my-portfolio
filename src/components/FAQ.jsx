import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="section section--white faq-section">
      <div className="container container--narrow">
        <div className="section-header">
          <span className="pill-eyebrow pill-eyebrow--neutral">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about my services, process, and
            availability.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-item__trigger"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-item__icon">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {isOpen && <p className="faq-item__answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}