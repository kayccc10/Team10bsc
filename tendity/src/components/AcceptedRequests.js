import idVerify from "../idVerify";
import React, {Component} from "react";
import {Link} from "react-router-dom";

class AcceptedRequests extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner: ''
        }
    }

    async componentDidMount() {
        this.setState({owner: await idVerify.methods.owner().call()});
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onRequestInfo = async () => {
        this.setState({message: 'Waiting for request...'})
    }

    render() {
        return (
            <div className="container" style={{padding: "0px"}}>
                <body>
                {/*<UserMenu/>*/}
                <hr/>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Request to</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>address requested to appear here</td>
                        <td>
                            <span className="badge bg-success">Approved</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr/>
                <h4>{this.state.message}</h4>
                </body>
            </div>
        )
    }
}

export default AcceptedRequests;
