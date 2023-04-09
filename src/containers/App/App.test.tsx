import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Start App testing', () => {
  const checkPageCommonLayout = () => {
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
  };

  describe('Should render about page', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      );
    });

    checkPageCommonLayout();

    it('Should render about page content', () => {
      expect(screen.getByText(/It is About/i)).toBeInTheDocument();
    });
  });

  describe('Should render card form page', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/form']}>
          <App />
        </MemoryRouter>
      );
    });

    checkPageCommonLayout();

    it('Should render form', () => {
      const cardFormElement = screen.getByRole('form');
      expect(cardFormElement).toBeInTheDocument();
    });
  });

  describe('Should render not-found page', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/unknown-page']}>
          <App />
        </MemoryRouter>
      );
    });

    checkPageCommonLayout();

    it('Should render not-found page content', () => {
      expect(screen.getByText(/404. Page Not Found/i)).toBeInTheDocument();
    });
  });
});
