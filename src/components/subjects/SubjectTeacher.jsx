import React from 'react';

const SubjectTeacher = (props) => (
  <div>
    <div>
      <img src={'https://images.cdn1.stockunlimited.net/clipart/businessman-avatar_1953703.jpg'} alt='Teacher' />
      <span className="description">
        <b>{props.teacher.username}</b>
        <br/>
        {props.teacher.description}
      </span>
    </div>
    <div className='viewers'>Viewers: {props.teacher.views}</div>
    <div className='follower-count'>Followers: {props.teacher.followers}</div>
  </div>
);

export default SubjectTeacher;