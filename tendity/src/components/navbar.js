import {Component} from "react/cjs/react.production.min";
import Switch from "react-bootstrap/Switch";
import Team from "../Team";
import {Route, Router} from 'react-router';
import App from "../App";

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tendity</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Get Started</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/team">Team Members</a>
                            </li>
                        </ul>

                        {/*<Router>*/}
                        {/*    /!*<div className="App">*!/*/}
                        {/*        <Route path="/" component={App} />*/}
                        {/*        <Route exact path="/team" component={Team}/>*/}
                        {/*    /!*</div>*!/*/}
                        {/*</Router>*/}

                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
