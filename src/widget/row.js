import React from 'react';
import FilledScore from './filledScore';

class Row extends React.Component {
    render () {
        return(
            <div className="row">
                <img src={this.props.iconSource} className={this.props.iconColor} alt={this.props.iconAlt} />
                <p dangerouslySetInnerHTML={{__html: `${this.props.title}`}} className="widget-title"/>
                <div className="score">
                    <FilledScore percentageScore={this.props.percentageScore} />
                </div>
            </div>
        );
    }
}

export default Row;