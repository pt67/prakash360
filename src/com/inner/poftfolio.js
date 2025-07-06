import React, { useState, useRef } from "react";
import Php from '../../images/php.webp';
import Nodejs from '../../images/nodejs.webp';
import Python from '../../images/python.webp';
import Rails from '../../images/rails.webp';
import pdata from './portfolio_data';

const Portfolio = () => {
    const [showdat, setShowdat] = useState();
    const detailRef = useRef(null);

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
        setTimeout(() => {
            if (detailRef.current) {
                detailRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="content-wrapper">
            <div className="arrow-balence">
                <div className="flexer scroll-x">
                    <div className="box">
                        <img src={Php} alt="PHP" id="php" onClick={() => handleShow('php')} />
                    </div>
                    <div className="box">
                        <img src={Nodejs} alt="Node.js" id="nodejs" onClick={() => handleShow('nodejs')} />
                    </div>
                    <div className="box">
                        <img src={Python} alt="Python" id="python" onClick={() => handleShow('python')} />
                    </div>
                    <div className="box">
                        <img src={Rails} alt="Rails" id="rails" onClick={() => handleShow('rails')} />
                    </div>
                </div>
            </div>
            <div className="card-detail" ref={detailRef}>
                {showdat && (
                    <div>
                        <h1>{showdat.title}</h1>
                        <p>{showdat.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;