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

    function getCardBody(which) {
        if (which === 'about') {
            return (
                <Card.Body className='Project-Body'>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="outline-dark" href={props.link} target="_blank" rel="noopener noreferrer">View in Github</Button>
                </Card.Body>
            );
        } else if (which === 'details') {
            return (
                <Card.Body className='Project-Body'>
                    <Card.Title>Languages & Frameworks</Card.Title>
                    <Card.Text>{props.langs}</Card.Text>
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
                            <Nav.Link href="#first" onSelect={() => updateTab('about')}>
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link" onSelect={() => updateTab('details')}>
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
                header={'Software Engineering Final Project'}
                title={'SpotiFynd'}
                description={'A web app that uses the Spotify API to match users based on similar music interests'}
                langs={'Java, Spark, SQL, React JS, HTML, CSS'}
                link={'https://github.com/cs0320-2021/term-project-adai10-dhan22-ksoda-rjiang6'}
            />
            <Footer/>
        </div>
    );
}

export default CodeProjects;