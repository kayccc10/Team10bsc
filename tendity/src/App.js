import './App.css';
import idVerify from "./idVerify";
import {Component} from "react/cjs/react.production.min";
import Navbar from "./components/navbar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: ''
        }
    }

    async componentDidMount() {
        const owner = await idVerify.methods.owner().call();
        this.setState({owner: owner});
    }

    render() {
        return (
            <div className="container" style={{opacity: "90%", width: "100%", height: "100%"}}>
                <Navbar/>
            </div>
        );
    }
}

export default App;
