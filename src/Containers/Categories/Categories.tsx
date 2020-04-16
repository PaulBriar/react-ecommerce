import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import MenuItem from "../../components/Menu/MenuItem";

import { CategoryStateProps } from '../../utils/interfaces';
import { selectCategoryItems } from '../../redux/selectors/categorySelector';

import "./Categories.styles.scss";

const Categories = ({ categoryItems }: CategoryStateProps) => {
  return (
    <div className="category-menu">
      {categoryItems &&
        categoryItems.map(({ id, ...rest }) => (
          <MenuItem key={id} {...rest} />
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryItems: selectCategoryItems
});

export default connect(mapStateToProps)(Categories);
