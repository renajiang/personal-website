import {useEffect, useState} from "react";

function Navbar(props) {

    // track which page is active
    const [home, setHome] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [codeProjects, setCodeProjects] = useState("");

    useEffect(() => {
        switch(props.currentPage) {
            case 'home':
                setHome("active");
                break;
            case 'portfolio':
                setPortfolio("active");
                break;
            case 'codeProjects':
                setCodeProjects("active");
                break;
            default:
                return;
        }
    })
  
    return (
        <div className="Navbar">
            <div className="Navbar-pages">
                <a className={home} href="/home"> Home </a>
                <a className={portfolio} href="/portfolio"> Portfolio </a>
                <a className={codeProjects} href="/codeprojects"> Code Projects </a>
            </div>
        </div>
    )

} export default Navbar;
