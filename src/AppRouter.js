import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CodeProjects from './pages/CodeProjects';

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
                        {/*redirect links*/}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;