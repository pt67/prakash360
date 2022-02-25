import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Home from './inner/home';
import Poftfolio from './inner/poftfolio';
import About from './inner/about';
import Contact from './inner/contact';

export default () => (
 <div className='tabs-container'>
<Tabs>
    <TabList>
      <Tab>Home</Tab>
      <Tab>Portfolio</Tab>
      <Tab>About</Tab>
      <Tab>Contact</Tab>
    </TabList>

    <TabPanel>
      <Home/>
    </TabPanel>
    <TabPanel>
      <Poftfolio/>
    </TabPanel>
    <TabPanel>
      <About/>
    </TabPanel>
    <TabPanel>
      <Contact/>
    </TabPanel>
  </Tabs>
 </div>
  
);