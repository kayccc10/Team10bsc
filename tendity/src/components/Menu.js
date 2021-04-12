import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from "../App";
import Team from "../Team";

export default function Menu() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
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
                        <About/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function About() {
    return <h2>About</h2>;
}
