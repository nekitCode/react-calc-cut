import React, {useState} from 'react';

import './Input.scss';

const Input = () => {

    const [diametr, setDiametr] = useState('');
    const [speedCuting, setSpeedCuting] = useState('');
    const [rotationFrequency, setRotationFrequency] = useState('');
    // const [feedPerRevolution, setFeedPerRevolution] = useState('');
    // const [minuteFeed,setMinuteFeed] = useState('');

    const calcDiametr = e => {
        setDiametr(Number(e.target.value));
    };

    const caclSpeedCuting = e => {
        setSpeedCuting(Number(e.target.value));
   };

    const calcRotation = () => {
        setRotationFrequency(Math.floor((speedCuting * 1000 ) / (diametr * Math.PI)));     
    };

//     const calcFeedPerRevolution = (e) => {
//         setFeedPerRevolution(e.target.value);
//     };
// //vf = fn * n
//     const calcMinuteFeed = (e) => {
//         setMinuteFeed(Math.round(Number(feedPerRevolution) * Number(rotationFrequency)));
//     };

    return (
            <>
                <li className='input__calc-item'>
                     <div className='input__description'>Диаметр</div>
                         <input 
                        type="number"
                        value={diametr}
                        onChange={calcDiametr}
                        />
                        <div className='input__desc-short'>Dc | mm</div>
                </li>
    
                <li className='input__calc-item'>
                    <div className='input__description'>Скорость резания</div>
                        <input 
                        type="number"
                        value={speedCuting}
                        onChange={caclSpeedCuting}
                        />
                        <div className='input__desc-short'>vc | m/min</div>
                </li>
    
                <li className='input__calc-item'>
                    <div className='input__description'>Частота вращения</div>
                        <input 
                        type="number"
                        value={rotationFrequency || ''}
                        onChange={() =>{}}
                        onClick={calcRotation}
                        />
                        <div className='input__desc-short'>n | RPM</div>
                </li> 

                {/* <li className='input__calc-item'>
                    <div className='input__description'>Подача на оборот</div>
                        <input 
                        type="number"
                        value={feedPerRevolution}
                        onChange={calcFeedPerRevolution}
                        />
                        <div className='input__desc-short'>fn | mm/rev</div>
                </li>

                <li className='input__calc-item'>
                        <div className='input__description'>Минутная подача</div>
                        <input type="number"
                               value={minuteFeed || ''}
                               onChange={()=>{}}
                               onClick={calcMinuteFeed}
                        />
                        <div className='input__desc-short '>vf | mm/min</div>
                </li> */}
            </>     
    )
}
export default Input;

