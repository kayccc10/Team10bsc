import idVerify from "../idVerify";
import {Component} from "react";

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner: ''
        }
    }

    async componentDidMount() {
        this.setState({owner: await idVerify.methods.owner().call()});
        this.onLoadApprovalRequest();
    }

    onLoadApprovalRequest = async () => {
        this.setState({message: 'Waiting for user data...'});
    }

    render() {
        return (
            <div className="container" style={{padding: "0px"}}>
                <body >
                {/*<UserMenu/>*/}
                <hr/>
                User info retrieved to approve will appear here.
                <hr/>
                <h4>{this.state.message}</h4>
                </body>
            </div>
        )
    }
}

export default UserInfo;
