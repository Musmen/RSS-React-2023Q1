import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Popup from './Popup';

describe('Start popup testing', () => {
  const closePopup = vi.fn(() => {});
  const testMessage = 'Popup Test Message!';

  let overlay: HTMLElement;

  beforeEach(() => {
    render(
      <Popup closePopup={closePopup}>
        <p>{testMessage}</p>
      </Popup>
    );

    overlay = screen.getByTestId('overlay');
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders popup', () => {
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('Popup-overlay');
  });

  it('renders popup children', () => {
    const message = screen.getByText(new RegExp(testMessage));
    expect(message).toBeInTheDocument();
  });

  it('close popup by click on the overlay', async () => {
    await userEvent.click(overlay);
    expect(closePopup).toBeCalledTimes(1);
  });

  it('close popup by click on the close button', async () => {
    const closePopupButton = screen.getByRole('button');
    await userEvent.click(closePopupButton);
    expect(closePopup).toBeCalledTimes(1);
  });

  it('do not close popup by click on the popup element', async () => {
    const popup = screen.getByTestId('popup');
    await userEvent.click(popup);
    expect(closePopup).toBeCalledTimes(0);
  });
});
