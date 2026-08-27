import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faDraftingCompass, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import ProfileImg from '../../images/abatar.webp';

const skills = ['PHP', 'Node.js', 'Python', 'Ruby on Rails', 'Laravel', 'Django', 'React', 'PostgreSQL', 'Docker'];

const process = [
  { icon: faLightbulb, title: 'Discover', desc: 'We clarify your goals, audience, and scope.' },
  { icon: faDraftingCompass, title: 'Design', desc: 'Wireframes and prototypes that nail the UX.' },
  { icon: faCode, title: 'Build', desc: 'Clean, scalable, testable full-stack code.' },
  { icon: faRocket, title: 'Launch', desc: 'Deploy, monitor, and iterate for growth.' },
];

export default () => (
  <section className="content-wrapper about modern-fadein" id="about">
    <div className="about-header">
      <img src={ProfileImg} alt="Prakash" className="profile-img" />
      <div>
        <span className="eyebrow">The Developer</span>
        <h1>About Me</h1>
      </div>
    </div>
    <p className="about-desc">
      <strong>&ldquo;</strong>
      I'm Prakash, a freelance full-stack developer helping founders and
      businesses ship web products they're proud of. My journey is driven by
      curiosity and a desire to transform ideas into seamless, interactive
      experiences — blending creativity and technology to build solutions that
      inspire and empower users across the globe.
      <strong>&rdquo;</strong>
    </p>

    <div className="skills">
      {skills.map((s) => (
        <span key={s} className="skill-chip">{s}</span>
      ))}
    </div>

    <h2 className="process-title">How I Work</h2>
    <div className="process-grid">
      {process.map((p) => (
        <div key={p.title} className="process-card">
          <div className="bento-icon small">
            <FontAwesomeIcon icon={p.icon} />
          </div>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>

    <div className="follow">
      <span>Follow me:</span>
      <div>
        <a href="https://twitter.com/pt6765759" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com/pnpbrother/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://facebook.com/prakashinme" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  </section>
);
