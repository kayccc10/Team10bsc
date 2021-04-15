import idVerify from "../idVerify";
import {Component} from "react";

class OrganisationsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organisationName: '',
            owner: '',
            organisations: []
        }
    }

    getAccounts = async () => {
        const organisations = await idVerify.methods.institutionInfo(this.state.owner).call();
        this.setState({message: 'Fetched institutions...'});
        this.setState({organisations: organisations});
        console.log(":::: "+this.state.owner)
    }

    async componentDidMount() {
        this.setState({owner: await idVerify.methods.owner().call()});
        await this.getAccounts();
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

export default OrganisationsList;
