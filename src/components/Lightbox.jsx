import React, { useEffect } from 'react';
import '../styles/Gallery.css';

const Lightbox = ({ lightboxData, closeLightbox }) => {
 
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeLightbox]);

  return (
    <div className="lightbox" onClick={closeLightbox}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
        <img src={lightboxData.img} alt={lightboxData.title} className="lightbox-image" />
        <div className="lightbox-info">
          <h3>{lightboxData.title}</h3>
          <p>{lightboxData.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;