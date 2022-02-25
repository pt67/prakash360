import React from 'react';
import Abatar from '../images/abatar.webp';
 

function TopHeader(){
    return(
        
         <div className="hcover">
            <div className="image-container">
                  <img src={ Abatar } alt="Prakash abatar"/> 
            </div>

        </div>

    );
}


export default TopHeader;