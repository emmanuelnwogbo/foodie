import React, { Component, lazy } from 'react';
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
      limit: 12,
      scrolling: false,
      loaderVisibility: 'none'
    };

    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentDidMount() {
    this.getResults('pizza')
  }

  handleScroll = (e) => {
    const { scrolling, count, limit } = this.state;
    if (scrolling) return;
    if (count <= limit) {
      return
    };
    //console.log(scrolling, count, limit);
    const lastCard = document.querySelector('div.container > div.container__card--parent:last-child');
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
       loaderVisibility: 'block' 
      }, () => {
        this.setState({ limit: 12 }, () => {
          axios.get(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`)
            .then(res => {
              //console.log(res.data)
              window.removeEventListener('scroll', this.handleScroll, false)
              const {recipes, count} = res.data;
              const Card = lazy(() => import('./components/Card'));
              this.setState({ recipeCard: Card, recipes, count, loaderVisibility: 'none'}, () => {
                window.addEventListener('scroll', this.handleScroll, false)
              })
            })
            .catch(err => {
              console.log(err)
            })
        })
      });
  }

  render() {
    return (
      <div className="app">
        <SearchBar getResults={this.getResults}/>
        <Container card={this.state.recipeCard} recipes={this.state.recipes} count={this.state.count} limit={this.state.limit}/>
        <div className="loader__loader" style={{display: this.state.loaderVisibility}}>
          <div className="loader__loader--animation" id="loader--animation"></div>
        </div>
      </div>
    )
  }
}

export default App;