import React, { useState, useEffect } from "react";
import "./UtilizationGraph.css";
import symbole1 from "../../assets/symbole1.png";
import symbole2 from "../../assets/symbol2.png";
import symbole3 from "../../assets/symbol3.png";
import ProgressBar from "react-bootstrap/ProgressBar";

function UtilizationGraph() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // totalCounters={items.filter(c => c.value > 0).length};

    // const sum = 0;
    // for (x in items['available']) {
    //     sum += items['available'][x];

    return (
      <div className="UtilizationGraph">
        <h2 className="total">Total (140) </h2>
        {items.map((item) => (
          <div>
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
                  <ProgressBar now={item.available} />
                </div>
                <div className="col val ">{item.available}</div>
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
                  <ProgressBar now={item.regular} />
                </div>
                <div className="col val ">{item.regular} </div>
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
                    <ProgressBar now={item.carpool} />
                  </div>
                  <div className="col val ">{item.carpool}</div>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default UtilizationGraph;
