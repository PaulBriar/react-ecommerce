import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import MenuItem from "../../components/Menu/MenuItem";

import { selectCategoryItems } from '../../redux/selectors/categorySelector';

import "./Categories.styles.scss";

const Categories = ({ categoryItems }) => {
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

Categories.propTypes = {
  categoryItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    size: PropTypes.string,
    linkUrl: PropTypes.string.isRequired,
  })),
};

export default connect(mapStateToProps)(Categories);

