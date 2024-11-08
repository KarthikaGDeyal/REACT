// src/components/AboutMe.jsx
import React from "react";
import img from '../src/assets/images/IMG-20200813-WA0006.jpg';

const sectionStyle = {
  padding: "60px 0",
  backgroundColor: "#2f2f2f",
  minHeight: "100vh", // Ensure full page height
  display: "flex",
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
};

const contentStyle = {
  display: "flex",
  justifyContent: "space-between", // Spread image and text evenly
  alignItems: "center", // Align items vertically in the center
  maxWidth: "1400px", // Limit max width for better layout
  width: "100%", // Full width of the section
  gap: "50px", // Space between image and content
  flexWrap: "wrap", // Make responsive on smaller screens
};

const imageStyle = {
  width: "100%", // Full width of its container
  maxWidth: "680px", // Maximum width
  height: "auto", // Maintain aspect ratio
  borderRadius: "15px", // Rounded corners
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Larger shadow
  flex: "1", // Image takes equal space
  objectFit: "contain", // Ensure the full image is visible
};

const detailsStyle = {
  color: '#b0b0b0',
  textAlign: "left",
  maxWidth: "600px",
  flex: "1", // Text takes equal space
  display: "grid",
  gridTemplateColumns: "1fr 1fr", // 2 equal columns
  gap: "10px 20px",
};

const headingStyle = {
  fontSize: '3.5rem',
  fontWeight: '600',
  color: '#b0b0b0',
  marginBottom: "40px",
};

const listItemStyle = {
  fontSize: "18px",
  marginBottom: "15px",
};

const buttonContainerStyle = {
  marginTop: "30px",
  gridColumn: "span 2", // Make buttons span both columns
};

const buttonStyle = {
  marginRight: "10px",
  padding: "12px 30px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const hireButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#b6d957',
  color: "#000",
};

const learnMoreButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#f0f0f0",
  color: "black",
};

function Aboutme({ user }) {
  return (
    <section style={sectionStyle} id="about">
      <div style={contentStyle}>
        {/* Image Section */}
        <img src={img} alt="Profile" style={imageStyle} />

        {/* Details Section */}
        <div style={detailsStyle}>
          <h2 style={headingStyle}>ABOUT ME</h2><br></br>

          <h3>Web Developer</h3>

          <p style={{ gridColumn: "span 2", lineHeight: "1.8" }}>
            Highly motivated and detail-oriented fresher Python Developer with a passion for developing innovative solutions. 
            I hold a B.Tech degree from the College of Engineering Chengannur. 
            I'm seeking a role that offers opportunities to enhance my skills and knowledge while contributing to the organization's objectives.
          </p>

          {/* User Details */}
          <div style={listItemStyle}>
            <strong>Name:</strong> {user.name}
          </div>
          <div style={listItemStyle}>
            <strong>Birthday:</strong> {user.birthday}
          </div>
          <div style={listItemStyle}>
            <strong>Degree:</strong> {user.degree}
          </div>
          <div style={listItemStyle}>
            <strong>Experience:</strong> {user.experience}
          </div>
          <div style={listItemStyle}>
            <strong>Phone:</strong> {user.phone}
          </div>
          <div style={listItemStyle}>
            <strong>Email:</strong> {user.email}
          </div>
          <div style={listItemStyle}>
            <strong>Address:</strong> {user.address}
          </div>
          <div style={listItemStyle}>
            <strong>Freelance:</strong> {user.freelance}
          </div>

          {/* Buttons */}
          <div style={buttonContainerStyle}>
            <button style={hireButtonStyle}>Hire Me</button>
            <button style={learnMoreButtonStyle}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
