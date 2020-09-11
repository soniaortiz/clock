import React from 'react'
import './styles.css'
const second = 1000;

export class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentTime: new Date(),
            timer: second * 10
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentTime: new Date()
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
        let time = this.state.currentTime
        return (<div>
            <h1>Current time</h1>

            <div className='clockContainer' aria-label='Digital clock' tabIndex='0'>
                <span tabIndex='0'>{time.getHours()}</span>
                : <span tabIndex='0'> {time.getMinutes()}</span>
                : <span tabIndex='0'>{time.getSeconds()}</span>

            </div>

            <br />
            <button
                onClick={this.set10SecTimer}
            >Set timer for 10 seconds</button>
        </div>)
    }
}

