import "./portfolio.css";

const SKILLS = [
  { name: "Python", level: 95 },
  { name: "Django Web Framework", level: 93 },
  { name: "Django REST Framework (DRF)", level: 91 },
  { name: "Python AI Integration", level: 85 },
  { name: "Automation Scripting", level: 88 },
  { name: "PostgreSQL / SQLite", level: 80 },
  { name: "Bootstrap CSS", level: 82 },
  { name: "React (vibe coder)", level: 75 },
  { name: "Git & GitHub", level: 85 },
];

const STATS = [
  { num: "1.5+", label: "Years Experience" },
  { num: "10+", label: "Projects Shipped" },
  { num: "20+", label: "Students Mentored" },
];

export function AboutSection() {
  return (
    <section id="about" className="cyber-section">
      <div className="container">
        <h2 className="section-title">ABOUT_ME</h2>
        <hr className="section-title-divider" />

        {/* Stats */}
        <div className="row g-3 mb-5">
          {STATS.map((s) => (
            <div className="col-6 col-md-4" key={s.label}>
              <div className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          {/* Bio text */}
          <div className="col-lg-6">
            <div className="cyber-card" style={{ height: "auto" }}>
              <h3 className="cyber-card-title">WHO AM I?</h3>
              <p className="cyber-card-text mb-3">
                I'm <span style={{ color: "#00f0ff" }}>Soma Jahan Madhobilata</span> — a passionate
                Django Web Developer specializing in Django Web Framework and Django REST Framework
                (DRF). I craft scalable backend systems, build RESTful APIs, and turn complex
                business logic into clean, production-ready code.
              </p>
              <p className="cyber-card-text mb-3">
                As a Python AI Integration expert and Automation Scripting specialist, I bridge
                the gap between AI models and real-world applications. I automate workflows,
                integrate intelligent systems, and write scripts that save hours of manual work.
              </p>
              <p className="cyber-card-text mb-3">
                I'm a <span style={{ color: "#00f0ff" }}>React (Vibe Coder)</span> — I code using
                AI, but with my own ideas and creative vision. I leverage AI tools to accelerate
                development while maintaining full creative control and architectural decisions.
              </p>
              <p className="cyber-card-text mb-3">
                Beyond coding, I mentor students, tutor aspiring developers, write thesis and lab
                reports, and actively contribute to open source communities. Currently pursuing
                BSc in CSE at North South University while serving as Backend Developer and
                District Manager at Team System Hunter Taskforce.
              </p>
              <div>
                {[
                  "Django Dev",
                  "DRF Specialist",
                  "Backend Web Developer",
                  "AI Integration",
                  "Automation",
                  "Mentor & Tutor",
                  "Thesis Writer",
                  "Open Source Contributor",
                  "Dark Mode Only",
                ].map((t) => (
                  <span className="cyber-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="col-lg-6">
            <div className="cyber-card" style={{ height: "auto" }}>
              <h3 className="cyber-card-title">TECH_STACK</h3>
              {SKILLS.map((sk) => (
                <div className="skill-bar-wrap" key={sk.name}>
                  <div className="skill-bar-label">
                    <span>{sk.name}</span>
                    <span style={{ color: "#00f0ff" }}>{sk.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${sk.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
