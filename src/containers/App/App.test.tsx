import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('Start App testing', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Should render header', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/react-photo-relax/i)).toBeInTheDocument();
  });

  it('Should render main', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('Should render footer', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/musmen/i)).toBeInTheDocument();
  });
});
