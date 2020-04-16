import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ErrorBoundary from "react-error-boundary";

import { selectCategories } from "../../redux/selectors/shopSelector";
import { ShopProps } from '../../utils/interfaces';

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const Shop = ({ categories }: ShopProps) => {
  return (
    <div className="shop-page">
      {categories &&
        categories.map(({ id, ...otherCategoryProps }) => (
          <ErrorBoundary key={id}>
            <CategoryPreview key={id} {...otherCategoryProps} />
          </ErrorBoundary>
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories
});

export default connect(mapStateToProps)(Shop);
