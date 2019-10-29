import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render () {
        return (
            <div>
                <span>Home</span>
                <Link to="/home/a">Home Children</Link> 
                <hr />
                {this.props.children}
            </div>
        );
    }
}

export default Home;