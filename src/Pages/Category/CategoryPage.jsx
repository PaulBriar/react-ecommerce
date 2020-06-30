import React from 'react';
import { connect } from 'react-redux'
import ErrorBoundary from 'react-error-boundary';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CategoryItem from '../../components/CategoryItem/CategoryItem';

import { selectCategory } from '../../redux/selectors/shopSelector';

import './CategoryPage.styles.scss';

const CategoryPage = ({ category: {title, items} }) => {
  return (
    <div className="category-page">
      <ErrorBoundary>
        <div className="header">
          <Link to={"/shop/"} className="link">Back to Shop</Link>
          <h2 className="title">{title}</h2>
        </div>
        <div className="items">
          {items.map((item) => (
            <CategoryItem key={item.id} item={item} />
          ))}
        </div>
      </ErrorBoundary>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state)
})

CategoryPage.propTypes = {
  category: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(CategoryPage);