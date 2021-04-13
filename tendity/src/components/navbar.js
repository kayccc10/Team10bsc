import {Component} from "react/cjs/react.production.min";
import Menu from "./Menu";

class Navbar extends Component {

    render() {
        return (
            <nav style={{display: "block"}}  className="navbar navbar-expand-lg navbar-light bg-light">
                <Menu/>
            </nav>
        )
    }
}

export default Navbar
