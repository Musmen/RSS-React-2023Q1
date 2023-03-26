import React from 'react';
import { render, screen } from '@testing-library/react';
import BigCard from './BigCard';

import { cardsData } from '../../data/cardsData';
import { DEFAULT_BIG_CARD_ADDITIONAL_FIELDS } from './BigCard.constants';
const mockCardData = cardsData[0];

describe('Start BigCard testing', () => {
  it('should render BigCard correctly', () => {
    render(<BigCard card={mockCardData} />);

    const cardTitleElement = screen.getByText(mockCardData.title);
    expect(cardTitleElement).toBeInTheDocument();

    const cardImageElement = screen.getByAltText(new RegExp(mockCardData.title));
    expect(cardImageElement).toHaveAttribute('src', mockCardData.imgSrc);

    const cardAuthorElement = screen.getByText(mockCardData.author);
    expect(cardAuthorElement).toBeInTheDocument();

    const cardDateElement = screen.getByText(mockCardData.date);
    expect(cardDateElement).toBeInTheDocument();

    const cardAuthorGenderElement = screen.getByText(
      DEFAULT_BIG_CARD_ADDITIONAL_FIELDS.authorGender
    );
    expect(cardAuthorGenderElement).toBeInTheDocument();

    const cardResponsibilityElement = screen.getByText(
      DEFAULT_BIG_CARD_ADDITIONAL_FIELDS.responsibility
    );
    expect(cardResponsibilityElement).toBeInTheDocument();

    const cardTypeElement = screen.getByText(DEFAULT_BIG_CARD_ADDITIONAL_FIELDS.type);
    expect(cardTypeElement).toBeInTheDocument();
  });
});
