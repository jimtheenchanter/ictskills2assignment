import React from "react";
import api from "../../datastore/stubAPI";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

        const Map = withScriptjs(withGoogleMap((props) => {
        //uses the stub api to populate events
                const events = api.getAll();
               // const informationWindow = new InfoWindow();

        //display the event info on click
            const onMarkerClick = (id) => {
                const event = events.find(e => e.id === id);
                props.openModal(event);
                // console.log(event);

            }

                return <GoogleMap
                    defaultZoom={7}
                    defaultCenter={{lat: 53.318388, lng: -7.680725}}>
                    {events.map(e => (
                        <Marker
                            key={e.id}
                            position={{
                                // lat: parseFloat(e.coordinates.latitude),
                                // lng: parseFloat(e.coordinates.longitude)
                                lat: parseFloat(e.latitude),
                                lng: parseFloat(e.longitude)
                            }}
                            onClick={() => onMarkerClick(e.id)}
                            title={`${e.bridename} & ${e.groomname}, ${e.venue}`}
                        />

                    ))}

                </GoogleMap>;
            }
            ))





export default Map;