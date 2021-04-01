import './App.css';
import web3 from "./web3";
import idVerify from "./idVerify";
import {Component} from "react/cjs/react.production.min";
import Navbar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manager: '',
      players: [],
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
    const {manager, players, balance} = this.state
    return (
        <div className="container">
          <Navbar/>
          <header className="body">
            <h3>Welcome to identity verifivation</h3>
          </header>
          <body>
          <h5>Info</h5>
          <p>There are currently no verifiers</p>
          <hr/>
          <FormControl onSubmit='' className="row g-3">
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
                    type="amount" className="form-control" id="amount"
                    placeholder="email"/>
                <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    type="amount" className="form-control" id="amount"
                    placeholder="phone no"/>
              <input
                  value={this.state.value}
                  onChange={e => this.setState({value: e.target.value})}
                  type="amount" className="form-control" id="amount"
                  placeholder="id no"/>
                <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    type="amount" className="form-control" id="amount"
                    placeholder="date of birth"/>
                <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    type="amount" className="form-control" id="amount"
                    placeholder="home address"/>
                <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    type="amount" className="form-control" id="amount"
                    placeholder="verfication amount"/>
                    <p>To interact with the contract, you need some ether.</p>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
              </div>
            </div>
          </FormControl>
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
