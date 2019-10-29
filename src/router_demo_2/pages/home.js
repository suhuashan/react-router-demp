import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render () {
        return (
            <div>
                <div>一级路由：Home</div>
                <Link to="/home/children">children</Link>
                <Link to="/home/children1">children1</Link>
                <hr/>
                <div>{ this.props.children }</div>
            </div>
        );
    }
}

export default Home;