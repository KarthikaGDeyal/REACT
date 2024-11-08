import React from 'react';

function Skills({ skillset }) {
  return (
    <div>
      <div
        className="container-fluid py-6 pb-5" // Changed to container-fluid for full width
        id="skills"
         style={{ backgroundColor: '#2f2f2f'}} // Dark gray background with minimum height
      >
        <div className="container"> {/* Nested container to center content */}
          <div className="row g-5 justify-content-center"> {/* Centering the row */}
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s"><br /> {/* Increased column size */}
              <h3 className="mb-4 text-center" style={{ color: '#b0b0b0' ,fontSize: '3.5rem',
  fontWeight: '600'}}>MY SKILLS</h3> {/* Centering the heading */}
              <div className="row align-items-center">
                {/* Use col-md-6 to make two skills per row */}
                {skillset.map((i, index) => (
                  <div className="col-md-6 mb-4" key={index}> {/* Add key for each item */}
                    <div className="skill">
                      <div className="d-flex justify-content-between">
                        <h6 className="font-weight-bold" style={{ color: '#b0b0b0' }}>{i.name}</h6> {/* Light gray text */}
                        <h6 className="font-weight-bold" style={{ color: '#b0b0b0' }}>{i.percentage}</h6> {/* Light gray text */}
                      </div>
                      <div className="progress" style={{ height: '30px' }}> {/* Adjusted height for visibility */}
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: i.percentage,
                            height: '100%',
                            backgroundColor: '#b6d957' // Light green color for progress bar
                          }} // Use the actual percentage for the progress bar
                          aria-valuenow={parseInt(i.percentage)} // Convert percentage to integer for aria-valuenow
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
