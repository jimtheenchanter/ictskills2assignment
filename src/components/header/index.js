import React, { Component } from "react";
import AuthButton from "../authentication/authButton";

import logo from '../../logo.svg';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">

                <nav className="navbar  navbar-light fixed-top   ">

                    <div className={"App-logo"}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                           Welcome, <AuthButton />
                        </li>
                      <li> You have  <span className="badge badge-pill badge-success">{this.props.noEvents}</span> events registered.
                      </li>
                    </ul>
                </nav>
            </div>

        );
    }
}

export default Header;

