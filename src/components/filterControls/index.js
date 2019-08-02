import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-warning">
                    <div className="col-md-12">
                        <h4>
                            <span>Filter </span>
                            <input type="text" placeholder="Name Search" />
                            <span> Month </span>
                            <select id="gender">
                                <option value="all">All</option>
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">may</option>
                                <option value="june">june</option>
                                <option value="july">july</option>
                                <option value="august">august</option>
                            </select>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}