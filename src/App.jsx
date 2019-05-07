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
      limit: 12,
      loaderAnimation: null,
      scrolling: false
    };

    window.addEventListener('scroll', (e) => {
      this.handleScroll(e);
    })
  }

  componentDidMount() {
    const loaderAnimation = document.getElementById('loader--animation');
    this.setState({ loaderAnimation })
  }

  handleScroll = (e) => {
    const { scrolling, count, limit } = this.state;
    if (scrolling) return;
    if (count <= limit) {
      this.setState({ loader: 'none' })
      return
    };
    console.log(scrolling, count, limit)
    console.log(e)
    const lastCard = document.querySelector('div.container > div.container--card:last-child');
    console.log(lastCard)
    const lastCardOffset = lastCard.offsetTop + lastCard.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    let bottomOffset = 20;
    if (pageOffset > lastCardOffset - bottomOffset) this.loadMore()
  }

  loadMore = () => {
    this.setState(prevState => ({
      limit: prevState.limit + 10,
      scrolling: true,
    }), () => {
      this.setState({scrolling: false})
    })
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