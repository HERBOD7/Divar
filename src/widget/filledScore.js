import React from 'react';

class FilledScore extends React.Component {
    GenerateScore () {
        const scoreBarFilled = [];
        let diffScore = this.props.percentageScore;
        for (let i = 0; i < 5; i++) {
            if (diffScore - 20 >= 0) {
                scoreBarFilled.push(<div key={i}><div className='filled-score-bar completed-score'></div></div>);
            } else if (diffScore > 0 && diffScore - 20 !== 0) {
                scoreBarFilled.push(<div key={i}><div className='filled-score-bar' style={{width: `${diffScore/20 * 100}%`}}></div></div>);
            } else {
                scoreBarFilled.push(<div key={i}><div className='filled-score-bar'></div></div>);
            }
            diffScore = diffScore - 20;
        }
        return scoreBarFilled;
    }

    render () {
        return <div className="score-bar">{this.GenerateScore()}</div>;
    }
}

export default FilledScore;