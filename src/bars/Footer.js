import '../css/Footer.css';
import '../css/App.css';
import githubLogo from "../images/logos/github/GitHub-Mark-Light-32px.png";
import linkedinLogo from "../images/logos/linkedin/white-linkedin-icon-png-10.png"

function Footer() {
  
    return (
        <div className='Footer'>
            <div className='Footer-links'>
                <div className='Footer-header'>
                    <h3> CONTACT </h3>
                </div>
                <div className='Footer-link' id="Footer-github">
                    <img className="Footer-link-logo" src={githubLogo} alt="Github Logo"/>
                    <a target="_blank" rel="noreferrer" className="Footer-link"
                       href="https://github.com/renajiang">
                        Github
                    </a>
                </div>
                <div className='Footer-link' id="Footer-linkedin">
                    <img className="Footer-link-logo" src={linkedinLogo} alt="Github Logo"/>
                    <a target="_blank" rel="noreferrer"
                       className="Footer-link"
                       href="https://www.linkedin.com/in/renaljiang/">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )

} export default Footer;
