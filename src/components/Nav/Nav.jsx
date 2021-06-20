import React from 'react';
import { Link } from "react-router-dom";



const Nav = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light ">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

            <Link to="/">
                <a class="btn btn-primary active" href="#" role="button">UtilizationGraph</a>
            </Link>
            <Link to="/UtilizationText">
                <a class="btn btn-primary" href="#" role="button">UtilizationText</a>
            </Link>

           
        </div>
    </nav>);
}

export default Nav;