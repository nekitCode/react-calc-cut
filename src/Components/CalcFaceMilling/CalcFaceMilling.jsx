import React from 'react'

import './CalcFaceMilling.scss'

const CalcFaceMilling = () => {

  const divide = 1000;
  const pi = Math.PI;
  const cuttingSpeedV = 80;
  
  

  const inputDiametr = (e) => {
    let result = Math.floor((divide*cuttingSpeedV)/(e.target.value*pi));
    console.log(result);
  }

  const cuttingSpeed = (e) => {
    let res = e.target.value;
    if(e.target.value > 10000){
      e.target.value = 0;
    }
    console.log(res);
  }

  return (
    <div className='mode-table'>

    <div className="mode-table__line">Торцевое фрезерование</div>

      <ul className='calcTable'>

        <li className='calcTable__calc-item'>
          <div className='calcTable__description'>Диаметр</div>
          <input type="number" onBlur={inputDiametr}/>
          <div className='calcTable__desc-short '>Dc | mm</div>
        </li>

        <li className='calcTable__calc-item'>
          <div className='calcTable__description'>Скорость резания</div>
          <input type="number" onBlur={cuttingSpeed}/>
          <div className='calcTable__desc-short '>vc | m/min</div>
        </li>

        <li className='calcTable__calc-item'>
          <div className='calcTable__description'>Частота вращения</div>
          <input type="number"/>
          <div className='calcTable__desc-short '>n | RPM</div>
        </li>

        <li className='calcTable__calc-item'>
          <div className='calcTable__description'>Количество зубьев</div>
          <input type="number"/>
          <div className='calcTable__desc-short '>Z</div>
        </li>

        <li className='calcTable__calc-item'>
          <div className='calcTable__description'>Подача на зуб</div>
          <input type="number"/>
          <div className='calcTable__desc-short '>fz | mm</div>
        </li>

        <li className='calcTable__calc-item'>
          <div className='calcTable__description'>Минутная подача</div>
          <input type="number"/>
          <div className='calcTable__desc-short '>vf | mm/min</div>
        </li>

        <li className='calcTable__calc-item'>
          <div className='calcTable__description'>Подача на оборот</div>
          <input type="number"/>
          <div className='calcTable__desc-short '>fn | mm/rev</div>
        </li>

        <div className="result">
          <p>Диаметр: </p>
          <p>Скорость резания: </p>
          <p>Частота вращения: </p>
          <p>Количество зубьев: </p>
          <p>Подача на зуб: </p>
          <p>Минутная подача: </p>
          <p>Подача на оборот: </p>
        </div>

      </ul>
    </div>
  )
}

export default CalcFaceMilling;
