import React, { Component } from 'react';
import axios from 'axios';

import './scss/main.scss';
import { key, proxy } from '../config';

import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: key,
      query: 'eggs',
    }
  }

  componentDidMount() {
    //this.getResults().then()
  }

  getResults = (query)  => {
    axios.get(`${proxy}http://food2fork.com/api/search?key=${this.state.key}&q=${query}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="app">
        <SearchBar getResults={this.getResults}/>
        <p>hello world</p>
      </div>
    )
  }
}

export default App;