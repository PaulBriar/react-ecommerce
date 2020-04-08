import React from "react";
import CategoryItem from "../../components/Category/CategoryItem";
import { connect } from "react-redux";

import { CategoryProps, CategoryStateProps } from '../../utils/interfaces';

import "./Categories.styles.scss";

const Categories = ({ categoryItems }: CategoryStateProps) => {
  return (
    <div className="category-menu">
      {categoryItems &&
        categoryItems.map(({ id, ...rest }) => (
          <CategoryItem key={id} {...rest} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ categories: { categoryItems } }: CategoryProps) => ({
  categoryItems
});

export default connect(mapStateToProps)(Categories);
