import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/';
import Event from '../src/components/event/';
import EventList from '../src/components/eventList/'


const sample = {
    name: {bride:'Joe', groom:'Jane'},
    date: '2019-08-08',
    coords: {lat:'53.322425', long:'-6.265859'},
    picture: {thumbnail: './profile.png'}
}

const sample1 = {
    name: {bride:'Katie', groom:'Ivan'},
    date: '2019-08-04',
    coords: {lat:'53.362425', long:'-6.665859'},
    picture: {thumbnail: './profile.png'}
};

const sample2 = {
    name: {bride:'Steffi', groom:'Brian'},
    date: '2019-08-09',
    coords: {lat:'53.462425', long:'-7.665859'},
    picture: {thumbnail: './profile.png'}
};

storiesOf("Event List App/Header", module).add("default", () => (
    <Header noEvents={10} />
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