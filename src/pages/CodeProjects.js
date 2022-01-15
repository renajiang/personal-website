import '../css/CodeProjects.css';
import Navbar from '../bars/Navbar';
import Footer from "../bars/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import {useState} from "react";

function Project(props) {

    const [tab, setTab] = useState('about');

    function updateTab(newTab) {
        if (newTab.localeCompare(tab) !== 0) {
            setTab(newTab);
        }
    }

    function getButton() {
        if (props.link) {
            return (
                <Button variant="outline-dark" href={props.link} target="_blank" rel="noopener noreferrer">
                    View in Github
                </Button>
            )
        } else {
            return (
                <Button variant="outline-dark" disabled>
                    Repository Available Upon Request Via Email
                </Button>
            )
        }
    }

    function getAlgos() {
        if (props.algos) {
            return (
                <div>
                    <Card.Title>Algorithms & Data Structures</Card.Title>
                    <Card.Text>{props.algos}</Card.Text>
                </div>
            )
        }
    }

    function getSpecs() {
        if (props.specs) {
            return (
                <div>
                    <Card.Title>Full Project Specs</Card.Title>
                    <a target="_blank" rel="noreferrer" href={props.specs}>
                        View specs here
                    </a>
                </div>
            )
        }
    }

    function getDemo() {
        if (props.demo) {
            return (
                <div>
                    <br/>
                    <Card.Title>Demo</Card.Title>
                    <a target="_blank" rel="noreferrer" href={props.demo}>
                        View demo here
                    </a>
                </div>
            )
        }
    }

    function getCardBody(which) {
        if (which === 'about') {
            return (
                <Card.Body className='Project-Body'>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    {getButton()}
                </Card.Body>
            );
        } else if (which === 'details') {
            return (
                <Card.Body className='Project-Body'>
                    <Card.Title>Languages & Frameworks</Card.Title>
                    <Card.Text>{props.langs}</Card.Text>
                    {getAlgos()}
                    {getSpecs()}
                    {getDemo()}
                </Card.Body>
            );
        } else {
            return (
                <Card.Title>the fuck</Card.Title>
            );
        }
    }

    return (
        <div className='Project'>
            <Card className='Project-Card' text='dark'
                  bg='light'>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#about" onSelect={() => updateTab('about')}>
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#details" onSelect={() => updateTab('details')}>
                                Details
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <div className='Project-body-wrapper'>
                    {getCardBody(tab)}
                </div>
            </Card>
        </div>
    )
}

function CodeProjects() {

    return (
        <div className="CodeProjects">
            <Navbar currentPage="codeProjects"/>
            <Project
                title={'OpenGL Cabin'}
                description={'This project uses OpenGl shapes to create a 360 degree, 3-dimensional scene of a cabin interor in a snow mountain environment. Main features include texture mapping, terrain mapping, particle generation, and collision detection. An interactive UI allows users to control snow size and rate, snow level, terrain jaggedness, and thrown snowballs.'}
                langs={'OpenGL, C++'}
                algos={'All shader programs, textures, scene, terrain, and particles initialised with their respective textures loaded once upon initialisation. The snowy terrain environment is generated with a triangle strip mesh with randomly generated y-coordinate values to mimic a natural irregular surface and bicubic interpolation to smooth out jagged edges. A collision is calculated and detected when a snowball intersects the window plane, resulting in an explosion into smaller particles. OpenGL\'s paintGL() draws each tessellated component, whose vertices are defined in header files. Mouse movements are tracked to update camera view and projecction matrices accordingly to support panning.'}
                demo={'https://drive.google.com/file/d/1EBZMj7VRtCHF8akB7dIf-Hnk2slgpkfj/view?usp=sharing'}
            />
            <Project
                title={'SpotiFynd'}
                description={'SpotiFynd is a web app that utilises the Spotify API to connect listeners with close ' +
                'similarities in music interests. Developed in SQL, Java, and React, SpotiFynd runs a matching ' +
                'algorithm on data based on recent top artists and top tracks to rank and recommend other listeners in ' +
                'our database to a user. Users can create shared recommended playlists generated by SpotiFynd and ' +
                'exported directly to Spotify, view the top artists and top tracks of their matches, and create an ' +
                'artist poster graphic individually customised for every match.'}
                langs={'Java, Spark, SQL, React, HTML, CSS'}
                algos={'SpotiFynd retrieves each user\'s top 15 artists and top 30 tracks of the past three months and ' +
                'quantifies this data in terms of audio features like genre, acousticness, tempo, and danceability. ' +
                'Each user\'s data is then vectorised and added to a k-D tree. The matching algorithm conducts a search ' +
                'on the k-D tree for the closest 5 matches and outputs those matches to the user. The shared playlist ' +
                'feature feeds the retrieved data of two users that have matched to the Spotify recommender algorithm ' +
                'and creates a new playlist that is exported to Spotify account of the user that requested the playlist.'}
            />
            <Project
                title={'renajiang.com'}
                description={'You are here! Personal website and online portfolio.'}
                langs={'React, HTML, CSS, Bootstrap'}
                link={'https://github.com/renajiang/personal-website'}
            />
            <Project
                title={'PVD Maps'}
                description={'A map of Providence, RI that operates through a REPL and is rendered using the ' +
                'HTML canvas element. This map is built using a SQLite database of coordinates of nodes and ways that ' +
                'represent the streets of Providence. Features include panning, zooming, and returning the shortest ' +
                'path between two points provided by the user by clicking on the map or inputting street names.'}
                langs={'Java, Spark, SQL, React, HTML, CSS'}
                algos={'This map uses a series of SQL calls to retrieve the corresponding ways from the SQLite database ' +
                'and display them to the user. A k-D tree is built with all nodes in the database to retrieve the ' +
                'closest node to a user\'s mouse click on the map, and the shortest route between two nodes is ' +
                'calculated using an A* search algorithm on a constructed graph. Google guava caching is ' +
                'implemented to optimise query time. The Maps webapp makes regular calls to a check-in server that ' +
                'provides dummy check-in data, which is then displayed in real time. Check-ins can be looked up by name ' +
                'and deleted.'}
            />
            <Project
                title={'Database'}
                description={'Database is a project that allows multiple clients (multi-threading) to add, query, ' +
                'print, and remove from a database which consists of nodes in a binary search tree. All modifications are ' +
                'made in a thread-safe way via fine-grained locking. The server uses a condition variable and mutex to ' +
                'handle stop and go commands that respectively pause and resume client activity. The server responds ' +
                'to the signals EOF and SIGINT, freeing all malloced space to prevent memory leaks and cancelling ' +
                'threads at a safe cancellation point. SIGPIPE is masked off to prevent the server from terminating ' +
                'when a client thread disconnects.'}
                langs={'C'}
                specs={'https://drive.google.com/file/d/1bgaRHnMtk_2xIRd2TOWS9Rs5geBaNy9b/view?usp=sharing'}
            />
            <Footer/>
        </div>
    );
}

export default CodeProjects;