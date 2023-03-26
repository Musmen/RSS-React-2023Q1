import React from 'react';
import { render, screen } from '@testing-library/react';

import CardForm from './CardForm';
import { TYPE_SELECT_OPTIONS } from './CardForm.constants';

describe('Start CardForm testing', () => {
  let cardFormElement: HTMLElement;

  beforeEach(() => {
    render(<CardForm addCard={() => {}} showMessage={() => {}} />);
    cardFormElement = screen.getByRole('form');
  });

  it('renders card form', () => {
    expect(cardFormElement).toBeInTheDocument();
  });

  it('renders title input with placeholder', () => {
    const titleInputElementWithPlaceholder = screen.getByPlaceholderText(/input title/i);
    expect(titleInputElementWithPlaceholder).toBeInTheDocument();
  });

  it('renders author input with placeholder', () => {
    const authorInputElementWithPlaceholder = screen.getByPlaceholderText(/author name/i);
    expect(authorInputElementWithPlaceholder).toBeInTheDocument();
  });

  it('renders image type select', () => {
    expect(screen.getByText(/image type:/i)).toBeInTheDocument();

    TYPE_SELECT_OPTIONS.forEach(({ value }) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('renders file input', () => {
    expect(screen.getByText(/upload this image/i)).toBeInTheDocument();
  });

  it('renders form submit and reset buttons', () => {
    expect(screen.getByText(/create card/i)).toBeInTheDocument();
    expect(screen.getByText(/reset form/i)).toBeInTheDocument();
  });
});
