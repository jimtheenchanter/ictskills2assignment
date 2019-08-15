import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../authentication/authButton";

import logo from '../../logo.svg';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {/*<div className="col-md-6 offset-4">*/}
                        <div className="App-header">
                         <div className={"App-logo"}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                            <h1>
                                Interactive Event Map
                            </h1>
                            <span className="badge badge-pill badge-success">{this.props.noEvents}</span>
                        </div>
                    {/*</div>*/}
                </div>
                <nav className="navbar  navbar-light fixed-top  bg-primary ">
                    <Link className="navbar-brand text-white" to="/">
                        Where's that wedding?
                    </Link>
                    <span className="navbar-text text-light">Every event is different!</span>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <AuthButton />
                        </li>
                    </ul>
                </nav>
            </div>


        );
    }
}

export default Header;

