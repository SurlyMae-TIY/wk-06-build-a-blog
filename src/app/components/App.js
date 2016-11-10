"use strict";

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Body from './Main/Body';
import Sidebar from './Main/Sidebar';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import NotFound from './NotFound';
import Styling from './app.css';

export default class App extends React.Component {
  render () {
    return (
        <Router>
          <div className="container">
            <Header />
            <Match exactly pattern='/' component={Main}/>
            <Match pattern='/resume' component={Resume}/>
            <Match pattern='/portfolio' component={Portfolio}/>
            <Match pattern='/contact' component={Contact}/>
            <Miss component={NotFound}/>
            <Footer />
          </div>
      </Router>
    );
  }
}
