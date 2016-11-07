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
  };

  getMonth(month) {
    if (month === "Oct") {
      var a = this.props.data; a.forEach(function(data) {
        console.log(a[1].posted);
        if (a.posted === "October") {
          this.setState({
            label: "Results: ",
            data: a.title,
            data2: ""
          });
        }
      })
    }
  }

  getPost(value) {
      this.setState({
        label: "Results: ",
        data: value,
        data2: ""
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
        <button onClick={() => this.getMonth("Oct")}>October</button>
        <button onClick={() => this.getToast()}>"toast"</button>
        <button onClick={() => this.getDistillery()}>"distillery"</button>
        <button onClick={() => this.getPost("vape")}>"vape"</button>
      </div>
    );
  }
}
