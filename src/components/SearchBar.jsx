import React, { Component } from 'react';

import '../scss/components/searchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log(this.props)
  }

  getQuery = (event) => {
    let query;
    if (event.key === 'Enter') {
      query = event.target.value;
      this.props.getResults(query)
    }
  }

  render() {
    return (
      <div className="searchBar">
        <h1 className="searchBar--name">Foodie</h1>
        <div className="searchBar__input--parent">
          <input type="text" onKeyPress={this.getQuery} className="searchBar--input" placeholder="find recipes"/>
        </div>
      </div>
    )
  }
}

export default SearchBar;