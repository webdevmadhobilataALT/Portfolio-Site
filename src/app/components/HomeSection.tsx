import { useState, useEffect, useRef } from "react";
import "./portfolio.css";
import pfpImg from "../../imports/orca-image--1910252696.jpeg.jpeg";
import { Github, Linkedin, Twitter } from "lucide-react";

const BIOS = [
  "Django Web Developer crafting scalable backends with Django & DRF. I turn complex business logic into clean, RESTful APIs — and automate everything Python can touch.",
  "I build production-grade Django applications and REST APIs with DRF, while integrating AI models into real-world workflows. Code by day, mentor by night.",
  "Python is my language, Django is my framework, and automation is my superpower. I write backends that breathe, APIs that scale, and scripts that save hours every day.",
  "Django Web Dev | DRF Architect | AI Integration Specialist. I've tutored students, automated workflows, written thesis reports, and shipped open-source — all before deadline.",
  "I speak Django fluently and Python natively. From REST APIs to AI-powered pipelines, from automation scripts to lab reports — if it runs on Python, I've built it.",
  "Full-time Django developer, part-time AI integrator, always a mentor. I build RESTful APIs with DRF, automate tedious tasks with Python, and contribute to open source daily.",
];

function useTypewriter(text: string, speed = 28) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idxRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    idxRef.current = 0;
    const iv = setInterval(() => {
      idxRef.current++;
      setDisplayed(text.slice(0, idxRef.current));
      if (idxRef.current >= text.length) {
        clearInterval(iv);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);

  return { displayed, done };
}

const SIDE_ROLES = [
  "Python AI Integration",
  "Automation Scripting",
  "Mentor & Tutor",
  "Thesis Writer",
  "Open Source Contributor",
];

export function HomeSection() {
  const bio = useRef(BIOS[Math.floor(Math.random() * BIOS.length)]).current;
  const { displayed, done } = useTypewriter(bio, 22);

  return (
    <section id="home" className="cyber-section hero-section">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* PFP */}
          <div className="col-lg-4 col-md-5 text-center">
            <div className="pfp-wrapper mx-auto">
              <div className="pfp-ring">
                <div className="pfp-dot" />
              </div>
              <div className="pfp-hex">
                <img src={pfpImg} alt="Soma Jahan Madhobilata" />
              </div>
              <div className="pfp-corner tl" />
              <div className="pfp-corner tr" />
              <div className="pfp-corner bl" />
              <div className="pfp-corner br" />
            </div>

            <div className="mt-3 d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="https://github.com/porgrammerSoma880"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn outline"
                style={{
                  fontSize: "0.6rem",
                  padding: "0.35rem 0.75rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  whiteSpace: "nowrap"
                }}
              >
                <Github size={14} />
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/soma-jahan-madhobilata-156613344"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn outline"
                style={{
                  fontSize: "0.6rem",
                  padding: "0.35rem 0.75rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  whiteSpace: "nowrap"
                }}
              >
                <Linkedin size={14} />
                LINKEDIN
              </a>
              <a
                href="https://x.com/devmadhobilata"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn outline"
                style={{
                  fontSize: "0.6rem",
                  padding: "0.35rem 0.75rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  whiteSpace: "nowrap"
                }}
              >
                <Twitter size={14} />
                TWITTER
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="col-lg-8 col-md-7">
            <div className="status-badge">
              <span className="status-dot" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <p className="hero-greeting">// HELLO, WORLD! I AM</p>
            <h1
              className="hero-name glitch-title"
              data-text="SOMA JAHAN MADHOBILATA"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)", letterSpacing: "0.04em" }}
            >
              SOMA JAHAN MADHOBILATA
            </h1>
            <p className="hero-role">
              &gt; Django Web Developer &nbsp;|&nbsp; DRF Specialist &amp; Python Engineer
            </p>

            {/* Side roles */}
            <div className="mb-3 d-flex flex-wrap gap-2">
              {SIDE_ROLES.map((r) => (
                <span className="cyber-tag" key={r} style={{ fontSize: "0.72rem" }}>
                  {r}
                </span>
              ))}
            </div>

            <div className="bio-box">
              <p className="typewriter-text">
                {displayed}
                {!done && <span className="cursor-blink" />}
              </p>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a
                href="#projects"
                className="hero-cta-btn"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                className="hero-cta-btn outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
