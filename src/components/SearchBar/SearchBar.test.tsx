import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from './SearchBar';

describe('Start SearchBar testing', () => {
  let searchBarInputElement: HTMLElement;
  let unmount: () => void;

  beforeEach(() => {
    unmount = render(<SearchBar />).unmount;
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

    await userEvent.type(searchBarInputElement, MOCKED_USER_INPUT);
    expect(searchBarInputElement).toHaveValue(MOCKED_USER_INPUT);

    await userEvent.clear(searchBarInputElement);
    expect(searchBarInputElement).toHaveDisplayValue('');
  });

  it('Should clear search bar input after the clear button click', async () => {
    const MOCKED_USER_INPUT = 'Moon Shine';

    await userEvent.type(searchBarInputElement, MOCKED_USER_INPUT);
    expect(searchBarInputElement).toHaveValue(MOCKED_USER_INPUT);

    const clearButtonElement = screen.getByRole('button');
    await userEvent.click(clearButtonElement);
    expect(searchBarInputElement).not.toHaveValue(MOCKED_USER_INPUT);
    expect(searchBarInputElement).toHaveValue('');
  });

  it('Should save search value to LS on onmount', async () => {
    const MOCKED_USER_INPUT = 'Very important user search value';

    await userEvent.type(searchBarInputElement, MOCKED_USER_INPUT);
    expect(searchBarInputElement).toHaveValue(MOCKED_USER_INPUT);

    unmount();
    expect(searchBarInputElement).not.toBeInTheDocument();

    render(<SearchBar />);
    expect(searchBarInputElement).toHaveValue(MOCKED_USER_INPUT);
  });
});
