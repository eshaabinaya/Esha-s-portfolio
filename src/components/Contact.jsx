import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const contacts = [
    {
      icon: '📧',
      title: 'Email',
      value: 'eshaabinayasree@gmail.com',
      link: 'mailto:eshaabinayasree@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'esha-abinaya-sree',
      link: 'https://linkedin.com/in/esha-abinaya-sree'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'Eshaabinayasree',
      link: 'https://github.com/eshaabinaya'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 9894032886',
      link: 'tel:+919894032886'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-subtitle">Open to opportunities and collaborations!</p>
        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <a 
              key={index}
              href={contact.link} 
              className="contact-card"
              target={contact.link.startsWith('http') ? '_blank' : undefined}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="contact-icon">{contact.icon}</div>
              <h3>{contact.title}</h3>
              <p>{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;