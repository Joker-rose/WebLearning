import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      text: "click",
    };
    this.spanClick = this.spanClick.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    // this.setState({
    //   date: new Date(),
    // });

    // 状态更新是异步，计算的状态需要函数确保准确
    this.setState((state, props) => ({
      date: new Date(),
    }));
  }

  spanClick() {
    this.setState((state, props) => ({
      text: Math.random(),
    }));
    console.log(this, "spanClick");
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <span onClick={this.spanClick}>{this.state.text}</span>
      </div>
    );
  }
}
