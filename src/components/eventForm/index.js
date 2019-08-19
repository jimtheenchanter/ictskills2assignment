import React, { Component } from 'react';
import './eventForm.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapPin, faMale, faFemale, faHome, faEnvelope, faPhone, faCalendar, faImage, faClock, faTired} from "@fortawesome/free-solid-svg-icons";


export default class Form extends Component {
    // The data entry fields of a web forms are always part of the containing component's state object.
   state = {};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd( this.state.bridename, this.state.groomname, this.state.venue, this.state.date, this.state.mobile, this.state.email, this.state.picture,
            this.state.latitude, this.state.longitude, this.state.firstdance, this.state.starttime, this.state.finishtime);
        this.setState({ bridename: '', groomname:'', venue: '', date: '', mobile:'', email: '',  picture: '',  latitude: '', longitude: '' , firstdance: '',  starttime: '', finishtime: ''})
    };

    handleBridenameChange = (e) =>  this.setState({bridename: e.target.value});
    handleGroomnameChange = (e) =>  this.setState({groomname: e.target.value});
    handleVenueChange = (e) => this.setState({venue: e.target.value});
    handleDateChange = (e) =>  this.setState({date: e.target.value});
    handleMobileChange = (e) =>  this.setState({mobile: e.target.value});
    handleEmailChange = (e) => this.setState({email: e.target.value});
    handlePictureChange = (e) =>  this.setState({picture: e.target.value});
    handleLatitudeChange = (e) =>  this.setState({latitude: e.target.value});
    handleLongitudeChange = (e) =>  this.setState({longitude: e.target.value});
    handleFirstdanceChange = (e) =>  this.setState({firstdance: e.target.value});
    handleStarttimeChange = (e) =>  this.setState({starttime: e.target.value});
    handleFinishtimeChange = (e) =>  this.setState({finishtime: e.target.value});


    render() {
        return (
            <form  className="form text-light">
                <h4>Add a new event  </h4>

                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <div className="formlabel"> <FontAwesomeIcon icon={faFemale}/>
                                <div className="caption">Eg: Jane </div></div>
                            <input type="text"
                               className="form-control"
                               placeholder="Bride's name"
                               value={this.state.bridename}
                               onChange={ this.handleBridenameChange } />
                        </div>

                        <div className="col">
                            <div className="formlabel"> <FontAwesomeIcon icon={faMale} />
                                <div className="caption">Eg: John</div></div>
                                 <input type="text" className="form-control"
                                        placeholder="Groom's name"
                                        value={this.state.groomname}
                                        onChange={ this.handleGroomnameChange }/>
                        </div>
                </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <div className="formlabel"> <FontAwesomeIcon icon={faHome} />
                                <div className="caption"> Eg: Langton's</div></div>
                           <input type="text"
                                  className="form-control"
                                  placeholder="Venue"
                                  value={this.state.venue}
                                  onChange={ this.handleVenueChange }/>
                        </div>

                        <div className="col">
                            <div className="formlabel"> <FontAwesomeIcon icon={faCalendar} />
                            <div className="caption"> Eg: 2018-12-30</div></div>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Date"
                                   value={this.state.date}
                                   onChange={ this.handleDateChange }/>
                        </div>
                     </div>
                </div>
                <div className="form-group">
                    <div className="formlabel">  <FontAwesomeIcon icon={faPhone} />
                        <div className="caption">Eg: +353863291855 </div></div>
                    <input type="text"
                           className="form-control"
                           placeholder="Mobile"
                           value={this.state.mobile}
                           onChange={ this.handleMobileChange }/>
                </div>
                <div className="form-group">
                    <div className="formlabel"> <FontAwesomeIcon icon={faEnvelope} />
                        <div className="caption">Eg: janeandjohn@lovemail.org </div></div>
                    <input type="text"
                           className="form-control"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={ this.handleEmailChange }/>
                </div>
                <div className="form-group">

                    <div className="formlabel"> <FontAwesomeIcon icon={faImage} />
                        <div className="caption"> Eg: https://tinyurl.com/yxlzwzgg </div></div>
                    <input type="text"
                           className="form-control"
                           placeholder="Picture URL"
                           value={this.state.picture}
                           onChange={ this.handlePictureChange }/>
                </div>

                <div className="form-group">

                    <div className="formlabel"> <FontAwesomeIcon icon={faImage} />
                        <div className="caption"> Eg: https://www.youtube.com/watch?v=rY0WxgSXd </div></div>
                    <input type="text"
                           className="form-control"
                           placeholder="Youtube link"
                           value={this.state.firstdance}
                           onChange={ this.handleFirstdanceChange }/>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <div className="formlabel"> <FontAwesomeIcon icon={faMapPin} />
                                <div className="caption">Eg: 52.7646
                                </div>
                            </div>
                        <input type="text"
                           className="form-control"
                           placeholder="Latitude"
                           value={this.state.latitude}
                           onChange={ this.handleLatitudeChange }/>
                        </div>

                        <div className="col">
                            <div className="formlabel"><FontAwesomeIcon icon={faMapPin} />
                                <div className="caption">Eg: -7.6136 </div>
                            </div>
                        <input type="text"
                           className="form-control"
                           placeholder="Longitude"
                           value={this.state.longitude}
                           onChange={ this.handleLongitudeChange }/>
                        </div>
                    </div>
                </div>

                    <div className="form-group">
                        <div className="row">
                        <div className="col">
                            <div className="formlabel">
                            <FontAwesomeIcon icon={faClock} />
                            <div className="caption">21:30</div>
                            </div>

                            <input type="text"
                                   className="form-control"
                                   placeholder="Start Time"
                                   value={this.state.starttime}
                                   onChange={ this.handleStarttimeChange }/>
                        </div>
                        <div className="col">
                            <div className="formlabel">
                            <FontAwesomeIcon icon={faTired} />
                            <div className="caption">Eg: 02:00</div>
                            </div>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Finish time"
                                   value={this.state.finishtime}
                                   onChange={ this.handleFinishtimeChange }/>
                        </div>
                    </div>
                    </div>

                <button type="submit" className="btn btn-outline-light"
                        onClick={this.handleSubmit}>Add Event
                </button>

            </form>
        );
    }
}