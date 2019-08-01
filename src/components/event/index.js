import React, { Component } from "react";
import "./event.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Event extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img
                        className="card-img-tag center "
                        alt={this.props.event.name}
                        src={this.props.event.picture.thumbnail}
                    />
                    <div className="card-body">
                        <h5 className="card-title ">
                            {`${this.props.event.name.bride} ${
                                this.props.event.name.groom
                                }`}
                        </h5>
                        <p key="email">
                            <FontAwesomeIcon icon={["fas", "fa-calendar-week"]} />
                            <span> {this.props.event.date}</span>
                        </p>
                        <p key="phone">
                            <FontAwesomeIcon icon={["fas", "fa-map-pin"]} />
                            <span>
                                {this.props.event.venue}
                            </span>
                        </p>
                    </div>
                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button type="button" className={"btn btn-default w-100"}>
                                {" Edit "}
                            </button>
                            <button type="button" className={"btn btn-danger w-100"}>
                                {"Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;
