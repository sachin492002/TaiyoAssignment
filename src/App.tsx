import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Maps from "./components/Maps/Maps";
import Layout from "./components/Layout";
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="contacts" element={<Home />} />
                  <Route path="maps" element={<Maps />} />
              </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
