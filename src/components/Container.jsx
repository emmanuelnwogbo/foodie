import React, { Component } from 'react';

import '../scss/components/container.scss';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  returnRecipes = () => {
    if (this.props.recipes !== null && 
      this.props.recipes.length && 
      this.props.recipes.length !== 0) {
      const Card = this.props.card
      return this.props.recipes.map(recipe => {
        if (this.props.recipes.indexOf(recipe) <= this.props.limit) {
          return <Card key={recipe.recipe_id} recipe={recipe}/>
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