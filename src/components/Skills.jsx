import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Java', level: 90, icon: '♨️' },
    { name: 'Python', level: 85, icon: '🇵🇾' },
    { name: 'JavaScript', level: 88, icon: '｡🇯‌🇸‌' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'React.js', level: 80, icon: '⚛️' },
    { name: 'MySQL', level: 90, icon: '🗄️' },
    { name: 'PostgreSQL', level: 85, icon: '🛢' },
    { name: 'Git', level: 88, icon: '𝐆' },
    { name: 'REST APIs', level: 92, icon: '🔌' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          The tools and technologies I use to bring ideas to life
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;