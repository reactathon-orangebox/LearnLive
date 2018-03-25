import React from 'react';
import SubjectTeacher from './SubjectTeacher';
import Flexbox from 'flexbox-react';

const Subject = ({ topic, teachers, onTeacherClick }) => (
  <div>
    <div className="topic page-header">
      <h2>{topic}</h2>
    </div>
    <Flexbox flexDirection="row" justifyContent="space-around">
        {teachers.map(teacher => 
        <div>
          <SubjectTeacher teacher={teacher} key={teacher.id} onTeacherClick={onTeacherClick} />
        </div>
        )}      
    </Flexbox>
  </div>
);

export default Subject;