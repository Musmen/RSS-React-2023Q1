import './BigCard.css';

import React from 'react';

import Card from '../../components/Card/Card';

import { DEFAULT_BIG_CARD_ADDITIONAL_FIELDS } from './BigCard.constants';

import { BigCardType } from '../../models/card';

interface BigCardProps {
  card: BigCardType;
}

function BigCard({ card }: BigCardProps) {
  const { authorGender, type, responsibility } = card;

  return (
    <Card card={card} additionalClass="BigCard">
      <>
        <span className="Card__wrapper">
          <span className="Card__label card__label">Author gender:</span>
          {authorGender || DEFAULT_BIG_CARD_ADDITIONAL_FIELDS.authorGender}
        </span>
        <span className="Card__wrapper">
          <span className="Card__label card__label">Responsibility:</span>
          {(responsibility && '✓') || DEFAULT_BIG_CARD_ADDITIONAL_FIELDS.responsibility}
        </span>
        <span className="Card__wrapper">
          <span className="Card__label card__label">Type:</span>
          {type || DEFAULT_BIG_CARD_ADDITIONAL_FIELDS.type}
        </span>
      </>
    </Card>
  );
}

export default BigCard;
