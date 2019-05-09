import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    document.getElementById(`${this.props.id}`).onload = function() {
      this.previousSibling.style.zIndex = '-1';
    }
  }

  render() {
    const { recipe } = this.props;
    return (
      <div className="container__card--parent">
        <div className="container--card">
          <figure className="container--figure">
            <div className="container__img--placeholder"></div>
            <img id={`${this.props.id}`} className="container--img" src={recipe.image_url}/>
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
}

export default Card;