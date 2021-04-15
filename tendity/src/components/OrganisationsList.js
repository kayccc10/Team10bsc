import web3 from "../web3";
import idVerify from "../idVerify";
import {Component} from "react";
import OrganisationMenu from "./OrganisationMenu";

class UserRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organisationName: '',
            owner: '',
            organisations: []
        }
    }

    getAccounts = async () => {
        const accounts = await web3.eth.getAccounts()
        const organisations = await idVerify.methods.institutionInfo().send({
            from: accounts[0]
        });
        this.setState({message: 'Fetched institutions...'});
        this.setState({organisations: organisations});
        console.log(":::: "+JSON.parse(organisations))
    }

    async componentDidMount() {
        this.setState({owner: await idVerify.methods.owner().call()});
        this.getAccounts();
    }

    render() {
        return (
            <div className="container" style={{padding: "0px"}}>
                <body >
                <h5>.</h5>
                <hr/>
                All Organisation Names will appear here.
                <hr/>
                <h4>{this.state.message}</h4>
                </body>
            </div>
        )
    }
}

export default UserRequest;
