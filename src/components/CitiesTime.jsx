import React from 'react'
import { Clock } from './Clock'

let d = new Date()
let utc = (d.getTime() + (d.getTimezoneOffset() * 60000))
const second = 1000;
const hour = 3600000;

export class CitiesTimes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sf: new Date(utc - (hour * 7)), //san francisco
            ld: new Date(utc + (hour)), //london
            ny: new Date(utc - (hour * 4)), //NYC
            timer: second * 10

        }
    }

    updateCurrentCityTime = () => {
        setInterval(() => {
            d = new Date()
            utc = (d.getTime() + (d.getTimezoneOffset() * 60000))
            this.setState({
                sf: new Date(utc - (hour * 7)),
                ld: new Date(utc + (hour)),
                ny: new Date(utc - (hour * 4))
            })
        }, 1000)
    }


    set10SecTimer = () => {
        let intervalId = setInterval(() => {
            if (this.state.timer > 0) {

                this.setState({
                    timer: this.state.timer - second
                })
            } else {
                window.alert(`Time's up`)
                clearInterval(intervalId)
                this.setState({ timer: second * 10 })
            }
        }, second)
    }

    render() {
        return (
            <div>
                <h1>Current time</h1>

                <Clock cityTime={this.state.sf} updateCurrentCityTime={this.updateCurrentCityTime} cityName='San Francisco' />
                <Clock cityTime={this.state.ld} updateCurrentCityTime={this.updateCurrentCityTime} cityName='London' />
                <Clock cityTime={this.state.ny} updateCurrentCityTime={this.updateCurrentCityTime} cityName='NYC' />

                <br/>

                <button
                    onClick={this.set10SecTimer}
                >Set timer for 10 seconds
                </button>

            </div>
        )
    }
}