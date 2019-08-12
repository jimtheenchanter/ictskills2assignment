import React from 'react';
// import { MemoryRouter, Route } from "react-router";
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/';
import Event from '../src/components/event/';
import EventList from '../src/components/eventList/'

const sample = {
    id: 1,
    bridename: "Katie",
    groomname: "Ivan",
    venue: "Angler's Rest",
    date: "2018-08-04",
    mobile: "+3538695485912",
    email: "katieandivan@hotmail.org",
    picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564740843/happycouple1.jpg",
    coordinates: {
        latitude: "54.8646",
        longitude: "-7.3136"
    }
};

const sample1 =  {id: 2,
    bridename: "Steffi",
    groomname: "Brian",
    venue: "Dromquinna Manor",
    date: "2018-08-09",
    mobile: "+3538695485912",
    email: "katieandivan@hotmail.org",
    picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple3.jpg",
    coordinates: {
        latitude: "51.871379",
        longitude: "-9.643672"
    }
};

const sample2 = {
    id: 3,
    bridename: "Naile",
    groomname: "James",
    venue: "Hay Barn",
    date: "2018-08-17",
    mobile: "+3538695485912",
    email: "katieandivan@hotmail.org",
    picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple2.jpg",
    coordinates: {
        latitude: "53.264203",
        longitude: "-7.518304"
    }
};




storiesOf("Event List App/Header", module).add("default", () => (
    <Header noEvents={5} />
));

storiesOf("Event List App/Filter Controls", module).add("default", () => (
    <FilterControls />
));

storiesOf("Event List App/Event", module).add("default", () => (
    <Event event={sample}/>
));

storiesOf("Event List App/Event List", module).add("default", () => {
    const samples = [sample, sample1, sample2, sample, sample1]
    return <EventList events={samples}/>
});