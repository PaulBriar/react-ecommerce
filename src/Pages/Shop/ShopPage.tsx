import React from "react";
import ErrorBoundary from "react-error-boundary";
import { Route } from 'react-router-dom';

import { ShopProps } from '../../utils/interfaces';

import CategoryOverview from '../../components/CategoryOverview/CategoryOverview'
import CategoryPage from '../Category/CategoryPage';

const ShopPage = ({ match }: ShopProps) => {
  return (
    <div className="shop-page">
      <ErrorBoundary>
        <Route exact path={`${match.path}`} component={CategoryOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </ErrorBoundary>
    </div>
  );
};

export default ShopPage;
