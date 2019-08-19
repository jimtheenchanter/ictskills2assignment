import React, { Component, Fragment } from "react";
import "./event.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import api from "../../datastore/stubAPI";
import { Link } from "react-router-dom";

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
            cardColor = "bg-gray";
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



            <div className="col-sm-3">
            <div className={this.props.className}>
                <div className={`card ${cardColor}`} >
            <div className="card">
                    <img src={this.props.event.picture} className="card-img-top" alt="{this.props.event.bridename} {this.props.event.groomname}"/>
                    {/*<div className="card-img-overlay">*/}
                        <h5 className="card-text">
                            <span className="badge badge-secondary"> {this.props.event.date}</span>
                        </h5>
                    {/*</div>*/}
                        <div className="card-body">
                            <h5 className="card-title">{this.props.event.bridename} & {this.props.event.groomname}</h5>
                <hr/>
                            <h6 className="card-subtitle">{this.props.event.venue} </h6>

                                <small className="text-muted">Lat: {this.props.event.latitude} <br/>
                                Long: {this.props.event.longitude}</small>

                <hr/>

                            <h6>First Dance: </h6>  <Link className={"youtube"}
                                to={this.props.event.firstdance}
                            >{this.props.event.firstdance}</Link>
                           <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Start Time: </strong> {this.props.event.starttime}</li>
                            <li className="list-group-item"><strong>Finish Time: </strong> {this.props.event.finishtime} </li>
                        </ul>





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
                        )                       :
                        (
                            <Fragment>

                                <div className="card-header">
                                    Contact:
                                </div>
                                <ul className="list-group list-group-flush">
                                    <ul className="list-group-item"> <FontAwesomeIcon icon={["fas", "envelope"]} />&nbsp;{this.props.event.email}</ul>
                                    <ul className="list-group-item">    <FontAwesomeIcon icon={["fas", "phone"]} />&nbsp; {this.props.event.mobile}</ul>

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
            </div>
          </div>
        );
    }
}

export default Event;
