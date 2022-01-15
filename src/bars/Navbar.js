import '../css/Navbar.css';

function Navbar(props) {
  
    return (
        <div className="Navbar">
            <h1 className="Navbar-header"> Rena Jiang </h1>
            <div className="Navbar-pages">
                <a href='/home'> HOME </a>
                <a href='/portfolio'> VISUAL ART </a>
                <a href='/tattoo'> TATTOO </a>
                <a href='/codeprojects'> CODE PROJECTS </a>
                {/* <a className={about} href='/about'> ABOUT </a> */}
            </div>
        </div>
    )

} export default Navbar;
