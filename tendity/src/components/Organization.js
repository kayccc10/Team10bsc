import web3 from "../web3";
import idVerify from "../idVerify";
import {Component} from "react";
import OrganizationMenu from "./OrganizationMenu";

class Organization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            organizationName: ''
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

    onAddOrganization = async e => {
        e.preventDefault();

        const accounts = await web3.eth.getAccounts()
        await idVerify.methods.registerInstitution(this.state.organizationName).send({
            from: accounts[0],
            gas: '1000000'
        });

        this.setState({message: 'Added Organization..: ' +this.state.organizationName})
    }

    render() {
        return (
            <div className="container" style={{padding: "0px"}}>
                <body >
                <hr/>
                <OrganizationMenu/>
                <form onSubmit={this.onAddOrganization} className="row g-3">
                    <div className="col-auto" style={{padding: "30px"}}>
                        <div className="mb-3">
                            <label htmlFor="organizationName" className="form-label">Organization name</label>
                            <input
                                name="organizationName"
                                onChange={this.handleInputChange.bind(this)}
                                type="text" className="form-control" id="organizationName"
                                placeholder="Organization name"/>
                        </div>
                        <p>Note! To interact with the contract, you need some BNB(0.001).</p>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Add Organization</button>
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

export default Organization;
