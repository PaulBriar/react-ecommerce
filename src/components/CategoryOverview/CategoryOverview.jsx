import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ErrorBoundary from 'react-error-boundary';
import PropTypes from 'prop-types';

import CategoryPreview from '../CategoryPreview/CategoryPreview'

import { selectCategoriesForPreview } from '../../redux/selectors/shopSelector';

const CategoryOverview = ({ categories }) => {
  return (
    <div className="category-overview">
      <ErrorBoundary>
      {categories &&
        categories.map(({ id, ...otherCategoryProps }) => (
            <CategoryPreview key={id} {...otherCategoryProps} />
        ))}
      </ErrorBoundary>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesForPreview
})

CategoryOverview.propTypes = {
  categories: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CategoryOverview);