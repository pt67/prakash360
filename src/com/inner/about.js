import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


export default ()=>{ 

return (


<div className="content-wrapper about">


<h1>About Me</h1>
<p>
    <strong>"</strong>A passionate and dreamer on web technology struggling to explore the core functionality into reality.
    <strong>"</strong>


</p>

<div className="follow">
   <div>
       <a href="https://twitter.com/pt6765759" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
       <a href="https://instagram.com/pnpbrother/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
       <a href="https://facebook.com/prakashinme" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
   </div> 
</div>

</div>


);


}
