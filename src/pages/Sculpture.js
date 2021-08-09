import '../css/Sculpture.css'
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';
import WIP from './WIP';

function Sculpture() {

    return (
        <div className='Sculpture'>
            <Navbar currentPage='portfolio'/>
            <div className='Sculpture-header'>
                <a href='/portfolio'>Art Portfolio</a>
                <h1> > Sculpture </h1>
            </div>
            <WIP date='december 2021'/>
            <Footer/>
        </div>
    );
}

export default Sculpture;