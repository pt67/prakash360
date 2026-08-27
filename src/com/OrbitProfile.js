import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faNodeJs, faPhp, faPython
} from '@fortawesome/free-brands-svg-icons';
import { faBolt, faGem, faDatabase } from '@fortawesome/free-solid-svg-icons';
import ProfileImg from '../images/abatar.webp';

const orbitOuter = [
  { label: 'React', icon: faReact },
  { label: 'Node.js', icon: faNodeJs },
  { label: 'PHP', icon: faPhp },
  { label: 'Python', icon: faPython },
];

const orbitInner = [
  { label: 'Laravel', icon: faBolt },
  { label: 'Rails', icon: faGem },
  { label: 'MySQL', icon: faDatabase },
  { label: 'Django', icon: faPython },
];

function OrbitProfile() {
  const sceneRef = useRef(null);

  const handleMove = (e) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const rect = scene.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    scene.style.setProperty('--rx', `${y * -18}deg`);
    scene.style.setProperty('--ry', `${x * 18}deg`);
  };

  const reset = () => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.style.setProperty('--rx', '0deg');
    scene.style.setProperty('--ry', '0deg');
  };

  return (
    <div className="orbit-wrap" aria-label="Profile with orbiting programming languages">
      <div
        ref={sceneRef}
        className="orbit-scene"
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        <div className="orbit-halo" />
        <div className="orbit-avatar">
          <img src={ProfileImg} alt="Prakash" />
        </div>

        {/* Outer ring (tilted, counter-rotating) */}
        <div className="orbit-ring ring-outer">
          {orbitOuter.map((t, i) => (
            <span
              key={t.label}
              className="orbit-dot"
              style={{ '--i': i }}
              title={t.label}
            >
              <FontAwesomeIcon icon={t.icon} />
            </span>
          ))}
          <div className="orbit-axis" />
        </div>

        {/* Inner ring */}
        <div className="orbit-ring ring-inner">
          {orbitInner.map((t, i) => (
            <span
              key={t.label}
              className="orbit-label"
              style={{ '--i': i }}
            >
              {t.label}
            </span>
          ))}
          <div className="orbit-axis inner" />
        </div>
      </div>
    </div>
  );
}

export default OrbitProfile;
