import '../css/Paintings.css';
import '../css/flickity.css';
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';
import Flickity from 'react-flickity-component'

import waves from '../images/art/paintings-drawings/waves2020.jpg';
import matilda from '../images/art/paintings-drawings/matilda2020.jpg';
import figure from '../images/art/paintings-drawings/figure2018.jpg';
import saturn from '../images/art/paintings-drawings/saturn2021.jpg';
import figure1 from '../images/art/paintings-drawings/figure12018.jpg';

function Artwork(props) {

    return (
        <div className='Paintings-Artwork'>
            <div className='Paintings-Artwork-img'>
                <img className='Paintings-Artwork-src' src={props.src} alt="Artwork Thumbnail"/>
            </div>
            <div className='Paintings-Artwork-text'>
                <h1> {props.title} </h1>
                <h3 style={{color:'rgb(150, 150, 150)'}}> {props.date} </h3>
                <h3 style={{display:'inline'}}> {props.dimension}, </h3>
                <h3 style={{display:'inline'}}> {props.medium} </h3>
            </div>
        </div>
    );
}

function Paintings() {

    const flickityOptions = {
        initialIndex: 0
    }

    return (
        <div className='Paintings'>
            <Navbar currentPage='portfolio'/>
            <div className='Paintings-header'>
                <a href='/portfolio'>Art Portfolio</a>
                <h1> > Paintings & Drawings </h1>
            </div>

            <Flickity
                className='Paintings-carousel' // default ''
                options={flickityOptions} // takes flickity options {}
            >
                <div className='Paintings-cell'>
                    <Artwork className='Paintings-item'
                             title='Untitled (Waves)' date='2020'
                             dimension='25" x 25"'
                             medium='Oil on Canvas' src={waves}/>
                </div>
                <div className='Paintings-cell'>
                    <Artwork className='Paintings-item'
                             title='Untitled (Boy Eats Chocolate Cake)' date='2020'
                             dimension='20" x 25"'
                             medium='Oil on Canvas' src={matilda}/>
                </div>
                <div className='Paintings-cell'>
                    <Artwork className='Paintings-item'
                             title='Figure Studies 1' date='2018'
                             dimension='36" x 24" and 24" x 24"'
                             medium='Charcoal on Newsprint' src={figure}/>
                </div>
                <div className='Paintings-cell'>
                    <Artwork className='Paintings-item'
                             title='Saturn Devouring His Son (mastercopy)' date='2021'
                             dimension='40" x 30"'
                             medium='Oil on Canvas' src={saturn}/>
                </div>
                <div className='Paintings-cell'>
                    <Artwork className='Paintings-item'
                             title='Figure Studies 2' date='2018'
                             dimension='18" x 10"'
                             medium='Charcoal on Newsprint' src={figure1}/>
                </div>
            </Flickity>

            {/*<div className='Paintings-gallery'>*/}
            {/*    <Artwork className='Paintings-item'*/}
            {/*             title='Untitled (Waves)' date='2020'*/}
            {/*             dimension='25" x 25"'*/}
            {/*             medium='Oil on Canvas' src={waves}/>*/}
            {/*    <Artwork className='Paintings-item'*/}
            {/*             title='Untitled (Boy Eats Chocolate Cake)' date='2020'*/}
            {/*             dimension='20" x 25"'*/}
            {/*             medium='Oil on Canvas' src={matilda}/>*/}
            {/*    <Artwork className='Paintings-item'*/}
            {/*             title='Figure Studies 1' date='2018'*/}
            {/*             dimension='36" x 24" and 24" x 24"'*/}
            {/*             medium='Charcoal on Newsprint' src={figure}/>*/}
            {/*    <Artwork className='Paintings-item'*/}
            {/*             title='Saturn Devouring His Son (mastercopy)' date='2021'*/}
            {/*             dimension='40" x 30"'*/}
            {/*             medium='Oil on Canvas' src={saturn}/>*/}
            {/*    <Artwork className='Paintings-item'*/}
            {/*             title='Figure Studies 2' date='2018'*/}
            {/*             dimension='18" x 10"'*/}
            {/*             medium='Charcoal on Newsprint' src={figure1}/>*/}
            {/*</div>*/}
            <Footer/>
        </div>
    );
}

export default Paintings;