import React from "react";
import api from "../../datastore/stubAPI";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

        const Map = withScriptjs(withGoogleMap((props) => {

                const events = api.getAll();

                return <GoogleMap
                    defaultZoom={7}
                    defaultCenter={{lat: 53.318388, lng: -7.680725}}
                >
                    {events.map(e => (
                        <Marker
                            position={{
                                lat: parseFloat(e.coordinates.latitude),
                                lng: parseFloat(e.coordinates.longitude)
                            }}
                            onClick={(e) => console.log(e)}
                        />

                    ))}

                </GoogleMap>;
            }
            ))





export default Map;