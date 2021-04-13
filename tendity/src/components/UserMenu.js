import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserRequest from "./UserRequest";

export default function UserMenu() {
    return (
        <Router>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/user-requests" className="btn btn-outline-warning btn-lg px-4 me-sm-3">My requests</Link>
                {/*<Link to="/update-info" className="btn btn-outline-info btn-lg px-4 me-sm-3">Update Info</Link>*/}
            </div>
                <Switch>
                    <Route path="/user-requests">
                        <UserRequest/>
                    </Route>
                    <Route path="/update-info">
                        {/*<Team/>*/}
                    </Route>
                </Switch>
        </Router>
);
}
