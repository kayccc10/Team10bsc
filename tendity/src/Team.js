import './App.css';
import {Component} from "react/cjs/react.production.min";
import Navbar from "./components/navbar";

class App extends Component {
    render() {
        return (
            <div className="container" style={{opacity: "90%"}}>
                <body>
                <div className="container">
                    <h5>Team Info</h5>
                    <hr/>

                    <div className="row">
                        <div className="card" style="width: 18rem;">
                            <div className="card-body">
                                <h5 className="card-title">// TODO: Name</h5>
                                <h6 className="card-subtitle mb-2 text-muted">//TODO: Role</h6>
                                <p className="card-text">// TODO: Intro </p>
                                <a href="#" className="card-link">//TODO: Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                </body>
            </div>
        );
    }
}

export default App;
