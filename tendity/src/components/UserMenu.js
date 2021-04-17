import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserRequest from "./UserRequest";
import UserInfo from "./UserInfo";
import OrgUserRequest from "./OrgUserRequest";

export default function UserMenu() {
    return (
        <Router>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/user-info" className="btn btn-outline-success btn-lg px-4 me-sm-3">My details</Link>
                <Link to="/user-requests" className="btn btn-outline-success btn-lg px-4 me-sm-3">View/Approve requests</Link>
                {/*<Link to="/update-info" className="btn btn-outline-info btn-lg px-4 me-sm-3">Update Info</Link>*/}
            </div>
                <Switch>
                    <Route path="/user-requests">
                        <OrgUserRequest/>
                    </Route>
                    <Route path="/user-info">
                        <UserInfo/>
                    </Route>
                </Switch>
        </Router>
);
}
