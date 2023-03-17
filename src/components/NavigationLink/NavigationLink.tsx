import React from 'react';
import { NavLink } from 'react-router-dom';

const isActiveLink = (isActive: boolean) =>
  `link navigation-link ${isActive ? 'navigation-link_active' : ''}`;

interface Props {
  pageName: string;
  to: string;
}

class NavigationLink extends React.Component<Readonly<Props>> {
  render() {
    const { pageName, to } = this.props;

    return (
      <NavLink className={({ isActive }) => isActiveLink(isActive)} to={to}>
        {pageName}
      </NavLink>
    );
  }
}

export default NavigationLink;
