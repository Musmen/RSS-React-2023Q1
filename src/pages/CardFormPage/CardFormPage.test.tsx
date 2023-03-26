import React from 'react';
import { render, screen } from '@testing-library/react';

import CardFormPage from './CardFormPage';

describe('Start CardFormPage testing', () => {
  it('should render CardFormPage correctly', () => {
    const {
      container: { firstElementChild },
    } = render(<CardFormPage />);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(firstElementChild?.tagName).toBe('FORM');
    expect(firstElementChild?.className).toBe('CardForm');
    expect(screen.getByText(/agree with responsibility/i)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
