import './App.css';
import web3 from "./web3";
import idVerify from "./idVerify";
import {Component} from "react/cjs/react.production.min";
import Navbar from "./components/navbar";
import Home from './components/Home';

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

    async componentDidMount() {
        const manager = await idVerify.methods.owner().call();
        this.setState({manager});
    }

    render() {
        const {owner, value, balance} = this.state
        return (
            <div className="container" style={{opacity: "90%"}}>
                <Navbar/>
                <Home />
            </div>
        );
    }
}

export default App;
