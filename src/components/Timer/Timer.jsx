import React, { Component } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    if (this.state.isOn === true) {
      return;
    }
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
  }

  stopTimer() {
    clearInterval(this.myInterval);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 25,
      seconds: 0,
    });
  }

  render = () => {
    const { minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <div className="time-display">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="timer-button-container">
          <TimerButton
            className="start-timer"
            buttonAction={this.startTimer}
            buttonValue={'Start'}
          />
          <TimerButton
            className="stop-timer"
            buttonAction={this.stopTimer}
            buttonValue={'Stop'}
          />
          <TimerButton
            className="reset-timer"
            buttonAction={this.resetTimer}
            buttonValue={'Reset'}
          />
        </div>
      </div>
    );
  };
}

export default Timer;
