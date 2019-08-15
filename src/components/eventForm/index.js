import React, { Component } from 'react';
import './eventForm.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapPin, faMale, faFemale, faHome, faEnvelope, faPhone, faCalendar, faImage} from "@fortawesome/free-solid-svg-icons";


export default class Form extends Component {
    // The data entry fields of a web forms are always part of the containing component's state object.
   state = {};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd( this.state.bridename, this.state.groomname, this.state.venue, this.state.date, this.state.mobile, this.state.email, this.state.picture, this.state.latitude, this.state.longitude)
        this.setState({ bridename: '', groomname:'', venue: '', date: '', mobile:'', email: '',  picture: '',  latitude: '', longitude: '' })
    }

    handleBridenameChange = (e) =>  this.setState({bridename: e.target.value});
    handleGroomnameChange = (e) =>  this.setState({groomname: e.target.value});
    handleVenueChange = (e) => this.setState({venue: e.target.value});
    handleDateChange = (e) =>  this.setState({date: e.target.value});
    handleMobileChange = (e) =>  this.setState({mobile: e.target.value});
    handleEmailChange = (e) => this.setState({email: e.target.value});
    handlePictureChange = (e) =>  this.setState({picture: e.target.value});
    handleLatitudeChange = (e) =>  this.setState({latitude: e.target.value});
    handleLongitudeChange = (e) =>  this.setState({longitude: e.target.value});


    render() {
        return (
            <form  className="form bg-dark text-light">
                <h4>Add a new event  </h4>

                <div className="form-group">
                    <FontAwesomeIcon icon={faFemale} />
                   <input type="text"
                        className="form-control"
                           placeholder="Bride's first name"
                           value={this.state.bridename}
                           onChange={ this.handleBridenameChange } />
                </div>
                <div className="form-group">
                    <FontAwesomeIcon icon={faMale} />
                    <input type="text" className="form-control"
                           placeholder="Groom's first name"
                           value={this.state.groomname}
                           onChange={ this.handleGroomnameChange }/>
                </div>
                <div className="form-group">
                    <FontAwesomeIcon icon={faHome} />
                    <input type="text"
                           className="form-control"
                           placeholder="Venue"
                           value={this.state.venue}
                           onChange={ this.handleVenueChange }/>
                </div>
                <div className="form-group">
                    <FontAwesomeIcon icon={faCalendar} />
                    <input type="text"
                           className="form-control"
                           placeholder="Date"
                           value={this.state.date}
                           onChange={ this.handleDateChange }/>
                </div>
                <div className="form-group">
                    <FontAwesomeIcon icon={faPhone} />
                    <input type="text"
                           className="form-control"
                           placeholder="Mobile"
                           value={this.state.mobile}
                           onChange={ this.handleMobileChange }/>
                </div>
                <div className="form-group">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="text"
                           className="form-control"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={ this.handleEmailChange }/>
                </div>
                <div className="form-group">
                    <FontAwesomeIcon icon={faImage} />
                    <input type="text"
                           className="form-control"
                           placeholder="Picture URL"
                           value={this.state.picture}
                           onChange={ this.handlePictureChange }/>

                    <div className="row">
                        <div className="col">
                            <FontAwesomeIcon icon={faMapPin} />
                        <input type="text"
                           className="form-control"
                           placeholder="Latitude"
                           value={this.state.latitude}
                           onChange={ this.handleLatitudeChange }/>
                        </div>

                        <div className="col">
                            <FontAwesomeIcon icon={faMapPin} />
                        <input type="text"
                           className="form-control"
                           placeholder="Longitude"
                           value={this.state.longitude}
                           onChange={ this.handleLongitudeChange }/>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary"
                        onClick={this.handleSubmit}>Add
                </button>
            </form>
        );
    }
}