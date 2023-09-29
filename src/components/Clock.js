import './Clock.css'
import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
          }}
        />
        <span className="twelve">.</span>
        <span className="one">.</span>
        <span className="two">.</span>
        <span className="three">.</span>
        <span className="four">.</span>
        <span className="five">.</span>
        <span className="six">.</span>
        <span className="seven">.</span>
        <span className="eight">.</span>
        <span className="nine">.</span>
        <span className="ten">.</span>
        <span className="eleven">.</span>
      </div>
    );
  }
}
