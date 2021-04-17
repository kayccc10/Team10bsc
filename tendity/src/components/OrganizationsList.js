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
        this.setState({message: 'Institutions fetched.'});
        this.setState({organizations: organizations});
        console.log(":::: "+organizations)
    }

    async componentDidMount() {
        this.setState({owner: await idVerify.methods.owner().call()});
        await this.getAccounts();
    }

    render() {
        return (
            <div className="container text-center" style={{display: "block", margin: "auto"}}>
                <body >
                <h5 style={{marginTop: "2em"}}>Organizations</h5>
                <hr/>
                {this.state.organizations}
                <hr/>
                <h6 className="alert alert-success">{this.state.message}</h6>
                </body>
            </div>
        )
    }
}

export default OrganizationsList;
