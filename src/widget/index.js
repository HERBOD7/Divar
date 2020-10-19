import React from 'react';
import ScoreRow from './score-row'

class Widget extends React.Component {

    render () {
        return (
            <ScoreRow {...this.props}/>
        );
    };
}

export default Widget;