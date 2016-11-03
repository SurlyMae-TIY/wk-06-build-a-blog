"use strict";

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Styling from './app.css';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
};
