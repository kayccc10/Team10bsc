import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default function OrganisationMenu() {
    return (
        <Router>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/organisation" className="btn btn-outline-info btn-lg px-4 me-sm-3">Update </Link>
            </div>
                <Switch>
                    <Route path="/user">
                        {/*<User/>*/}
                    </Route>
                    <Route path="/organisation">
                        {/*<Team/>*/}
                    </Route>
                </Switch>
        </Router>
);
}
