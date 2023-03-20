import './CardsList.css';

import React, { Component } from 'react';

import Card from '../../components/Card/Card';

import { CardType } from '../../models/card';

class CardsList extends Component<{ cards: CardType[] }> {
  render() {
    const { cards } = this.props;

    return (
      <ul className="CardsList list">
        {cards.map((card: CardType) => (
          <li className="CardsList__item" key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CardsList;
