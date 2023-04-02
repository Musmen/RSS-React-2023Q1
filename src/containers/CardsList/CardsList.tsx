import './CardsList.css';

import React from 'react';

import Card from '../../components/Card/Card';

import { BigCardType, CardType } from '../../models/card';
import BigCard from '../../components/BigCard/BigCard';

interface CardsListProps {
  cards: CardType[];
  isBigCards?: boolean;
}

function CardsList({ cards, isBigCards }: CardsListProps) {
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

export default CardsList;
