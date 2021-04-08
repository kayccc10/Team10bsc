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
      message: ''
    }
  }

  async componentDidMount() {
    const manager = await idVerify.methods.owner().call();
    this.setState({manager});
  }

  render() {
    const {owner, value, balance} = this.state
    return (
        <div className="container">
          <Navbar/>
          <header className="body">
            <h3>Welcome to Tendity</h3>
          </header>
          <body>
          <h5>Info</h5>
          <p>There are currently no verifiers</p>
          <hr/>
          <form onSubmit='' className="row g-3">
            <div className="col-auto">
              <label htmlFor="idNo" className="visually-hidden">Amount to enter</label>
                <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    type="amount" className="form-control" id="amount"
                    placeholder="full name"/>
                <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    type="email" className="form-control" id="email"
                    placeholder="email"/>
                <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    type="number" className="form-control" id="phoneNo"
                    placeholder="phone no"/>
              <input
                  value={this.state.value}
                  onChange={e => this.setState({value: e.target.value})}
                  type="text" className="form-control" id="idNo"
                  placeholder="id no"/>
                <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    type="date" className="form-control" id="dob"
                    placeholder="date of birth"/>
                <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    type="text" className="form-control" id="homeAddress"
                    placeholder="home address"/>
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
