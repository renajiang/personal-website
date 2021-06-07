import Home from './Home'
import logo from "../images/home-logo.png";

function Landing() {

    return (
        <div className="Landing">
            <img className="Home-logo" src={logo} alt="Homepage Logo"/>
            <a className={Home} href="/home"> Enter </a>
        </div>
    );
}

export default Landing;