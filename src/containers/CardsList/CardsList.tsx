import './CardsList.css';

import React, { Component } from 'react';

import Card from '../../components/Card/Card';

import { BigCardType, CardType } from '../../models/card';
import BigCard from '../../components/BigCard/BigCard';

class CardsList extends Component<{ cards: CardType[]; isBigCards?: boolean }> {
  render() {
    const { cards, isBigCards } = this.props;

    return (
      <ul className="CardsList list">
        {cards.map((card: CardType | BigCardType) => (
          <li className="CardsList__item" key={card.id}>
            {isBigCards ? <BigCard card={card} /> : <Card card={card} />}
          </li>
        ))}
      </ul>
    );
  }
}

export default CardsList;
