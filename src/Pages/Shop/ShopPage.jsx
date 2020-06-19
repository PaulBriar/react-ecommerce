import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ErrorBoundary from "react-error-boundary";
import { Route } from 'react-router-dom';

import CategoryOverview from '../../components/CategoryOverview/CategoryOverview'
import CategoryPage from '../Category/CategoryPage';
import fetchShopData from '../../redux/actions/shopActions'

export default function ShopPage({ match }) {

  const dispatch = useDispatch();

  useEffect(() => {
    //Fetch shop data from server
    dispatch(fetchShopData())
  }, [dispatch])
  return (
    <div className="shop-page">
      <ErrorBoundary>
        <Route exact path={`${match.path}`} component={CategoryOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </ErrorBoundary>
    </div>
  );
}

ShopPage.propTypes = {
  match: PropTypes.object
}

