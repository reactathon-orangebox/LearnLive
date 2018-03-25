import React from 'react';
import Subject from './Subject';
import { data } from './lib/exampleData';
import Navbar from '../navbar/Navbar2';
import { Icon } from 'semantic-ui-react'

const SubjectsView = ({ onTeacherClick }) => (
  <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="subject-view-header">
      <h1 className="page-header">
        <Icon name='book' size='large'/>
        Courses
      </h1>
    </div>
    {data.map(subject => <Subject topic={subject.topic} teachers={subject.teachers} onTeacherClick={onTeacherClick}/>)}
  </div>
);

export default SubjectsView;
