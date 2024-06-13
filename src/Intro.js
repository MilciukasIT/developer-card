import React from 'react';
import './Intro.css';

const Intro = ({ name }) => {
  return (
    <div className="intro">
      <h2>{name}</h2>
      <p>Software Developer</p>
    </div>
  );
}

export default Intro;