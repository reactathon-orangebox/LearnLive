import React from 'react';
import SubjectTeacher from './SubjectTeacher';
import Flexbox from 'flexbox-react';

const Subject = (props) => (
  <div>
    <div className="topic page-header">
      <h2>{props.topic}</h2>
    </div>
    <Flexbox flexDirection="row" justifyContent="space-around">
        {props.teachers.map(teacher => 
        <div>
          <SubjectTeacher teacher={teacher} key={teacher.id} />
        </div>
        )}      
    </Flexbox>
  </div>
);

export default Subject;