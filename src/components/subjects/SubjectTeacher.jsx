import React from 'react';
import { Icon } from 'semantic-ui-react';

const SubjectTeacher = (props) => (
  <div>
    <div>
      <img src={'https://images.cdn1.stockunlimited.net/clipart/businessman-avatar_1953703.jpg'} alt='Teacher' />
      <span className="description">
        <Icon name='user' color='blue'/>
        <b>{props.teacher.username}</b>
        <br/>
        {props.teacher.description}
      </span>
    </div>
    <Icon name='eye' />
    <span className='viewers'>{`${props.teacher.viewers} `}</span>
    <Icon name='heart' color='red'   />
    <span className='follower-count'>{`${props.teacher.followers}`}</span>
  </div>
);

export default SubjectTeacher;