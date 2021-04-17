import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import User from "./User";
import Organization from "./Organization";

export default function HomeMenu() {
    return (
        <Router>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/user" className="btn btn-outline-primary btn-lg px-4 me-sm-3">User</Link>
                <Link to="/organization" className="btn btn-outline-primary btn-lg px-4 me-sm-3">Organization</Link>
            </div>
                <Switch>
                    <Route path="/user">
                        <User/>
                    </Route>
                    <Route path="/organization">
                        <Organization/>
                    </Route>
                </Switch>
        </Router>
);
}
