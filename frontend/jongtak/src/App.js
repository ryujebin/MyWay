import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CommunityPage from "./components/CommunityPage";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/community" element={<CommunityPage />} />
    </Routes>
  );
}

export default App;
