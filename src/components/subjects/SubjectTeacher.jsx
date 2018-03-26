import React from 'react';
import { Icon } from 'semantic-ui-react';

const SubjectTeacher = ({ teacher, onTeacherClick}) => {

//Fix to change to livestream
const clickHandler = (view) => onTeacherClick('profile');

  return (
    <div>
      <div>
        <span  onClick={clickHandler}>
          <img src={teacher.image} alt='Teacher' className="fixed-box" />
        </span>
        <div className="description fixed-box">
          {teacher.description}
        </div>
        <div>
          <Icon name='user' color='blue'/>
          <a className="user-hover" onClick={clickHandler}>{teacher.username}</a>
        </div>
      </div>
      <Icon name='eye' />
      <span className='viewers'>{`${teacher.viewers} `}</span>
      <Icon name='heart' color='red'   />
      <span className='follower-count'>{`${teacher.followers}`}</span>
    </div>
  );
};

export default SubjectTeacher;