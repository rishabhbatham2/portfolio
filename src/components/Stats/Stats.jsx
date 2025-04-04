import React, { useState } from 'react';
import './Stats.css';

const ServicesList = () => {
  const [activeImage, setActiveImage] = useState('/img1.jpg');
  
  const services = [
    { name: 'Art Direction', img: ``, bigImg: 'img1.jpg' },
    { name: 'Brand Identity', img: 'img2', bigImg: 'img2.jpeg' },
    { name: 'Illustration', img: 'img3', bigImg: 'img3-big' },
    { name: 'UI/App Design', img: 'img4', bigImg: 'img4-big' },
    { name: 'Web Design', img: 'img5', bigImg: 'img5-big' },
    { name: 'Animation Direction', img: 'img6', bigImg: 'img6-big' }
  ];

  return (
    <div className="services-container">
      <h2 className="services-heading">Services Areas of expertise.</h2>
      
      <div className="services-content">
        <ul className="services-list">
          {services.map((service, index) => (
            <li 
              key={index} 
              className="service-item"
              onMouseEnter={() => setActiveImage(`/${service.bigImg}`)}
            >
              <div className="service-icon-wrapper">
                <img 
                  src={`/${service.img}`} 
                  alt="" 
                  className="service-icon default-icon"
                />
                <img 
                  src={`/${service.img}`} 
                  alt="" 
                  className="service-icon hover-icon"
                />
              </div>
              <span className="service-label">{service.name}</span>
            </li>
          ))}
        </ul>
        
        <div className="service-preview">
          <img 
            src={activeImage} 
            alt="Service preview" 
            className="preview-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesList;