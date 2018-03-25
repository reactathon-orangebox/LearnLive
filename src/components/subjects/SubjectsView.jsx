import React from 'react';
import Navbar from '../navbar/Navbar';
import Subject from './Subject';
import { data } from './lib/exampleData';

const SubjectsView = () => (
  <div>
    <Navbar />
      <h1 className="subject-header page-header">Courses</h1>
    {data.map(subject => <Subject topic={subject.topic} teachers={subject.teachers} />)}
  </div>
);

export default SubjectsView;