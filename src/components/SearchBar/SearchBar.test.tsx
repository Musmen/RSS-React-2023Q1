import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('Start SearchBar testing', () => {
  let searchBarInputElement: HTMLElement;

  beforeEach(() => {
    render(<SearchBar />);
    searchBarInputElement = screen.getByRole('textbox');
  });

  it('Should render search bar input', () => {
    expect(searchBarInputElement).toBeInTheDocument();
  });

  it('Should render search bar input with placeholder', () => {
    const searchBarInputElementWithPlaceholder = screen.getByPlaceholderText(/search request/i);
    expect(searchBarInputElementWithPlaceholder).toBeInTheDocument();
  });

  it('Should render empty search bar input by default', () => {
    const searchBarInputElementWithEmptyDefaultValue = screen.getByDisplayValue('');
    expect(searchBarInputElementWithEmptyDefaultValue).toBeInTheDocument();
  });

  it('Should render search bar input with user input value', async () => {
    const MOCKED_USER_INPUT = 'Winter in the Mountains';

    fireEvent.change(searchBarInputElement, { target: { value: MOCKED_USER_INPUT } });
    expect(searchBarInputElement).toHaveValue(MOCKED_USER_INPUT);
  });

  it('Should clear search bar input after the clear button click', () => {
    const MOCKED_USER_INPUT = 'Moon Shine';

    fireEvent.change(searchBarInputElement, { target: { value: MOCKED_USER_INPUT } });
    expect(searchBarInputElement).toHaveValue(MOCKED_USER_INPUT);

    const clearButtonElement = screen.getByRole('button');
    fireEvent.click(clearButtonElement);
    expect(searchBarInputElement).not.toHaveValue(MOCKED_USER_INPUT);
    expect(searchBarInputElement).toHaveValue('');
  });
});
