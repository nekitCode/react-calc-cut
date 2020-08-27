import React from 'react';
import {NavLink} from "react-router-dom";

import LinkBtnDrilling from '../../../img/pdf.png';

import './LinkBtnDrill.scss';

const  LinkIMgDr = () => {
    return (
        <div>
            <div className='symmetrical__description'>Формулы расчета</div>
                <div className="btnDr">
                    <NavLink to='ImgDr'>
                        <img src={LinkBtnDrilling} alt="btnIMg"/>
                    </NavLink>
                </div>
        </div>
    )
}

export default LinkIMgDr;