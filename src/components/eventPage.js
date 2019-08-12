import React, {Fragment} from "react";
import { withRouter } from "react-router-dom";
import api from "../datastore/stubAPI"; // NEW
// import ContactPublic from "../components/contactPublic/";
// import ContactPrivate from "../components/contactPrivate/";

const EventPage = props => {
    const { id } = props.match.params;
    const event = api.find(id);
    return (
        <Fragment>
            {event ? (
                <Fragment>
            <h3> Event id: {props.match.params.id} </h3>
            <h3> Detail page stub </h3>
                </Fragment>
            ):(
                    <p>Waiting for event details</p>
                )}

        </Fragment>

    );
};

export default withRouter(EventPage);