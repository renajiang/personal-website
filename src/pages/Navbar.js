import '../css/Navbar.css';
import '../css/App.css';
import {useEffect, useState} from "react";

function Navbar(props) {

    // track which page is active
    const [home, setHome] = useState("link");
    const [portfolio, setPortfolio] = useState("link");
    const [codeProjects, setCodeProjects] = useState("link");

    useEffect(() => {
        switch(props.currentPage) {
            case 'home':
                setHome('active');
                break;
            case 'portfolio':
                setPortfolio('active');
                break;
            case 'codeProjects':
                setCodeProjects('active');
                break;
            default:
                return;
        }
    })
  
    return (
        <div className="Navbar">
            <h1 className="Navbar-header"> Rena Jiang </h1>
            <div className="Navbar-pages">
                <a className={home} href='/home'> HOME </a>
                <a className={portfolio} href='/portfolio'> PORTFOLIO </a>
                <a className={codeProjects} href='/codeprojects'> CODE PROJECTS </a>
            </div>
        </div>
    )

} export default Navbar;
