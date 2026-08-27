import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import ProfileImg from '../../images/abatar.webp';

export default () => (
  <section className="content-wrapper contact modern-fadein" id="contact">
    <div className="hire-profile">
      <div className="hire-avatar">
        <img src={ProfileImg} alt="Prakash, freelance full-stack developer" />
        <span className="hire-avatar-badge">Available for work</span>
      </div>

      <span className="eyebrow">Let's Build Something Great</span>
      <h1>Ready to Hire a Full-Stack Developer?</h1>
      <div className="hire-quote">
        <FontAwesomeIcon icon={faQuoteLeft} className="hire-quote-icon" />
        <p>
          I partner with startups and businesses to turn ideas into fast,
          secure, and delightful digital products — from concept to launch and
          beyond. Tell me about your project and I'll get back to you within 24
          hours.
        </p>
      </div>

      <a
        href="https://pph.me/pkdev"
        target="_blank"
        rel="noopener noreferrer"
        className="hire-me-btn"
      >
        <FontAwesomeIcon icon={faCodeBranch} />
        <span className="hire-me-text">
          <span className="hire-me-main">Hire Me on PPH</span>
          <span className="hire-me-sub">Prakash - Full-Stack Developer</span>
        </span>
        <FontAwesomeIcon icon={faArrowRight} className="hire-me-arrow" />
      </a>

      <p className="hire-reassurance">
        Free consultation &middot; Flexible engagement &middot; 24h response
      </p>
    </div>
  </section>
);
