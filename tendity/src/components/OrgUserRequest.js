import idVerify from "../idVerify";
import React, {Component} from "react";
import {Link} from "react-router-dom";

class OrgUserRequest extends Component {

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
                        <th scope="col">Requested By</th>
                        <th scope="col">Approve/Reject</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>org-name to appear here</td>
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
