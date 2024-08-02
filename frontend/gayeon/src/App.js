import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Person from './Person';
import WalkTrail from './WalkTrail';
import Service from './Service';
import NewWalkTrail from './NewWalkTrail';
import Login from './Login.js';
import QandA from './QandA';
import { QandA1 } from './QandA';
import { QandA2 } from './QandA';
import { QandA3 } from './QandA';
import { QandA4 } from './QandA';

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
          <Route path="/QandA" element={<QandA />} />
          <Route path="/QandA1" element={<QandA1 />} />
          <Route path="/QandA2" element={<QandA2 />} />
          <Route path="/QandA3" element={<QandA3 />} />
          <Route path="/QandA4" element={<QandA4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
