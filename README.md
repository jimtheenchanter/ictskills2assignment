<img src="https://res.cloudinary.com/jimtheenchanter/image/upload/v1566239036/splash.jpg"/>

# ICT Skills 2 Assignment  -Single Page App

Name        James O'Brien 
Student no. 20082197    
<strong>Mock JWT server must be running first </strong>


## Overview
<small><em>Model Map</em></small>
<img src="https://res.cloudinary.com/jimtheenchanter/image/upload/v1567981068/model-map.jpg"/>

<p>
Built using Create React App DJ Event Planner is Point of Interest map-based DJ events management app where the user can save event locations and details  which are linked to cards describing the event. Multiple customised markers with onClick popup which display event cards. 
 when clicked on revealing event data.
 </p>
<small><em>Dashboard View</em></small>
 <img src="https://res.cloudinary.com/jimtheenchanter/image/upload/v1567980711/screenshot-dashboard.jpg" width=80%/>

#### FEATURES:
<ul>
    <li>Multiple event markers on map. 
    <li>Clicking markers displays information popups.
    <li>Can edit contact details or delete events 
    <li>Tests available using Cypress** 
    <li>List view of events also displayed
    </ul>
    <p>
 <small><em>Event List View</em></small>
 <img src="https://res.cloudinary.com/jimtheenchanter/image/upload/v1567959543/screenshotcardview.jpg" width=80%>
<p>
<small><em>onClick pop-up card</em>
 <img src="https://res.cloudinary.com/jimtheenchanter/image/upload/v1567959302/screenshotpopup.jpg" width=20px alt="OnClick() popup card view">
  
    
## Setup
<strong>IMPORTANT: </strong> <p>This project uses locally hosted JWT server 
which must first run. </p>

MoctJWT server clone available at:
`https://github.com/alex-c/mock-auth-backend`
In mockJwt/mock-auth-backend/config/defaults.json, change the line:

"cors-origin": "http://localhost:8080",
to
"cors-origin": "*",

Then from the console enter 
`node index.js`
this starts the JWT access token server


#### Clone project from:
https://github.com/jimtheenchanter/ictskills2assignment.git
#### Or visit deployed version on Heroku:
https://djeventmanager.herokuapp.com

### From console enter:
 `npm install` - allow Node modules to install
 `npm start`

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Testing
Cypress testing was enabled for 
<ul>
<li>Number of events

<li>Edit / Delete fuction

<li>Card Color

From a new console window enter 
`npx cypress open` 
** since login enabled has thrown errors but earlier successful testing screenshots are below
 <small><em>Earlier successful Cypress testing</em></small>
<img src="https://res.cloudinary.com/jimtheenchanter/image/upload/v1565949177/cypress-test-5pass.jpg" width=80%>
<P>

<img src="https://res.cloudinary.com/jimtheenchanter/image/upload/v1565949177/tests_passing_cypress.png" width=80%>

## Storybook Mode
 ### `npx start-storybook -p 9001 -c .storybook`
 Open [http://localhost:9001/](http://localhost:9001)
 
Note: Problems with storybook since router enabled.

## Bugs
JSON server was included but disabled as not fully functional.
json-server db.json -p 3001

The page will reload if you make edits.<br>

