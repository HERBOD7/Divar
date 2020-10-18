import React from 'react';
import ScoreRow from './score-row'
import '../App.css';

const Title = (props) => <h3 className={props.ClassName}>{props.title}</h3>;
const UnexpandableRow = (props) => <div className="flex between pt-1 pb-1"><h3 className="dark-text">{props.date}</h3><h3 className="secondary-text">{props.title}</h3></div>

export const Widgets = (props) => {

    switch (props.type) {
        case 'TITLE_ROW' :
            return <Title className={props.data.text_color} title={props.data.text}/>;
        case 'UNEXPANDABLE_ROW' :
            return <UnexpandableRow title={props.data.title} date={props.data.value}/>;
        case 'SECTION_DIVIDER_ROW' :
            return <hr className="separator" />;
        case 'SCORE_ROW' :
            return <ScoreRow {...props.data} />;
        default:
            return null;
    };
};