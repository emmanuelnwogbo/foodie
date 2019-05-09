import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null
    }
  }

  lazyLoadImg = (recipe) => {
    const img = new Image();
    img.src = this.props.recipe.image_url;
    img.onload = () => {
      this.setState({ img })
    }

    if (this.state.img !== null) {
      return (
        <div className="container__card--parent">
          <div className="container--card">
            <figure className="container--figure">
              <img className="container--img" src={`${this.state.img.src}`}/>
            </figure>
            <div className="container--details">
              <p className="container--title">{recipe.title}</p>
              <p className="container--publisher" onClick={this.openPublisher}>{recipe.publisher}</p>
            </div>
            <div className="container__viewmore">
              <span className="container__viewmore--btn" onClick={this.openRecipe}><p>view</p></span>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="lazyLoading--placeholder container__card--parent"></div>
    )
  }

  openRecipe = () => {
    if (this.props.recipe !== null) {
      const win = window.open(this.props.recipe.f2f_url, '_blank');
      win.focus();
    }
  }

  openPublisher = () => {
    if (this.props.recipe !== null) {
      const win = window.open(this.props.recipe.publisher_url, '_blank');
      win.focus();
    }
  }

  render() {
    const { recipe } = this.props;
    return this.lazyLoadImg(recipe)
  }
}

export default Card;