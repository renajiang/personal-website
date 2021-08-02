import '../css/WIP.css';

function WIP(props) {

    return (
        <div className='WIP'>
            <div className='WIP-body'>
                <h1>coming soon...</h1>
                <h3>{props.date}</h3>
            </div>
        </div>
    );
}

export default WIP;