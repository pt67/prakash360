import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
// import your profile image if available
// import ProfileImg from '../../images/profile.jpg';


export default ()=>{ 

return (


<section className="content-wrapper about modern-fadein" id="about">
    <div className="about-header">
      {/* <img src={ProfileImg} alt="Prakash" className="profile-img" /> */}
      <h1>About Me</h1>
    </div>
    <p className="about-desc">
      <strong>“</strong>
      I am a passionate web developer, a relentless explorer of digital possibilities. My journey is driven by curiosity and a desire to transform ideas into seamless, interactive experiences. With every project, I strive to blend creativity and technology, crafting solutions that inspire and empower users across the globe.
      <strong>”</strong>
    </p>
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
      </div>
    </div>
  </section>


);


}
