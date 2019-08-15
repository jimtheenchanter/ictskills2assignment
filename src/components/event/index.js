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

    //invokes the following functions when required
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
        //update the api stub
        api.update(this.state.previousDetails.mobile, updatedEmail, updatedPhone);
    };
    handleCancel = (e) => {
        let { email, mobile } = this.state.previousDetails;
        this.setState({ status: "", email, mobile });
    };
    handleEmailChange = e => this.setState({ email: e.target.value });
    handlePhoneChange = e => this.setState({ mobile: e.target.value });
    handleDelete = () =>  this.setState({ status : 'del'} );
    handleConfirm = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.state.mobile);
    };

    render() {
        //check that there are events to show
        if (!this.props.event) {
            return null;
        }

        let activeButtons = buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        let cardColor = "bg-white";
        if (this.state.status === "edit") {
            cardColor = "bg-primary";
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleSave;
            rightButtonHandler = this.handleCancel;
        }else if (this.state.status === 'del' ) {
            cardColor = "bg-warning";
            activeButtons = buttons.delete;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleConfirm;
        }
        return (

            <div className={this.props.className}>
                <div className={`card  ${cardColor}`}>

                    <img
                        // className="profile"
                        className="card-img-top"
                        alt={this.props.event.venue}
                        src={this.props.event.picture}
                    />
                        <div className="card-img-overlay">
                            <h5 className="card-title">{this.props.event.date}</h5>
                            <p className="card-text">{this.props.event.venue}</p>

                        </div>


                        {/*<h2 className="card-title ">*/}
                            <h2 className="card-header">

                            {`${this.props.event.bridename} + ${
                                this.props.event.groomname
                                }`}
                        </h2>
                    <div className="card-body">
                        <p>
                            <address>
                                <a href="mailto:#">
                                    <FontAwesomeIcon icon={["fas", "envelope"]}/>
                                    <span> {this.props.event.email}</span>
                                </a>

                                </address>
                                <address>
                                <FontAwesomeIcon icon={["fas", "phone"]} />
                                <span> {this.props.event.mobile} </span>
                            </address>
                        </p>
                        <h4 className="date-name ">
                            {`${this.props.event.date} `}

                        </h4>
                        <h5 className="venue-name ">
                            {`${this.props.event.venue} `}

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

                                <div className="card-header">
                                    Coordinates:
                                </div>
                                <ul className="list-group list-group-flush">
                                    <ul className="list-group-item">Lat: {this.props.event.latitude}</ul>
                                    <ul className="list-group-item">Long: {this.props.event.longitude}</ul>

                                </ul>

                             </Fragment>
                        )}

                    </div>



                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button
                                type="button"
                                className={"btn w-50 " + activeButtons.leftButtonColor}
                                onClick={leftButtonHandler}
                            >
                                {activeButtons.leftButtonVal}
                            </button>
                            <button
                                type="button"
                                className={"btn w-50 " + activeButtons.rightButtonColor}
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
