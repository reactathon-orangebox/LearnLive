import React from 'react';
import SubjectTeacher from './SubjectTeacher';

const Subject = (props) => (
  <div >
    <h3>{props.topic}</h3>
      {props.teachers.map(teacher => <SubjectTeacher teacher={teacher} />)}
  </div>
);

export default Subject;