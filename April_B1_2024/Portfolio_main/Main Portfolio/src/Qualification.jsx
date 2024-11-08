// src/Qualifications.js
import React from 'react';
import Education from './Education';
import Experience from './Experience';

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#2f2f2f', // Dark gray background
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: '#b0b0b0', // Light gray text color for better contrast
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '40px',
  flexWrap: 'wrap', // Allows the sections to wrap on smaller screens
};

const sectionStyle = {
  flex: '1 1 48%', // Allows for flexible widths and ensures two sections fit nicely
  minWidth: '300px', // Prevents sections from becoming too narrow
};

const entryStyle = {
  backgroundColor: '#f9f9f9', // Keeping entry background light for contrast
  color:'#000',
  padding: '15px',
  marginBottom: '15px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
};

const headingStyle = {
  color: '#b0b0b0', // Light gray color for headings
  marginBottom: '15px',
};

const titleStyle = {
  color: '#b0b0b0', // Blue color for title
  marginBottom: '30px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  
  fontSize: '3.5rem',
};

const Qualification = () => {
  return (
    <div style={{ backgroundColor: '#2f2f2f', padding: '0', minHeight: '100vh' }}> {/* Full height background */}
      <div style={containerStyle}>
        <h1 style={titleStyle}>EDUCATION & EXPERIENCE</h1>
        <div style={contentStyle}>
          {/* Education Section */}
          <div style={sectionStyle}>
            <h2 style={headingStyle}>My Education</h2>
            <div style={entryStyle}>
              <Education
                degree="Internship on Full Stack Web Development"
                institution="Luminar Technolab Software Training Institute"
                years="2024-Present"
              />
            </div>
            <div style={entryStyle}>
              <Education
                degree="B.Tech in Computer Science and Engineering"
                institution="College of Engineering Chengannur"
                years="2021"
              />
            </div>
            <div style={entryStyle}>
              <Education
                degree="Senior Secondary"
                institution="Christ Central School and Junior College"
                years="2017"
                description="62.2%"
              />
            </div>
            <div style={entryStyle}>
              <Education
                degree="High School"
                institution="Christ Central School and Junior College"
                years="2015"
                description="83.6%"
              />
            </div>
          </div>

          {/* Experience Section */}
          <div style={sectionStyle} id="qualifications">
            <h2 style={headingStyle}>My Experience</h2>
            <div style={entryStyle}>
              <Experience
                jobTitle="Cafe Website"
                years="2024"
                description="Designed and developed a cafe website using HTML, CSS, Django, JavaScript, MySQL."
              />
            </div>
            <div style={entryStyle}>
              <Experience
                jobTitle="Coffee Website"
                years="2024"
                description="Developed a coffee website using HTML, CSS."
              />
            </div>
            <div style={entryStyle}>
              <Experience
                jobTitle="Certification"
                years="2024"
                description="Udemy Certificate Of Completion of The Complete Python Bootcamp From Zero To Hero In Python."
              />
            </div>
            <div style={entryStyle}>
              <Experience
                jobTitle="Final Year Project: Customer Segmentation using Machine Learning"
                years="2021"
                description="Used RFM modeling and machine learning algorithms to segment the customers."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
