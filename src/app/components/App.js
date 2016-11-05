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
      data: myData
    }
  }
  render () {
    return (
      <div>
        <Header />
        <Body data={this.state.data}/>
        <Footer />
      </div>
    );
  }
};
