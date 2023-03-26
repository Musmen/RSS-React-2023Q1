import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

it('Should render AboutPage description', () => {
  render(<About />);
  const descriptionElement = screen.getByText(/about page/i);
  expect(descriptionElement).toBeInTheDocument();
});
