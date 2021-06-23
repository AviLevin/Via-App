import React, { Component } from "react";

import "./UtilizationGraph.css";
import symbole1 from "../../assets/symbole1.png";
import symbole2 from "../../assets/symbol2.png";
import symbole3 from "../../assets/symbol3.png";
import ProgressBar from "react-bootstrap/ProgressBar";

class RandomData extends React.Component {
  state = {
    randomItem: [],
  };

  

  myArray = [
    {
      id: 1,
      available: 20,
      regular: 80,
      carpool: 40,
    },
    {
      id: 2,
      available: 70,
      regular: 30,
      carpool: 90,
    },
  ];

  randomItemGenerator = () =>
    this.myArray[Math.floor(Math.random() * this.myArray.length)];

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ randomItem: this.randomItemGenerator() });
    }, 500);
  }
  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }

  render() {
    console.log(this.state.randomItem);
    return (
      <div className="UtilizationGraph">
        <h2 className="total">
          Total (
          <b>
            {this.state.randomItem.available +
              this.state.randomItem.regular +
              this.state.randomItem.carpool}
          </b>{" "}
          ){" "}
        </h2>
        <div className="available"> Available</div>

        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src={symbole1}
                className="img-thumbnail symbol1"
                alt="..."
              ></img>
            </div>

            <div className="col progress_bar ">
              <ProgressBar now={this.state.randomItem.available} />
            </div>
            <div className="col val ">{this.state.randomItem.available}</div>
          </div>
        </div>

        <div className="available"> Regular</div>

        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src={symbole2}
                className="img-thumbnail symbol1"
                alt="..."
              ></img>
            </div>
            <div className="col progress_bar ">
              <ProgressBar now={this.state.randomItem.regular} />
            </div>
            <div className="col val ">{this.state.randomItem.regular} </div>
          </div>
        </div>
        <div className="available"> Carpool</div>

        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src={symbole3}
                className="img-thumbnail symbol1"
                alt="..."
              ></img>
            </div>

            <div className="col progress_bar ">
              <ProgressBar now={this.state.randomItem.carpool} />
            </div>
            <div className="col val ">{this.state.randomItem.carpool}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomData;
