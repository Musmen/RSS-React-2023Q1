import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RenderWithStore from '../../tests-common/RenderWithStore';
import Home from './Home';

import { MOCK_FLICKR_API_RESPONSE } from '../../tests-common/mockFlickrApiResponse';

describe('Start Home Page testing', () => {
  let searchBarInputElement: HTMLElement;

  beforeEach(() => {
    render(
      <RenderWithStore>
        <Home />
      </RenderWithStore>
    );

    searchBarInputElement = screen.getByRole('textbox');
  });

  it('should render search bar input', () => {
    expect(searchBarInputElement).toBeInTheDocument();
  });

  it('by default should run the fetching and show a spinner', () => {
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('if the fetching is ok, should render cards', async () => {
    expect(
      (await screen.findAllByText(MOCK_FLICKR_API_RESPONSE.photos.photo[0].ownername)).length
    ).toEqual(3);
  });

  it('by clicking on card should show popup with full card information (with description)', async () => {
    const card = (await screen.findAllByTestId('card'))[0];
    userEvent.click(card);
    expect(await screen.findByText(/description/i)).toBeInTheDocument();
  });
});
