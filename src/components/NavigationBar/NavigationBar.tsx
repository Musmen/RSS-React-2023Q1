import './NavigationBar.css';

import React from 'react';

import NavigationLink from '../../components/NavigationLink/NavigationLink';

import { PAGES_CONFIG } from '../../common/constants';

function NavigationBar() {
  return (
    <nav className="NavigationBar">
      <ul className="NavigationBar__list list">
        {PAGES_CONFIG.map(({ pageName, path }) => (
          <li className="NavigationBar__item" key={`${pageName}-${path}`}>
            <NavigationLink pageName={pageName} to={path} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
