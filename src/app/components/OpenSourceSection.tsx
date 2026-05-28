import "./portfolio.css";
import pythoneersImg from "../../imports/Screenshot_2026-05-28_201833.png";
import femaleProgrammersImg from "../../imports/image-7.png";

const CONTRIBUTIONS = [
  {
    icon: "🐍",
    org: "ThePythoneers",
    role: "Mentor / Instructor",
    desc: "Active mentor and instructor at Facebook Messenger-based Python learning Open Source Community, helping beginners learn Python through interactive sessions, code reviews, and personalized guidance.",
    period: "2025 – Present",
    isCommunity: true,
    platform: "Facebook Messenger",
    screenshot: pythoneersImg,
  },
  {
    icon: "👩‍💻",
    org: "Female Programmers of Bangladesh",
    role: "Group Creator & Admin",
    desc: "The first arising women-only programming community in Bangladesh. Creating a safe space for women to learn, grow, and excel in tech through mentorship, workshops, and collaborative projects.",
    period: "2026 – Present",
    isCommunity: true,
    link: "https://www.facebook.com/groups/1187174176739153",
    screenshot: femaleProgrammersImg,
  },
];

export function OpenSourceSection() {
  return (
    <section id="opensource" className="cyber-section">
      <div className="container">
        <h2 className="section-title">OPEN_SOURCE</h2>
        <hr className="section-title-divider" />

        <p
          className="mb-5"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "#7fcfda", maxWidth: 700 }}
        >
          &gt; I believe in building in public. Open source is not just about code —
          it's about community, trust, and collectively moving the craft forward.
        </p>

        <div className="row g-4">
          {CONTRIBUTIONS.map((c) => (
            <div className="col-lg-6 col-md-6" key={c.org}>
              <div className="os-card">
                <div className="os-icon">{c.icon}</div>
                <div
                  style={{
                    fontFamily: "var(--font-orbitron)",
                    fontSize: "0.65rem",
                    color: "#00a8b4",
                    letterSpacing: "0.12em",
                    marginBottom: "0.25rem",
                    textTransform: "uppercase",
                  }}
                >
                  {c.role}
                </div>
                <h3 className="cyber-card-title">
                  {c.link ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#00f0ff";
                        (e.currentTarget as HTMLAnchorElement).style.textShadow = "0 0 8px #00f0ff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "inherit";
                        (e.currentTarget as HTMLAnchorElement).style.textShadow = "none";
                      }}
                    >
                      {c.org}
                    </a>
                  ) : (
                    c.org
                  )}
                </h3>
                <p className="cyber-card-text mb-3">{c.desc}</p>

                {c.platform && (
                  <div className="mb-2" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#00f0ff" }}>
                    📱 {c.platform}
                  </div>
                )}

                <div
                  className="mt-2"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#2a7a84" }}
                >
                  {c.period}
                </div>

                {c.screenshot && (
                  <div className="mt-3">
                    <img
                      src={c.screenshot}
                      alt={`${c.org} screenshot`}
                      style={{
                        width: "100%",
                        borderRadius: "6px",
                        border: "1px solid rgba(0, 240, 255, 0.3)",
                        boxShadow: "0 0 12px rgba(0, 240, 255, 0.2)",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
