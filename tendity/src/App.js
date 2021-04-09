import './App.css';
import web3 from "./web3";
import idVerify from "./idVerify";
import {Component} from "react/cjs/react.production.min";
import Navbar from "./components/navbar";

class App extends Component {
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

    onCreateUser = async () => {
        const accounts = await web3.eth.getAccounts()
        this.setState({message: 'Waiting for confirmation...'})

        await idVerify.methods.idRequest().send({
            from: accounts[0]
        });
        this.setState({message: 'Winner has been picked!'})
    }

    async componentDidMount() {
        const manager = await idVerify.methods.owner().call();
        this.setState({manager});
    }

    render() {
        const {owner, value, balance} = this.state
        return (
            <div className="container" style={{opacity: "80%"}}>
                <Navbar/>

                <header className="card">
                    <h3 style={{color: "gray"}}>Welcome to Tendity</h3>
                </header>
                <body >
                <div className="container">
                <h5>Info</h5>
                <p>There are currently no verifiers</p>
                </div>
                <hr/>
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
                        {/*<input*/}
                        {/*    value={this.state.value}*/}
                        {/*    onChange={e => this.setState({value: e.target.value})}*/}
                        {/*    type="amount" className="form-control" id="verficationAmount"*/}
                        {/*    placeholder="verfication amount"/>*/}
                        <p>Note! To interact with the contract, you need some BNB(0.001).</p>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Submit</button>
                        </div>
                    </div>
                </form>
                <hr/>

                <button onClick='' type="button" className="btn btn-success">Verify</button>
                <hr/>
                <h4>{this.state.message}</h4>
                </body>
            </div>
        );
    }
}

export default App;
