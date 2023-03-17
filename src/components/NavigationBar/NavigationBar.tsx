import React from 'react';

import NavigationLink from '../../components/NavigationLink/NavigationLink';

import { PAGES_CONFIG } from '../../common/constants';

class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          {PAGES_CONFIG.map(({ pageName, path }) => (
            <li key={`${pageName}-${path}`}>
              <NavigationLink pageName={pageName} to={path} />
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
