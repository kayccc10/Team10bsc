import idVerify from "../idVerify";
import React, {Component} from "react";
import {Link} from "react-router-dom";

class OrgUserRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfRequests: 0
        }
    }

    async componentDidMount() {
        this.getRequestsInfo();
    }

    getRequestsInfo = async e => {
        this.setState({message: 'Fetching org requests info...'})
        const numberOfRequests = await idVerify.methods.viewIdRequestLength().call();
        this.setState({numberOfRequests: numberOfRequests});

        const res = await idVerify.methods.viewUserId(0).call();
        this.setState({user: res});
        console.log("FETCHING.." + res)

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
        // TODO: Link smart contract data - WIP
        return (
            <div className="container" style={{padding: "0px"}}>
                <body>
                <hr/>
                <h3>You have 3 requests. </h3>
                <hr/>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Requested By</th>
                        <th scope="col">Approve/Reject</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mitsumi Corp</td>
                        <td>
                            <Link to="#" className="btn btn-outline-success btn-sm px-4 me-sm-3">Approve </Link>
                            <Link to="#" className="btn btn-outline-danger btn-sm px-4 me-sm-3">Reject</Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mistiq Africa</td>
                        <td>
                            <Link to="#" className="btn btn-outline-success btn-sm px-4 me-sm-3">Approve </Link>
                            <Link to="#" className="btn btn-outline-danger btn-sm px-4 me-sm-3">Reject</Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Sendy Ltd</td>
                        <td>
                            <Link to="#" className="btn btn-outline-success btn-sm px-4 me-sm-3">Approve </Link>
                            <Link to="#" className="btn btn-outline-danger btn-sm px-4 me-sm-3">Reject</Link>
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

export default OrgUserRequest;
