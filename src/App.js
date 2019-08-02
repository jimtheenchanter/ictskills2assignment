

import React, {Component} from 'react';
import Header from "./components/header/";
import EventList from  "./components/eventList";
//import Event from "./components/event";
import FilterControls from "./components/filterControls/";
import './App.css';
//import request from "superagent";
import api from "./datastore/stubAPI";
import Map from "./components/map/";
require('dotenv').config();


class App extends Component {
    state = { search: "", gender: "all" };
    // componentDidMount() {
    //     request.get("https://randomuser.me/api/?results=10").end((error, res) => {
    //         if (res) {
    //             let { results: events } = JSON.parse(res.text);
    //             api.initialize(events);
    //             this.setState({});
    //         } else {
    //             console.log(error);
    //         }
    //     });
    // }


    render() {
        let events = api.getAll();


        const location = {
          // lat: this.events.latitude, lng: this.events.longitude
           lat: 54.8646, lng: -7.3136
        }


        // const sample1 = {
        //     name: {bride:'Katie', groom:'Ivan'},
        //     date: '2019-08-04',
        //     coords: {lat:53.362425, lng:-6.665859},
        //     picture: {thumbnail: './profile.png'}
        // };
        //
        // const sample2 = {
        //     name: {bride:'Steffi', groom:'Brian'},
        //     date: '2019-08-09',
        //     coords: {lat:53.462425, lng:-7.665859},
        //     picture: {thumbnail: './profile.png'}
        // };

        // const events = [sample, sample1, sample2, sample1, sample];
        //const googleMapURL2 = `${process.env.REACT_APP_DEV_API_URL}`
        return (



            <div className="jumbotron">
                <Header noEvents={10} />
                <FilterControls />
                <EventList events={events} />

            <Map
        isMarkerShown
        googleMapURL={process.env.REACT_APP_DEV_API_URL}
        loadingElement={<div style={{ height: `80%` }} />}
        location={location}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `80%` }} />}
        />
            </div>

    );
    }
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import Map from "./components/map/";
// //import EventList from "./components/eventList/index";
//
// function App() {
//   const location = {lng:-7.142379, lat: 52.246502};
//
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Wedding Planner Map
//         </p>
//         <a
//           className="App-link"
//           href="https://incrowdweddingmusic.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Organise with GPS accuracy
//         </a>
//
//
//       </header>
//       <div className="col-12" >
//         <Map
//             isMarkerShown
//             googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDdUr8H8fDlsbF3Bhm-AhsBOZkP-FzqcUE&v=3.exp&libraries=geometry,drawing,places"
//             loadingElement={<div style={{ height: `100%` }} />}
//             location={location}
//
//             containerElement={<div style={{ height: `800px` }} />}
//             mapElement={<div style={{ height: `100%` }} />}
//         />
//       </div>
//
//     </div>
//   );


// }
// export default App;


