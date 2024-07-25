import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Person from './Person';
import WalkTrail from './WalkTrail';
import Service from './Service';
import NewWalkTrail from './NewWalkTrail';
import Login from './Login.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/person" element={<Person />} />
          <Route path="/walktrail" element={<WalkTrail />} />
          <Route path="/service" element={<Service />} />
          <Route path="/NewWalkTrail" element={<NewWalkTrail />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
