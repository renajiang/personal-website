import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CodeProjects from './pages/CodeProjects';
import About from './pages/About';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        {/*pages*/}
                        <Route path='/' component={App} exact={true} />
                        <Route path='/home' component={Home} />
                        <Route path='/portfolio' component={Portfolio} />
                        <Route path='/codeprojects' component={CodeProjects} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;