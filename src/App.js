import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from "faker";
import CommentDetail from './components/CommentDetail';

function App() {
  return (
    <div>
    <CommentDetail author="Sam" />
    <CommentDetail author="Alex" />
    <CommentDetail author="Jane" />

    </div>
  );
}

export default App;
