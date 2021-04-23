import idVerify from "../idVerify";
import {Component} from "react";
import web3 from "../web3";

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balance: '',
            value: '',
            message: '',
            idNo: 0,
            idName: '',
            idDob: '',
            idHash: '',
            idHomeAddress: '',
            phoneNo: '',
            user: ''
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo = async e => {
        this.setState({message: 'Fetching user info...'})
        console.log("FETCHING..")

        const res = await idVerify.methods.viewUserId("0").call();
        this.setState({user: res});
        console.log("FETCHING.." +res)

    }

    onCreateUser = async e => {
        e.preventDefault();
        const accounts = await web3.eth.getAccounts()
        this.setState({message: 'Waiting for accounts to load...'})

        console.log("idNo: "+this.state.idNo)
        console.log("this.state.fullName: "+this.state.idName)
        console.log("this.state.idHomeAddres: "+this.state.idHomeAddress)
        await idVerify.methods.addUserId(
            this.state.idNo,
            this.state.idName,
            1980,
            "1111",
            this.state.idHomeAddress
        ).send({
            from: accounts[0],
            gas: '1000000'
        });
        this.setState({message: 'User created..with ID no: ' + this.state.idNo});
    }

    render() {
        if (this.state.user === '') {
            return (
                <div className="container" style={{padding: "0px"}}>
                    <body>
                    <hr/>
                    <form onSubmit={this.onCreateUser} className="row g-3">
                        <div className="col-auto" style={{padding: "30px"}}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full name</label>
                                <input
                                    name="idName"
                                    onChange={this.handleInputChange.bind(this)}
                                    type="text" className="form-control" id="idName"
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
                                    name="idHomeAddress"
                                    onChange={this.handleInputChange.bind(this)}
                                    type="text" className="form-control" id="idHomeAddress"
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
        else {
            return (
                <div className="container" style={{padding: "0px"}}>
                <div className="card" style="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
                </div>
            )
        }

    }
}

export default UserInfo;
