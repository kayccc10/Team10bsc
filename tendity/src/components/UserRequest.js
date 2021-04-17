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

    onLoadApprovalRequest = async () => {
        this.setState({message: 'Waiting for confirmation...'})
    }

    render() {
        return (
            <div className="container" style={{padding: "0px"}}>
                <body >
                {/*<UserMenu/>*/}
                <hr/>
                User requests to approve will appear here.
                <hr/>
                <h4>{this.state.message}</h4>
                </body>
            </div>
        )
    }
}

export default UserRequest;
