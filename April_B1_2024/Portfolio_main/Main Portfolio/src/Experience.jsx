// src/components/Experience.js
import React from 'react';

const Experience = ({ jobTitle, years, description }) => (
  <div className="entry">
    <h3>{jobTitle}</h3>
    <p>{description} | {years}</p>
  </div>
);

export default Experience;
