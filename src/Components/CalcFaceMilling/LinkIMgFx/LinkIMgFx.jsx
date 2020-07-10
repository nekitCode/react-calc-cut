import React from 'react';
import {NavLink} from "react-router-dom";

import LInkBtn from '..//..//../img/pdf.png';

const  LinkIMgFx = () => {
    return (
        <div>
            <div className='calcTable__description'>Формулы расчета</div>
                <div className="btnFx">
                    <NavLink to='imgFx'>
                        <img src={LInkBtn} alt="btnIMg"/>
                    </NavLink>
                </div>
        </div>
    )
}

export default LinkIMgFx;

