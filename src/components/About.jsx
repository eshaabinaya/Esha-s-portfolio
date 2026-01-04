import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <p className="about-text">
            I'm an aspiring Information Technology student with a strong foundation in fullstack development 
            and data analytics. I bring a unique combination of technical skills and problem-solving abilities 
            to every project. My experience spans REST API engineering, database optimization, and full-stack 
            development, allowing me to bridge the gap between user experience and technical implementation.
          </p>
          <p className="about-text">
            Through internships and hands-on projects, I've gained real-world experience in building scalable 
            systems. My passion for innovation drives me to continuously learn new technologies and stay 
            updated with industry trends. I'm committed to applying my skills and knowledge to create 
            meaningful solutions that make a difference.
          </p>
        </div>

        <div className="quick-facts">
          <div className="fact-card fade-in-up">
            <div className="fact-icon">🗣️</div>
            <h3>Languages Known</h3>
            <p>Tamil, English</p>
          </div>
          
          <div className="fact-card fade-in-up delay-1">
            <div className="fact-icon">💼</div>
            <h3>Current Role</h3>
            <p>FullStack Developer</p>
          </div>
          
          <div className="fact-card fade-in-up delay-2">
            <div className="fact-icon">❤️</div>
            <h3>Interests</h3>
            <p> Web Development, Machine Learning, IoT Projects, Data Analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;