import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ user }) => {
    const venue = capitalize(
        `${this.props.event.venue}, ${this.props.event.coordinates.latitude}, ${this.props.event.coordinates.longitude}`
    );

    return (
        <Fragment>
            <h4>
                <FontAwesomeIcon icon={["fas", "home"]} />
                <span> {venue}</span>
            </h4>
            <h4>
                <FontAwesomeIcon icon={["fas", "phone"]} />
                <span> {user.phone}</span>
            </h4>
            <h4>
                <FontAwesomeIcon icon={["fas", "envelope"]} />
                <span> {user.email}</span>
            </h4>
            <h4>
                <FontAwesomeIcon icon={["fas", "birthday-cake"]} />
                <span> {this.props.event.date}</span>
            </h4>
        </Fragment>
    );
};