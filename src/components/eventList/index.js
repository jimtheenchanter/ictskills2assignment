import React, { Component } from "react";
import Event from "../event/";
import './eventList.css';

export default class EventList extends Component {
    render() {
        const eventCards = this.props.events.map(e => (
            <Event key={e.date} event={e} />
        ));
        return (
            <div className="container-fluid events bg-info">
                <div className="row">{eventCards}</div>
            </div>
        );
    }
}