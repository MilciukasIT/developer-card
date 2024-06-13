import React from 'react';
import Skill from './Skill';
import './SkillList.css';

const SkillList = ({ skills }) => {
  return (
    <div className="skill-list">
      {skills && skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  );
}

export default SkillList;