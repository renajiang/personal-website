import '../css/ArtPortfolio.css';
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';

function ArtPortfolio() {

    return (
        <div className='Portfolio'>
            <Navbar currentPage='portfolio'/>
                <div className='Portfolio-body-wrapper'>
                    <div className='Portfolio-categories'>
                        <h1>contents</h1>
                        <a href='/paintings-drawings'> paintings & drawings </a>
                        <a href='/sculpture'> sculpture </a>
                        <a href='/graphic-design'> graphic design </a>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default ArtPortfolio;
