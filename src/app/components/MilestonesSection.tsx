import "./portfolio.css";

const MILESTONES = [
  {
    date: "2018 — 2023",
    title: "Cambridge IGCSE @ Academia School",
    desc: "Completed Cambridge International General Certificate of Secondary Education (IGCSE), building a strong foundation in mathematics, sciences, and computer science.",
    tags: ["Education", "Cambridge IGCSE"],
    link: "https://www.academiaschoolbd.com/",
  },
  {
    date: "2024 — Present",
    title: "BSc in Computer Science & Engineering @ North South University (NSU)",
    desc: "Currently pursuing Bachelor of Science in Computer Science and Engineering, focusing on web development, AI integration, and software engineering best practices.",
    tags: ["Education", "CSE", "NSU"],
  },
  {
    date: "2025 — Present",
    title: "Open Source Mentor @ ThePythoneers",
    desc: "Mentor and instructor at a Facebook Messenger-based Python learning community, helping beginners learn Python programming through interactive sessions and code reviews.",
    tags: ["Python", "Mentorship", "Education", "Open Source"],
  },
  {
    date: "2026 — Present",
    title: "Community Founder @ Female Programmers of Bangladesh",
    desc: "Founded and currently administrating the first arising women-only programming community in Bangladesh. Creating a safe space for women to learn, grow, and excel in tech.",
    tags: ["Community", "Women in Tech", "Leadership"],
    link: "https://www.facebook.com/groups/1187174176739153",
  },
  {
    date: "2026 — Present",
    title: "Backend Web Developer @ Team System Hunter Taskforce",
    desc: "Leading backend development for a cybersecurity-focused organization. Building scalable web infrastructure with Django and DRF.",
    tags: ["Django", "Backend", "Cybersecurity"],
    link: "https://teamshtitinstitute.free.nf/?i=1",
  },
];

export function MilestonesSection() {
  return (
    <section id="milestones" className="cyber-section">
      <div className="container">
        <h2 className="section-title">MILESTONES</h2>
        <hr className="section-title-divider" />

        <div className="row">
          <div className="col-lg-10 col-xl-9">
            <div className="timeline">
              {MILESTONES.map((m, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="timeline-date">{m.date}</div>
                  <div className="timeline-title">
                    {m.link ? (
                      <a
                        href={m.link}
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
                        {m.title}
                      </a>
                    ) : (
                      m.title
                    )}
                  </div>
                  <p className="timeline-desc mb-2">{m.desc}</p>
                  <div>
                    {m.tags.map((t) => (
                      <span className="cyber-tag" key={t}>{t}</span>
                    ))}
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
