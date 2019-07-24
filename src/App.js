import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function App() {
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

        <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
        />
      </header>
    </div>
  );
}

export default App;
 GoogleApiWrapper({
  apiKey: 'TOKEN HERE'
})(MapContainer);

