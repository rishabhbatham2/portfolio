import React from 'react';
import './ImageFeed.css';

const ImageFeed = () => {
  // Image data (update with your actual images)
  const images = [
    { src: '/img2.jpeg', alt: 'Art direction project' },
    { src: '/img2.jpeg', alt: 'Brand identity work' },
    { src: '/img2.jpeg', alt: 'Illustration series' },
    { src: '/img2.jpeg', alt: 'UI design case study' },
    { src: '/img2.jpeg', alt: 'Web design concept' },
    { src: '/img2.jpeg', alt: 'Animation still' },
  ];

  // Duplicate images to create a seamless effect
  const imageSet = [...images, ...images];

  return (
    <section className="image-feed">
      <header className="image-feed-header">
        <h2 className="image-feed-title">Image feed</h2>
        <p className="image-feed-subtitle">Work I've created and things that inspire me.</p>
        <a href="/gallery" className="image-feed-link">View more →</a>
      </header>
      
      <div className="image-feed-container">
        <div className="image-feed-track">
          {imageSet.map((img, index) => (
            <article key={`img-${index}`} className="image-feed-card">
              <img src={img.src} alt={img.alt} className="image-feed-img" loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageFeed;
