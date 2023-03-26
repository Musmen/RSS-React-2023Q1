import './NavigationLink.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const baseNavLinkClassName = 'NavigationLink';
const activeNavLinkClassName = `${baseNavLinkClassName} ${baseNavLinkClassName}_active`;

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeNavLinkClassName : baseNavLinkClassName;

interface Props {
  pageName: string;
  to: string;
}

class NavigationLink extends React.Component<Readonly<Props>> {
  render() {
    const { pageName, to } = this.props;

    return (
      <NavLink className={getNavLinkClassName} to={to}>
        {pageName}
      </NavLink>
    );
  }
}

export default NavigationLink;
