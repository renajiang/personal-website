import Navbar from '../bars/Navbar'
import Footer from "../bars/Footer";

function Home() {

    return (
        <div className="Home">
            <Navbar currentPage="home"/>
            <Footer/>
        </div>
    );
}

export default Home;