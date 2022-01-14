import '../css/Drawings.css'
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';
import WIP from './WIP';

function Drawings() {

    return (
        <div className='Drawings'>
            <Navbar currentPage='portfolio'/>
            <WIP date='june 2022'/>
            <Footer/>
        </div>
    );
}

export default Drawings;