import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

import { mockCardsData } from '../../tests-data/testMockCardsData';
const mockCardData = mockCardsData[0];

describe('Start Card testing', () => {
  it('should render card correctly', () => {
    render(<Card card={mockCardData} />);

    const cardTitleElement = screen.getByText(mockCardData.title);
    expect(cardTitleElement).toBeInTheDocument();

    const cardImageElement = screen.getByAltText(new RegExp(mockCardData.title));
    expect(cardImageElement).toHaveAttribute('src', mockCardData.imgSrc);

    const cardAuthorElement = screen.getByText(mockCardData.author);
    expect(cardAuthorElement).toBeInTheDocument();

    const cardDateElement = screen.getByText(mockCardData.date);
    expect(cardDateElement).toBeInTheDocument();
  });
});
