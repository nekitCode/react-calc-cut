import React,{Component} from 'react';

import LinkIMgFx from "./LinkIMgFx/LinkIMgFx";

import './CalcFaceMilling.scss';

class CalcFaceMilling extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diametrValue: '',
            speedCutingValue: '',
            rotationfrequency: '',
            numberOfTeethValue: '',
            feedOnToothValue: '',
            minuteFeedValue: '',
            feedPerRevolutionValue: '',
            divide: 1000,
            pi: Math.PI,
            result: ''
        }
        this.inputDiametr = this.inputDiametr.bind(this);
        this.speedCuting = this.speedCuting.bind(this);
        this.numberOfTeeth = this.numberOfTeeth.bind(this);
        this.feedOnTooth = this.feedOnTooth.bind(this);
        this.minuteFeed = this.minuteFeed.bind(this);
        // this.rotationFrequency = this.rotationFrequency.bind(this);
        this.feedPerRevolution = this.feedPerRevolution.bind(this);

    }



    inputDiametr(e) {
        this.setState({ diametrValue: e.target.value});
    }

    speedCuting(e){
        this.setState({ speedCutingValue: e.target.value,})
    }

    rotationFrequency = () => {
            this.setState({
                result: Math.floor((this.state.divide*this.state.speedCutingValue)/(this.state.pi * this.state.diametrValue))
            })
    }

    numberOfTeeth(e) {
        this.setState({numberOfTeethValue: e.target.value})
    }

    feedOnTooth(e){
        this.setState({feedOnToothValue: e.target.value})
    }

    minuteFeed(){
        this.setState({ //fмин*z*n
            minuteFeedValue: Math.floor(this.state.feedOnToothValue * this.state.numberOfTeethValue * this.state.result)
        })
    }

    feedPerRevolution() {
        this.setState({feedPerRevolutionValue: (this.state.numberOfTeethValue * this.state.feedOnToothValue).toFixed(2)})
    }

    render() {

        return (

            <div className='mode-table'>

                <div className="mode-table__line">Торцевое фрезерование</div>

                <ul className='calcTable'>

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Диаметр</div>

                        <input type="number"
                               onChange={this.inputDiametr}
                               value={this.state.diametrValue}
                        />

                        <div className='calcTable__desc-short '>Dc | mm</div>
                    </li>

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Скорость резания</div>

                        <input type="number"
                               onChange={this.speedCuting}
                               value={this.state.speedCutingValue}
                        />

                        <div className='calcTable__desc-short '>vc | m/min</div>
                    </li>

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Частота вращения</div>

                        <input type="number"
                               onClick={this.rotationFrequency}
                               onChange={()=>{}}
                               value={this.state.result || ''}
                        />

                        <div className='calcTable__desc-short '>n | RPM</div>
                    </li>

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Количество зубьев</div>

                        <input type="number"
                               onChange={this.numberOfTeeth}
                               value={this.state.numberOfTeethValue}
                        />

                        <div className='calcTable__desc-short '>Z</div>
                    </li>

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Подача на зуб</div>

                        <input type="number"
                               onChange={this.feedOnTooth}
                               value={this.state.feedOnToothValue}
                        />

                        <div className='calcTable__desc-short '>fz | mm</div>
                    </li>

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Минутная подача</div>

                        <input type="number"
                               onClick={this.minuteFeed}
                               onChange={()=>{}}
                               value={this.state.minuteFeedValue || ''}
                        />

                        <div className='calcTable__desc-short '>vf | mm/min</div>
                    </li>

                    <li className='calcTable__calc-item'>
                        <div className='calcTable__description'>Подача на оборот</div>

                        <input type="number"
                               onClick={this.feedPerRevolution}
                               onChange={()=>{}}
                               value={this.state.feedPerRevolutionValue}
                        />

                        <div className='calcTable__desc-short '>fn | mm/rev</div>
                    </li>

                    <li className='calcTable__calc-item '>
                       <LinkIMgFx />
                    </li>

                    <div className="result">
                        <p>Диаметр : <span>{this.state.diametrValue} </span></p>
                        <p>Скорость резания : <span>{this.state.speedCutingValue}</span></p>
                        <p>Частота вращения : <span>{this.state.result || ''}</span></p>
                        <p>Количество зубьев : <span>{this.state.numberOfTeethValue}</span></p>
                        <p>Подача на зуб : <span>{this.state.feedOnToothValue}</span></p>
                        <p>Минутная подача : <span>{this.state.minuteFeedValue || ''}</span></p>
                        <p>Подача на оборот : <span>{this.state.feedPerRevolutionValue}</span></p>
                    </div>

                </ul>
            </div>
        )

    }

}

export default CalcFaceMilling;

