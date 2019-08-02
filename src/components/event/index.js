import React, { Component } from "react";
import "./event.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Event extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img className="profile"
                       // className="card-img-tag center "
                        alt={this.props.event.venue}
                        src={this.props.event.picture}
                    />
                    <div className="card-body">
                        <h4 className="card-title ">
                            {`${this.props.event.bridename} + ${
                                this.props.event.groomname
                                }`}
                        </h4>
                        <h5 className="venue-name ">
                            {`${this.props.event.venue} 
                                `}
                        </h5>
                        <p key="email">
                            <FontAwesomeIcon icon={["fas", "fa-calendar-week"]} />
                            Date: &nbsp;
                            <span> {this.props.event.date}</span>
                        </p>
                        <p key="phone">
                            <FontAwesomeIcon icon={["fas", "fa-map-pin"]} />
                            Lat: &nbsp;
                            <span>
                                {this.props.event.coordinates.latitude}

                            </span>

                            <p key="phone">
                                <FontAwesomeIcon icon={["fas", "fa-map-pin"]} />
                                Long: &nbsp;
                                <span>
                                {/*{this.props.event.coordinates.latitude}*/}
                                    {this.props.event.coordinates.longitude}
                            </span>
                            </p>
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
