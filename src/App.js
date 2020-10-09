import React from 'react';
import './App.css';

const widget = [
  {
    "widget_type": "FEATURE_ROW",
    "data": {
      "title": "بررسی فنی بیش از <b>۴۰۰</b> نقطه‌ خودرو",
      "image_url": "https://s100.divarcdn.com/static/icons/4/ic_checked.png",
      "image_color": "SUCCESS_PRIMARY",
      "has_divider": true,
      "icon": {
        "image_url_dark": "https://s100.divarcdn.com/static/imgs/widget-icons/dark/success_primary/checked.png",
        "image_url_light": "https://s100.divarcdn.com/static/imgs/widget-icons/light/success_primary/checked.png",
        "icon_name": "CHECKED",
        "icon_color": "SUCCESS_PRIMARY"
      }
    }
  },
  {
    "widget_type": "SCORE_ROW",
    "data": {
      "title": "بدنه",
      "percentage_score": 88,
      "score_color": "SUCCESS_PRIMARY",
      "image_url": "https://s100.divarcdn.com/static/icons/4/ic_vehicles.png",
      "image_color": "ICON_SECONDARY",
      "action": {
        "type": "SHOW_INSPECTION_ITEM",
        "payload": {
          "type": "type1",
          "slug": "YmFkYW5l"
        }
      },
      "has_divider": true,
      "icon": {
        "image_url_dark": "https://s100.divarcdn.com/static/imgs/widget-icons/dark/icon_secondary/car_body.png",
        "image_url_light": "https://s100.divarcdn.com/static/imgs/widget-icons/light/icon_secondary/car_body.png",
        "icon_name": "CAR_BODY",
        "icon_color": "ICON_SECONDARY"
      }
    }
  }
];

function Widget(props) {
  return (
    <div className="widget">
      <img src={props.iconSource} className={props.iconColor} alt={props.iconAlt} />
      <p dangerouslySetInnerHTML={{__html: `${props.title}`}} className="widget-title"/>
      {props.type === 'SCORE_ROW' ? <Score percentageScore={props.percentageScore} /> : ''}
    </div>
  );
}

function Score (props) {
  return (
    <div className="score">
        <FilledScore percentageScore={props.percentageScore}/>
    </div>
  );
}

function FilledScore (props) {
  const scoreBarFilled = [];
  let diffScore = props.percentageScore;
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
  return <div className="score-bar">{scoreBarFilled}</div>;
}

const separator = <hr className="separator" />;
const iconColor = {
  SUCCESS_PRIMARY: 'primary',
  ICON_SECONDARY : 'secondary'
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-intro">
          {separator}
          <Widget iconSource={widget[0].data.icon.image_url_light} iconColor={iconColor[widget[0].data.icon.icon_color]} iconAlt={widget[0].data.icon.icon_name} title={widget[0].data.title} />
          {separator}
          <Widget iconSource={widget[1].data.icon.image_url_light} iconColor={iconColor[widget[1].data.icon.icon_color]} iconAlt={widget[1].data.icon.icon_name} title={widget[1].data.title} type={widget[1].widget_type} percentageScore={widget[1].data.percentage_score}/>
          {separator}
        </div>
      </div>
    </div>
  );
}

export default App;
