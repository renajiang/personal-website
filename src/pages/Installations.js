import '../css/Gallery.css';
import Navbar from '../bars/Navbar';
import {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import linen1 from '../images/art/installations/linen1.jpg';
import linen2 from '../images/art/installations/linen2.jpg';
import linen3 from '../images/art/installations/linen3.jpg';

function Installations() {

    const installations = [
        {
            src: linen1,
            width: 3,
            height: 4,
            title: "untitled (linen)",
            date: 2021,
            dimensions: '60" x 72"',
            medium: "canvas, newsprint, gesso"
        },
        {
            src: linen2,
            width: 3,
            height: 4,
            title: "untitled (linen)",
            date: 2021,
            dimensions: '60" x 72"',
            medium: "canvas, newsprint, gesso"
        },
        {
            src: linen3,
            width: 3,
            height: 4,
            title: "untitled (linen)",
            date: 2021,
            dimensions: '60" x 72"',
            medium: "canvas, newsprint, gesso"
        }
    ];

    const [label, setLabel] = useState(
        <div className='Art-label'>
            <h1> 2021 </h1>
            <h3> canvas, newspaper, buckets of gesso </h3>
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
        <div className='Installations'>
            <Navbar currentPage='portfolio'/>
            <div className='Art-label-wrapper'> {label} </div>
            <div className='Art-gallery'>
                <Gallery photos={installations} direction={"column"} onClick={getInfo}/>
            </div>
        </div>
    );
}

export default Installations;