import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Topic from './pages/topic';
import About from './pages/about';
import Main from './home';
import Order from './pages/children/order';
import NoMatch from './pages/no_match';

class App extends React.Component {
    render () {
        return (
            <HashRouter>
                <Main>
                    <Switch>
                        <Route path="/home" render={() => (
                            <Home>
                                <Route path="/home/:orderID" component={Order}></Route>
                            </Home>
                        )}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Main>
            </HashRouter>
        );
    }
}

export default App;