
//this component coordinates the logic of all the other components
import React, {Component, Fragment} from 'react';
import Modal from 'react-responsive-modal';
import Header from "./components/header/";
import EventList from  "./components/eventList";
import Event from "./components/event";
import FilterControls from "./components/filterControls/";
import './App.css';
// import request from "superagent";
import api from "./datastore/stubAPI";
import Map from "./components/map/";
require('dotenv').config();


class App extends Component {
    state = { event: null, events: api.getAll() };

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

        return (

            <Fragment>
                {/*//modal implement to handle requests regarding markers */}
                <Modal
                    open={!!this.state.event}
                    onClose={this.closeModal}

                    center
                >
                    <Event event={this.state.event} />
                </Modal>
                <Header noEvents={this.state.events.length} />
                <Map
                    isMarkerShown
                    googleMapURL={process.env.REACT_APP_DEV_API_URL}
                    loadingElement={<div style={{ height: `80%` }} />}
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `80%` }} />}
                    openModal={this.openModal}
                >

                </Map>
                <FilterControls onUserInput={this.handleChange} />
                <EventList events={this.state.events}
                           deleteHandler={this.deleteEvent}/>

            </Fragment>

    );
   }
}

export default App;



