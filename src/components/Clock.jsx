import React from 'react'
import './styles.css'
const second = 1000;
const hour = 3600000;

export class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentTime: props.cityTime, //new Date(),
            // timer: second * 10
        }
    }

    componentDidMount() {
        this.props.updateCurrentCityTime()
    }

    render() {
        return (<div className='clockCity'>
            <h3>{this.props.cityName}</h3>
            <div className='clockContainer' aria-label='Digital clock' tabIndex='0'>
                <span tabIndex='0'>{this.props.cityTime.getHours()}</span>
                : <span tabIndex='0'> {this.props.cityTime.getMinutes()}</span>
                : <span tabIndex='0'>{this.props.cityTime.getSeconds()}</span>

            </div>
        </div>)
    }
}

