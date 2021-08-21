import React, { Component } from "react";
import "./counter.css";
class Conter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "",
    };
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () =>
    this.state.count > 0
      ? this.setState({ count: this.state.count - 1 })
      : null;

  handelChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="counter">
          <button onClick={this.increment} className="btn">
            +
          </button>
          <span className="count_txt">{this.state.count}</span>
          <button onClick={this.decrement} className="btn">
            -
          </button>
        </div>
        <div className="input">
          <input type="text" onChange={this.handelChange}></input>
          <h3>{this.state.text}</h3>
        </div>
      </div>
    );
  }
}

export default Conter;
