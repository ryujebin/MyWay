import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./asset/section/Header.js";
import Footer from "./asset/section/Footer.js";
import HomePage from "./components/HomePage.js";
import MapContainer from "./components/MapContainer.js";
import CommunityPage from "./components/CommunityPage.js";
import Person from "./components/Person.js";
import WalkTrail from "./components/WalkTrail.js";
import Service from "./components/Service.js";
import NewWalkTrail from "./components/NewWalkTrail.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import QandA from "./components/QandA.js";
import { QandA1 } from "./components/QandA.js";
import { QandA2 } from "./components/QandA.js";
import { QandA3 } from "./components/QandA.js";
import { QandA4 } from "./components/QandA.js";
import WritePost from "./components/WritePost.js"; // Import WritePost component
import Inquire from "./components/Inquire.js"; // Import Inquire component

import "./asset/scss/style.scss"; // 통합 스타일 파일 import

function App() {
  const location = useLocation();

  return (
    <div className="App">
        {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/signup" && <Header />}      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/inquire" element={<Inquire />} />{" "}
        {/* Add Inquire route */}
        <Route path="/map" element={<MapContainer />} />
        <Route path="/person" element={<Person />} />
        <Route path="/walktrail" element={<WalkTrail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/NewWalkTrail" element={<NewWalkTrail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/QandA" element={<QandA />} />
        <Route path="/QandA1" element={<QandA1 />} />
        <Route path="/QandA2" element={<QandA2 />} />
        <Route path="/QandA3" element={<QandA3 />} />
        <Route path="/QandA4" element={<QandA4 />} />
      </Routes>
      {location.pathname !== "/map" && <Footer />}{" "}
      {/* MapContainer가 아닌 경우 Footer 렌더링 */}
    </div>
  );
}

export default App;
