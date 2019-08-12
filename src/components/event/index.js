import React, { Component, Fragment } from "react";
import "./event.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import api from "../../datastore/stubAPI";

class Event extends Component {
    state = {
        status: "",
        email: this.props.event.email,
        mobile: this.props.event.mobile,
        previousDetails: {
            email: this.props.event.email,
            mobile: this.props.event.mobile
        }
    };
    handleEdit = () => this.setState({ status: "edit" });
    handleSave = e => {
        e.preventDefault();
        let updatedEmail = this.state.email.trim();
        let updatedPhone = this.state.mobile.trim();
        if (!updatedEmail || !updatedPhone) {
            return;
        }
        let { email, mobile } = this.state;
        this.setState({ status: "", previousDetails: { email, mobile } });
        api.update(this.state.previousDetails.mobile, updatedEmail, updatedPhone);
    };
    handleCancel = (e) => {
        let { email, mobile } = this.state.previousDetails;
        this.setState({ status: "", email, mobile });
    };
    handleEmailChange = e => this.setState({ email: e.target.value });
    handlePhoneChange = e => this.setState({ mobile: e.target.value });


    render() {
        let activeButtons = buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        let cardColor = "bg-white";
        if (this.state.status === "edit") {
            cardColor = "bg-primary";
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleSave;
            rightButtonHandler = this.handleCancel;
        }
        return (
            <div className="col-sm-3">
                <div className={`card  ${cardColor}`}>
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

                        {this.state.status === "edit" ? (
                            <Fragment>
                                <p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.mobile}
                                        onChange={this.handlePhoneChange}
                                    />
                                </p>
                            </Fragment>
                        ) :
                            (
                            <Fragment>
                                <p>
                                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                                    <span> {this.props.event.email}</span>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={["fas", "phone"]} />
                                    <span> {this.props.event.mobile} </span>
                                </p>
                            </Fragment>
                        )}

                    </div>



                        {/*<p key="email">*/}
                        {/*    /!*<FontAwesomeIcon icon={["fas", "fa-calendar-week"]} />*!/*/}
                        {/*    Date: &nbsp;*/}
                        {/*    <span> {this.props.event.date}</span>*/}
                        {/*</p>*/}
                        {/*<p key="phone">*/}
                        {/*    /!*<FontAwesomeIcon icon={["fas", "fa-map-pin"]} />*!/*/}
                        {/*    Lat: &nbsp;*/}
                        {/*    <span>*/}
                        {/*        {this.props.event.coordinates.latitude}*/}

                        {/*    </span>*/}

                        {/*    <p key="phone">*/}
                        {/*        /!*<FontAwesomeIcon icon={["fas", "fa-map-pin"]} />*!/*/}
                        {/*        Long: &nbsp;*/}
                        {/*        <span>*/}

                        {/*            {this.props.event.coordinates.longitude}*/}
                        {/*    </span>*/}
                        {/*    </p>*/}
                        {/*</p>*/}


                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button
                                type="button"
                                className={"btn w-100 " + activeButtons.leftButtonColor}
                                onClick={leftButtonHandler}
                            >
                                {activeButtons.leftButtonVal}
                            </button>
                            <button
                                type="button"
                                className={"btn w-100 " + activeButtons.rightButtonColor}
                                onClick={rightButtonHandler}
                            >
                                {activeButtons.rightButtonVal}
                            </button>
                        </div>
                    </div>
                </div>
            </div>






        );
    }
}

export default Event;
