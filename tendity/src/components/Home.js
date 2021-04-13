import web3 from "../web3";
import idVerify from "../idVerify";
import {Component} from "react";
import HomeMenu from "./HomeMenu";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner: ''
        }
    }

    async componentDidMount() {
        this.setState({owner: await idVerify.methods.owner().call()});
    }

    render() {
        return (
            // <div className="container" style={{padding: "0px"}}>
                <body>
                <h5>.</h5>
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold">Welcome to Tendity</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Identity management made easy....Team10 BSC project</p>
                        <HomeMenu/>
                    </div>
                </div>
                <hr/>
                <h4>{this.state.message}</h4>
                </body>
            // </div>
        )
    }
}

export default Home;
