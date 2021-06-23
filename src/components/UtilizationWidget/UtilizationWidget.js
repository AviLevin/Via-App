import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./UtilizationWidget.css";
import UtilizationText from "../UtilizationText/UtilizationText";
import UtilizationGraph from "../UtilizationGraph/UtilizationGraph";
import Nav from "../Nav/Nav";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="UtilizationWidget">
        <Router>
          <Nav />

          <Switch>
            <Route exact path="/">
              <UtilizationGraph />
             
            </Route>

            <Route path="/UtilizationText">
              <UtilizationText />
             
             
              
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default SideBar;
