import React, { useState } from "react";
import Php from '../../images/php.webp';
import Nodejs from '../../images/nodejs.webp';
import Python from '../../images/python.webp';
import Rails from '../../images/rails.webp';
import pdata from './portfolio_data';

const Portfolio = () => {
    const [showdat, setShowdat] = useState(null);

    const handleShow = (type) => {
        let title = null;
        switch(type) {
            case 'php':
                title = pdata[0].php;
                break;
            case 'nodejs':
                title = pdata[0].nodejs;
                break;
            case 'python':
                title = pdata[0].python;
                break;
            case 'rails':
                title = pdata[0].rails;
                break;
            default:
                title = null;
        }
        setShowdat(title);
    };

    const handleClose = () => setShowdat(null);

    return (
        <section className="content-wrapper portfolio modern-fadein" id="portfolio">
            <h1>My Portfolio</h1>
            <p className="portfolio-desc">
                Explore a selection of my finest work, where innovation meets functionality. Click on a technology to discover the projects and solutions I’ve crafted with passion and precision.
            </p>
            <div className="tech-section">
                <h2 className="tech-title">Technologies</h2>
                <div className="arrow-balence">
                    <div className="flexer scroll-x no-scrollbar tech-grid">
                        <div className="box">
                            <img src={Php} alt="PHP" id="php" onClick={() => handleShow('php')} />
                            <span>PHP</span>
                        </div>
                        <div className="box">
                            <img src={Nodejs} alt="Node.js" id="nodejs" onClick={() => handleShow('nodejs')} />
                            <span>Node.js</span>
                        </div>
                        <div className="box">
                            <img src={Python} alt="Python" id="python" onClick={() => handleShow('python')} />
                            <span>Python</span>
                        </div>
                        <div className="box">
                            <img src={Rails} alt="Rails" id="rails" onClick={() => handleShow('rails')} />
                            <span>Rails</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {showdat && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleClose}>&times;</button>
                        <h2>{showdat.title}</h2>
                        <p>{showdat.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;