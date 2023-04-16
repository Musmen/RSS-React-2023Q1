import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RenderWithStore from '../../tests-common/RenderWithStore';
import App from './App';

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

  const renderWithRouterAndStore = (route: string) => {
    beforeEach(() => {
      render(
        <RenderWithStore>
          <MemoryRouter initialEntries={[route]}>
            <App />
          </MemoryRouter>
        </RenderWithStore>
      );
    });
  };

  describe('Should render about page', () => {
    renderWithRouterAndStore('/about');
    checkPageCommonLayout();

    it('Should render about page content', () => {
      expect(screen.getByText(/It is About/i)).toBeInTheDocument();
    });
  });

  describe('Should render card form page', () => {
    renderWithRouterAndStore('/form');
    checkPageCommonLayout();

    it('Should render form', () => {
      const cardFormElement = screen.getByRole('form');
      expect(cardFormElement).toBeInTheDocument();
    });
  });

  describe('Should render not-found page', () => {
    renderWithRouterAndStore('/unknown-page');
    checkPageCommonLayout();

    it('Should render not-found page content', () => {
      expect(screen.getByText(/404. Page Not Found/i)).toBeInTheDocument();
    });
  });
});
