<img src="https://res.cloudinary.com/jimtheenchanter/image/upload/v1564740843/happycouple1.jpg">

#ICT Skills 2 Assignment  -Single Page App

Name        James O'Brien
Student no. 20082197    
Git repo    https://github.com/jimtheenchanter/ictskills2assignment.git
Heroku:     https://djeventmanager.herokuapp.com


##Overview
A map-based events management app where the user can save event locations and details
 which are linked to cards describing the event. Customised markers popup
 when clicked on revealing event data.

 
 > FEATURES
    Multiple event markers on map. 
    Clicking markers displays information popups.
    Can edit contact details or delete events 
    Tests available using Cypress
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##Setup

IMPORTANT: This project uses locally hosted JWT server 
which must first run. 


Git MoctJWT clone from 
git clone `https://github.com/alex-c/mock-auth-backend`
In mockJwt/mock-auth-backend/config/defaults.json, change the line:

"cors-origin": "http://localhost:8080",
to
"cors-origin": "*",

Then from the console enter 
`node index.js`
this starts the JWT access token server


Project from
####https://github.com/jimtheenchanter/ictskills2assignment.git

From console enter:
### `npm install`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##Testing
Cypress testing enabled for 

<ul>
<li>Number of events

<li>Edit / Delete fuction

<li>Card Color

From a new console window enter 
`npx cypress open` 

##Storybook Mode
 ### `npx start-storybook -p 9001 -c .storybook`
 Open [http://localhost:9001/](http://localhost:9001)
 


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##Bugs
JSON server was included but disabled as not fully functional.
json-server db.json -p 3001

The page will reload if you make edits.<br>
### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

