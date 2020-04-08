import React from "react";
import ErrorBoundary from "react-error-boundary";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import SHOP_DATA from "../../shopData";

export default class Shop extends React.Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <ErrorBoundary key={id}>
            <CollectionPreview key={id} {...otherCollectionProps} />
          </ErrorBoundary>
        ))}
      </div>
    );
  }
}
