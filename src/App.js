import React, { useState, useEffect } from 'react';
import './App.css';
import { WidgetService } from './widget/widget-service';
import {Widgets} from './widget/widgets'

function App() {

  const [components, setComponents] = useState();

  const GenerateWidget = (data) => {
    const componentsContainer = [];
    data.map((item, index) => componentsContainer.push(<Widgets key={index} type={item.widget_type} {...item}/>));
    setComponents(componentsContainer);
  }

  useEffect(() => {
    WidgetService().then((data) => {
      GenerateWidget(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-intro">
          {components}
        </div>
      </div>
    </div>
  );
}

export default App;
