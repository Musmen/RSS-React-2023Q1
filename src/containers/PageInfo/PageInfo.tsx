import './PageInfo.css';

import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PAGES_CONFIG } from '../../common/constants';

const PAGE_INFO_PREFIX = 'Current: ';

class PageInfo extends Component {
  render() {
    return (
      <p className="PageInfo">
        <span>
          {PAGE_INFO_PREFIX}
          <Routes>
            {PAGES_CONFIG.map(({ pageName, path }) => (
              <Route path={path} element={pageName} key={`${path}-${pageName}`} />
            ))}
          </Routes>
        </span>
      </p>
    );
  }
}

export default PageInfo;
