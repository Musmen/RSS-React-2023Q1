import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

it('Should render App correctly', () => {
  const {
    container: { firstElementChild },
  } = render(<App />);

  expect(screen.getByRole('heading')).toBeInTheDocument();
  expect(firstElementChild?.tagName).toBe('HEADER');
  expect(firstElementChild?.className).toBe('Header');
  expect(screen.getByText(/react-photo-relax/i)).toBeInTheDocument();

  expect(screen.getByRole('main')).toBeInTheDocument();

  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  expect(screen.getByText(/musmen/i)).toBeInTheDocument();
});
