import React from 'react'
const second = 1000;
export class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentTime: new Date().toLocaleString(),
            timer: second * 10
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString()
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
        return (<div>
            <h1>Current time</h1>
            <div>{this.state.currentTime.toLocaleString()}</div>
            {
                this.state.timer === 0 
                    ? <h3>Time's up</h3>
                    : null
            }
            <button
                onClick={this.set10SecTimer}
            >Set timer for 10 seconds</button>
        </div>)
    }
}

