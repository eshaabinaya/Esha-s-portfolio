import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/eshaabinaya' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/eshaabinaya' },
    { name: 'Email', icon: '📧', url: 'mailto:esha@example.com' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Esha Abinaya Sree</h3>
            <p className="footer-description">
              Frontend Developer & Backend Engineer passionate about creating 
              innovative solutions and building meaningful digital experiences.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Esha Abinaya Sree. Built with passion and code.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;