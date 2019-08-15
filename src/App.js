//this component coordinates the logic of all the other components
import React, {Component, Fragment} from 'react';
// implement Modal to handle mouse event and customise callbacks
import Modal from 'react-responsive-modal';
import { withRouter, Redirect } from "react-router-dom";
import Header from "./components/header/";
import EventList from  "./components/eventList";
import Event from "./components/event";
import './App.css';
import Form from './components/eventForm/';
import api from "./datastore/stubAPI";
import Map from "./components/map/";
import Authentication from './util/authentication';
require('dotenv').config();


class App extends Component {
    state = { event: null, events: api.getAll() };

    addEvent = (bridename, groomname, venue, date, mobile, email, picture, latitude, longitude) => {
        api.add(bridename, groomname, venue, date, mobile, email, picture, latitude, longitude);
        this.setState({});
    };


    deleteEvent = (key) => {
        api.delete(key);
        this.setState({events: api.getAll()});
    };

    openModal = (event) => {
        this.setState({ event });
    };

    closeModal = () => {
        this.setState({ event: null });
    }

     render() {
         if(!Authentication.getUser()) {
             return <Redirect to={{ pathname: "/login" }} />;
         }


         return <div className="container-fluid">
             <div className="row">

                 <Fragment>
                     <div className="col">
                         {/*return multiple elements*/}


                             <p className="lead">Keep track of the Who, Where & When of your events.
                             Click on a marker for info or add a new event below.</p>

                             <Form handleAdd={this.addEvent}/>
                             {/*//modal implemented to handle requests for customized marker popups */}
                         </div>
                         <div className="col">
                             <Modal
                                 open={!!this.state.event}
                                 onClose={this.closeModal}
                                 center
                             >
                                 <Event event={this.state.event}/>
                             </Modal>
                             <Header noEvents={this.state.events.length}/>
                             <Map
                                 isMarkerShown
                                 googleMapURL={process.env.REACT_APP_DEV_API_URL}
                                 loadingElement={<div style={{height: `80%`}}/>}
                                 containerElement={<div style={{height: `800px`}}/>}
                                 mapElement={<div style={{height: `80%`}}/>}
                                 openModal={this.openModal}
                             >

                             </Map>
                         </div>
                         <EventList events={this.state.events}
                                    deleteHandler={this.deleteEvent}/>

                 </Fragment>
             </div>
             </div>


    ;
   }
}

// export default App;
export default withRouter(App);



