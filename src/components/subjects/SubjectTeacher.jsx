import React from 'react';

const SubjectTeacher = (props) => (
  <div class="subject-teacher">
    <div>
      {props.teacher.username}
    </div>
    <div>
      <img src={'https://images.cdn1.stockunlimited.net/clipart/businessman-avatar_1953703.jpg'} alt='Teacher' />
    </div>
    <span>Views: {props.teacher.views}</span>
    <span>Followers: {props.teacher.followers}</span>
  </div>
);

export default SubjectTeacher;