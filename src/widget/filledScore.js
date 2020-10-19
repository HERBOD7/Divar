import React from 'react';

const scoreColor = {
    WARNING_SECONDARY: 'warning',
    SUCCESS_PRIMARY  : 'success'
}

class FilledScore extends React.Component {
    GenerateScore () {
        const scoreBarFilled = [];
        let diffScore = this.props.percentageScore;
        for (let i = 0; i < 5; i++) {
            if (diffScore - 20 >= 0) {
                scoreBarFilled.push(<div key={i}><div className={scoreColor[this.props.className] +' completed-score'}></div></div>);
            } else if (diffScore > 0 && diffScore - 20 !== 0) {
                scoreBarFilled.push(<div key={i}><div className={scoreColor[this.props.className]} style={{width: `${diffScore/20 * 100}%`}}></div></div>);
            } else {
                scoreBarFilled.push(<div key={i}><div className={scoreColor[this.props.className]}></div></div>);
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