import React from "react";

import CategoryItem from "../CategoryItem/CategoryItem";

import { CategoryPreviewProps } from '../../utils/interfaces';

import "./CategoryPreview.styles.scss";

const CategoryPreview = ({ title, items }: CategoryPreviewProps) => {

    return (
      <div className="category-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
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

export default CategoryPreview
