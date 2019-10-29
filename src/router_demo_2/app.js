import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import Home from './pages/home';
import Topic from './pages/topic';
import About from './pages/about';
import Main from './home';
import Hchildren from './pages/children/home_a';
import Hchildren1 from './pages/children/home_b';

class App extends React.Component {
    render () {
        return (
            <HashRouter>
                <Main>
                    <Route path="/home" render={() => (
                        <Home>
                            <Route path="/home/children" component={Hchildren}></Route>
                            <Route path="/home/children1" component={Hchildren1}></Route>
                        </Home>
                    )}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                    <Redirect from="/*" to="/home"></Redirect>
                </Main>
            </HashRouter>
        );
    }
}

export default App;