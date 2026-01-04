import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Database Learning Intern',
      company: 'Eval Benches Technologies, Tuticorin',
      period: 'May 2024',
      type: 'Internship',
      responsibilities: [
        'Wrote optimized SQL queries for reporting and data analysis',
        'Designed normalized schemas and performance-tuned databases',
        'Performed data cleansing, validation, and transformation using SQL & Excel'
      ],
      icon: '🔵',
      color: '#667eea'
    },
    {
      id: 1,
      role: 'Node.js Development Intern',
      company: 'Digisailor, Tirunelveli',
      period: 'July 2024',
      type: 'Internship',
      responsibilities: [
        'Built RESTful APIs integrated with MySQL for CRUD operations',
        'Developed backend logic using Node.js for data processing',
        'Debugged performance issues and collaborated using Git & VS Code'
      ],
      icon: '🔵',
      color: '#f093fb'
    },
    {
      id: 3,
      role: 'Python Development Intern',
      company: 'IPCS Global',
      period: 'December 2024',
      type: 'Internship',
      responsibilities: [
        'Developed data analysis scripts using Python and Pandas',
        'Created automated testing frameworks for backend services',
        'Collaborated with cross-functional teams on ML projects'
      ],
      icon: '🔵',
      color: '#4facfe'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          My journey through internships and professional development
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot" style={{ background: exp.color }}>
                <span className="timeline-icon">{exp.icon}</span>
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-badge" style={{ background: exp.color }}>
                    {exp.type}
                  </span>
                </div>
                
                <p className="experience-period">{exp.period}</p>
                
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;