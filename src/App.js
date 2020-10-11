import React from 'react';
import './App.css';
import Widget from './widget/index'

const widget ={
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
  };

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
          <Widget iconSource={widget.data.icon.image_url_light} iconColor={iconColor[widget.data.icon.icon_color]} iconAlt={widget.data.icon.icon_name} title={widget.data.title} type={widget.widget_type} percentageScore={widget.data.percentage_score}/>
          {separator}
        </div>
      </div>
    </div>
  );
}

export default App;
