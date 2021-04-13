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
            idHomeAddress: '',
            fullName: '',
            phoneNumber: ''
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        const manager = await idVerify.methods.owner().call();
        this.setState({owner: manager});
    }

    onCreateUser = async e => {
        e.preventDefault();
        const accounts = await web3.eth.getAccounts()
        this.setState({message: 'Waiting for confirmation...'})

        console.log("------------" + this.state.email)
        await idVerify.methods.addUser(
            this.state.fullName,
            this.state.email,
            this.state.phoneNumber
        ).send({
            from: accounts[0],
            gas: '1000000'
        });
        this.setState({message: 'Creating User..'})
    }

    render() {
        return (
            <div className="container" style={{padding: "0px"}}>
                <body>
                <hr/>
                <UserMenu/>
                <form onSubmit={this.onCreateUser} className="row g-3">
                    <div className="col-auto" style={{padding: "30px"}}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full name</label>
                            <input
                                name="fullName"
                                onChange={this.handleInputChange.bind(this)}
                                type="text" className="form-control" id="fullName"
                                placeholder="full name"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                name="email"
                                onChange={this.handleInputChange.bind(this)}
                                type="email" className="form-control" id="email"
                                placeholder="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                            <input
                                name="phoneNo"
                                onChange={this.handleInputChange.bind(this)}
                                type="text" className="form-control" id="phoneNo"
                                placeholder="phone no"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="idNo" className="form-label">ID Number</label>
                            <input
                                name="idNo"
                                onChange={this.handleInputChange.bind(this)}
                                type="text" className="form-control" id="idNo"
                                placeholder="id no"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Date of Birth</label>
                            <input
                                name="dob"
                                onChange={this.handleInputChange.bind(this)}
                                type="date" className="form-control" id="dob"
                                placeholder="date of birth"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="homeAddress" className="form-label">Home Address</label>
                            <input
                                name="homeAddress"
                                onChange={this.handleInputChange.bind(this)}
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
