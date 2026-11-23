import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ brandName, theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          {brandName}
        </a>

        <nav className="navbar__nav" aria-label="Main Navigation">
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="navbar__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-btn"
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="#contact" className="btn btn--primary btn--sm navbar__cta">
            Hire Me
          </a>

          <button
            type="button"
            className="theme-btn navbar__hamburger"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="navbar__mobile" id="mobile-navigation" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn--primary btn--full"
            onClick={() => setMobileOpen(false)}
          >
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
}