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
            phoneNo: ''
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
        this.setState({message: 'Waiting for accounts to load...'})

        await idVerify.methods.addUser(
            this.state.fullName,
            this.state.email,
            this.state.phoneNo
        ).send({
            from: accounts[0],
            gas: '1000000'
        });
        this.setState({message: 'User created.. ' +this.state.email});
    }

    render() {
        return (
            <div>
                <hr/>
                <UserMenu/>
            </div>
        )
    }
}

export default User;
