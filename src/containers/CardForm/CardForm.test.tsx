import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { getRandom } from '../../common/helpers';
import { getTodayDateISOString } from './CardForm.helpers';

import CardForm from './CardForm';
import { TYPE_SELECT_OPTIONS, VALIDATION_ERRORS_MESSAGES } from './CardForm.constants';

import { mockCardsData } from '../../tests-common/testMockCardsData';
const cardsCount = mockCardsData.length;

describe('Start CardForm testing', () => {
  let cardFormElement: HTMLElement;

  const mockedAddCard = vi.fn(() => {});
  const mockedRenderMessage = vi.fn(() => {});

  beforeEach(() => {
    render(<CardForm addCard={mockedAddCard} renderMessage={mockedRenderMessage} />);
    cardFormElement = screen.getByRole('form');
  });

  it('should render component correctly', () => {
    it('should render card form', () => {
      expect(cardFormElement).toBeInTheDocument();
    });

    it('should render title input with placeholder', () => {
      const titleInputElementWithPlaceholder = screen.getByPlaceholderText(/input title/i);
      expect(titleInputElementWithPlaceholder).toBeInTheDocument();
    });

    it('should render author input with placeholder', () => {
      const authorInputElementWithPlaceholder = screen.getByPlaceholderText(/author name/i);
      expect(authorInputElementWithPlaceholder).toBeInTheDocument();
    });

    it('renders date input', () => {
      const dateInputElement = screen.getByTestId(/date-input/i);
      expect(dateInputElement).toBeInTheDocument();
    });

    it('should render image type select', () => {
      expect(screen.getByText(/image type:/i)).toBeInTheDocument();

      TYPE_SELECT_OPTIONS.forEach(({ description }) => {
        expect(screen.getByText(description)).toBeInTheDocument();
      });
    });

    it('renders responsibility checkbox', () => {
      expect(screen.getByTestId(/responsibility-checkbox/i)).toBeInTheDocument();
    });

    it('should render gender switcher', () => {
      expect(screen.getByText(/author gender/i)).toBeInTheDocument();
      expect(screen.getByLabelText('male')).toBeInTheDocument();
      expect(screen.getByLabelText('female')).toBeInTheDocument();
      expect(screen.getAllByRole('radio').length).toEqual(2);
    });

    it('should render file input', () => {
      expect(screen.getByText(/upload this image/i)).toBeInTheDocument();
    });

    it('should render form submit and reset buttons', () => {
      expect(screen.getByText(/create card/i)).toBeInTheDocument();
      expect(screen.getByText(/reset form/i)).toBeInTheDocument();
    });
  });

  it('should validate form correctly', async () => {
    const randomCardNumber = getRandom(cardsCount);
    const randomCard = mockCardsData[randomCardNumber];

    const titleInputElement = screen.getByPlaceholderText(/input title/i);
    expect(titleInputElement).toHaveValue('');
    await userEvent.type(titleInputElement, randomCard.title);
    expect(titleInputElement).toHaveValue(randomCard.title);

    const authorInputElement = screen.getByPlaceholderText(/author name/i);
    expect(authorInputElement).toHaveValue('');
    await userEvent.type(authorInputElement, randomCard.author);
    expect(authorInputElement).toHaveValue(randomCard.author);

    const dateInputElement = screen.getByTestId(/date-input/i);
    expect(dateInputElement).toHaveValue('');
    await userEvent.type(dateInputElement, getTodayDateISOString());
    expect(dateInputElement).toHaveValue(getTodayDateISOString());

    const imageTypeSelectElement = screen.getByRole('combobox');
    expect(imageTypeSelectElement).toHaveValue('');
    await userEvent.selectOptions(imageTypeSelectElement, 'drawing');
    expect(imageTypeSelectElement).toHaveValue('drawing');

    const responsibilityCheckboxElement = screen.getByTestId(/responsibility-checkbox/i);
    expect(responsibilityCheckboxElement).not.toBeChecked();
    await userEvent.click(responsibilityCheckboxElement);
    expect(responsibilityCheckboxElement).toBeChecked();

    const authorMaleGenderRadioElement = screen.getAllByRole('radio')[0];
    expect(authorMaleGenderRadioElement).not.toBeChecked();
    await userEvent.click(authorMaleGenderRadioElement);
    expect(authorMaleGenderRadioElement).toBeChecked();

    const submitButton = screen.getByText(/create card/i);
    await userEvent.click(submitButton);

    expect(mockedAddCard).not.toHaveBeenCalled();
    expect(mockedRenderMessage).not.toHaveBeenCalled();

    expect(screen.getByText(VALIDATION_ERRORS_MESSAGES.REQUIRED)).toBeInTheDocument();
    expect(screen.getAllByText(VALIDATION_ERRORS_MESSAGES.REQUIRED).length).toEqual(1);

    expect(screen.queryByText(VALIDATION_ERRORS_MESSAGES.DATE)).not.toBeInTheDocument();
    expect(screen.queryByText(VALIDATION_ERRORS_MESSAGES.LENGTH)).not.toBeInTheDocument();
  });
});
