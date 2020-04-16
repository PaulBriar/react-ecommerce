import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ErrorBoundary from 'react-error-boundary';

import CategoryPreview from '../CategoryPreview/CategoryPreview'
import { CategoryOverviewProps } from '../../utils/interfaces';

const CategoryOverview = ({ categories }: CategoryOverviewProps) => {
  
  return (
    <div className="category-overview">
      {categories &&
        categories.map(({ id, ...otherCategoryProps }) => (
          <ErrorBoundary key={id}>
            <CategoryPreview key={id} {...otherCategoryProps} />
          </ErrorBoundary>
        ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({

})

export default connect(mapStateToProps, null)(CategoryOverview);