import React from 'react';
import {Link} from 'react-router-dom';

import './Milling.scss';


const Milling = (props) => {
  return (

    <div>
      <div className="milling">
        <div className="milling__line">Фрезерование</div>
      </div>

      <div className="block">
        <Link to='/calcfaceMilling' style={{textDecoration: 'none'}}>
          <div className="faceMilling">
            <p>Торцевое фрезерование</p>
          </div>
        </Link>

        <Link to='/calcStepMilling' style={{textDecoration: 'none'}}>
          <div className="block__stepMilling">
            <p>Фрезерование уступов</p>
          </div>
        </Link>

        <Link to='/calcGrooveMilling' style={{textDecoration: 'none'}}>
          <div className="block__grooveМilling">
            <p>Фрезерование пазов</p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Milling;