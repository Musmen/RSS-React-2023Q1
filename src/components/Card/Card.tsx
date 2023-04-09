import './Card.css';

import React from 'react';

import { CardType, BigCardType } from '../../models/card';

interface CardProps {
  card: CardType | BigCardType;
  additionalClass?: string;
  children?: React.ReactElement;
  onCardClickHandler?: (id: string) => void;
}

function Card({ card, additionalClass, children, onCardClickHandler }: CardProps) {
  const { title, imgSrc, author, date, id } = card;

  return (
    <section
      data-testid="card"
      className={`Card card ${additionalClass || ''}`}
      onClick={() => onCardClickHandler && onCardClickHandler(id || '')}
    >
      <p className="Card__wrapper Card__wrapper_title">
        <span className="Card__label card__label">Title:</span>
        <span className="Card__title card__title card__field">{title}</span>
      </p>
      <img className="Card__image card__image" src={imgSrc} alt={`${title} image`} />
      <p className="Card__description card__description">
        <span className="Card__wrapper Card__wrapper_author">
          <span className="Card__label card__label">Author:</span>
          <span className="Card__author card__author card__field">{author}</span>
        </span>
        <span className="Card__wrapper">
          <span className="Card__label card__label">Date:</span>
          <span className="Card__date card__date card__field">{date}</span>
        </span>
        {children}
      </p>
    </section>
  );
}

export default Card;
