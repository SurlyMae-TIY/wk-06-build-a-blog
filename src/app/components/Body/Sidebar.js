'use strict';

import React from 'react';

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {label: "Search:", data: "", data2: ""};
  }

  getSeptember() {
      this.setState({
        label: "Results: ",
        data: this.props.data[0].title,
        data2: this.props.data[1].title
    });
  }

  getOctober() {
      this.setState({
        label: "Results: ",
        data: this.props.data[2].title,
        data2: ""
      });
  }

  getToast() {
      this.setState({
        label: "Results: ",
        data: this.props.data[2].title,
        data2: this.props.data[0].title
    });
  }

  getDistillery() {
      this.setState({
        label: "Results: ",
        data: this.props.data[0].title,
        data2: ""
    });
  }

  getVape() {
      this.setState({
        label: "Results: ",
        data: this.props.data[1].title,
        data2: this.props.data[0].title
    });
  }

  render () {
    return(
      <div className="clickers">
        {this.state.label}
        <br />
        {this.state.data}
        <br />
        {this.state.data2}
        <br />
        <button onClick={() => this.getSeptember()}>September</button>
        <button onClick={() => this.getOctober()}>October</button>
        <button onClick={() => this.getToast()}>"toast"</button>
        <button onClick={() => this.getDistillery()}>"distillery"</button>
        <button onClick={() => this.getVape()}>"vape"</button>
      </div>
    );
  }
}
