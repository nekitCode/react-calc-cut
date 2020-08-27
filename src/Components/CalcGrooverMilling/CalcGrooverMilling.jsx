import React from 'react';

import './CalcGrooverMilling.scss';
import Input from '../CalcComponets/Inputs';



function CalcGrooverMilling() {
    return (
        <div className='groover-milling'>
            <div className="lineInfo-groover">Фрезерование пазов</div>
                <ul className='groover-milling__groover-container'>

                    <Input />

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Количество зубьев</div>

                        <input type="number"
                            //    onChange={this.numberOfTeeth}
                            //    value={this.state.numberOfTeethValue}
                        />

                        <div className='calcTable__desc-short '>Z</div>
                    </li>

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Глубина резания</div>

                        <input type="number"
                            //    onChange={this.numberOfTeeth}
                            //    value={this.state.numberOfTeethValue}
                        />

                        <div className='calcTable__desc-short '>Z</div>
                    </li>

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Ширина резания</div>

                        <input type="number"
                            //    onChange={this.numberOfTeeth}
                            //    value={this.state.numberOfTeethValue}
                        />

                        <div className='calcTable__desc-short '>Z</div>
                    </li>

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Подача на зуб</div>

                        <input type="number"
                            //    onChange={this.feedOnTooth}
                            //    value={this.state.feedOnToothValue}
                        />

                        <div className='calcTable__desc-short '>fz | mm</div>
                    </li>

                     <li className='input__calc-item'>
                    <div className='input__description'>Подача на оборот</div>
                        <input 
                        type="number"
                        // value={feedPerRevolution}
                        // onChange={calcFeedPerRevolution}
                        />
                        <div className='input__desc-short'>fn | mm/rev</div>
                     </li>

                    <li className='input__calc-item'>
                        <div className='input__description'>Минутная подача</div>
                        <input type="number"
                            //    value={minuteFeed || ''}
                            //    onChange={()=>{}}
                            //    onClick={calcMinuteFeed}
                        />
                        <div className='input__desc-short '>vf | mm/min</div>
                    </li>

                </ul>
        </div>
    )
}

export default CalcGrooverMilling;
