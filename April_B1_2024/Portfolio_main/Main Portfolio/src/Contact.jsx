// src/Contact.js
import React, { useState } from 'react';

// Styles for the contact form
const containerStyle = {
  maxWidth: '1800px',
  margin: '0 auto',
  padding: '40px 20px',
  textAlign: 'center',
  backgroundColor: '#2f2f2f', // Black background
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle = {
  fontSize: '3.5rem',
  fontWeight:'600px',
  marginBottom: '20px',
  color: '#b0b0b0', // Light gray color for the title to contrast with dark background
};

const inputStyle = {
  width: '100%', // Full width for inputs
  maxWidth: '600px', // Limit input width for better appearance
  padding: '15px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
  backgroundColor: '#fff', // White background for inputs for contrast
};

const buttonStyle = {
  backgroundColor: '#b6d957', // Light green color for the button
  color: '#000',
  padding: '15px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '15px', // Space above the button
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent! Thank you for contacting us.');
    setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
  };

  return (
    <div style={containerStyle} id="contact">
      <h1 style={titleStyle}>GET IN TOUCH</h1>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        /><br></br>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        /><br></br>
        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          required
        /><br></br>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: '100px' }} // Consistent height for textarea
          required
        ></textarea><br></br>
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
