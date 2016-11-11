'use strict';

import React from 'react';

import Body from './Main/Body';
import Sidebar from './Main/Sidebar';
import blogData from '../data.json';

const monthList = blogData.map(function(entry, idx) {
  return entry.posted[0];
})
.reduce(function(p, c)
{
  if (p.indexOf(c) < 0) p.push(c);
  return p;
}, []);

const tagList = blogData.map(function(entry, idx) {
  return entry.tags;
})
.reduce((a, b) => a.concat(b))
.reduce(function(p, c)
{
  if (p.indexOf(c) < 0) p.push(c);
  return p;
}, [])
.sort();

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: blogData,
      monthList: monthList,
      tagList: tagList,
      searchType: '',
      searchValue: ''
    };
  }

  setBlogData(stype, sval) {
    let arr = [];
    if (stype === "month") {
      blogData.map(function(obj) {
        if (obj.posted.includes(sval)) {
          arr.push(obj);
        }
      })
    } else if (stype === "tag") {
      blogData.map(function(obj) {
        if (obj.tags.includes(sval)) {
          arr.push(obj);
        }
      })
    }
    return arr;
  }

  onSetSearch (stype, sval) {
    this.setState({
      searchType: stype,
      searchValue: sval,
      data: this.setBlogData(stype, sval)
    });
  }

  render () {
    return(
      <div className="main">
        <div className="body">
          <Body data={this.state.data} searchType={this.state.searchType} searchValue={this.state.searchValue}/>
        </div>
        <div className="sidebar">
          <Sidebar data={this.state.data} monthList={this.state.monthList} tagList={this.state.tagList} defaultSearchType={this.state.searchType} defaultSearchValue={this.state.searchValue} setSearch={this.onSetSearch.bind(this)}/>
        </div>
      </div>
    );
  }
}
