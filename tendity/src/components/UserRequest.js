import idVerify from "../idVerify";
import {Component} from "react";

class UserRequest extends Component {

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
                <body >
                {/*<UserMenu/>*/}
                <hr/>
                <form onSubmit={this.onRequestInfo} className="row g-3">
                    <div className="col-auto" style={{padding: "30px"}}>
                        <div className="mb-3">
                            <label htmlFor="userNationalId" className="form-label">User Address</label>
                            <p>Input user address to request access for their info.</p>
                            <input
                                name="userNationalId"
                                onChange={this.handleInputChange.bind(this)}
                                type="text" className="form-control" id="userId"
                                placeholder="User address"/>
                        </div>
                        <p>Note! To interact with the contract, you need some BNB(0.001).</p>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Request</button>
                        </div>
                    </div>
                </form>                <hr/>
                <h4>{this.state.message}</h4>
                </body>
            </div>
        )
    }
}

export default UserRequest;
