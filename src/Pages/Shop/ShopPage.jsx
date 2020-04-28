import React from "react";
import ErrorBoundary from "react-error-boundary";
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import CategoryOverview from '../../components/CategoryOverview/CategoryOverview'
import CategoryPage from '../Category/CategoryPage';

export default function ShopPage({ match }){
  return (
    <div className="shop-page">
      <ErrorBoundary>
        <Route exact path={`${match.path}`} component={CategoryOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </ErrorBoundary>
    </div>
  );
};

ShopPage.propTypes = {
  match: PropTypes.object.isRequired
}

