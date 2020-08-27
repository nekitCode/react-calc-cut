import React,{useState} from 'react';
import LinkIMgDr from './LinkBtnDrill/LinkBtnDrilling';

import '../CalcSymmetricalDrilling/CalcSymmetricalDrilling.scss';

const CalcSymmetricalDrilling = () => {

    const [diametr, setDiametr] = useState('');
    const [speedCuting, setSpeedCuting] = useState('');
    const [rotationFrequency, setRotationFrequency] = useState('');
    const [feedPerRevolution, setFeedPerRevolution] = useState('');
    const [minuteFeed,setMinuteFeed] = useState('');
    const [depth,setDepth] = useState('');

    const calcDiametr = e => {
        setDiametr(Number(e.target.value));
    };

    const caclSpeedCuting = e => {
        setSpeedCuting(Number(e.target.value));
   };

    const calcRotation = () => {
        setRotationFrequency(Math.floor((speedCuting * 1000 ) / (diametr * Math.PI)));     
    };

    const calcFeedPerRevolution = (e) => {
        setFeedPerRevolution(e.target.value);
    };
//vf = fn * n
    const calcMinuteFeed = (e) => {
        setMinuteFeed(Math.round(Number(feedPerRevolution) * Number(rotationFrequency)));
    };

// l+h/vf

    const depthValue = (e) => {
        setDepth(Number(e.target.value));
    }


    return (
        <div className='symmetrical-drilling'>
            <div className="symmetrical-drilling__line">симетричное</div>
                <ul className='symmetrical'>
 
                <li className='symmetrical__calc-item'>
                     <div className='symmetrical__description'>Диаметр</div>
                         <input 
                        type="number"
                        value={diametr}
                        onChange={calcDiametr}
                        />
                        <div className='symmetrical__desc-short'>Dc | mm</div>
                </li>
    
                <li className='symmetrical__calc-item'>
                    <div className='symmetrical__description'>Скорость резания</div>
                        <input 
                        type="number"
                        value={speedCuting}
                        onChange={caclSpeedCuting}
                        />
                        <div className='symmetrical__desc-short'>vc | m/min</div>
                </li>
    
                <li className='symmetrical__calc-item'>
                    <div className='symmetrical__description'>Частота вращения</div>
                        <input 
                        type="number"
                        value={rotationFrequency || ''}
                        onChange={() =>{}}
                        onClick={calcRotation}
                        />
                        <div className='symmetrical__desc-short'>n | RPM</div>
                </li>

                <li className='symmetrical__calc-item'>
                    <div className='symmetrical__description'>Подача на оборот</div>
                        <input 
                        type="number"
                        value={feedPerRevolution}
                        onChange={calcFeedPerRevolution}
                        />
                        <div className='symmetrical__desc-short'>fn | mm/rev</div>
                </li>     

                <li className='symmetrical__calc-item'>
                        <div className='symmetrical__description'>Минутная подача</div>
                        <input type="number"
                               value={minuteFeed || ''}
                               onChange={()=>{}}
                               onClick={calcMinuteFeed}
                        />
                        <div className='calcTable__desc-short '>vf | mm/min</div>
                </li>

                <li className='symmetrical__calc-item'>
                        <div className='symmetrical__description'>Глубина отверстия</div>
                        <input type="number"
                               value={depth || ''}
                               onChange={depthValue}
                        />
                        <div className='symmetrical__desc-short'>lm | mm</div>
                </li>

                <li className='symmetrical__calc-item '>
                        <LinkIMgDr />
                </li>

                <div className="symmetrical__result">
                        <p>Диаметр : <span>{diametr} </span></p>
                        <p>Скорость резания : <span>{speedCuting}</span></p>
                        <p>Частота вращения : <span>{rotationFrequency || ''}</span></p>
                        <p>Подача на оборот : <span>{feedPerRevolution}</span></p>
                        <p>Минутная подача : <span>{minuteFeed || ''}</span></p> 
                        <p>Глубина отверстия : <span>{depth}</span></p>
                </div>

                </ul>
        </div>
    )
}

export default CalcSymmetricalDrilling;