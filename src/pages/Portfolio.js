import '../css/Portfolio.css';
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';

function Portfolio() {

    // const [text, setText] = setState("");

    // function showText(text) {
    //     console.log(text);
    //     return (
    //         // <h3>{text}</h3>
    //     );
    // }

    //onMouseOver={()=>showText('FINE ARTS')}

    return (
        <div className='Portfolio'>
            <Navbar currentPage='portfolio'/>
                <div class='Portfolio-categories'>
                    <div class='Portfolio-category' id='Portfolio-fine' >
                        {/* {text} */}
                    </div>
                    <div class='Portfolio-category' id='Portfolio-gd'>
                        {/* {text} */}
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Portfolio;
