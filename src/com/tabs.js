import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './inner/home';
import Poftfolio from './inner/poftfolio';
import About from './inner/about';
import Contact from './inner/contact';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">prakash360</div>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default function Tabs() {
  return (
    <Router>
      <Navbar />
      <div className="page-container" style={{ marginTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Poftfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}