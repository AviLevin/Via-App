import React, { Component } from "react";

import "./UtilizationText.css";

class UtilizationText extends React.Component {
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
    }, 1000);
  }
  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }

  render() {
    console.log(this.state.randomItem);
    return (
      <div className="UtilizationText">
        <ul>
          <li>Available: &nbsp; {this.state.randomItem.available}</li>
          <li>Regular:  &nbsp; {this.state.randomItem.regular}</li>
          <li>Carpool:  &nbsp; {this.state.randomItem.carpool}</li>
        </ul>
      </div>
    );
  }
}

export default UtilizationText;
