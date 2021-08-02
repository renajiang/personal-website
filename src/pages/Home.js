import '../css/Home.css'
import Navbar from '../bars/Navbar'
import Footer from "../bars/Footer";
function Home() {

    return (
        <div className="Home">
            <Navbar currentPage="home"/>
            <div className="Home-logo"/>
            <Footer/>
        </div>
    );
}

export default Home;