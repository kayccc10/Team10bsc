import idVerify from "../idVerify";
import React, {Component} from "react";

class AcceptedRequests extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner: ''
        }
    }

    async componentDidMount() {
        this.setState({owner: await idVerify.methods.owner().call()});
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onRequestInfo = async () => {
        this.setState({message: 'Waiting for request...'})
    }

    render() {
        // TODO: Link smart contract data - WIP
        return (
            <div className="container" style={{padding: "0px"}}>
                <body>
                <hr/>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Request to</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>45676876</td>
                        <td>Kene M</td>
                        <td>0x2865b2712F83E17761185D654D5752a3831Bf5AB</td>
                        <td>
                            <span className="badge bg-danger">Rejected</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>56768765</td>
                        <td>Steve Oria</td>
                        <td>0x87y6745AC2223eCe34A3A4d81FA65efc53319e65</td>
                        <td>
                            <span className="badge bg-success">Approved</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>46789765</td>
                        <td>Prince D</td>
                        <td>0x0987b2712F83E17761185D654D5752a3831Bf5AB</td>
                        <td>
                            <span className="badge bg-success">Approved</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>343556563</td>
                        <td>Melanie Atis</td>
                        <td>0x06756b2712F83E17761185D654D5752a3831Bf5AB</td>
                        <td>
                            <span className="badge bg-danger">Rejected</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>456786775</td>
                        <td>David Kenneth</td>
                        <td>0x8790b2712F83E17761185D654D5752a3831Bf5AB</td>
                        <td>
                            <span className="badge bg-danger">Rejected</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>33343635</td>
                        <td>Jackie Lee</td>
                        <td>0x54bB745AC2223eCe34A3A4d81FL65efc53919e65</td>
                        <td>
                            <span className="badge bg-success">Approved</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr/>
                <h4>{this.state.message}</h4>
                </body>
            </div>
        )
    }
}

export default AcceptedRequests;
