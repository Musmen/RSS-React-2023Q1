import './NavigationLink.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const baseNavLinkClassName = 'NavigationLink';
const activeNavLinkClassName = `${baseNavLinkClassName} ${baseNavLinkClassName}_active`;

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeNavLinkClassName : baseNavLinkClassName;

interface NavigationLinkProps {
  pageName: string;
  to: string;
}

function NavigationLink({ pageName, to }: NavigationLinkProps) {
  return (
    <NavLink className={getNavLinkClassName} to={to}>
      {pageName}
    </NavLink>
  );
}

export default NavigationLink;
