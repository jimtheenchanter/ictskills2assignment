import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./components/map/";

function App() {
  const location = {lng:-7.142379, lat: 52.246502}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wedding Planner Map
        </p>
        <a
          className="App-link"
          href="https://incrowdweddingmusic.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Organise with GPS accuracy
        </a>


      </header>
      <div className="col-5" >
        <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDdUr8H8fDlsbF3Bhm-AhsBOZkP-FzqcUE&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            location={location}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
      </div>

    </div>
  );



}

export default App;


