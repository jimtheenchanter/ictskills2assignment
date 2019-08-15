import React, { Component } from "react";
import ReactDOM from "react-dom";
// import request from "superagent";
// import api from "./datastore/stubAPI";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import LoginForm from "./components/authentication/loginForm";

class Router extends Component {
    // componentDidMount() {
    //     request.get("http://localhost:3001/events").end((error, res) => {
    //         if (res) {
    //             let { results: events } = JSON.parse(res.text);
    //             api.initialize(events);
    //             this.setState({});
    //         } else {
    //             console.log(error);
    //         }
    //     });
    // }
    render() {
            return (
                <BrowserRouter>
                    <div className="jumbotron">
                        <div className="container-fluid ">
                            <Switch>
                                <Route path="/login" component={LoginForm} />
                                <Route exact path="/" component={App} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            );
    }
}

ReactDOM.render(<Router />, document.getElementById("root"));

