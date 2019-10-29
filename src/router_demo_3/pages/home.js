import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render () {
        return (
            <div>
                <div>一级路由：Home</div>
                <ul>
                    <li><Link to="/home/a123456">账单1ID</Link></li>
                    <li><Link to="/home/b123456">账单2ID</Link></li>
                </ul>
                <hr/>
                <div>{ this.props.children }</div>
            </div>
        );
    }
}

export default Home;