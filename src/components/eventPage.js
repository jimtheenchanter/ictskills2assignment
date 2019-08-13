import React, {Fragment} from "react";
import { withRouter} from "react-router-dom";
import api from "../datastore/stubAPI"; // NEW
import EventPublic from "../components/eventPublic/";
// import ContactPrivate from "../components/contactPrivate/";

const EventPage = props => {
    const { id } = props.match.params;
    const event = api.find(id);
    return (
        <Fragment>
            {event ? (
                <Fragment>
                    <EventPublic user={event} />
                </Fragment>
            ):(
                    <p>Waiting for event details</p>
                )}

        </Fragment>

    );
};

export default withRouter(EventPage);