import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './custom.css';
import TopHeader from './com/header';
import CTabs from './com/tabs';
import Themes from './com/themes';


function Home() {
  return (
    <div className='main'>
      <TopHeader/>
      <CTabs/>
    </div>
  );
}



function App() {
  return (    
<div className="url-nav">
<Router>
<div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/themes/hajira/" element={<Themes />} />
  </Routes>
</div>
</Router>
</div>
    
  );
}







export default App;
