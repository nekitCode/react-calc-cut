import React from 'react';
import {NavLink} from 'react-router-dom';

import './Milling.scss';


const Milling = (props) => {
  return (

    <div>
      <div className="milling">
        <div className="milling__line">Фрезерование</div>
      </div>

      <div className="block">
        <NavLink to='/calcfaceMilling' style={{textDecoration: 'none'}}>
          <div className="faceMilling">
            <p>Торцевое фрезерование</p>
          </div>
        </NavLink>

        <NavLink to='/calcStepMilling' style={{textDecoration: 'none'}}>
          <div className="block__stepMilling">
            <p>Фрезерование уступов</p>
          </div>
        </NavLink>

        <NavLink to='/calcGrooveMilling' style={{textDecoration: 'none'}}>
          <div className="block__grooveМilling">
            <p>Фрезерование пазов</p>
          </div>
        </NavLink>

      </div>
    </div>
  );
}

export default Milling;