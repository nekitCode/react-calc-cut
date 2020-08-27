import React from 'react';
import Directory from './Components/Directory/Directory';
import List from './Components/List/List';
import Turning from './Components/Turning/Turning';
import Drilling from './Components/Drilling/Drilling';
import Milling from './Components/Milling/Milling';
import Thread from './Components/Threadprocessing/Thread';
import CalcStepMilling from './Components/CalcStepMilling/CalcStepMilling';
import CalcGrooverMilling from './Components/CalcGrooverMilling/CalcGrooverMilling';
import CalcFaceMilling from './Components/CalcFaceMilling/CalcFaceMilling';
import CalcAsymmetricDrilling from './Components/CalcAsymmetricDrilling/CalcAsymmetricDrilling';
import CalcSymmetricalDrilling from './Components/CalcSymmetricalDrilling/CalcSymmetricalDrilling';
import CalcBoreHole from './Components/CalcBoreHole/CalcBoreHole';
import ImgFx from "./Components/CalcFaceMilling/LinkIMgFx/IMgFx/ImgFx";
import ImgDr from './Components/CalcSymmetricalDrilling/LinkBtnDrill/ImgDr';

import {BrowserRouter, Route} from 'react-router-dom';

import './App.scss';






function App() {
  return (
    <BrowserRouter>
      <div className='container'>
          <div className='navBar__menu'>
            <List/>
            <Directory/> 
          </div>
        <div className='inform'>
          <Route path='/turning' exact component={Turning} />
          <Route path='/drilling' exact component={Drilling} />
          <Route path='/milling' exact component={Milling} />
          <Route path='/thread' exact component={Thread} />
          <Route path='/calcFaceMilling' exact component={CalcFaceMilling} />
          <Route path='/calcStepMilling' exact component={CalcStepMilling} />
          <Route path='/calcGrooveMilling' exact component={CalcGrooverMilling} />
          <Route path='/calcAsymmetricDrilling' exact component={CalcAsymmetricDrilling} />
          <Route path='/calcSymmetricalDrilling' exact component={CalcSymmetricalDrilling} />
          <Route path ='/сalcBoreHole' exact component={CalcBoreHole} />
          <Route path='/ImgFx' exact component={ImgFx} />
          <Route path='/ImgDr' exact component={ImgDr} />

          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
