import idVerify from "../idVerify";
import {Component} from "react";

class OrganizationsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organizationName: '',
            owner: '',
            organizations: []
        }
    }

    getAccounts = async () => {
        const organizations = await idVerify.methods.institutionInfo(this.state.owner).call();
        this.setState({message: 'Fetched institutions...'});
        this.setState({organizations: organizations});
        console.log(":::: "+organizations)
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
                All Organization Names will appear here.
                <hr/>
                <h4>{this.state.message}</h4>
                </body>
            </div>
        )
    }
}

export default OrganizationsList;
