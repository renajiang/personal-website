import '../css/Footer.css';
import '../css/App.css';

function Sidebar(props) {

    const pages = [];

    for (let page in props.pages) {
        const pageName = props.pages[page];
        const className = `Sidebar-${props.pages[page]}`;
        const url = `${props.root}/${pageName}`;
        console.log(url)
        pages.push(
            <a className={className} href={url}>
                {pageName}
            </a>,
            <br/>
        );
    }
  
    return (
        <div className="Sidebar">
            {pages}
        </div>
    )

} export default Sidebar;
