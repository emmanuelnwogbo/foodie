import React, { Component } from 'react';

import '../scss/components/searchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null
    }
  }

  componentDidMount() {
    //console.log(this.props)
  }

  getQuery = (event) => {
    let query;
    if (event.key === 'Enter') {
      query = event.target.value;
      this.setState({ query }, () => {
        console.log('search: ', this.state)
        this.props.getResults(this.state.query)
      })
    }
  }

  render() {
    return (
      <div className="searchBar">
        <h1 className="searchBar--name">Foodie</h1>
        <input type="text" onKeyPress={this.getQuery} className="searchBar--input" placeholder="find recipes"/>
      </div>
    )
  }
}

export default SearchBar;