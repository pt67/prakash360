import React from "react";
import { NavLink, BrowserRouter as  Router } from 'react-router-dom';
export default ()=>{

return (


<div className="content-wrapper">

<h1>Contact Me</h1>
<p>Dear visitor, i have made a profile on peopleperhour.com to skillup my carrier and boost my connects. 
    If you are interested to checkout my service, reach to me. I will have nice conversaton.   </p>

<div className="contact">
<Router>
    <NavLink to="\pph.me/pkdev " target="_blank">Get In Touch</NavLink>
</Router>
</div>



</div>
);

}