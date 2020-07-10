import React from 'react';
import drillSvg from '..//../img/drill.svg';
import millingSvg from '..//../img/milling.svg';
import threadSvg from '..//../img/drill223.svg';
import machinerySvg from '..//../img/machinery.svg';
import {NavLink} from 'react-router-dom';

import './List.scss';

const List = () => {
  return (
    <div className='nav__item'>
      <h2>Калькулятор режимов резания :</h2>
      <ul className='list'>

      <NavLink activeClassName ='active' to='/Turning' style={{textDecoration:'none', color:'#000' }}>
          <li>
            <img src={machinerySvg} alt="machinery" className='machinery'/>
            Точение
          </li>
        </NavLink>
        
        <NavLink to='/Drilling' style={{textDecoration:'none', color:'#000' }} >
          <li>
            <img src={drillSvg} alt="drill" className='svgDrill'/>
            Сверление
          </li>
        </NavLink>

        <NavLink to='/Milling' style={{textDecoration:'none', color:'#000' }}>
          <li>
            <img src={millingSvg} alt="milling" className='millingSvg'/>
            Фрезерование
          </li>
        </NavLink>

        <NavLink to='/Thread' style={{textDecoration:'none', color:'#000' }}>
          <li>
            <img src={threadSvg} alt="thread" className='thread'/>
            Обработка резьбы
          </li>
        </NavLink>

      </ul>
    </div>
  )
}

export default List;