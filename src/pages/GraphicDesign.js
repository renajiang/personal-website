// import '../css/Paintings.css';
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';
import WIP from './WIP';

function GraphicDesign() {

    return (
        <div className='GraphicDesign'>
            <Navbar currentPage='portfolio'/>
            <WIP date='december 2021'/>
            <Footer/>
        </div>
    );
}

export default GraphicDesign;