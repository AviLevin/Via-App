import React, { Component } from 'react';
import "../MainScreen/MainScreen.css"
import UtilizationWidget from '../UtilizationWidget/UtilizationWidget';
import NavBar from '../NavBar/NavBar';

class MainScreen extends Component {
    state = {  }
    render() { 
        return ( 


            <div className="MainScreen">

            <UtilizationWidget />
            <NavBar />
            </div>
         );
    }
}
 
export default MainScreen;