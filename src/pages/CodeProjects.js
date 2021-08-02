import Navbar from '../bars/Navbar';
import Footer from "../bars/Footer";

function ProjectEntry(props) {

    return (
        <div className='ProjectEntry'>
            <h1>{props.title}</h1>

        </div>
    )
}

function CodeProjects() {

    return (
        <div className="CodeProjects">
            <Navbar currentPage="codeProjects"/>
            code projects
            <Footer/>
        </div>
    );
}

export default CodeProjects;