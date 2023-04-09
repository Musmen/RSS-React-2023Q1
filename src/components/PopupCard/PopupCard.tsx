import './PopupCard.css';

import React from 'react';
import parse from 'html-react-parser';

import { CardType } from '../../models/card';

interface PopupCardProps {
  card: CardType;
}

function PopupCard({ card }: PopupCardProps) {
  const { id, title, imgSrc, author, date, description, views } = card;

  return (
    <section className="PopupCard card">
      <div className="PopupCard-left">
        <img className="PopupCard-image card__image" src={imgSrc} alt={`${title} image`} />
      </div>
      <div className="PopupCard-right">
        <p className="PopupCard-title card__title">
          <span className="PopupCard-label card__label">Title:</span> {title}
        </p>
        <p className="PopupCard-description">
          <span className="PopupCard-label card__label">Description:</span>
          <span>{parse(description || '')}</span>
        </p>
        <p className="PopupCard-author card__author">
          <span className="PopupCard-label card__label">Author:</span> {author}
        </p>
        <p className="PopupCard-date card__date">
          <span className="PopupCard-label card__label">Date:</span> {date}
        </p>
        <p className="PopupCard-date card__views">
          <span className="PopupCard-label card__label">Views:</span> {views}
        </p>
        <p className="PopupCard-views card__id">
          <span className="PopupCard-label card__label">Id:</span> {id}
        </p>
      </div>
    </section>
  );
}

export default PopupCard;
