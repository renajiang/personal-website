import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import Home from './pages/Home';
import ArtPortfolio from './pages/ArtPortfolio';
import CodeProjects from './pages/CodeProjects';
import About from './pages/About';
import Paintings from "./pages/Paintings";
import Installations from "./pages/Installations";
import Drawings from "./pages/Drawings";
import Tattoo from './pages/Tattoo';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        {/*pages*/}
                        <Route path='/' component={App} exact={true} />
                        <Route path='/home' component={Home} />
                        <Route exact path='/portfolio' component={ArtPortfolio}/>
                        <Route path='/portfolio/paintings' component={Paintings} />
                        <Route path='/tattoo' component={Tattoo} />
                        <Route path='/portfolio/installations' component={Installations} />
                        <Route path='/portfolio/drawings' component={Drawings} />
                        <Route path='/codeprojects' component={CodeProjects} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;