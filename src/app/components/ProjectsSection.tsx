import "./portfolio.css";

export function ProjectsSection() {
  return (
    <section id="projects" className="cyber-section">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        <hr className="section-title-divider" />

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="cyber-card" style={{ height: "auto" }}>
              {/* Header */}
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h3 className="cyber-card-title mb-0">Mother's Day 2026</h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "#00cc55",
                    border: "1px solid #00cc55",
                    padding: "0.1rem 0.45rem",
                    borderRadius: "3px",
                    boxShadow: "0 0 6px #00cc55",
                    whiteSpace: "nowrap",
                    marginLeft: "0.5rem",
                  }}
                >
                  LIVE
                </span>
              </div>

              <p className="cyber-card-text mb-4">
                A heartfelt tribute project dedicated to mothers everywhere — built and
                deployed live for Mother's Day 2026. A personal project showcasing frontend
                skills with an emotional, interactive design.
              </p>

              <div className="mb-4">
                {["HTML", "CSS", "JavaScript", "Netlify"].map((t) => (
                  <span className="cyber-tag" key={t}>{t}</span>
                ))}
              </div>

              {/* Live preview iframe */}
              <div
                style={{
                  border: "1px solid rgba(0,240,255,0.3)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: "1.2rem",
                  boxShadow: "0 0 20px rgba(0,240,255,0.1)",
                }}
              >
                <div
                  style={{
                    background: "rgba(0,240,255,0.05)",
                    borderBottom: "1px solid rgba(0,240,255,0.2)",
                    padding: "0.4rem 0.8rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#00a8b4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "#00cc55" }}>●</span>
                  <span style={{ color: "#ffcc00" }}>●</span>
                  <span style={{ color: "#ff4444" }}>●</span>
                  <span style={{ marginLeft: "0.5rem" }}>
                    merry-ganache-e07360.netlify.app
                  </span>
                </div>
                <iframe
                  src="https://merry-ganache-e07360.netlify.app/"
                  title="Mother's Day 2026 Project"
                  style={{
                    width: "100%",
                    height: "420px",
                    border: "none",
                    display: "block",
                    background: "#000",
                  }}
                  loading="lazy"
                />
              </div>

              {/* CTA */}
              <div className="d-flex justify-content-end">
                <a
                  href="https://merry-ganache-e07360.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-btn"
                  style={{ fontSize: "0.65rem", padding: "0.4rem 1.2rem" }}
                >
                  VISIT LIVE SITE ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "#4a5568",
              fontStyle: "italic",
            }}
          >
            More projects coming soon!
          </p>
        </div>
      </div>
    </section>
  );
}
