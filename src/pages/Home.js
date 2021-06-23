import '../css/Home.css'
import Navbar from '../bars/Navbar'
import Footer from "../bars/Footer";
import logo from "../images/logos/renajiang-logo.gif";

function Home() {

    return (
        <div className="Home">
            <Navbar currentPage="home"/>
            <div className="Home-logo">
                <img className="Home-gif" src={logo} alt="Homepage Logo"/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;