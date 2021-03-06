import '../css/Gallery.css';
import '../css/flickity.css';
import {useState, useCallback} from "react";
import Navbar from '../bars/Navbar';
import Gallery from "react-photo-gallery";
import waves from '../images/art/paintings/waves.jpg';
import matilda from '../images/art/paintings/matilda.jpg';
import saturn from '../images/art/paintings/saturn.jpg';
import fifty1 from '../images/art/paintings/50paintings1.jpg';
import fifty2 from '../images/art/paintings/50paintings2.jpg';
import fifty3 from '../images/art/paintings/50paintings3.jpg';
import goat from '../images/art/paintings/goat.jpg';
import bathtub from '../images/art/paintings/bathtub.jpg';
import studio from '../images/art/paintings/studio1.jpg';
import stretcher from '../images/art/paintings/stretcher.jpg';
import cke from '../images/art/paintings/cke.jpg';
import heirloom from '../images/art/paintings/heirloom.jpg';
import qsgy1 from '../images/art/paintings/qsgy1.jpg';
import qsgy2 from '../images/art/paintings/qsgy2.jpg';
import qsgy3 from '../images/art/paintings/qsgy3.jpg';
import womb from '../images/art/paintings/womb.JPG';
import cocoon1 from '../images/art/paintings/cocoon1.jpg';
import cocoon2 from '../images/art/paintings/cocoon2.JPG';


function Paintings() {

    const paintings = [
        {
            src: cocoon2,
            width: 9,
            height: 10,
            title: "untitled (cocoon)",
            date: 2022,
            dimensions: '"28 x 25"',
            medium: "oil on canvas"
        },
        {
            src: womb,
            width: 3,
            height: 4,
            title: "untitled (womb)",
            date: 2022,
            dimensions: '16" x 12"',
            medium: "oil on canvas"
        },
        {
            src: heirloom,
            width: 4,
            height: 3,
            title: "untitled (pocket gems)",
            date: 2022,
            dimensions: '20" x 16"',
            medium: "oil on canvas"
        },
        {
            src: cocoon1,
            width: 3,
            height: 4,
            title: "untitled (cocoon), detail shot",
            date: 2022,
            dimensions: '"28 x 25"',
            medium: "oil on canvas"
        },
        {
            src: matilda,
            width: 5,
            height: 4,
            title: "untitled (boy eats cake)",
            date: 2020,
            dimensions: '20" x 25"',
            medium: "oil on canvas"
        },
        {
            src: qsgy3,
            width: 5,
            height: 7,
            title: "untitled (qian shou guan yin)",
            date: 2022,
            dimensions: '72" x 60"',
            medium: "oil on canvas"
        },
        {
            src: bathtub,
            width: 3,
            height: 4,
            title: "untitled (man, guitar, and bathtub)",
            date: 2021,
            dimensions: '60" x 72"',
            medium: "oil on canvas"
        },
        {
            src: qsgy2,
            width: 3,
            height: 4,
            title: "untitled (qian shou guan yin), detail shot",
            date: 2022,
            dimensions: '72" x 60"',
            medium: "oil on canvas"
        },
        {
            src: cke,
            width: 5,
            height: 4,
            title: "untitled (still from cheungking express)",
            date: 2022,
            dimensions: '20" x 25"',
            medium: "oil on canvas"
        },
        {
            src: qsgy1,
            width: 3,
            height: 4,
            title: "untitled (qian shou guan yin), , detail shot",
            date: 2022,
            dimensions: '72" x 60"',
            medium: "oil on canvas"
        },
        {
            src: studio,
            width: 3,
            height: 4,
            title: "studio setup",
            date: 2021
        },
        {
            src: goat,
            width: 3,
            height: 4,
            title: "untitled unfinished (the goat and the dance)",
            date: 2021,
            dimensions: '84" x 66"',
            medium: "oil on canvas"
        },
        {
            src: fifty1,
            width: 2,
            height: 4,
            title: "untitled (50 paintings)",
            date: 2021,
            dimensions: '7" x 5"',
            medium: "oil on canvas"
        },
        {
            src: fifty2,
            width: 3,
            height: 4,
            title: "untitled (50 paintings)",
            date: 2021,
            dimensions: '7" x 5"',
            medium: "oil on canvas"
        },
        {
            src: fifty3,
            width: 4,
            height: 3,
            title: "untitled (50 paintings)",
            date: 2021,
            dimensions: '7" x 5"',
            medium: "oil on canvas"
        },
        {
            src: stretcher,
            width: 3,
            height: 4,
            title: "making of a stretcher",
            date: 2021
        },
        {
            src: waves,
            width: 1,
            height: 1,
            title: "untitled (waves)",
            date: 2020,
            dimensions: '25" x 25"',
            medium: "oil on canvas"
        },
        {
            src: saturn,
            width: 3,
            height: 4,
            title: "Saturn Devouring His Son (mastercopy)",
            date: 2020,
            dimensions: '40" x 30"',
            medium: "oil on canvas"
        }
        // title='Figure Studies 1' date='2018' dimension='36" x 24" and 24" x 24"' medium='Charcoal on Newsprint' src={figure}/>
    ];

    const [label, setLabel] = useState(
        <div className='Art-label'>
            <h1> 2020 - 2021 </h1>
            <h3> oils, stretchers, thumbtacks, spackle </h3>
        </div>
    )

    const getInfo = useCallback((event, { photo, index }) => {
        const temp = []
        temp.push(
            <div className='Art-label'>
                <h1> {photo.title} </h1>
                <h3> {photo.date} </h3>
                <h3 className= 'Art-label-left' style={{display:'inline'}}> {photo.dimensions}, </h3>
                <h3 className= 'Art-label-left' style={{display:'inline'}}> {photo.medium} </h3>
            </div>
        );
        setLabel(temp);
        console.log("title:", photo.title);
        console.log("date:", photo.date);
      }, []);

    return (
        <div className='Paintings'>
            <Navbar currentPage='portfolio'/>
            <div className='Art-label-wrapper'> {label} </div>
            <div className='Art-gallery'>
                <Gallery photos={paintings} direction={"column"} onClick={getInfo}/>
            </div>
        </div>
    );
}

export default Paintings;