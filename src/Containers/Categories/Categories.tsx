import React from "react";
import CategoryItem from "../../components/Category/CategoryItem";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { CategoryStateProps } from '../../utils/interfaces';
import { selectCategoryItems } from '../../redux/selectors/categorySelector';

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

const mapStateToProps = createStructuredSelector({
  categoryItems: selectCategoryItems
});

export default connect(mapStateToProps)(Categories);
