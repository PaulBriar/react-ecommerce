import React from "react";

import CollectionItem from "../CollectionItem/CollectionItem";

import "./CollectionPreview.styles.scss";

export default class CollectionPreview extends React.Component {
  render() {
    const { title, items } = this.props;

    return (
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((item, i) => i < 4)
            .map(({ id, ...rest }) => (
              <CollectionItem key={id} {...rest} />
            ))}
        </div>
      </div>
    );
  }
}
