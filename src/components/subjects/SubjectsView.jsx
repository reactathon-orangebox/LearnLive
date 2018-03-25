import React from 'react';
import Navbar from '../navbar/Navbar';
import Subject from './Subject';
import { data } from './lib/exampleData';

const SubjectsView = () => (
  <div>
    <Navbar />
    <h2>Subjects</h2>
    {data.map(subject => <Subject topic={subject.topic} teachers={subject.teachers} />)}
  </div>
);

export default SubjectsView;