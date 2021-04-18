import {Component} from "react";

class About extends Component {
    render() {
        return (
                <body>
                <h5>.</h5>
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold">What is Tendity?</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">
                            Tendity is an identity verification service on the blockchain.
                            Ensure that users or customers provide information that is associated with the identity of a real person
                            on the blockchain by allowing users and organisations interact and exchange identities.
                        </p>
                    </div>
                </div>
                <hr/>
                </body>
        )
    }
}

export default About;
