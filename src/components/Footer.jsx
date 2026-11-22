import React from "react";
import { Code2, AtSign, Briefcase, Globe } from "lucide-react";

export default function Footer({ personal }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">{personal.brandName}</div>
        <p className="footer__tagline">{personal.footerTagline}</p>

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
              <Code2 size={15} />
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
              <AtSign size={15} />
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
              <Briefcase size={15} />
            </a>
          )}
          {personal.socials.website && (
            <a
              href={personal.socials.website}
              target="_blank"
              rel="noopener noreferrer"
              className="social-square"
              aria-label="Website"
              title="Website"
            >
              <Globe size={15} />
            </a>
          )}
        </div>

        <div className="footer__legal-links">
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms of Service</a>
          <a href="#skills">Style Guide</a>
        </div>

        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} {personal.fullName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}