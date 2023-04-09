import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Start Spinner testing', () => {
  it('should render spinner', () => {
    const {
      container: { firstElementChild },
    } = render(<Spinner />);

    expect(firstElementChild?.tagName).toBe('DIV');
    expect(firstElementChild?.className).toEqual('Spinner');
  });
});
