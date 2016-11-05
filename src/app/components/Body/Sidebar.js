'use strict';

import React from 'react';

export default class Sidebar extends React.Component {
  handleChange(e) {
    this.props.changeData();
  }

  render () {
    return(
      <div className="clickers">
        <h3>{this.props.data}</h3>
        <button onChange={this.handleChange.bind(this)}>September</button>
        <button onChange={this.handleChange.bind(this)}>October</button>
        <button onChange={this.handleChange.bind(this)}>November</button>
        <button onChange={this.handleChange.bind(this)}>"toast"</button>
        <button onChange={this.handleChange.bind(this)}>"pour-over"</button>
        <button onChange={this.handleChange.bind(this)}>"distillery"</button>
        <button onChange={this.handleChange.bind(this)}>"chicharrones"</button>
        <button onChange={this.handleChange.bind(this)}>"vape"</button>
        <button onChange={this.handleChange.bind(this)}>"PBR"</button>
        <button onChange={this.handleChange.bind(this)}>"meditation"</button>
        <button onChange={this.handleChange.bind(this)}>"artisan"</button>
        <button onChange={this.handleChange.bind(this)}>"cred"</button>
      </div>
    );
  }
}
