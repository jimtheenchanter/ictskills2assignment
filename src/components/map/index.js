import React, {Component} from "react";
// import api from "../../datastore/stubAPI";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
        // let events = api.getAll();
        const Map = withScriptjs(withGoogleMap((props) =>


                <GoogleMap
                    defaultZoom={7}
                    defaultCenter={{lat: 53.318388, lng: -7.680725}}
                >
                    {/*{props.isMarkerShown && <Marker position={props.location}/>}*/}
                    <Marker position={{lat: 54.864623, lng: -7.313634}} onClick={() => console.log("Event here")}/>
                    <Marker position={{lat: 51.871379, lng: -9.643672}} onClick={() => console.log("Event here")}/>
                    <Marker position={{lat: 52.925765, lng: -8.180390}} onClick={() => console.log("Event here")}/>
                    <Marker position={{lat: 51.671379, lng: -9.443672}} onClick={() => console.log("Event here")}/>
                    <Marker position={{lat: 53.288011, lng: -6.235703}} onClick={() => console.log("Event here")}/>
                    <Marker position={{lat: 53.322786, lng: -6.264836}} onClick={() => console.log("Event here")}/>
                    <Marker position={{lat: 52.925765, lng: -8.180390}} onClick={() => console.log("Event here")}/>
                    <Marker position={{lat: 52.130647, lng: -10.248281}} onClick={() => console.log("Event here")}/>
                    <Marker
                        // position={{lat: events.coordinates.longitude, lng: events.coordinates.longitude}}
                    />
                </GoogleMap>
            ))




export default Map;