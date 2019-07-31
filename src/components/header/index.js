import React, { Component } from "react";
import logo from '../../logo.svg';
class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-4">
                        <div className="page-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1>
                                Event List <span className="badge badge-pill badge-success">{this.props.noEvents}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;