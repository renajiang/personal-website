import '../css/About.css';
import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';
import pic from '../images/profile-pic-polaroid.png'

function About() {

    return (
        <div className='About'>
            <Navbar currentPage='about'/>
            <div className='About-body'>
                <div className='About-col' id='About-pic'>
                    <img src={pic} alt="Profile"/>
                </div>
                <div className='About-col' id='About-text'>
                    <h3> hello world! </h3>
                    <p> I'm Rena (she/her), a junior concentrating in Computer Science (Sc.B)
                        and Visual Arts (A.B) at Brown University. I grew up in Shanghai, China,
                        before moving to Orlando, FL after graduating high school,
                        and hope to be based in New York City after graduating college. </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;
