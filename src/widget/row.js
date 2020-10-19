import React from 'react';
import FilledScore from './filledScore';

const iconColor = {
  SUCCESS_PRIMARY: 'primary',
  ICON_SECONDARY : 'secondary'
}

class Row extends React.Component {
    render () {
        return(
            <div className="row">
                <img src={this.props.icon.image_url_light} className={iconColor[this.props.icon.icon_color]} alt={this.props.icon.icon_name} />
                <p dangerouslySetInnerHTML={{__html: `${this.props.title}`}} className="widget-title"/>
                <div className="score">
                    <FilledScore percentageScore={this.props.percentage_score} />
                </div>
            </div>
        );
    }
}

export default Row;