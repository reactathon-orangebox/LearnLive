import React from 'react';
import { Icon } from 'semantic-ui-react';

const SubjectTeacher = ({ teacher, onTeacherClick}) => {

//Fix to change to livestream
const clickHandler = (view) => onTeacherClick('profile');

  return (
    <div>
      <div>
        <span  onClick={clickHandler}>
          <img src={'https://images.cdn1.stockunlimited.net/clipart/businessman-avatar_1953703.jpg'} alt='Teacher' />
        </span>
        <span className="description">
          <Icon name='user' color='blue'/>
          <b>{teacher.username}</b>
          <br/>
          {teacher.description}
        </span>
      </div>
      <Icon name='eye' />
      <span className='viewers'>{`${teacher.viewers} `}</span>
      <Icon name='heart' color='red'   />
      <span className='follower-count'>{`${teacher.followers}`}</span>
    </div>
  );
};

export default SubjectTeacher;