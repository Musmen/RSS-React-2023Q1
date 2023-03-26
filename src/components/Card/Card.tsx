import './Card.css';

import React, { Component } from 'react';

import { CardType, BigCardType } from '../../models/card';

class Card extends Component<{
  card: CardType | BigCardType;
  additionalClass?: string;
  children?: React.ReactElement;
}> {
  render() {
    const { title, imgSrc, author, date } = this.props.card;
    const { additionalClass } = this.props;

    return (
      <section className={`Card ${additionalClass || ''}`}>
        <p className="Card__wrapper Card__wrapper_title">
          <span className="Card__label">Title:</span>
          <span className="Card__title">{title}</span>
        </p>
        <img className="Card__image" src={imgSrc} alt={`${title} image`} />
        <p className="Card__description">
          <span className="Card__wrapper Card__wrapper_author">
            <span className="Card__label">Author:</span>
            <span className="Card__author">{author}</span>
          </span>
          <span className="Card__wrapper">
            <span className="Card__label">Date:</span> {date}
          </span>
          {this.props.children}
        </p>
      </section>
    );
  }
}

export default Card;
