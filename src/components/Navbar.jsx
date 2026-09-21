import { useEffect, useState } from "react";
import { openCalendly } from "../utils/calendly";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src="/logo.png" alt="RealEase" />
      </div>

      {/* NAV LINKS */}
      <div className="navLinks">

        <a href="#about">About</a>

        <a href="#services">Services</a>

        <a href="#serve">Who we serve</a>

        <a href="#contact">Contact</a>

      </div>

      {/* NAV BUTTON */}
      <button className="navButton" onClick={() => openCalendly()}>
        Book a Call
        <span>→</span>
      </button>

      {/* MOBILE MENU TOGGLE */}
      <button
        className={`navToggle ${menuOpen ? "navToggle--open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* MOBILE MENU PANEL */}
      <div
        className={`mobileMenu ${menuOpen ? "mobileMenu--open" : ""}`}
      >
        <div className="mobileMenuLinks">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#serve" onClick={closeMenu}>Who we serve</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <button
          className="navButton mobileMenuButton"
          onClick={() => {
            closeMenu();
            openCalendly();
          }}
        >
          Book a Call
          <span>→</span>
        </button>
      </div>

      {menuOpen && (
        <div
          className="mobileMenuOverlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

    </nav>
  );
}

export default Navbar;
