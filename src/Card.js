import React from 'react';
import Avatar from './Avatar';
import Intro from './Intro';
import SkillList from './SkillList';
import './Card.css';

const Card = ({ name, status }) => {
  const cardColor = status === 'available' ? 'colored' : 'bw';

  return (
    <div className={`card ${cardColor}`}>
      <Avatar />
      <Intro name={name} />
      <SkillList skills={['HTML', 'CSS', 'JavaScript']} />
    </div>
  );
}

export default Card;