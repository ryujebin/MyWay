import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./asset/section/Header";
import Footer from "./asset/section/Footer";
import HomePage from "./components/HomePage";
import MapContainer from "./components/MapContainer";
import CommunityPage from "./components/CommunityPage";
import Person from "./components/Person";
import WalkTrail from "./components/WalkTrail";
import Service from "./components/Service";
import NewWalkTrail from "./components/NewWalkTrail";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js"; // Import the SignUp component
import QandA from "./components/QandA";
import { QandA1 } from "./components/QandA";
import { QandA2 } from "./components/QandA";
import { QandA3 } from "./components/QandA";
import { QandA4 } from "./components/QandA";

import "./asset/scss/style.scss"; // 통합 스타일 파일 import



function App() {
  const location = useLocation();

  return (
    <div className="App">
        {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/signup" && <Header />}      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/map" element={<MapContainer />} />
        <Route path="/person" element={<Person />} />
        <Route path="/walktrail" element={<WalkTrail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/NewWalkTrail" element={<NewWalkTrail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* Add this line */}
        <Route path="/QandA" element={<QandA />} />
        <Route path="/QandA1" element={<QandA1 />} />
        <Route path="/QandA2" element={<QandA2 />} />
        <Route path="/QandA3" element={<QandA3 />} />
        <Route path="/QandA4" element={<QandA4 />} />
      </Routes>
      {location.pathname !== "/map" && <Footer />} {/* MapContainer가 아닌 경우 Footer 렌더링 */}
    </div>
  );
}

export default App;
