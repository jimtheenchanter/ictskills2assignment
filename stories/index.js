

import { MemoryRouter, Route } from "react-router";
import React from 'react';
// import { MemoryRouter, Route } from "react-router";
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/';
import Event from '../src/components/event/';
import EventList from '../src/components/eventList/'

import PublicProfile from '../src/components/eventPublic/publicProfile'

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
        ,
    login: {
        uuid: "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
        username: "bluefrog786",
        password: "ingrid",
        salt: "GtRFz4NE",
        md5: "5c581c5748fc8c35bd7f16eac9efbb55",
        sha1: "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
        sha256: "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
    },
    dob: {
        date: "1975-11-12T06:34:44Z",
        age: 42
    }, registered: {
        date: "2015-11-04T22:09:36Z",
        age: 2
    },
};

// const sample1 =  {id: 2,
//     bridename: "Steffi",
//     groomname: "Brian",
//     venue: "Dromquinna Manor",
//     date: "2018-08-09",
//     mobile: "+3538695485912",
//     email: "steffibrian@hotmail.org",
//     picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple3.jpg",
//     coordinates: {
//         latitude: "51.871379",
//         longitude: "-9.643672"
//     }
// };
//
// const sample2 = {
//     id: 3,
//     bridename: "Naile",
//     groomname: "James",
//     venue: "Hay Barn",
//     date: "2018-08-17",
//     mobile: "+3538695485912",
//     email: "katieandivan@hotmail.org",
//     picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple2.jpg",
//     coordinates: {
//         latitude: "53.264203",
//         longitude: "-7.518304"
//     }
// };




storiesOf("Event List App/Header", module).add("default", () => (
    <Header noEvents={5} />
));

storiesOf("Event List App/Filter Controls", module).add("default", () => (
    <FilterControls />
));

// storiesOf("Event List App/Event", module).add("default", () => (
//     <Event event={sample}/>
// ));

storiesOf("Event List App/Event", module)
    //wrap component in a React framework
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => (
        <Event contact={sample} deleteHandler={action('Delete confirmed') }/>
    ));

storiesOf("Event List App/Event List", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => {
        const samples = [sample, sample, sample, sample, sample]
        return <EventList events={samples}/>
    });

storiesOf("Event List App/Event Page/PublicProfile", module)
    .add("default", () => (
        <PublicProfile user={sample}/>
    ));
// storiesOf("Event List App/Event List", module).add("default", () => {
//     const samples = [sample, sample1, sample2, sample, sample1]
//     return <EventList events={samples} deleteHandler={action('Delete confirmed') }/>
// });