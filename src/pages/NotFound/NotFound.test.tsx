import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

it('Should render NotFoundPage description', () => {
  render(<NotFound />);
  const descriptionElement = screen.getByText(/page not found/i);
  expect(descriptionElement).toBeInTheDocument();
});
