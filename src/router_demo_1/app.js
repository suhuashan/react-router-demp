import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/home';
import Topic from './pages/topic';
import About from './pages/about';
import Hchildren from './pages/children/home_a';

class App extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topic">Topic</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" render={() => (
                            <Home>
                                <Route path="/home/a" component={Hchildren}></Route>
                            </Home>
                        )}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;