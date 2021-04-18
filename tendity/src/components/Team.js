import '../App.css';
import {Component} from "react/cjs/react.production.min";

class Team extends Component {
    render() {
        return (
                <body>
                <div className="container">
                    <h5 style={{textAlign: "center"}}>Team Info</h5>
                    <hr/>

                    <div className="row">
                        <div className="card" style={{width: "18rem", margin: "10px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Kene</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Role</h6>
                                <a href="https://github.com/kayccc10" className="card-link">Github</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem", margin: "10px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Joker</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Role</h6>
                                <a href="https://github.com/abdoulore" className="card-link">Github</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem", margin: "10px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Dimitri</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Role</h6>
                                <a href="https://github.com/ErvinDimitri" className="card-link">Github</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem", margin: "10px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Mandla</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Role</h6>
                                <a href="https://github.com/Man-GoKho" className="card-link">Github</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem", margin: "10px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Prince</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Role</h6>
                                <a href="#" className="card-link">Github</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem", margin: "10px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Mackenzie</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Role</h6>
                                <a href="https://github.com/mckennzie" className="card-link">Github</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem", margin: "10px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Rose</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Role</h6>
                                <a href="https://github.com/goldenroses" className="card-link">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                </body>
        );
    }
}

export default Team;
