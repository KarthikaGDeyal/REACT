// src/components/Education.js
import React from 'react';

const Education = ({ degree, institution, years, description }) => (
  <div className="entry">
    <h3>{degree}</h3>
    <p>{institution} | {years}</p>
    <p>{description}</p>
  </div>
);

export default Education;





























