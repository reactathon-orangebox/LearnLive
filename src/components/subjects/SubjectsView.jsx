import React from 'react';
import Subject from './Subject';
import { data } from './lib/exampleData';
import Navbar from '../navbar/Navbar2';

const SubjectsView = ({ onTeacherClick }) => (
  <div>
    <Navbar />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="subject-view-header">
      <h1 className="page-header">Courses</h1>
    </div>
    {data.map(subject => <Subject topic={subject.topic} teachers={subject.teachers} onTeacherClick={onTeacherClick}/>)}
  </div>
);

export default SubjectsView;