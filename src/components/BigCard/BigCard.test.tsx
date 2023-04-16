import React from 'react';
import { render, screen } from '@testing-library/react';
import BigCard from './BigCard';

import { mockCardsData } from '../../tests-common/testMockCardsData';
import { DEFAULT_BIG_CARD_ADDITIONAL_FIELDS } from './BigCard.constants';

describe('Start BigCard testing', () => {
  it('should render BigCard with default fields', () => {
    const mockCardData = mockCardsData[0];
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

  it('should render BigCard with correct fields', () => {
    const mockCardData = {
      ...mockCardsData[1],
      authorGender: 'male',
      responsibility: true,
      type: 'map',
    };
    render(<BigCard card={mockCardData} />);

    const cardTitleElement = screen.getByText(mockCardData.title);
    expect(cardTitleElement).toBeInTheDocument();

    const cardImageElement = screen.getByAltText(new RegExp(mockCardData.title));
    expect(cardImageElement).toHaveAttribute('src', mockCardData.imgSrc);

    const cardAuthorElement = screen.getByText(mockCardData.author);
    expect(cardAuthorElement).toBeInTheDocument();

    const cardDateElement = screen.getByText(mockCardData.date);
    expect(cardDateElement).toBeInTheDocument();

    const cardAuthorGenderElement = screen.getByText(mockCardData.authorGender);
    expect(cardAuthorGenderElement).toBeInTheDocument();

    const cardResponsibilityElement = screen.getByText('✓');
    expect(cardResponsibilityElement).toBeInTheDocument();

    const cardTypeElement = screen.getByText(mockCardData.type);
    expect(cardTypeElement).toBeInTheDocument();
  });
});
