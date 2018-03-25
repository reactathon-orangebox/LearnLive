import React from 'react';
import Navbar from '../navbar/Navbar';
import Subject from './Subject';
import { data } from './lib/exampleData';

const SubjectsView = ({ onTeacherClick }) => (
  <div>
    <Navbar />
    <div className="subject-view-header">
      <h1 className="page-header">Courses</h1>
    </div>
    {data.map(subject => <Subject topic={subject.topic} teachers={subject.teachers} onTeacherClick={onTeacherClick}/>)}
  </div>
);

export default SubjectsView;