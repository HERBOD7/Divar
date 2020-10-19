import React from 'react';
import Row from './row'
import RowDescription from './rowDescription'

const response = {
  "widget_type": "DESCRIPTION_ROW",
  "data": {
    "title": "بدنه",
    "text": "کاپوت سنگ خوردگی دارد. به دلیل وجود فلاپ امکان بررسی رکاب ها وجود ندارد.",
    "has_divider": true
  }
};

const dividerRow = <hr className="separator" />;

class ScoreRow extends React.Component {
  constructor(){
    super();
    this.state = {
        showDescription: false
    };
    this.widgetAction = this.widgetAction.bind(this);
  }

  widgetAction () {
      this.setState({ showDescription: !this.state.showDescription });
  }

  render () {
      return (
        <div>
          <div className="widget pt-1 pb-1" onClick={this.widgetAction}>
            {this.state.showDescription ? <RowDescription description={response.data.text} title={response.data.title} /> : <Row {...this.props}/> }
          </div>
          {dividerRow}
        </div>
      );
  };
}

export default ScoreRow;