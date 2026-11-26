import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme-v2");
    return saved === "dark" || saved === "light" ? saved : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme-v2", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <Navbar
        brandName={portfolioData.personal.brandName}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hero
          personal={portfolioData.personal}
          techBadges={portfolioData.heroTechBadges}
        />
        <About
          personal={portfolioData.personal}
          stats={portfolioData.aboutStats}
        />
        <Skills expertise={portfolioData.expertise} />
        <Projects projects={portfolioData.projects} />
        <Experience experience={portfolioData.experience} />
        <Testimonials testimonials={portfolioData.testimonials} />
        <FAQ faqs={portfolioData.faqs} />
        <Contact personal={portfolioData.personal} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}