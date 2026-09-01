import "bootstrap/dist/css/bootstrap.min.css";
import "./components/portfolio.css";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { MilestonesSection } from "./components/MilestonesSection";
import { OpenSourceSection } from "./components/OpenSourceSection";
import { ContactSection } from "./components/ContactSection";

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setWidth(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}

export default function App() {
  return (
    <div className="cyber-bg">
      <ScrollProgress />
      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <MilestonesSection />
        <OpenSourceSection />
        <ContactSection />
      </main>

      <footer className="cyber-footer">
        <div className="container">
          <div style={{ marginBottom: "0.5rem" }}>
            <span style={{ color: "#00f0ff" }}>&lt;SOMA JAHAN MADHOBILATA /&gt;</span>
            {"  "}—{"  "}Built with React + Bootstrap + Django vibes
          </div>
          <div style={{ fontSize: "0.72rem", color: "#2a7a84" }}>
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
