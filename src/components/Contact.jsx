import React, { useState } from "react";
import {
  Send,
  Mail,
  Code2,
  AtSign,
  Briefcase,
  Globe,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function Contact({ personal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    type: null,
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus({
        loading: false,
        type: "error",
        text: "Missing VITE_WEB3FORMS_KEY in .env file.",
      });
      return;
    }

    setStatus({ loading: true, type: null, text: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({
          loading: false,
          type: "success",
          text: "Message sent! I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          loading: false,
          type: "error",
          text: result.message || "Failed to send message.",
        });
      }
    } catch {
      setStatus({
        loading: false,
        type: "error",
        text: "Network error. Please email me directly.",
      });
    }
  };

  return (
    <section id="contact" className="section section--tinted">
      <div className="container container--form">
        <div className="section-header">
          <h2 className="section-title">Let’s Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to chat? I’d love to hear from
            you. Send me a message and I’ll get back to you within 24 hours.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <div className="field">
              <label htmlFor="name" className="field__label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="field__input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="email" className="field__label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="field__input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject" className="field__label">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What's this about?"
              className="field__input"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="message" className="field__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Tell me about your project..."
              className="field__input field__textarea"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {status.type && (
            <div className={`form-banner form-banner--${status.type}`}>
              {status.type === "success" ? (
                <CheckCircle2 size={16} />
              ) : (
                <AlertCircle size={16} />
              )}
              <span>{status.text}</span>
            </div>
          )}

          <div className="contact-form__submit">
            <button
              type="submit"
              className="btn btn--primary"
              disabled={status.loading}
            >
              {status.loading ? (
                <>
                  <Loader2 size={16} className="spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={15} />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="contact-direct">
          <a href={`mailto:${personal.email}`} className="contact-direct__email">
            <Mail size={15} />
            <span>{personal.email}</span>
          </a>

          <div className="social-square-row">
            {personal.socials.github && (
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-square"
                aria-label="GitHub"
                title="GitHub"
              >
                <Code2 size={16} />
              </a>
            )}
            {personal.socials.twitter && (
              <a
                href={personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-square"
                aria-label="Twitter"
                title="Twitter / X"
              >
                <AtSign size={16} />
              </a>
            )}
            {personal.socials.linkedin && (
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-square"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Briefcase size={16} />
              </a>
            )}
            {personal.socials.website && (
              <a
                href={personal.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="social-square"
                aria-label="Website"
                title="Portfolio Website"
              >
                <Globe size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}