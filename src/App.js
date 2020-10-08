import React from 'react';
import './App.css';

const widget = {
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
};

function Widget(props) {
  return (
    <div className="widget">
      <img src={props.iconSource} className={props.iconColor} alt={props} />
      <div dangerouslySetInnerHTML={{__html: `${props.title}`}} className="widget-title"/>
    </div>
  );
}

const separator = <hr className="separator" />;
const iconColor = {
  SUCCESS_PRIMARY: 'primary'
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-intro">
          {separator}
          <Widget iconSource={widget.data.icon.image_url_light} iconColor={iconColor[widget.data.icon.icon_color]} iconAlt={widget.data.icon.icon_name} title={widget.data.title} />
          {separator}
        </div>
      </div>
    </div>
  );
}

export default App;
