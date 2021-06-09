import '../css/Footer.css';
import '../css/App.css';
import {Route} from 'react-router-dom';

function Footer() {
  
    return (
        <div className='Footer'>
            <h3 className='Footer-header'> CONTACT </h3>
            <div className='Footer-links'>
                <a target="_blank" className="Footer-github" href="https://github.com/renajiang"> Github </a>
                <a target="_blank" className="Footer-github" href="https://www.linkedin.com/in/rena-jiang-8244a6202/"> LinkedIn </a>
            </div>
        </div>
    )

} export default Footer;
