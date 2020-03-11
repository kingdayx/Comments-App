import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from "faker";
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

function App() {
  return (
    <div className="ui container comments">
    <ApprovalCard><div> <h4>Warning!</h4>Are you sure you want to do this?</div></ApprovalCard>
    <ApprovalCard><CommentDetail author="Sam"  timeAgo="Today at 4:45PM" content="Nice Blog Post!" /></ApprovalCard>
    <ApprovalCard><CommentDetail author="Alex" timeAgo="Today at 2:00AM" content="I like the subject" /></ApprovalCard>
    <ApprovalCard><CommentDetail author="Jane" timeAgo="Yestarday at 5:00PM" content="i like the writing!" /></ApprovalCard>

    </div>
  );
}

export default App;
