import React, { Component } from "react";
import Conter from "./assets/Conter";
import "./assets/counter.css";
import "./App.css";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { showBtn: false, timer: 0 };
  }
  handelShow = () => this.setState({ showBtn: !this.state.showBtn });

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }

  render() {
    return (
      <div>
        <div className="card transition">
          <div className="cta-container transition">
            <button className="cta" onClick={this.handelShow}>
              show
            </button>
          </div>
          <div className="card_circle transition" />
        </div>
        {this.state.showBtn ? (
          <div className="card">
            <Conter></Conter> <h2 className="time">{this.state.timer}</h2>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Card;
