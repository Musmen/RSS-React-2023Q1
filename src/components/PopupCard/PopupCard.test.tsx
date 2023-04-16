import React from 'react';
import { render, screen } from '@testing-library/react';
import PopupCard from './PopupCard';

import { mockCardsData } from '../../tests-common/testMockCardsData';
const mockCardData = { ...mockCardsData[1], description: 'Test card', views: 56 };

test('renders full card', () => {
  render(<PopupCard card={mockCardData} />);
  const popupCardTitleElement = screen.getByText(mockCardData.title);
  expect(popupCardTitleElement).toBeInTheDocument();

  const popupCardImageElement = screen.getByAltText(new RegExp(mockCardData.title));
  expect(popupCardImageElement).toHaveAttribute('src', mockCardData.imgSrc);

  const popupCardAuthorElement = screen.getByText(mockCardData.author);
  expect(popupCardAuthorElement).toBeInTheDocument();

  const popupCardDateElement = screen.getByText(mockCardData.date);
  expect(popupCardDateElement).toBeInTheDocument();

  const popupCardIdElement = screen.getByText(mockCardData.id || '');
  expect(popupCardIdElement).toBeInTheDocument();

  const popupCardDescriptionElement = screen.getByText(mockCardData.description || '');
  expect(popupCardDescriptionElement).toBeInTheDocument();

  const popupCardViewsElement = screen.getByText(mockCardData.views || '');
  expect(popupCardViewsElement).toBeInTheDocument();
});

const mockCardDataWithEmptyDescription = { ...mockCardData, description: '' };

test('renders full card with empty description', () => {
  render(<PopupCard card={mockCardDataWithEmptyDescription} />);

  const popupCardEmptyDescriptionElement = screen.getByText(/description/i);
  expect(popupCardEmptyDescriptionElement).toBeInTheDocument();
  expect(popupCardEmptyDescriptionElement.nextElementSibling).toBeEmptyDOMElement();
});
