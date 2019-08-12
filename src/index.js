import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import request from "superagent";
import api from "./datastore/stubAPI"; // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import EventPage from "./components/eventPage";

class Router extends Component {
    componentDidMount() {
        request.get(api).end((error, res) => {
            if (res) {
                let {results: events} = JSON.parse(res.text);
                api.initialize(events);
                this.setState({});
            } else {
                console.log(error);
            }
        })
    };


    render() {
        return (
            <BrowserRouter>
                <div className="jumbotron">
                    <div className="container-fluid ">
                        <Switch>
                            <Route path="/events/:id" component={EventPage} />
                            <Route exact path="/" component={App} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Router />, document.getElementById("root"));// import React from 'react';





// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// //Bootstrap for styling
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
//
// //attaches the App component to the browser's DOM at the element with the ID 'root'
// ReactDOM.render(<App />, document.getElementById('root'));
//
//
//
