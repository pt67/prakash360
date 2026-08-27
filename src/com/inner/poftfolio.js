import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode, faServer, faCartShopping, faFileLines,
  faBolt, faWrench, faArrowRight, faXmark, faStar
} from '@fortawesome/free-solid-svg-icons';
import projects from './portfolio_data';
import Reveal from '../Reveal';

const iconMap = {
  faLaptopCode, faServer, faCartShopping, faFileLines, faBolt, faWrench,
};

const Portfolio = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => { if (e.key === 'Escape') setActive(null); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  const handleGlow = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="content-wrapper portfolio modern-fadein" id="portfolio">
      <div className="section-head">
        <span className="eyebrow">What I Do</span>
        <h1>Services I Deliver</h1>
        <p className="portfolio-desc">
          As a freelance full-stack developer, I partner with you end-to-end —
          from the first wireframe to launch and beyond. Explore the modules
          below and click any card to see exactly what's included.
        </p>
      </div>

      <div className="bento-grid">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <article
              className={`bento-card ${p.id}`}
              onClick={() => setActive(p)}
              tabIndex={0}
              role="button"
              aria-label={p.title}
              onMouseMove={handleGlow}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActive(p);
                }
              }}
            >
              <div className="bento-icon">
                <FontAwesomeIcon icon={iconMap[p.icon]} />
              </div>
              <span className="bento-cat">{p.category}</span>
              <h3>{p.title}</h3>
              <p className="bento-tagline">{p.tagline}</p>
              <div className="bento-cta">
                View details <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="modal-overlay"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div className="modal-content service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className="service-modal-head">
              <div className="bento-icon large">
                <FontAwesomeIcon icon={iconMap[active.icon]} />
              </div>
              <div>
                <span className="bento-cat">{active.category}</span>
                <h2>{active.title}</h2>
                <p className="service-tagline">{active.tagline}</p>
              </div>
            </div>

            <p className="service-desc">{active.description}</p>

            <div className="service-tech">
              {active.tech.map((t) => <span key={t} className="skill-chip">{t}</span>)}
            </div>

            <ul className="service-list">
              {active.highlights.map((h) => (
                <li key={h}>
                  <FontAwesomeIcon icon={faStar} className="star" /> {h}
                </li>
              ))}
            </ul>

            <div className="service-footer">
              <span className="deliverables">
                <strong>Deliverables:</strong> {active.deliverables}
              </span>
              <a href="/contact" className="modal-link">
                Start a project <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
