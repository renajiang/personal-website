import '../css/Portfolio.css';
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';
import {useState} from 'react';

function Portfolio() {

    const [text, setText] = useState('');

    function hover(t) {
        if (text === '') {
            setText(t);
        } else {
            setText('')
        }
        console.log(text);
    }

    return (
        <div className='Portfolio'>
            <Navbar currentPage='portfolio'/>
                <div className='Portfolio-categories'>
                    <div className='Portfolio-category' id='Portfolio-fine'
                         onMouseEnter={()=>hover('FINE ARTS')}
                         onMouseLeave={()=>hover('')}>
                        <h3> {text} </h3>
                    </div>
                    <div className='Portfolio-category' id='Portfolio-gd'
                         onMouseEnter={()=>hover('GRAPHIC DESIGN')}
                         onMouseLeave={()=>hover('')}>
                        <h3> {text} </h3>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Portfolio;
