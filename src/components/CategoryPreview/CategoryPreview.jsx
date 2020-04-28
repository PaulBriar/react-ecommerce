import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import CategoryItem from "../CategoryItem/CategoryItem";

import "./CategoryPreview.styles.scss";

export default function CategoryPreview({title, items, routeName}) {

  return (
    <div className="category-preview">
      <h1 className="title">{title.toUpperCase()} - <Link to={`/shop/${routeName}`}>See More</Link></h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CategoryItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

CategoryPreview.propType = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  routeName: PropTypes.string.isRequired
}