
import React, {Component} from 'react';
import Header from "./components/header/";
import EventList from  "./components/eventList";
//import Event from "./components/event";
import FilterControls from "./components/filterControls/";
import './App.css';
// import request from "superagent";
import api from "./datastore/stubAPI";
import Map from "./components/map/";
require('dotenv').config();


class App extends Component {
    state = { search: "", gender: "all" };


    render() {
        let events = api.getAll();
        let eventsnumber = events.length;

        return (

            <div className="jumbotron">
                <Header noEvents={eventsnumber} />
                <Map
                    isMarkerShown
                    googleMapURL={process.env.REACT_APP_DEV_API_URL}
                    loadingElement={<div style={{ height: `80%` }} />}
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `80%` }} />}
                >

                </Map>
                <FilterControls />
                <EventList events={events} />


            </div>

    );
   }
}

export default App;



