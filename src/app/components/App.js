"use strict";

import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Styling from './app.css';
import myData from '../data.json';
console.log(myData);


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Welcome to your source for all things hipster! Just click a hipstery search word on the right and we'll return a match so you can satisfy your hipster heart. You can also click on a month!"
    }
  }

  changeData(data) {
    this.setState({data});
  }
  render () {
    return (
      <div>
        <Header />
        <Body changeData={this.changeData.bind(this)} data={this.state.data}/>
        <Footer />
      </div>
    );
  }
};
