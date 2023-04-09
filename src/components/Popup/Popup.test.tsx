import React from 'react';
import { render, screen } from '@testing-library/react';
import Popup from './Popup';
import userEvent from '@testing-library/user-event';

describe('Start popup testing', () => {
  let firstElementChild: Element | null;

  const closePopup = jest.fn(() => {});
  const testMessage = 'Popup Test Message!';

  beforeEach(() => {
    const component = render(
      <Popup closePopup={closePopup}>
        <p>{testMessage}</p>
      </Popup>
    );
    ({ firstElementChild } = component.container);
  });

  it('renders popup', () => {
    expect(firstElementChild).toBeInTheDocument();
    expect(firstElementChild?.tagName).toBe('DIV');
  });

  it('renders popup children', () => {
    const message = screen.getByText(new RegExp(testMessage));
    expect(message).toBeInTheDocument();
  });

  it('close popup by click on the overlay', () => {
    firstElementChild && userEvent.click(firstElementChild);
    expect(closePopup).toBeCalledTimes(1);
  });

  it('close popup by click on the close button', () => {
    const closePopupButton = firstElementChild?.querySelector('.button--close');
    closePopupButton && userEvent.click(closePopupButton);
    expect(closePopup).toBeCalledTimes(1);
  });

  it('do not close popup by click on the popup element', () => {
    const popup = firstElementChild?.querySelector('.Popup');
    popup && userEvent.click(popup);
    expect(closePopup).not.toBeCalled();
  });
});
