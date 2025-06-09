import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
// const apiBase = process.env.REACT_APP_API_URL || '';

function Home() {
  return (
    <div>
      <h3>Joanne's Portfolio Site</h3>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default App;