import React, { Component } from "react";
import "../NavBar/NavBar.css";
import menu1 from "../../assets/images/menu-rides.png";
import menu2 from "../../assets/images/menu-dashboard@3x.png";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="NavBar">
        <img
          src={menu1}
          className=" menu1 "
          alt="menu1"
          width="100"
          height="50"
        />
        <img
          src={menu2}
          className=" menu1 "
          alt="menu1"
          width="100"
          height="50"
        />
      </div>
    );
  }
}

export default NavBar;
