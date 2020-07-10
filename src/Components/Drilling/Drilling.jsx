import React from 'react';
import {NavLink} from 'react-router-dom';

import './Drilling.scss';

const Drilling = () => {
  return (
    <div>
        <div className="drilling__line">Сверление</div>

        <div className="block-drilling">
        <NavLink to='/calcAsymmetricDrilling' style={{textDecoration: 'none'}}>
          <div className="block-drilling__aymmetric-drilling">
            <p>ассиметричное</p>
          </div>
        </NavLink>

        <NavLink to='/calcSymmetricalDrilling' style={{textDecoration: 'none'}}>
          <div className="block-drilling__calcs-ymmetrical-drilling">
            <p>симетричное</p>
          </div>
        </NavLink>

        <NavLink to='/сalcBoreHole' style={{textDecoration: 'none'}}>
          <div className="block-drilling__сalc-boreHole">
            <p>Расточка отверстий</p>
          </div>
        </NavLink>

      </div>
    </div>
  );
}

export default Drilling;