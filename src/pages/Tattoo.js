import '../css/Gallery.css';
import Navbar from '../bars/Navbar';
import {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import a from '../images/art/tattoos/a.png';
import char from '../images/art/tattoos/char.png';
import glass from '../images/art/tattoos/glass.png';
import heart from '../images/art/tattoos/heart.png';
import hearts from '../images/art/tattoos/hearts.png';
import k from '../images/art/tattoos/k.png';
import ocean from '../images/art/tattoos/ocean.png';
import persimmon from '../images/art/tattoos/persimmon.png';
import pleasure from '../images/art/tattoos/pleasure.png';
import pvd from '../images/art/tattoos/pvd.png';
import pvd2 from '../images/art/tattoos/pvd2.png';
import rose from '../images/art/tattoos/rose.png';
import turtle from '../images/art/tattoos/turtle.png';

function Tattoo() {

    const tattoos = [
        {
            src: a,
            width: 1,
            height: 1
        },
        {
            src: char,
            width: 1,
            height: 1
        },
        {
            src: heart,
            width: 1,
            height: 1
        },
        {
            src: hearts,
            width: 1,
            height: 1
        },
        {
            src: k,
            width: 1,
            height: 1
        },
        {
            src: ocean,
            width: 1,
            height: 1
        },
        {
            src: persimmon,
            width: 1,
            height: 1
        },
        {
            src: pleasure,
            width: 1,
            height: 1
        },
        {
            src: pvd,
            width: 1,
            height: 1
        },
        {
            src: pvd2,
            width: 1,
            height: 1
        },
        {
            src: rose,
            width: 1,
            height: 1
        },
        {
            src: turtle,
            width: 1,
            height: 1
        }
    ];

    const [label, setLabel] = useState(
        <div className='Art-label'>
            <h1> 2020-2021 </h1>
            <h3> ink, needles, stencil, greensoap </h3>
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
        <div className='Tattoo'>
            <Navbar currentPage='portfolio'/>
            <div className='Art-label-wrapper'> {label} </div>
            <div className='Art-gallery'>
                <Gallery photos={tattoos} direction={"column"} onClick={getInfo}/>
            </div>
        </div>
    );
}

export default Tattoo;
