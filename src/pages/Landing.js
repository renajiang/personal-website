import '../css/Landing.css'
import logo from "../images/logos/renajiang-logo.gif";

function Landing() {

    return (
        <div className="Landing">
            <div className="Landing-header">
                <h1> Rena Jiang </h1>
            </div>
            <div className="Landing-body">
                <img className="Landing-logo" src={logo} alt="Homepage Logo"/>
                <a className="Landing-enter" href="/home"> Enter </a>
            </div>
        </div>
    );
}

export default Landing;