import React, { useState } from "react";
import Php from '../../images/php.webp';
import Nodejs from '../../images/nodejs.webp';
import Python from '../../images/python.webp';
import Rails from '../../images/rails.webp';
import Arrow from '../../images/chevron-right.svg';
import pdata from './portfolio_data';



export default ()=>{

const [showdat, setShowdat ] = useState();


let meter = 10;


function showPhp(e){
    var title = pdata[0].php;

    setShowdat(title)
    window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
    
}

function showNodejs(e){
    var title = pdata[0].nodejs;

    setShowdat(title);

    window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });

}


function showPython(e){
    var title = pdata[0].python;

    setShowdat(title);

    window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
}


function showRails(e){
    var title = pdata[0].rails;

    setShowdat(title);
    window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
}


return (


<div className="content-wrapper">

<div className="arrow-balence">

<div className="flexer"> {/* ========= Flex started  */}

<div className="box">
    <img src={ Php } alt="img1" id="php" onClick={ showPhp }/>
</div>

<div className="box">
    <img src={Nodejs} alt="img1" id="nodejs" onClick={ showNodejs }/>
</div>

<div className="box">
    <img src={Python} alt="img1" id="python" onClick={ showPython }/>
</div>

<div className="box">
    <img src={Rails} alt="img1" id="rails" onClick={ showRails }/>
</div>
</div>
<div className="to-right">
    <img src={ Arrow } onClick={            
        (e)=>{
          meter +=20;   
          e.target.parentElement.parentElement.children[0].scrollLeft = meter;

          if(e.target.parentElement.parentElement.children[0].scrollLeftMax < meter){
              e.target.hidden=true;
          }

    } } alt="chevron"/>
</div>

</div>

{/* ============== generated  ================== */}

<div className="card-detail">

    {  (showdat) ?
     <>    
     <h1>{ showdat.title }</h1>
     <p>{ showdat.description }</p>
         
     </>
    
    : '' }

</div>


</div>


);


}