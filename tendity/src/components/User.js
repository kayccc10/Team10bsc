import web3 from "../web3";
import idVerify from "../idVerify";
import {Component} from "react";
import UserMenu from "./UserMenu";

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            balance: '',
            value: '',
            message: '',
            idNo: '',
            idName: '',
            idDob: '',
            idHash: '',
            idHomeAddress: ''
        }
    }

    async componentDidMount() {
        const manager = await idVerify.methods.owner().call();
        this.setState({owner: manager});
    }

    onCreateUser = async () => {
        const accounts = await web3.eth.getAccounts()
        this.setState({message: 'Waiting for confirmation...'})

        await idVerify.methods.idRequest().send({
            from: accounts[0]
        });
        this.setState({message: 'Creating User..'})
    }

    render() {
        return (
            <div className="container" style={{padding: "0px"}}>
                <body >
                <hr/>
                <UserMenu/>
                <form onSubmit='' className="row g-3">
                    <div className="col-auto" style={{padding: "30px"}}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Full name</label>
                            <input
                                value={this.state.value}
                                onChange={e => this.setState({value: e.target.value})}
                                type="amount" className="form-control" id="amount"
                                placeholder="full name"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>

                            <input
                                value={this.state.value}
                                onChange={e => this.setState({value: e.target.value})}
                                type="email" className="form-control" id="email"
                                placeholder="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>

                            <input
                                value={this.state.value}
                                onChange={e => this.setState({value: e.target.value})}
                                type="number" className="form-control" id="phoneNo"
                                placeholder="phone no"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">ID Number</label>

                            <input
                                value={this.state.value}
                                onChange={e => this.setState({value: e.target.value})}
                                type="text" className="form-control" id="idNo"
                                placeholder="id no"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Date of Birth</label>

                            <input
                                value={this.state.value}
                                onChange={e => this.setState({value: e.target.value})}
                                type="date" className="form-control" id="dob"
                                placeholder="date of birth"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Home Address</label>

                            <input
                                value={this.state.value}
                                onChange={e => this.setState({value: e.target.value})}
                                type="text" className="form-control" id="homeAddress"
                                placeholder="home address"/>
                        </div>
                        <p>Note! To interact with the contract, you need some BNB(0.001).</p>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Submit</button>
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

export default User;
