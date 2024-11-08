import React from 'react';
import Col from 'react-bootstrap/Col';

function Home(){
  return (
    <section
      className="site-section"
      id="home"
      style={{
        height: '100vh', // Full viewport height
        backgroundColor: '#2f2f2f', // Dark gray background
        color: '#b0b0b0', // Light gray font color
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '800px', // Control the content width
          padding: '20px',
        }}
      >
        {/* Headings Section */}
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: '600',
            color: '#b0b0b0',
            marginBottom: '1rem',
          }}
        >
          Hello, I'm <br /> Karthika G Deyal
        </h1>

        <h4
          style={{
            fontSize: '2rem',
            fontWeight: '400',
            color: '#d3d3d3',
            marginBottom: '1.5rem',
          }}
        >
          Python Fullstack Developer Intern
        </h4>

        {/* Professional Summary */}
        <p
          style={{
            fontSize: '1.1rem',
            color: '#c2c2c2',
            lineHeight: '1.8',
            marginBottom: '2rem',
          }}
        >
          {/* I am a highly motivated and detail-oriented developer with a passion for building  */}
          {/* robust fullstack applications. I hold a B.Tech degree from the College of Engineering Chengannur,  */}
          {/* and I’m currently seeking opportunities to grow my expertise and contribute to impactful projects. */}
        </p>

        {/* Links or Social Profiles */}
        {/* <div className="d-flex justify-content-center gap-4 mb-4">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#b6d957', textDecoration: 'none', fontSize: '1.2rem' }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#b6d957', textDecoration: 'none', fontSize: '1.2rem' }}
          >
            LinkedIn
          </a>
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#b6d957', textDecoration: 'none', fontSize: '1.2rem' }}
          >
            Portfolio
          </a>
        </div> */}

        {/* Buttons Section */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a
            href="file:///C:/Users/HP/Downloads/rezume-master/rezume-master/index.html#section-contact"
            className="btn"
            style={{
              backgroundColor: '#b6d957',
              color: '#000',
              padding: '12px 24px',
              fontSize: '1rem',
            }}
          >
            Hire Me
          </a>
          <a
            href="file:///C:/Users/HP/Downloads/rezume-master/rezume-master/index.html#"
            className="btn"
            style={{
              backgroundColor: '#d1d1d1',
              color: '#000',
              padding: '12px 24px',
              fontSize: '1rem',
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
