import web3 from "../web3";
import idVerify from "../idVerify";
import {Component} from "react";
import UserMenu from "./UserMenu";
import OrganisationMenu from "./OrganisationMenu";

class Organisation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner: ''
        }
    }

    async componentDidMount() {
        this.setState({owner: await idVerify.methods.owner().call()});
    }

    onAddOrganisation = async () => {
        const accounts = await web3.eth.getAccounts()
        this.setState({message: 'Waiting for confirmation...'})

        await idVerify.methods.idRequest().send({
            from: accounts[0]
        });
        this.setState({message: 'Adding Organisation..'})
    }

    render() {
        return (
            <div className="container" style={{padding: "0px"}}>
                <body >
                <hr/>
                <OrganisationMenu/>
                <form onSubmit='' className="row g-3">
                    <div className="col-auto" style={{padding: "30px"}}>
                        <div className="mb-3">
                            <label htmlFor="orgName" className="form-label">Organisation name</label>
                            <input
                                value={this.state.value}
                                onChange={e => this.setState({value: e.target.value})}
                                type="text" className="form-control" id="orgName"
                                placeholder="Organisation name"/>
                        </div>
                        <p>Note! To interact with the contract, you need some BNB(0.001).</p>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Add Organisation</button>
                        </div>
                    </div>
                </form>
                <hr/>
                <h4>{this.state.message}</h4>
                </body>
            </div>
        )
    }
}

export default Organisation;
