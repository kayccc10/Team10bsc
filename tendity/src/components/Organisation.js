import web3 from "../web3";
import idVerify from "../idVerify";
import {Component} from "react";
import OrganisationMenu from "./OrganisationMenu";

class Organisation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            organisationName: ''
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

    onAddOrganisation = async () => {
        console.log("------------" + this.state.organisationName)
        const accounts = await web3.eth.getAccounts()
        await idVerify.methods.registerInstitution(this.state.organisationName).send({
            from: accounts[0],
            gas: '1000000'
        });

        this.setState({message: 'Added Organisation..: ' +this.state.organisationName})
    }

    render() {
        return (
            <div className="container" style={{padding: "0px"}}>
                <body >
                <hr/>
                <OrganisationMenu/>
                <form onSubmit={this.onAddOrganisation} className="row g-3">
                    <div className="col-auto" style={{padding: "30px"}}>
                        <div className="mb-3">
                            <label htmlFor="orgName" className="form-label">Organisation name</label>
                            <input
                                name="organisationName"
                                onChange={this.handleInputChange.bind(this)}
                                type="text" className="form-control" id="organisationName"
                                placeholder="Organisation name"/>
                        </div>
                        <p>Note! To interact with the contract, you need some ETH(0.001).</p>
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
