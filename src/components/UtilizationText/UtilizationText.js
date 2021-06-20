import React, { useState, useEffect } from "react";
import "./UtilizationText.css";

function UtilizationText() {
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
    return (
      <div className="UtilizationText">
        {items.map((item) =>  (
          <div>
            <ul>
              <li>
              Available: {item.available} 
              </li>
              <li>
               Regular: {item.regular} 
              </li>
              <li>
               Carpool: {item.carpool} 
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default UtilizationText;