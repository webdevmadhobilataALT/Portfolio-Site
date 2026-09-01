import { useState, useEffect } from "react";
import "./portfolio.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Milestones", href: "#milestones" },
  { label: "Open Source", href: "#opensource" },
  { label: "Contact Me", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar navbar-expand-lg cyber-navbar fixed-top ${scrolled ? "py-1" : "py-2"}`}>
      <div className="container" style={{ position: "relative" }}>
        <a
          className="navbar-brand cyber-brand"
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
        >
          &lt;DEV /&gt;
        </a>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          style={{
            borderColor: "#00f0ff",
            border: "2px solid #00f0ff",
            padding: "0.4rem 0.6rem",
            background: "transparent"
          }}
        >
          <span style={{ color: "#00f0ff", fontSize: "1.4rem" }}>☰</span>
        </button>

        <div
          className="navbar-collapse d-lg-flex"
          style={{
            display: open ? "block" : "none"
          }}
        >
          <ul className="navbar-nav ms-auto">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li className="nav-item" key={id}>
                  <a
                    className={`nav-link cyber-nav-link ${active === id ? "active" : ""}`}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
