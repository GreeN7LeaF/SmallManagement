import React, { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/plugins.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/dashboard" element={<></>} />
          </Route>
        </Routes>
      </Router>
    </StrictMode>
  );
}

export default App;
