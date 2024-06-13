import React from 'react';
import './Skill.css';

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <span>{skill}</span>
      {/* Icon for skill */}
    </div>
  );
}

export default Skill;