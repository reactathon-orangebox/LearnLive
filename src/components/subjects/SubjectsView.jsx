import React from 'react';
import Subject from './Subject';
import subjectData from './lib/exampleData';

const SubjectsView = () => (
  <div>
    {subjectData.topics.map(topic => <Subject topic={topic} teachers={subjectData.artTeachers} />)}
  </div>
);

export default SubjectsView;