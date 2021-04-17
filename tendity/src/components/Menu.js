import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import OrganizationsList from "./OrganizationsList";
import Team from "./Team";
import Home from "./Home";
import {Redirect} from "react-router";

export default function Menu() {
    return (
        <Router>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/registered-organizations" className="nav-link">All Organizations </Link>
                <Link to="/team" className="nav-link float-right">Team Members</Link>
                <Link to="/about" className="nav-link float-right">About</Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/registered-organizations">
                    <OrganizationsList/>
                </Route>
                <Route path="/team">
                    <Team/>
                </Route>
            </Switch>
        </Router>
);
}
