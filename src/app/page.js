"use client";
// Import library yang diperlukan
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Routes,
} from "react-router-dom";

import Page from "./screens/main";
// Komponen utama yang menggunakan React Router
const Home = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/getquote'
          Component={Page}
        />
      </Routes>
    </Router>
  );
};

export default Home;
