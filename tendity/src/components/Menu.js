import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default function Menu() {
    return (
        <Router>
            <div>
                <nav>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/team" className="nav-link">Team Members</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/home">
                        {/*<App/>*/}
                    </Route>
                    <Route path="/team">
                        {/*<Team/>*/}
                    </Route>
                    <Route path="/about">
                        {/*<About/>*/}
                    </Route>
                </Switch>
            </div>
        </Router>
);
}

function About()
    {
        return <h2>About</h2>;
    }
