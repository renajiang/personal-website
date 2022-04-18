import '../css/Home.css'
import Navbar from '../bars/Navbar'

function Home() {

    return (
        <div className="Home">
            <Navbar currentPage="home"/>
            <div className="Home-logo1"/>
            <div className='Home-intro'>
            </div>
        </div>
    );
}

export default Home;