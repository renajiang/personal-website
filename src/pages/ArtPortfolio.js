import '../css/Portfolio.css';
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';

function Characterise(props) {
    let temp = [];
    for (let i = 0; i < props.str.length; i++) {
        temp.push(props.str[i]);
    }
    temp = temp.map((char) => <p>{char}</p>);
    return (
        <div className='Characterise'>
            {temp}
        </div>
    );
}

function ArtPortfolio() {

    return (
        <div className='Portfolio'>
            <Navbar currentPage='portfolio'/>
                <div className='Portfolio-categories'>
                    <h1>contents</h1>
                    <a href='/paintings-drawings'> PAINTINGS & DRAWINGS </a>
                    <a href='/graphic-design'> GRAPHIC DESIGN </a>
                    <a href='/sculpture'> SCULPTURE </a>
                    {/*<a href='/paintings-drawings'> PAINTINGS & DRAWINGS </a>*/}
                </div>
            <Footer/>
        </div>
    );
}

export default ArtPortfolio;
