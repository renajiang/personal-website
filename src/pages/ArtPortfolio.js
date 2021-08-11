import '../css/ArtPortfolio.css';
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';
import { useRouteMatch } from "react-router-dom";

function ArtPortfolio() {

    let { url } = useRouteMatch();

    return (
        <div className='Portfolio'>
            <div className='Portfolio-main-page'>
                <Navbar currentPage='portfolio'/>
                    <div className='Portfolio-body-wrapper'>
                        <div className='Portfolio-categories'>
                            <h1>contents</h1>
                            <a href={`${url}/paintings-drawings`}> paintings & drawings </a>
                            <a href={`${url}/sculpture`}> sculpture </a>
                            <a href={`${url}/graphic-design`}> graphic design </a>
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    );
}

export default ArtPortfolio;
