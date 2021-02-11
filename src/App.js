import React from 'react';
import './App.css';
import DisplayPost from './components/DisplayPost';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className="App">
      
       
      <h1> অন্তরজ্বালা  </h1>
      <CreatePost />
      <DisplayPost />
    </div>
  );
}

export default App;
