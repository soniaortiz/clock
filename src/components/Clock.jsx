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
                clearInterval(intervalId)
            }
        }, second)
    }

    render() {
        let time = this.state.currentTime
        return (<div>
            <h1>Current time</h1>

            <div className='clockContainer'>
                <span>{time.getHours()}</span>
                : <span> {time.getMinutes()}</span> 
                : <span>{time.getSeconds()}</span>

            </div>

            <br />
            <button
                onClick={this.set10SecTimer}
            >Set timer for 10 seconds</button>

            {
                this.state.timer === 0
                    ? <h3>Time's up</h3>
                    : null
            }
        </div>)
    }
}

