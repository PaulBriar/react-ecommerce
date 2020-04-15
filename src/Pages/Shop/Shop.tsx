import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ErrorBoundary from "react-error-boundary";

import { selectCollections } from "../../redux/selectors/shopSelector";
import { ShopProps } from '../../utils/interfaces';

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const Shop = ({ collections }: ShopProps) => {
  console.log(collections);
  return (
    <div className="shop-page">
      {collections &&
        collections.map(({ id, ...otherCollectionProps }) => (
          <ErrorBoundary key={id}>
            <CollectionPreview key={id} {...otherCollectionProps} />
          </ErrorBoundary>
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(Shop);
