import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './Message';

describe('Start Message testing', () => {
  it('should render Message correctly', () => {
    const testMessage = 'All is ok!';

    const {
      container: { firstElementChild },
    } = render(<Message message={testMessage} />);

    expect(firstElementChild?.tagName).toBe('DIV');

    const message = screen.getByText(testMessage);
    expect(message).toBeInTheDocument();
  });
});
