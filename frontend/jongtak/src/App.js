import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CommunityPage from "./CommunityPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/community" element={<CommunityPage />} />
    </Routes>
  );
}

export default App;
