import React, { Component, Suspense } from 'react';

import '../scss/components/container.scss';
import '../scss/components/lazyLoadingCard.scss'

class Container extends Component {
  constructor(props) {
    super(props);
  }

  returnRecipes = () => {
    if (this.props.recipes === undefined) {
      return console.log('api calls finished')
    }
    if (this.props.recipes !== null && 
      this.props.recipes.length && 
      this.props.recipes.length !== 0) {
      const Card = this.props.card
      return this.props.recipes.map(recipe => {
        if (this.props.recipes.indexOf(recipe) <= this.props.limit) {
          return (
            <Suspense key={recipe.recipe_id} fallback={<div className="lazyLoading--placeholder"></div>}>
              <Card key={recipe.recipe_id} recipe={recipe}/>
            </Suspense>
          )
        }
      })
    }

    return;
  }

  returnCount = () => {
    if (this.props.count !== null) {
      return <p>Found {this.props.count} results</p>
    }

    return;
  }

  render() {
    return (
      <div className="container" id="container">
        <div className="container--count">{this.returnCount()}</div>
        { this.returnRecipes() }
      </div>
    )
  }
}

export default Container;