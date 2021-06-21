import Navbar from '../bars/Navbar';
import Footer from '../bars/Footer';
import Sidebar from '../bars/Sidebar'

function Portfolio() {

    const sidebarLinks = ["fine", "graphic design"]

    return (
        <div className="Portfolio">
            <Navbar currentPage="portfolio"/>
            portfolio
            <Sidebar root="portfolio" pages={sidebarLinks}/>
            <Footer/>
        </div>
    );
}

export default Portfolio;
