import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import OrganizationsList from "./OrganizationsList";

export default function OrganizationMenu() {
    return (
        <Router>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/registered-organizations" className="btn btn-outline-success btn-lg px-4 me-sm-3">All Organizations </Link>
                <Link to="/request-access" className="btn btn-outline-success btn-lg px-4 me-sm-3">Request User success </Link>
                {/*<Link to="/request-success" className="btn btn-outline-success btn-lg px-4 me-sm-3">View </Link>*/}
            </div>
                <Switch>
                    <Route path="/registered-organizations">
                        <OrganizationsList/>
                    </Route>
                </Switch>
        </Router>
);
}
