import React from 'react';
import { render, screen } from '@testing-library/react';

import CardsList from './CardsList';

import { getRandom } from '../../common/helpers';

import { cardsData } from '../../data/cardsData';
const cardsCount = cardsData.length;

describe('Start cards list test', () => {
  let randomCardNumber: number;

  beforeEach(() => {
    render(<CardsList cards={cardsData} />);
    randomCardNumber = getRandom(cardsCount);
  });

  it('should renders cards list', () => {
    const cardsListElement = screen.getByRole('list');
    expect(cardsListElement).toBeInTheDocument();
  });

  it('should render cards count in the list correctly', () => {
    const cardsListItemsElements = screen.getAllByRole('listitem');
    expect(cardsListItemsElements.length).toEqual(cardsCount);
  });

  it('should render random card title correctly', () => {
    const cardTitleElement = screen.getByText(cardsData[randomCardNumber].title);
    expect(cardTitleElement).toBeInTheDocument();
  });

  it('should render random card image correctly', () => {
    const cardImageElement = screen.getByAltText(new RegExp(cardsData[randomCardNumber].title));
    expect(cardImageElement).toHaveAttribute('src', cardsData[randomCardNumber].imgSrc);
  });

  it('should render random card author correctly', () => {
    const cardAuthorElement = screen.getByText(cardsData[randomCardNumber].author);
    expect(cardAuthorElement).toBeInTheDocument();
  });

  it('should render random card date correctly', () => {
    const cardDateElement = screen.getByText(cardsData[randomCardNumber].date);
    expect(cardDateElement).toBeInTheDocument();
  });
});
