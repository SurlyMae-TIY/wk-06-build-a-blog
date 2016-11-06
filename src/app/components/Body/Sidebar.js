'use strict';

import React from 'react';

export default class Sidebar extends React.Component {
  handleClick(e) {
    this.props.changeData();
  }

  render () {
    return(
      <div className="clickers">
        <h3>{this.props.data}</h3>
        <button onClick={this.handleClick.bind(this)}>September</button>
        <button onClick={this.handleClick.bind(this)}>October</button>
        <button onClick={this.handleClick.bind(this)}>"toast"</button>
        <button onClick={this.handleClick.bind(this)}>"distillery"</button>
        <button onClick={this.handleClick.bind(this)}>"vape"</button>
        <button onClick={this.handleClick.bind(this)}>"meditation"</button>
        <button onClick={this.handleClick.bind(this)}>"artisan"</button>
      </div>
    );
  }
}
