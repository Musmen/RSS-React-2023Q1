import './BigCard.css';

import React, { Component } from 'react';

import Card from '../../components/Card/Card';

import { DEFAULT_BIG_CARD_ADDITIONAL_FIELDS } from './BiCard.constants';

import { BigCardType } from '../../models/card';

class BigCard extends Component<{ card: BigCardType }> {
  render() {
    const { authorGender, type, responsibility } = this.props.card;

    return (
      <Card card={this.props.card} additionalClass="BigCard">
        <>
          <span className="Card__wrapper">
            <span className="Card__label">Author gender:</span>
            {authorGender || DEFAULT_BIG_CARD_ADDITIONAL_FIELDS.authorGender}
          </span>
          <span className="Card__wrapper">
            <span className="Card__label">Responsibility:</span>
            {(responsibility && '✓') || DEFAULT_BIG_CARD_ADDITIONAL_FIELDS.responsibility}
          </span>
          <span className="Card__wrapper">
            <span className="Card__label">Type:</span>
            {type || DEFAULT_BIG_CARD_ADDITIONAL_FIELDS.type}
          </span>
        </>
      </Card>
    );
  }
}

export default BigCard;
