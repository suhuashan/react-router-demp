import React from 'react';

class Hchildren extends React.Component {
    render () {
        return (
            <div>{ this.props.match.params.orderID }</div>
        );
    }
}

export default Hchildren;