import React from 'react';
import { render, screen } from '@testing-library/react';

import CardsList from './CardsList';

import { getRandom } from '../../common/helpers';

import { mockCardsData } from '../../tests-data/testMockCardsData';
const cardsCount = mockCardsData.length;

const mockBigCardsData = mockCardsData.map((card) => ({
  ...card,
  authorGender: 'male',
  responsibility: true,
  type: 'other',
}));

describe('Start cards list test', () => {
  let randomCardNumber: number;

  it('Testing list with Cards component', () => {
    beforeEach(() => {
      render(<CardsList cards={mockCardsData} isBigCards={false} />);
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
      const cardTitleElement = screen.getByText(mockCardsData[randomCardNumber].title);
      expect(cardTitleElement).toBeInTheDocument();
    });

    it('should render random card image correctly', () => {
      const cardImageElement = screen.getByAltText(
        new RegExp(mockCardsData[randomCardNumber].title)
      );
      expect(cardImageElement).toHaveAttribute('src', mockCardsData[randomCardNumber].imgSrc);
    });

    it('should render random card author correctly', () => {
      const cardAuthorElement = screen.getByText(mockCardsData[randomCardNumber].author);
      expect(cardAuthorElement).toBeInTheDocument();
    });

    it('should render random card date correctly', () => {
      const cardDateElement = screen.getByText(mockCardsData[randomCardNumber].date);
      expect(cardDateElement).toBeInTheDocument();
    });
  });

  it('Testing list with BigCards component', () => {
    beforeEach(() => {
      render(<CardsList cards={mockBigCardsData} isBigCards={true} />);
      randomCardNumber = getRandom(cardsCount);
    });

    it('should renders BigCards list', () => {
      const cardsListElement = screen.getByRole('list');
      expect(cardsListElement).toBeInTheDocument();
    });

    it('should render cards count in the list correctly', () => {
      const cardsListItemsElements = screen.getAllByRole('listitem');
      expect(cardsListItemsElements.length).toEqual(cardsCount);
    });

    it('should render BigCard with correct fields', () => {
      const cardAuthorGenderElement = screen.getByText('male');
      expect(cardAuthorGenderElement).toBeInTheDocument();

      const cardResponsibilityElement = screen.getByText('✓');
      expect(cardResponsibilityElement).toBeInTheDocument();

      const cardTypeElement = screen.getByText('other');
      expect(cardTypeElement).toBeInTheDocument();
    });
  });
});
