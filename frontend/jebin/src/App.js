import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MapContainer from './components/MapContainer';
import HomePage from './components/HomePage';
import CommunityPage from './components/CommunityPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/map" element={<MapContainer />} />
      </Routes>
    </div>
  );
}

export default App;