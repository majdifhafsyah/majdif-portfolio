"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Beranda", href: "#home", id: "home" },
  { label: "Tentang", href: "#about", id: "about" },
  // { label: "Layanan", href: "#services", id: "services" },
  { label: "Pengalaman", href: "#experience", id: "experience" },
  { label: "Proyek", href: "#projects", id: "projects" },
  { label: "Skill", href: "#skills", id: "skills" },
  { label: "Sertifikat", href: "#certificates", id: "certificates" },
  { label: "Kontak", href: "#contact", id: "contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 160;
      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 640) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header className="navWrap">
      <div className={`navbar ${menuOpen ? "menuOpen" : ""}`}>
        <a href="#home" className="brand" aria-label="Go to home" onClick={() => handleNavClick("home")}>
          <span className="brandMark">M</span>
          <span>{profile.shortName}</span>
        </a>

        <button
          type="button"
          className="menuToggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="main-navigation" className={`navLinks ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
