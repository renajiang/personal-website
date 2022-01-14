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
                            <a href={`${url}/paintings`}> paintings  </a>
                            <a href={`${url}/drawings`}> drawings </a>
                            <a href={`${url}/installations`}> installations </a>
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    );
}

export default ArtPortfolio;
