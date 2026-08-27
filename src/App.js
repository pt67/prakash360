import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './custom.css';
import Poftfolio from './com/inner/poftfolio';
import About from './com/inner/about';
import Contact from './com/inner/contact';
import Themes from './com/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ParticleBackground from './com/particles';
import Typewriter from './com/Typewriter';
import OrbitProfile from './com/OrbitProfile';

function Loader() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(progress < 100 ? progress + 2 : 100), 10);
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
    <div className="main">
      <section className="home-hero">
        <div className="home-hero-inner">
          <OrbitProfile />

          <span className="eyebrow">Freelance Full-Stack Developer</span>
          <h1 className="typed-title">
            Hello, I'm <span className="highlight">Prakash</span>
          </h1>
          <h2 className="role-line">
            I build <Typewriter text="Web Apps, APIs, E-commerce & Automations" />
          </h2>
          <p>
            A freelance full-stack developer who partners with startups and
            businesses to turn ideas into fast, secure, and delightful digital
            products — from concept and design to launch and beyond.
          </p>
          <div className="cta-group">
            <Link to="/portfolio" className="cta-btn">
              View My Services <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/contact" className="cta-btn cta-outline">
              Hire Me
            </Link>
          </div>

          <div className="home-stats">
            <div className="stat">
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat">
              <strong>40+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="stat">
              <strong>15+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="stat">
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>

          <div className="home-tech">
            <span className="tech-label">Core stack:</span>
            <span className="skill-chip">React</span>
            <span className="skill-chip">Node.js</span>
            <span className="skill-chip">PHP / Laravel</span>
            <span className="skill-chip">Python</span>
            <span className="skill-chip">Rails</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  if (loading) return <Loader />;

  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="url-nav">
        <ParticleBackground />
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/" onClick={closeMenu}>prakash360</Link>
          </div>
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
          <div
            className={`menu-backdrop ${menuOpen ? 'open' : ''}`}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Poftfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/themes/hajira/" element={<Themes />} />
        </Routes>
        <footer className="site-footer">
          <p>
            &copy; {new Date().getFullYear()} prakash360 &middot; Crafted with{' '}
            <span className="footer-heart">&hearts;</span> by Prakash
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
