import React, { Component } from 'react';
import axios from 'axios';

import './scss/main.scss';
import { key, proxy } from '../config';

import SearchBar from './components/SearchBar';
import Container from './components/Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
      count: null,
      recipeCard: null,
      loader: 'block',
      limit: 11,
      loaderAnimation: null
    };

    window.onscroll = () => {
      /*if ((window.innerHeight + window.scrollY) >= 
      (document.body.offsetHeight - 500)) {
        console.log('hello')
      }*/
      console.log(this.state.loaderAnimation.getBoundingClientRect())
      if (this.state.loaderAnimation.getBoundingClientRect().top <= 953) {
        return console.log('load more')
      }
    }
  }

  componentDidMount() {
    const loaderAnimation = document.getElementById('loader--animation');
    this.setState({ loaderAnimation })
  }

  getResults = (query)  => {
    this.setState({
       recipes: null, 
       count: null, 
       loader: 'block' 
      }, () => {
        axios.get(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`)
        .then(res => {
          const {recipes, count} = res.data;
          import('./components/Card')
            .then(Card => {
              this.setState({ recipeCard: Card.default, recipes, count})
            });
        })
        .catch(err => {
          console.log(err)
        })
      });
  }

  render() {
    return (
      <div className="app">
        <SearchBar getResults={this.getResults}/>
        <Container card={this.state.recipeCard} recipes={this.state.recipes} count={this.state.count} limit={this.state.limit}/>
        <div className="loader" style={{display: this.state.loader}}>
          <div className="loader--animation" id="loader--animation"></div>
        </div>
      </div>
    )
  }
}

export default App;