import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import Home from './pages/Home';
import ArtPortfolio from './pages/ArtPortfolio';
import CodeProjects from './pages/CodeProjects';
import About from './pages/About';
import Paintings from "./pages/Paintings";
import GraphicDesign from "./pages/GraphicDesign";
import Sculpture from "./pages/Sculpture";

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
                        <Route path='/portfolio/paintings-drawings' component={Paintings} />
                        <Route path='/portfolio/graphic-design' component={GraphicDesign} />
                        <Route path='/portfolio/sculpture' component={Sculpture} />
                        <Route path='/codeprojects' component={CodeProjects} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;