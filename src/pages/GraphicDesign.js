import '../css/GraphicDesign.css';
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';
import WIP from './WIP';

function GraphicDesign() {

    return (
        <div className='GraphicDesign'>
            <Navbar currentPage='portfolio'/>
            <div className='GD-header'>
                <a href='/portfolio'>Art Portfolio</a>
                <h1> > Graphic Design </h1>
            </div>
            <WIP date='december 2021'/>
            <Footer/>
        </div>
    );
}

export default GraphicDesign;