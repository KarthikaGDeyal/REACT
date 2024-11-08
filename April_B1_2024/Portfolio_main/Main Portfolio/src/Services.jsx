// src/Services.js
import React from 'react';
import { FaLaptopCode, FaTools, FaMobileAlt, FaSearch, FaPencilAlt, FaDesktop } from 'react-icons/fa'; 

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '2.5rem',
  color: '#0056b3',
  marginBottom: '30px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

const servicesGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  gap: '20px',
};

const cardStyle = {
  flex: '0 1 calc(33% - 20px)', // 3 cards per row, with spacing
  backgroundColor: '#f9f9f9',
  padding: '15px',
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  minWidth: '250px',
};

const iconStyle = {
  fontSize: '2rem',
  color: '#0056b3',
  marginBottom: '15px',
};

const linkStyle = {
  color: '#0056b3',
  textDecoration: 'none',
  marginTop: '10px',
  display: 'inline-block',
};

const Services = () => {
  const services = [
    { icon: <FaDesktop />, title: 'Web Design', description: 'Creating beautiful websites with responsive design.' },
    { icon: <FaTools />, title: 'Development', description: 'Building scalable backend and frontend solutions.' },
    { icon: <FaMobileAlt />, title: 'Apps Design', description: 'Designing mobile apps with great user experience.' },
    { icon: <FaLaptopCode />, title: 'Apps Development', description: 'Developing cross-platform mobile applications.' },
    { icon: <FaSearch />, title: 'SEO', description: 'Optimizing websites for better search engine visibility.' },
    { icon: <FaPencilAlt />, title: 'Content Creating', description: 'Crafting engaging content for digital platforms.' },
  ];

  return (
    <div style={containerStyle} id="services">
      <h1 style={titleStyle}>My Services</h1>
      <div style={servicesGridStyle}>
        {services.map((service, index) => (
          <div key={index} style={cardStyle}>
            <div style={iconStyle}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#read-more" style={linkStyle}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
