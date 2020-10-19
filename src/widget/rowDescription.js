import React from 'react';

class RowDescription extends React.Component {
    render () {
        return(
            <div>
                <h3>{this.props.title}</h3>
                <p className="description">{this.props.description}</p>
            </div>
        );
    }
}

export default RowDescription;