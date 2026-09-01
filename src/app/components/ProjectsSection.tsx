import "./portfolio.css";

const PROJECTS = [
  {
    title: "Mother's Day 2026",
    desc: "A heartfelt tribute project dedicated to mothers everywhere — built and deployed live for Mother's Day 2026. A personal project showcasing frontend skills with an emotional, interactive design.",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    url: "https://merry-ganache-e07360.netlify.app/",
    domain: "merry-ganache-e07360.netlify.app",
  },
  {
    title: "Emergency Portal BD",
    desc: "A web platform providing quick access to emergency services and crisis response resources for Bangladesh. Built to help people find critical help fast during emergencies.",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    url: "https://emergencyportalbd.netlify.app/",
    domain: "emergencyportalbd.netlify.app",
  },
  {
    title: "Catch The Mew",
    desc: "A fun browser-based mini-game themed around catching Mew — the legendary Pokémon. A lighthearted interactive project demonstrating DOM manipulation and game logic in vanilla JS.",
    tags: ["HTML", "CSS", "JavaScript", "Game", "Netlify"],
    url: "https://catchthemew.netlify.app/",
    domain: "catchthemew.netlify.app",
  },
];

function ProjectCard({ title, desc, tags, url, domain }: typeof PROJECTS[0]) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="cyber-card d-flex flex-column" style={{ height: "auto" }}>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h3 className="cyber-card-title mb-0">{title}</h3>
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
              flexShrink: 0,
            }}
          >
            LIVE
          </span>
        </div>

        <p className="cyber-card-text mb-3" style={{ flex: 1 }}>{desc}</p>

        <div className="mb-3">
          {tags.map((t) => (
            <span className="cyber-tag" key={t}>{t}</span>
          ))}
        </div>

        <div
          style={{
            border: "1px solid rgba(0,240,255,0.3)",
            borderRadius: "6px",
            overflow: "hidden",
            marginBottom: "1rem",
            boxShadow: "0 0 20px rgba(0,240,255,0.1)",
          }}
        >
          <div
            style={{
              background: "rgba(0,240,255,0.05)",
              borderBottom: "1px solid rgba(0,240,255,0.2)",
              padding: "0.35rem 0.7rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "#00a8b4",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <span style={{ color: "#00cc55" }}>●</span>
            <span style={{ color: "#ffcc00" }}>●</span>
            <span style={{ color: "#ff4444" }}>●</span>
            <span style={{ marginLeft: "0.4rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{domain}</span>
          </div>
          <iframe
            src={url}
            title={title}
            style={{ width: "100%", height: "260px", border: "none", display: "block", background: "#000" }}
            loading="lazy"
          />
        </div>

        <div className="d-flex justify-content-end">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-btn"
            style={{ fontSize: "0.62rem", padding: "0.4rem 1rem" }}
          >
            VISIT LIVE SITE ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="cyber-section">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        <hr className="section-title-divider" />

        <div className="row g-4">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
