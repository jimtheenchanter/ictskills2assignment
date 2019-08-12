import React, { Component } from "react";
import Event from "../event/";
import './eventList.css';

export default class EventList extends Component {
    render() {
        //iterates through event cards to display as a list
        const eventCards = this.props.events.map(e => (
            <Event key={e.mobile}
                   event={e}
                   deleteHandler={this.props.deleteHandler}

            />
        ));
        return (
            <div className="container-fluid events bg-info">
                <div className="row">{eventCards}</div>
            </div>
        );
    }
}