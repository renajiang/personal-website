import '../css/WIP.css';
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';
import WIP from './WIP';

function Sculpture() {

    return (
        <div className='Sculpture'>
            <Navbar currentPage='portfolio'/>
            <WIP date='december 2021'/>
            <Footer/>
        </div>
    );
}

export default Sculpture;