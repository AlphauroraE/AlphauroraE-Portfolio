import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import Bottom from './components/Bottom';
import NavBar from './components/NavBar';
// const apiBase = process.env.REACT_APP_API_URL || '';

function HomePage() {
  return (
    <div>
      <NavBar />
      <Home />
      <Bottom />
    </div>
  );
}

function ProjectsPage() {
  return (
    <div>
      <h3>Projects</h3>
    </div>
  );
}

function ExperiencePage() {
  return (
    <div>
      <h3>Experience</h3>
    </div>
  );
}

function PhotographyPage() {
  return (
    <div>
      <h3>Photography</h3>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/photography" element={<PhotographyPage />} />
      </Routes>
    </Router>
  );
};
export default App;