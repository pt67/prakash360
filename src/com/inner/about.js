import React from "react";
import { NavLink, BrowserRouter as  Router } from 'react-router-dom';
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
   <Router>
       <NavLink to="\twitter.com/pt6765759" target="_blank"><FontAwesomeIcon icon={faTwitter} /></NavLink>
       <NavLink to="\instagram.com/pnpbrother/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></NavLink>
       <NavLink to="\facebook.com/prakashinme" target="_blank"><FontAwesomeIcon icon={faFacebook} /></NavLink>
   </Router> 
</div>

</div>


);


}
