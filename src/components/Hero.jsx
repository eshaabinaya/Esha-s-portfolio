import React, { useState } from "react";
import { scrollToSection } from "../utils/scrollUtils";
import "../styles/Hero.css";

const Hero = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Esha_Abinaya_Sree_Resume.pdf";
    link.download = "Esha_Abinaya_Sree_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="home" className="hero-section">
      <div className="floating-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">Esha Abinaya Sree M</h1>
          <p className="hero-role">FullStack Developer & Data Enthusiast</p>
          <p className="hero-tagline">
            Building scalable systems, one API at a time
          </p>

          <p className="hero-description">
            I'm passionate about fullstack development and data analytics. I enjoy
            crafting efficient REST APIs, optimizing databases, and solving
            real-world problems through code. Currently exploring microservices
            and distributed systems while working on exciting projects.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </button>

            <button
              className={`btn btn-secondary ${
                downloadSuccess ? "btn-success" : ""
              }`}
              onClick={downloadResume}
            >
              {downloadSuccess ? "Downloaded! ✓" : "Download Resume"}
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="/profile.jpg"
            alt="Esha Abinaya Sree"
            className="profile-image"
            onError={(e) => {
              e.target.src = "https://github.com/Eshaabinayasree.png";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
