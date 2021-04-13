import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import OrganisationsList from "./OrganisationsList";
import Team from "../Team";
import Home from "./Home";

export default function Menu() {
    return (
        <Router>
            <div>
                <nav>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <a className="navbar-brand" href="#">Tendity</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/registered-organisations" className="nav-link">Registered Organisations</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/team" className="nav-link">Team Members</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="/registered-organisations">
                        <OrganisationsList/>
                    </Route>
                    <Route path="/team">
                        <Team/>
                    </Route>
                    <Route path="/about">
                        {/*<About/>*/}
                    </Route>
                </Switch>
            </div>
        </Router>
);
}
