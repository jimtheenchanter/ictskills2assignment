import Authentication from "../../util/authentication";
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

const AuthButton = props => {
    const { history } = props;
    // return Authentication.isAuthenticated ? (
    const profile = Authentication.getUser();
    return profile ? (
        <Fragment>
            <span className="username text-light">{profile.user}</span>
            <button type="submit"
                    className="btn btn-outline-light btn-sm"
                onClick={() => {
                    Authentication.signout(() => history.push("/"));
                }}
            >
                Sign Out
            </button>
        </Fragment>
    ) : (
        <button className="btn-link"
            onClick={() => {
                history.push("/login");
            }}
        >
            Login
        </button>
    );
};

export default withRouter(AuthButton);