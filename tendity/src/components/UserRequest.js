import idVerify from "../idVerify";
import {Component} from "react";
import web3 from "../web3";

class UserRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            accounts: ''
        }
    }

    async componentDidMount() {
        const accounts = await web3.eth.getAccounts()
        this.setState({accounts: accounts});
        this.setState({owner: await idVerify.methods.owner().call()});
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onRequestInfo = async () => {
        let idNo = 1
        let idName = 1
        let idDoB = 1
        let idHash = 1
        let homeAdd = 1
        const request = await window.contract.methods
            .sendRequest(this.state.accounts[0], "institutionName", idNo, idName, idDoB, idHash, homeAdd,1).send({from: this.state.accounts[0]})
        this.setState({message: 'Waiting for request...'})
        console.log("Requesting info..")
    }

    render() {
        return (
            <div className="container" style={{padding: "0px"}}>
                <div >
                {/*<UserMenu/>*/}
                <hr/>
                <form onSubmit={this.onRequestInfo} className="row g-3">
                    <div className="col-auto" style={{padding: "30px"}}>
                        <div className="mb-3">
                            <label htmlFor="userAddress" className="form-label">User Address</label>
                            <p>Input user address to request access for their info.</p>
                            <input
                                name="userAddress"
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
                </div>
            </div>
        )
    }
}

export default UserRequest;
