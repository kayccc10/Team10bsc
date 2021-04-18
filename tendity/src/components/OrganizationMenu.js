import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import OrganizationsList from "./OrganizationsList";
import UserRequest from "./UserRequest";
import AcceptedRequests from "./AcceptedRequests";

export default function OrganizationMenu() {
    return (
        <Router>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/registered-organizations" className="btn btn-outline-success btn-sm px-4 me-sm-3">All Organizations </Link>
                <Link to="/request-access" className="btn btn-outline-success btn-sm px-4 me-sm-3">Request User Info </Link>
                <Link to="/accepted-request" className="btn btn-outline-success btn-sm px-4 me-sm-3">Accepted Requests </Link>
            </div>
                <Switch>
                    <Route path="/registered-organizations">
                        <OrganizationsList/>
                    </Route>
                    <Route path="/request-access">
                        <UserRequest/>
                    </Route>
                    <Route path="/accepted-request">
                        <AcceptedRequests/>
                    </Route>
                </Switch>
        </Router>
);
}
