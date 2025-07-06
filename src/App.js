import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './custom.css';
import TopHeader from './com/header';
import Poftfolio from './com/inner/poftfolio';
import About from './com/inner/about';
import Contact from './com/inner/contact';
import Themes from './com/themes';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function Loader() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let timer;
    if (progress < 100) {
      timer = setTimeout(() => setProgress(progress + 2), 10);
    }
    return () => clearTimeout(timer);
  }, [progress]);
  return (
    <div className="loader-bg">
      <div className="loader-meter">
        <div className="loader-bar" style={{ width: `${progress}%` }} />
      </div>
      <span className="loader-text">Loading {progress}%</span>
    </div>
  );
}

function Home() {
  return (
    <div className='main'>
      <TopHeader/>
      <section className="content-wrapper home modern-fadein">
        <div className="hero">
          <h1>
            Welcome to <span className="highlight">WebDev King</span>
          </h1>
          <p>
            Hi, I’m Prakash — a creative web developer dedicated to building
            beautiful, high-performance digital experiences. Explore my portfolio,
            learn about my journey, and let’s create something extraordinary
            together!
          </p>
          <Link to="/portfolio" className="cta-btn">
            View Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}



function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // Loader duration
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;
  return (    
<div className="url-nav">
<Router>
  <nav className="navbar">
        <div className="navbar-logo">prakash360</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Poftfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/themes/hajira/" element={<Themes />} />
  </Routes>
</Router>
</div>
    
  );
}

export default App;
