import '../css/Home.css'
import Navbar from '../bars/Navbar'
import pic1 from '../images/home-pics/hammer.jpg'
import pic2 from '../images/home-pics/heels.jpg'
import pic3 from '../images/home-pics/oil.jpg'
import pic4 from '../images/home-pics/passport.jpg'
import pic5 from '../images/home-pics/pussy.jpg'

function Home() {

    return (
        <div className="Home">
            <Navbar currentPage="home"/>
            <div className="Home-logo1"/>
            <div className='Home-pics'>
                <img className='Home-pic1' src={pic1} alt="hammer"/>
                <img className='Home-pic2' src={pic2} alt="heels"/>
                <img className='Home-pic3' src={pic3} alt="oil"/>
                <img className='Home-pic4' src={pic4} alt="passport"/>
                <img className='Home-pic5' src={pic5} alt="pussy"/>
            </div>
        </div>
    );
}

export default Home;