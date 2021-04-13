import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from "../App";
import Team from "../Team";

export default function HomeMenu() {
    return (
        <Router>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/user" className="btn btn-outline-primary btn-lg px-4 me-sm-3">User</Link>
                <Link to="/organisation" className="btn btn-outline-primary btn-lg px-4 me-sm-3">Organisation</Link>
            </div>
                <Switch>
                    <Route path="/user">
                        {/*<App/>*/}
                    </Route>
                    <Route path="/organisation">
                        {/*<Team/>*/}
                    </Route>
                </Switch>
        </Router>
);
}
