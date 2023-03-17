import { PAGES_CONFIG } from '../../common/constants';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const PAGE_INFO_PREFIX = 'Current: ';

class PageInfo extends React.Component {
  render() {
    return (
      <Routes>
        {PAGES_CONFIG.map(({ pageName, path }) => (
          <Route
            path={path}
            element={<span>{`${PAGE_INFO_PREFIX}${pageName}`}</span>}
            key={`${path}-${pageName}`}
          />
        ))}
      </Routes>
    );
  }
}

export default PageInfo;
