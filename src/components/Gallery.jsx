import React, { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Air Quality Monitoring',
      description: 'IoT-based system for real-time air quality tracking and analysis',
      icon: '☁️',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      technologies: ['Python', 'IoT', 'Data Analytics']
    },
    {
      id: 2,
      title: 'Stock Price Prediction',
      description: 'Machine learning model for predicting stock market trends',
      icon: '📈',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      technologies: ['Python', 'TensorFlow', 'Data Science']
    },
    {
      id: 3,
      title: 'Path Finder IoT',
      description: 'Smart navigation system using IoT sensors and real-time data',
      icon: '📍',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      technologies: ['IoT', 'Node.js', 'React']
    },
    {
      id: 4,
      title: 'Brain Stroke Pediction',
      description: 'Scalable backend APIs with MySQL integration',
      icon: '⚡',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      technologies: ['React.js', 'Python', 'MySQL']
    },
    {
      id: 5,
      title: 'NL to SQL',
      description: 'Performance tuning and schema design for large-scale databases',
      icon: '💾',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      technologies: ['PostgreSQL', 'SQL', 'Performance Tuning']
    },
    {
      id: 6,
      title: 'Tech Certifications',
      description: 'Industry-recognized certifications and achievements',
      icon: '🏆',
      color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      technologies: [ 'Python', 'Web Development']
    }
  ];

  return (
    <section id="projects" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">My Achievements & Projects</h2>
        <p className="section-subtitle">
          A showcase of my work and accomplishments
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              style={{ background: project.color }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
              <div className="modal-icon">{selectedProject.icon}</div>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="modal-tech">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag-modal">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;