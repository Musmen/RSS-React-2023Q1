import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const isActiveLink = (isActive: boolean) =>
  `link navigation-link ${isActive ? 'navigation-link_active' : ''}`;

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActiveLink(isActive)} to={'/'}>
                Main Page
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActiveLink(isActive)} to={'/about'}>
                About Page
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActiveLink(isActive)} to={'/notFound'}>
                404 Page
              </NavLink>
            </li>
          </ul>
          <p className="current-location">Current location: </p>
        </nav>
      </header>
    );
  }
}

export default Header;
