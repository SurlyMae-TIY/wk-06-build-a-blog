'use strict';

import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthList: this.props.monthList,
      searchType: this.props.defaultSearchType,
      searchValue: this.props.defaultSearchValue
    }
  }

  onClickSelect(event) {
    this.setState({
      searchType: event.target.name,
      searchValue: event.target.id
    });
    this.props.setSearch(event.target.name, event.target.id)
  }

  render () {
    return(
      <div className="search">
        <br />
        {this.props.monthList.map((month, idx) => {
          return  <div key={idx}>
                    <ul>
                    <a id={month}
                      name="month"
                      onClick={this.onClickSelect.bind(this)}>{month}</a>
                    </ul>
                  </div>
        })}
        <br />
        {this.props.tagList.map((tag, idx) => {
          return  <div key={idx}>
                    <a
                      id={tag}
                      name="tag"
                      onClick={this.onClickSelect.bind(this)}>{tag}</a>
                  </div>
        })}
      </div>
    );
  }
}
