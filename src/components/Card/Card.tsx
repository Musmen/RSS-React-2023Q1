import './Card.css';

import React, { Component } from 'react';

import { CardType } from '../../models/card';

class Card extends Component<{ card: CardType }> {
  render() {
    const { title, imgSrc, author, date } = this.props.card;

    return (
      <section className="Card">
        <p className="Card__title">
          <span className="Card__label">Title:</span> {title}
        </p>
        <img className="Card__image" src={imgSrc} alt={`${title} image`} />
        <p className="Card__description">
          <span className="Card__author">
            <span className="Card__label">Author:</span> {author}
          </span>
          <span className="Card__date">
            <span className="Card__label">Date:</span> {date}
          </span>
        </p>
      </section>
    );
  }
}

export default Card;
