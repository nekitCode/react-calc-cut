import React from 'react';

import './Directory.scss';

const Directory = () => {
    return (
        <div className='direct'>
        <h2>Справочник :</h2>
          <ul className='direct__list'>
            <li>
              <a href="/Materials">Материалы</a>   
            </li>
            <li>
            <a href="/landing">Допуски и посадки</a>
            </li>
            <li>
            <a href="/disposition">Допуски форм и срасположение</a> 
            </li>
          </ul>
    </div>
    )
}

export default Directory;