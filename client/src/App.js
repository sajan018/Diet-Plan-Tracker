import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Homepage';
import CalculateCalory from './pages/Calculate-calories/Main';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate-calories" element={<CalculateCalory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
