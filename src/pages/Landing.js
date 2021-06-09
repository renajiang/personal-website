import Home from './Home'
import logo from "../images/logos/home-logo.png";
import Footer from "./Footer";

function Landing() {

    return (
        <div className="Landing">
            <img className="Home-logo" src={logo} alt="Homepage Logo"/>
            <a className={Home} href="/home"> Enter </a>
            <Footer/>
        </div>
    );
}

export default Landing;