import { useState } from "react";
import "./portfolio.css";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const SOCIALS = [
  {
    label: "GitHub",
    handle: "porgrammerSoma880",
    display: "@porgrammerSoma880",
    Icon: Github,
    url: "https://github.com/porgrammerSoma880",
  },
  {
    label: "LinkedIn",
    handle: "soma-jahan-madhobilata-156613344",
    display: "Soma Jahan Madhobilata",
    Icon: Linkedin,
    url: "https://www.linkedin.com/in/soma-jahan-madhobilata-156613344",
  },
  {
    label: "Twitter / X",
    handle: "devmadhobilata",
    display: "@devmadhobilata",
    Icon: Twitter,
    url: "https://x.com/devmadhobilata",
  },
  {
    label: "Email",
    handle: "webdevmadhobilata0412@gmail.com",
    display: "webdevmadhobilata0412@gmail.com",
    Icon: Mail,
    url: "mailto:webdevmadhobilata0412@gmail.com",
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1600);
  };

  return (
    <section id="contact" className="cyber-section">
      <div className="container">
        <h2 className="section-title">CONTACT_ME</h2>
        <hr className="section-title-divider" />

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="cyber-card mb-4" style={{ height: "auto" }}>
              <h3 className="cyber-card-title">REACH_ME</h3>
              <p className="cyber-card-text mb-4">
                Got a Django project, need API help, want automation scripting, or just
                want to say hello? My inbox is always open.
              </p>
              <div className="d-flex flex-column gap-3">
                {SOCIALS.map((s) => {
                  const IconComponent = s.Icon;
                  return (
                    <div key={s.label} className="d-flex align-items-center gap-2">
                      <IconComponent
                        size={20}
                        style={{
                          color: "#00f0ff",
                          filter: "drop-shadow(0 0 4px rgba(0, 240, 255, 0.4))",
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-orbitron)",
                            fontSize: "0.65rem",
                            color: "#00a8b4",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {s.label}
                        </div>
                        <a
                          href={s.url}
                          target={s.label === "Email" ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.82rem",
                            color: "#00f0ff",
                            textDecoration: "none",
                            transition: "all 0.2s",
                            display: "inline-block",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                            (e.currentTarget as HTMLAnchorElement).style.textShadow =
                              "0 0 8px #00f0ff, 0 0 16px #00f0ff";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "#00f0ff";
                            (e.currentTarget as HTMLAnchorElement).style.textShadow = "none";
                          }}
                        >
                          {s.display}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                border: "1px solid rgba(0,240,255,0.2)",
                borderRadius: 6,
                padding: "1rem",
                background: "rgba(0,240,255,0.03)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "#00a8b4",
              }}
            >
              <div style={{ color: "#00f0ff", marginBottom: "0.5rem" }}>$ uptime</div>
              <div>Response time: &lt; 24 hours</div>
              <div>Timezone: UTC+6 (BDT)</div>
              <div>Status: <span style={{ color: "#00cc55" }}>● online</span></div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-8">
            {sent ? (
              <div
                className="cyber-card d-flex flex-column align-items-center justify-content-center text-center"
                style={{ minHeight: 320, height: "auto" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 className="cyber-card-title">MESSAGE_TRANSMITTED</h3>
                <p className="cyber-card-text">
                  Your signal reached the terminal. I'll transmit a response within 24 hours.
                  Stand by.
                </p>
                <button
                  className="hero-cta-btn mt-3"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="cyber-label">NAME</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="cyber-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="cyber-label">EMAIL</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="cyber-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="cyber-label">SUBJECT</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="cyber-input"
                      placeholder="Django project, API help, mentoring..."
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="cyber-label">MESSAGE</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="cyber-input"
                      placeholder="Describe your project, idea, or just say hello..."
                      rows={6}
                      required
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="cyber-submit-btn" disabled={loading}>
                      {loading ? "TRANSMITTING..." : "SEND MESSAGE"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
